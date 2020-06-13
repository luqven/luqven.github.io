---
title: Bulk un-liking tweets, why it's so hard, and how to do it
date: "2020-06-13T21:24:32.106Z"
description: "Avoid handing over account api keys and personal data by using this script"
---

In the current intellectual climate, where good-faith discussion over seemingly innocent topics can get impact one's livelihood, many people have turned to culling their social media histories. I've made a regular practice of this since the Snowden [revelations](https://www.theguardian.com/world/interactive/2013/nov/01/snowden-nsa-files-surveillance-revelations-decoded). But it was [Andrew Sullivan's](https://nymag.com/author/andrew-sullivan/) latest essay that really pushed me to find a way to do this in an efficient, automated fashion.

> "We have co-workers eager to weaponize their ideology to purge the workforce. We have employers demanding our attendance at seminars and workshops to teach this ideology. We have journalists (of all people) poring through other writers’ work or records to get them in trouble, demoted, or fired. We have faculty members at colleges signing petitions to rid their departments of those few left not fully onboard. We have human-resources departments that have adopted this ideology whole and are imposing it as a condition for employment. And, critically, we have a Twitter mob to hound people into submission."
> 
_[Is There Still Room for Debate?](https://nymag.com/intelligencer/2020/06/andrew-sullivan-is-there-still-room-for-debate.html) | Andrew Sullivan_

Twitter makes it [notoriously](https://www.theverge.com/2018/2/8/16991396/how-to-delete-twitter-history-tweetdelete) difficult to mass-delete old tweets, media, and likes. Unless you're inclined to hand over control over your account and all it's history indefinitely to a third-party, there's really no good way to do this. Which is exactly why I made one.

## Bulk-un-liking tweets

I made [likeBuddy](https://github.com/luqven/likeBuddy), a simple script, in an afternoon out of frustration with how long it was taking me to remove likes from an old account. So lots of room for improvement here, please don't judge me too harshly.

The script adds a `likeBuddy.unlike()` function to the browser window. The function accepts one argument, an integer, indicating how many tweets you want to 'un-like'. You can see some of the sample console output bellow.

```console
searching for more tweets 🕵️ ...
working... 🔨
4 likes removed 🗑️
--
LikeBuddy deleted likes in: 478ms - timer ended
It found 4 tweets to unlike 💔
```

### How it works

The script finds the tweets in the viewport with the 'liked' attribute. As of this writing, Twitter gives tweets that can be un-liked `div[data-testid="unlike"]`.

```javascript
...
const likedTweetAttribute = 'div[data-testid="unlike"]'
let foundTweets = document.querySelectorAll(likedTweetAttribute);
```

LikeBuddy then simulates a click on each of those tweet's hearts.

```javascript
const unlike = async (tweet) => {
    console.log('working... 🔨');
    unliked = unliked + 1;
    updateProgress();
    tweet.click();
}
...
```

Until it finally repeats the process as many times as necessary to match the input target number of tweets

```javascript
...
// scroll to begin loading next batch of tweets
scrollToBottom();
/** 
 * an interval is established here to avoid:
 * a) being mistaken for a bot, and
 * b) allow for lazy-lading assets to finish rendering
 */
var counter = 3;
var scrollBuffer = setInterval(function () {
    counter--
    if (counter === 0) {
        findAndRemove(max);
        clearInterval(scrollBuffer);
    }
}, 1000);
```

## Some closing thoughts

It'd be nice if I had the time to build some sort of GUI instead of having the user interact via the console. Not very elegant. Also I'm a little worried about getting tagged as a bot or somehow getting account feature's limited as a result of bulk-un-liking. But for the immediate future, this likeBuddy script is an easy to bulk-un-like tweets without having to hand over your twitter data or credentials.