---
title: "WSL2 is a memory hog and how to fix it."
date: "2020-09-25T15:56:43.011Z"
description: "Simon Debbarma teaches us how to take back memory from Vmmem"
---

Imagine my surprise when playing around with the Ubuntu distro in WSL, I find out that **50% of my memory _at idle_** is in use. I have 16GB of memory. Anything above 30% at idle should be an anomaly. There's no reason for `vmmemm` to be taking up a whopping 10% of my available memory at idle. Or at least, I don't there should be.

Thankfully, [Simon Peter Debbarma](https://simonpeterdebbarma.com/) outlines [a way](https://blog.simonpeterdebbarma.com/2020-04-memory-and-wsl/) to limit the amount of RAM that the WSL distro can access at any given time.

> Use `wsl -l -v` to check out all running distros on your WSL. Then, `wsl -t {insert distro}` to terminate the ones in use. Or, simply `wsl --shutdown`. [🔗](https://blog.simonpeterdebbarma.com/2020-04-memory-and-wsl/)

The tradeoff in performance by limiting the amount of RAM WSl can access is obvious. It doesn't seem like WSL should be this inefficient, but maybe I'm splitting hairs here. Ubuntu inside windows does seem like its _still_ too good to be true doesn't it?