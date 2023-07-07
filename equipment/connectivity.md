---
layout: default
title: Connectivity
parent: Equipment
---
The [control centre](/hardware/controlcentre) is the brains of the operation. It's running the operating system and all your astrophotography software. Physically, it's connected to your [main imaging camera](/hardware/scope) via USB, to your [guide camera](/hardware/guider) via USB, to your [motorized mount](/hardware/mount) via USB, and to your [network](/hardware/networking) via Ethernet.

Your [control centre](/hardware/controlcentre) is running [NINA](/software/nina). This is accessing your [main imaging camera](/hardware/scope) either natively or via an [Ascom driver](/software/ascom). It's also accessing your [motorized mount](/hardware/mount) via an [Ascom driver](/software/ascom). In my case, that's [GS Server](/software/gss). 

The [control centre](/hardware/controlcentre) is also running [PHD2 guiding software](/software/phd2). This is connected to the [guide camera](/hardware/guider) either natively or via an [Ascom driver](/software/ascom). The "guider" section of NINA is configured to connect to PHD2. NINA does not talk directly to the guide cam itself.

NINA is configured to use a [plate solver](/glossary/platesolving) which is usually [ASTAP](/software/astap). This is invoked in the background as needed.
