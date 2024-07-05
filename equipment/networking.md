---
layout: default
title: Networking
parent: Equipment
---
I use a [GL.iNet GL-MT300N V2](https://www.gl-inet.com/products/gl-mt300n-v2/) running [OpenWRT](https://openwrt.org/toh/gl.inet/gl-mt300n_v2). This is a tiny but powerful travel router that's powered by USB. It contains a Mediatek chipset capable of Wireless N (300mbps). I've configured it so that it will connect to my home wifi as a client and also publish its own wireless network SSID. This means that I can still connect with my laptop when I'm away from home. 

The router is configured as a router rather than as a gateway. It's on its own subnet with its own DHCP server which is distinct from my home network. It uses a wifi client connection to my home network as the default gateway. To make this work, I also had to add a static route to my home router so it knew where to send traffic to this subnet. 

In addition, I had to allow port 445 through the Windows firewall on my Astro PC. This is so I can share hard drives between my Astro network and my Home network.

I can also run other utilities on the router such as wake-on-lan so I can shut down the astro pc and wake it again as necessary.

![Network Diagram](/assets/images/astronetwork.svg)
