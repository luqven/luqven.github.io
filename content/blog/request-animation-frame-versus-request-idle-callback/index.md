---
title: "Differences and similarities between requestAnimationFrame & requestIdleCallback"
date: "2020-09-25T15:56:43.011Z"
description: "TLDR: in most cases, don't rAF when you can rIC"
---

Sometimes, you want to schedule work to happen in response to some browser event.

For example, imagine every time the user scrolls to the bottom of their feed you load more posts.

The thing is, if you're not careful, you can harm the responsiveness of your site.

A webpage's performance in part depends on its ability to maintain 60 frames per second (FPS). 

A page is rendered one frame at a time. When the FPS reaches 60, the experience on the age is buttery smooth. When it drops bellow 60 FPS, the page will start feel slow.

So by loading all those new posts as the user scrolls, you could overburden the browser's [**main thread**](https://developer.mozilla.org/en-US/docs/Glossary/Main_thread). This would limit its ability to maintain rendering at 60FPS, and make the page feel unresponsive.

Thankfully, there are ways to schedule the work so the main thread *doesn't* get overburdened. You can tell the browser its cool to wait until it isn't so busy before getting back to work.

Traditionally, this was done with the `window.requestAnimationFrame(callback)`, or `rAF`, [method](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame). This method tells the browser you want to run a `callback`, cb, function before the start of the next frame's paint, or roughly every [16.667 milliseconds](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame#notes).

`rAF` has some shortcomings however. For starters `rAF` doesn't know when a user is done interacting with the page.

So while it's nice to know your `callback` *will* get called before every frame repaint, sometimes you want it to wait a little longer.  Ideally, you'd **schedule** the `cb` to run when nothing else is happening.

This is where `window.requestIdleCallback(callback[, options])`, or `rIC`, comes in. It runs your `callback` only *after* the user is done doing stuff.

To do this ourselves, we'd have to attach an insane amount of event listeners to the DOM telling us what the user is up to and when. Then, when they go quiet, we could try and run our `cb` hoping they're really done interacting with the page.

`rIC` gives us a foolproof way to run a `callback` only when there's free time at the *end* of a frame. Typically, this happens when the user is inactive.

In our news-feed example, this means that the new posts would only be requested when the user is *done* scrolling, clicking button, or otherwise milling about on our page.

That's all well and good, but what if the user is doing a bunch of things on the page immediately after scrolling to the bottom? Won't the scheduled news-feed update be delayed endlessly?

That's where `rIC`'s `timeout` property comes in. You can define a *maximum* amount of time `requestIdleCallback` can wait before your `callback` is added to the event-loop. 

So in our news-feed example, if we told `rIC` it was only allowed to wait `{timeout: 2000}`, after at most 2 seconds our `cb` would run and the feed would get updated.