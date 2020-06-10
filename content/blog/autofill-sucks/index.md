---
title: Why browser's "auto-fill" features suck and how to fix them
date: "2020-06-10T22:36:41.507Z"
description: "Too many sites ignore the fact each browser styles the auto-fill feature differently."
---

It's well known that browser's autofill, or autocomplete, implementations vary. A lot. Not only between browsers but between the desktop and mobile versions of browsers. So why do are we still in the situation where some developers still don't [control](https://css-tricks.com/snippets/css/change-autocomplete-styles-webkit-browsers/) for this behavior?

Maybe they're just not aware it's a widespread issue. Maybe most web developer's are so privacy concerned they've disabled the feature. And I suppose that's excusable, since I have no idea what percentage of browser users actually interact with the auto fill feature. But I want to at least draw attention to this problem.

## Auto fill isn't contextually aware

Look at the example bellow.

![auto-filled-form-obscuring-dropdown-options](https://i.imgur.com/00g9HI9.png)

<iframe height="300" style="width: 100%;" scrolling="no" title="Problem with client autofill and autocomplete" src="https://codepen.io/luqven/embed/preview/ExPPdGJ?height=300&theme-id=36302&default-tab=js,result&editable=true" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/luqven/pen/ExPPdGJ'>Problem with client autofill and autocomplete</a> by Luis Ball
  (<a href='https://codepen.io/luqven'>@luqven</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

I run into this issue dozens of times a day, where the autofill form is obscuring the dropdown options of the form it's trying to autofill. Try it out above, you'll see how frustrating it is - _note: on some browsers you need to double click to bring up the auto-fill_.

<!-- CodePen Embed goes here -->

Now obviously not everyone implements dropdowns in this way. And we do often use the same information for things like address field, hence why autofill exists. But, at least in my experience, I find the feature obstructs as much as it helps.

## How we can fix this

Thankfully, there is a way to [style]() the built-in auto fill functionality somewhat. But the "fix" I'd like to see is for browser developers to add a dismiss feature. And I know the `Esc` key works in some, but frankly that's neither guaranteed nor foolproof, given in some contexts that can also dismiss a modal unintentionally. 

We'd all be frankly better off if they'd just add a small `dismiss` or `X` to the autofill modal. For now, I'll have to make do with just disabling the darned thing.