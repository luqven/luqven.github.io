---
title: Styling selected text with CSS
date: "2020-07-03T13:42:55.362Z"
description: "Browser Selection API tricks part II"
---

Some sites, like, again, Medium, style their selected text with their own background colors. It's quite simple to do, and yet can really help set one's page apart. The trick is to use the `::selected` pseudo [selector](https://developer.mozilla.org/en-US/docs/Web/CSS/::selection). For example if we wanted to give our selected text the classic 'highlighter' yellow look, we could do something like the example bellow.

```css
::selection {
  background-color: yellow;
}
```

There's a handful of other properties that we can play with as well, like:

- `color`
- `background-color`
- `cursor`
- `caret-color`
- `outline`
- `text-decoration and its associated properties`
- `text-emphasis-color`
- `text-shadow`

This great [example](https://css-tricks.com/almanac/selectors/s/selection/) by Chris Coyer illustrates this well.

<iframe height="470" style="width: 100%;" scrolling="no" title="::selection tests" src="https://codepen.io/chriscoyier/embed/preview/qNLymj?height=470&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/chriscoyier/pen/qNLymj'>::selection tests</a> by Chris Coyier 
  (<a href='https://codepen.io/chriscoyier'>@chriscoyier</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

For my personal site, I chose just to style the selection a different shade of blue from the default. It's subtle enough that most people wouldn't notice, but I find it soothing to have the highlighted text background colors be consistent across all browsers.

The one caveat to the `::selection` pseudo selector is that, on mobile, it's [support](https://caniuse.com/#feat=css-selection) is haphazard at best. You'll notice it most on iOS' Safari. 

## Up next

In the next post in this series, we'll discuss how to combine the [`useSelect`](https://luisball.com/styling-document-selection/) hook with these custom styles to create a share-tooltip that works on desktop and mobile.
