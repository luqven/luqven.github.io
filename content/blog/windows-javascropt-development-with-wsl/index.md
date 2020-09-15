---
title: Javascript development on windows with WSL
date: "2020-09-09T19:45:18.057Z"
description: "Does WSL V2 live up to the hype?"
---

Having to spend so much time at home as a result of these never ending lockdowns, I decided it was time to buy a proper desktop machine. I wasn't looking to pay an "Apple tax" for it since reliability really wasn't the priority, raw power was. So I took the Windows plunge again. First time back in DOS-land in 18 years.

Part of the impetus was the recent release of Windows Subsystem for Linux, or [WSL](https://docs.microsoft.com/en-us/windows/wsl/wsl2-index) 2.

Microsoft has gone all out to try and win over software developers back onto the platform and away from UNIX-based systems with the WSL compatibility layer. It has even launched its very own [Windows Terminal](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab), which supports the Power Shell as well as Bash and other typical terminals. So naturally, it and WSL were the perfect fit for this new desktop machine.

After a fairly painless [setup](https://docs.microsoft.com/en-us/windows/wsl/install-win10), I was up and running in the Bash terminal within 30 minutes. A few oh-my-zsh plugins later, and the development environment has become eerily similar to the one on my main machine, a 2019 MBP.

This entire post, in fact, was done on the WSL enabled Windows machine.

So does WSL 2 live up to the hype? Yes.. mostly. The only gripe I still have with WSL is the annoyingly convoluted way you have to navigate the file system. There's windows and linux directories that in theory live in the same hard drive but often have no idea that's the case.

So WSL has come a long way. And it's certainly possible to develop JavaScript applications on windows now a days nearly painlessly. But here's still some room for improvement.
