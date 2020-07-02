---
title: Browser Selection API tricks
date: "2020-07-02T16:24:14.376Z"
description: "Part I: creating a useSelection hook that stores the currently selected text"
---

I've always wanted to implement something like **Medium's** highlighting and sharing tooltip. But I was surprised just how much work it takes to do it right, especially in SSR React applications. So in the next few blog posts I'll be detailing some tips and tricks I used to create a medium-like sharing tooltip.

## Getting the selected text from the document

First off, you're going to want an easy way to reference the [Selection object](https://developer.mozilla.org/en-US/docs/Web/API/Selection). This is the object that stores "the range of text selected by the user or the current position of the caret." Specifically, we're going to want `Selection.toString()` since that's what returns the selected text we'd like to share with our peeps. Since we're working with an SSR React application however, the `document` isn't going to be available just anywhere. Moreover, we probably want keep this separate from the components that use the selected text. Which is to say, what we want is a Hook.

### useSelection Hook

So let's make a React hook that returns selected text and Selection object. First we're going to want to import `useState` and `useEffect` from React. We are making a hook after all. But note that in SSR React apps, the `window` and `document` are only accessible within specific react-lifecycle methods. We're going to access them in the `useEffect` hook and store the values we draw from them using the `useState` hook. In this case, that means storing our selected text:

```javascript
    const [selected, setSelected] = useState()

    useEffect(() => {
        const selObj = window.getSelection()
        setSelected(selObj)
    }, [])
```

Now if all we wanted was a one time snapshot of the `Selection` object, we'd be set. But what we really want is the _current_ value of the `Selection`. In other words, whenever the selection changes, our `Selection` object should have changed as well. To get this behavior, we're going to use the `onselectionchange` [event listener](https://developer.mozilla.org/en-US/docs/Web/API/Document/selectionchange_event). This way, we retrieve the `selection.toString()` and set it as `selected` using the `setSelected()` state hook.

Our final product for a `useSelection` hook then looks something like this:

```javascript
import { useState, useEffect } from 'react';

export const useSelection = () => {
    const [selected, setSelected] = useState()

    // callback function that updates state with current selection
    const handleSelectionChange = () => {
        let selection;
        let text = '';

        // if browser supports selection API 
        if (document.getSelection) {
            selection = document.getSelection();
            text = selection.toString();
        } else if (document.selection) {
            selection = document.selection.createRange();
            text = selection.text;
        }

        // update state with selected text and Selection object
        setSelected({ text, selection })
    };

    useEffect(() => {
        let isSubscribed = true;
        // whenever selection on page changes, call handleSelectionChange callback
        document.onselectionchange = () => isSubscribed && handleSelectionChange();

        // 'unsubscribe' from event listener on component dismount
        return () => isSubscribed = false;
    }, [])

    return selected;
}
```

Now that we have the hook, we can use it in any component to get the `Selection` object and its string value.

```javascript
    const selected = useSelection(); // => { selection: Selection, text: selected text str }
```
## Up next

In the next post in the series, I'll detail how we can use this hook to share the selected text using a share-tooltip.

<!-- TODO: add this to final blog post -->
<!-- It's easy to fall in love with [Medium's](www.medium.com) reading experience. They do some incredibly smart text formatting and styling that makes the article easy to read at any screen resolution and size. It's a shame most people don't realize the amount of effort that goes into it. Especially since to really get a feel for it you'd have to open up the inspector and take a peek at plethora of custom CSS being used on sometimes even the character level. -->
