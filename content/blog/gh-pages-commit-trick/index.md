---
title: How to make the last commit message your gh-pages commit message
date: "2021-05-19T16:31:48.856Z"
description: "Quick trick to add meaningful commits to gh-pages"
---

Until recently I hadn't bothered to look at how the `gh-pages` package was titling the commits. Turns out, it was just as a super unhelpful `Updates`. Yikes.

So over lunch I poured over the docs only to find they have an API that allows you change this. Nice! All you need to do is use the `--message` flag.

```bash
gh-pages -d public -b main --message $SOME_MESSAGE
```

Problem is I don't want yet another unhelpful commit tittle. Instead, I'd like at least some context of what's being changed to be passed in.

Although not perfect, the last commit message from `master-source` branch will have this.

## Use the last commit from the current branch as the gh-pages commit message

We can add the last commit message to the `--message` flag by using git's `log` and `pretty` APIs.

```bash
# outputs last commit title in one line
git log -1 --pretty=%B
```

If we save that to a variable, `$DEPLOY_MESSAGE`, we can reference it in `package.json`'s `deploy` script.

```json
"deploy": "DEPLOY_MESSAGE=\"$(git log -1 --pretty=%B)\"; gatsby build && cp CNAME public && gh-pages -d public -b master --message $DEPLOY_MESSAGE"
```

## The catch

This is almost perfect, _except_ because there's empty spaces in the commit title, the `package.json` script will not pass the entire commit to the `--message` flag for `gh-pages`.

So you'd end up with a commit message like this,

```
chore:
```

instead of this

```
chore: add deploy script variables
```

## Lets fix it

It's an easy fix. All we need to do is replace the empty character, `‏‏‎ ‎`, in the `$DEPLOY_MESSAGE` variable with something else, like `_`.

We can do this in bash using pattern substitution.

```bash
## ${parameter/pattern/string}

DEPLOY_MESSAGE=\"$(git log -1 --pretty=%B)\";
RESULT=${DEPLOY_MESSAGE// /_};
```

And that's it! Just update the `deploy` script with that pattern and you're all set.

```json
"deploy": "DEPLOY_MESSAGE=\"$(git log -1 --pretty=%B)\"; RESULT=${DEPLOY_MESSAGE// /_}; gatsby build && cp CNAME public && gh-pages -d public -b master --message $RESULT"
```

Now your commit messages can give you some context about what your last gh-pages push changed.
