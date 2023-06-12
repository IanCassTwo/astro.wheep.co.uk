---
layout: post
title:  "Live Stacking now live"
---
I've been experimenting with [Astro Live Stacker](https://als-app.org/) so that I can easily keep an eye on progress of my imaging sessions. Prior to this, I had been regulaly gathering subs, stacking with DSS and viewing in Siril with an autostretch. However, Astro Live Stacker is SO much more convenient. Once set up, it requires zero work on my part. It also has a neat feature where it can act as a simple web server to publish the results of the live stack. I've exploited this feature to add a new [Livestack](/livestack/) section to my website. This will allow you to watch my imaging session in real time!

From a technical perspective, this is running some Javascript which attempts to retrieve the current live stack image from my webserver. If Astro Live Stacker is running, it will return an image which you will see. If it's not, then you'll see an "offline" placeholder image.
