---
title: "Best practices for requestIdleCallback and requestAnimationFrame in 2021"
date: "2021-05-13T01:29:14.168Z"
description: "How to make the most of these essential browser APIs"
---

You'll often want to schedule work to happen in response to browser events.

For example, imagine every time the user scrolls to the bottom of their feed, the site load more posts.

> Infinite scrolling example by Corbacho ([@dcorb](https://codepen.io/dcorb))

<iframe height="400" style="width: 100%;" scrolling="no" title="Infinite scrolling throttled" src="https://codepen.io/dcorb/embed/preview/eJLMxa?height=400&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/dcorb/pen/eJLMxa'>Infinite scrolling throttled</a> by Corbacho
  (<a href='https://codepen.io/dcorb'>@dcorb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The thing is, if you're not careful, you can [harm the responsiveness of your site](https://johnresig.com/blog/learning-from-twitter/). And in the ever-evolving world of web-standards, it can be hard to say up to date with best practices.

Let's take a look at **what we can do in 2021 to "throttle", "debounce", or otherwise limit function calls in response to browser events** and maintain a great user experience (UX).

Recommended background readings:

> - Alexander Farkas' [StackOverflow comment](https://stackoverflow.com/a/44779316/11760796)
> - Nolan Lawson's [A tour of JavaScript timers on the web](https://nolanlawson.com/2018/09/01/a-tour-of-javascript-timers-on-the-web/)
> - David Corbacho's [Debouncing and Throttling Explained Through Examples](https://css-tricks.com/debouncing-throttling-explained-examples/)
> - Chris Coyier's [The Difference Between Throttling and Debouncing](https://css-tricks.com/the-difference-between-throttling-and-debouncing/#throttling-enforces-a-maximum-number-of-times-a-function-can-be-called-over-time-as-in-execute-this-function-at-most-once-every-100-milliseconds)
> - Paul Lewis's [Using requestIdleCallback](https://developers.google.com/web/updates/2015/08/using-requestidlecallback)
> - Paul Lewis' [Leaner, Meaner, Faster Animations with requestAnimationFrame](https://www.html5rocks.com/en/tutorials/speed/animations/)

## What makes webpages feel fast or slow

A webpage's performance in part depends on its ability to maintain 60 frames per second (FPS). A page is rendered one frame at a time. When the FPS reaches 60, the experience on the page is buttery smooth. When it drops bellow 60 FPS, the page will start feel slow.

By loading all those new posts as the user scrolls, you could overburden the browser's [**main thread**](https://developer.mozilla.org/en-US/docs/Glossary/Main_thread). This would limit its ability to maintain rendering at 60FPS and make the page feel unresponsive.

In other words, if you do too much at once in response to an event you end up with bad UX.

## Using `requestAnimationFrame` to run callbacks between frame paints

Thankfully, there are ways to schedule the work so the main thread _doesn't_ get overburdened. You can tell the browser its cool to wait until it isn't so busy before getting back to work.

Traditionally, this was done with the `window.requestAnimationFrame(callback)`, or `rAF`, [method](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame).

This method tells the browser you want to run a `callback`, cb, function before the start of the next frame's paint. `rAF` won't be called more or less times than the browser calculates the layout of the page, or roughly every [16.667 milliseconds](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame#notes).

```js
$(window).on("resize", () => {
  requestAnimationFrame(() => {
    updateFeed($feed) // cb that perform some DOM modifications
  })
})
```

Generally speaking, it [makes sense](<(https://stackoverflow.com/a/44779316/11760796)>) to throttle most things with `rAF` because you wouldn't request layout changes from the browser more often than it renders the layout. However, many browser events are already synced to the browser's rendering of the page, like `scroll`.

So, instead, `rAF` is used to move layout modification to the end of a frame. This avoid invalidating the DOM layout before you've had a chance to finish running all the logic inside the same frame.

`rAF` has some shortcomings however. For starters `rAF` doesn't know when a user is done interacting with the page.

So while it's nice to know your `callback` _will_ get called before every frame repaint, sometimes you want it to wait a little longer. Ideally, you'd **schedule** the `cb` to run when nothing else is happening.

## Debouncing callbacks for improved performance

But just how much performance gain is there _really_ from using a debounce?

Bellow, you can see David Corbacho neat visual demonstration of the difference between debouncing and not debouncing `cb` calls.

> Trailing debounce example by Corbacho ([@dcorb](https://codepen.io/dcorb))

<iframe height="400" style="width: 100%;" scrolling="no" title="Debounce. Trailing" src="https://codepen.io/dcorb/embed/preview/KVxGqN?height=400&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/dcorb/pen/KVxGqN'>Debounce. Trailing</a> by Corbacho
  (<a href='https://codepen.io/dcorb'>@dcorb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

You'll not that with the debounce, far fewer `callback` fires happen. In an scenario where you don't need to react to every single event, this means you've saved a ton of computation time!

## Using `lodash` to `debounce` or `throttle` `rAF`

Thankfully`lodash`'s `_.debounce()`, which you can use in [standalone](https://github.com/lodash/lodash/blob/2f79053d7bc7c9c9561a30dda202b3dcd2b72b90/debounce.js) fashion if you don't want to add it as a dependency, makes implementing debounces easy.

The `_.debounce` method ["enforces that a function not be called again until a certain amount of time has passed without it being called"](https://css-tricks.com/the-difference-between-throttling-and-debouncing/#debouncing-enforces-that-a-function-not-be-called-again-until-a-certain-amount-of-time-has-passed-without-it-being-called-as-in-execute-this-function-only-if-100-milliseconds-have-passed-witho).

So we could do something like making the page wait until 400 milliseconds have gone by between `updateFeed` calls before trying to update the feed.

```js
const cb = () => {
  updateFeed($feed)
}
const waitMs = 400

$(window).on(
  "resize",
  _.debounce(() => requestAnimationFrame(cb), waitMs)
)
```

## Using `requestIdleCallback` to run `cb` only when event-loop isn't busy

While the previous performance gains are great, we could ideally leverage all the information the browser has about the event loop. This way, we could implement a solution that doesn't run a `cb` unless there's some free computation time.

This is where the `window.requestIdleCallback(callback[, options])`, or `rIC`, [method](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback) comes in.

It runs your `callback` only _after_ the user is done doing stuff.

To do this ourselves, we'd have to attach an insane amount of event listeners to the DOM telling us what the user is up to and when. Then, when they go quiet, we could try and run our `cb` hoping they're really done interacting with the page.

`rIC` gives us a foolproof way to run a `callback` only when there's free time in a frame. Typically, this happens when the user is inactive.

In our news-feed example, this means that the new posts would only be requested when the user is _done_ scrolling, clicking a button, or otherwise milling about on our page.

```js
const update = () => updateFeed($feed)
const cb = () => requestAnimationFrame(update)
const waitMs = 400

$(window).on(
  "resize",
  _.debounce(() => requestIdleCallback(cb), waitMs)
)
```

That's all well and good, but what if the user is doing a bunch of things on the page immediately after scrolling to the bottom? Won't the scheduled news-feed update be delayed endlessly?

That's where `rIC`'s `timeout` property comes in. You can define a _maximum_ amount of time `requestIdleCallback` can wait before your `callback` is added to the event-loop.

So in our news-feed example, if we told `rIC` it was only allowed to wait `{timeout: 2000}`, after at most 2 seconds our `cb` would run and feed update would be queued in the event-loop.

```js
const update = () => updateFeed($feed)
const cb = () => requestAnimationFrame(update)

const timeout = { timeout: 2000 }
const waitMs = 400

$(window).on(
  "resize",
  _.debounce(() => requestIdleCallback(cb, timeout), waitMs)
)
```

> You'll note that even when we use a combination of `rIC` and `rAF`, we _still_ need to debounce and control how often `rIC` can be called to limit the impact on the event-loop.

## Making super-duper sure your callback runs on the first event fire

Sometimes you want a `callback` to run on the first event fire. Using the default `_.debounce` behavior, this won't happen. The `cb` won't be called until the events have stopped firing.

To override `lodash`'s default `_.debounce` behavior, you can make use of the optional `leading` flag. This tells `_.debounce` to invoke the `callback` immediately but not invoke it again unless `waitMs` time has gone by.

```js
const update = () => updateFeed($feed)
const cb = () => requestAnimationFrame(update)
const rIC = () => requestIdleCallback(cb, timeout)

const timeout = { timeout: 2000 }
const waitMs = 400

$(window).on("resize", _.debounce(rIc, waitMs, { leading: true }))
```

Again, David Corbacho has an excellent animation illustrating how this works.

> Trailing debounce example by Corbacho ([@dcorb](https://codepen.io/dcorb))

<iframe height="400" style="width: 100%;" scrolling="no" title="Debounce. Leading" src="https://codepen.io/dcorb/embed/preview/GZWqNV?height=400&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/dcorb/pen/GZWqNV'>Debounce. Leading</a> by Corbacho
  (<a href='https://codepen.io/dcorb'>@dcorb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Debounce wisely

Using `rAF` and `rIC` in combination with `_.debounce` is a great way to run logic in response to browser events without harming UX. But it doesn't come without pitfalls.

For example, `rIC` calls are not an ideal place to preform DOM modifications, since the DOM reference at invocation could already have been invalidated. Moreover, `rIC` support in even modern browsers [varies significantly](https://caniuse.com/requestidlecallback), where even Chrome doesn't quite behave the way you'd expect.

But for a good amount of use cases out there (infinity-scrolling, update-on-resize, parallax, etc) this combination can and should be used.
