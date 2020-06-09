---
title: How to publish a Gatsby site to GitHub Pages
date: "2020-06-09T07:00:25.999Z"
description: "Quick and dirty fix for custom domain publishing with Gatsby and gh-pages"
---

I was recently updating my personal site whe all of a sudden I realized I'd managed to publish the repo's `README.md` as the homepage. After a brief moment of panic, I remembered I'd recently transitioned over to using [`gh-pages`](https://github.com/tschaub/gh-pages) package to manage my deploys.

As it turns out, the suggested `package.json` deploy script in that package's readme

 ```javascript
"deploy": "gatsby build && gh-pages -d public -b master"
 ```

doesn't account for people to publish GitHub pages to custom domains. Therefore, every deploy would erase the `CNAME` file in the root directory since this is not automatically created by the `gastby build` script.

Solution? Just adding `cp CNAME public` to the `deploy command` ensures we don't delete the existing `CNAME` file on deploy. So our `package.json` scripts would end up looking something like:

```javascript
"scripts": {
  ...
  "deploy": "gatsby build && cp CNAME public && gh-pages -d public -b master"
}
```

