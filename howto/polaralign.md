---
layout: default
title: Polar Align
parent: How To
---
I've found that the quickest and easiest way to polar align is to use NINA.

1. align your telescope to point towards the north. I find it's best if you can mark the position of your tripod legs between sessions to make it easier the next time you polar align. To facilitate this, I've placed 3 small round paving slabs in my garden. Also make sure your mount is perfectly level.

2. Connect your mount to N.I.N.A. and select your telescope profile. For me, this is "ASCOM GS Sky Telescope" which is a connection between NINA and GS Server. The GS Server then communicates with the AzGti via a cable.

3. If not already done so, install the Three Point Polar Alignment plugin. Make sure to also set your long/lat in the options section. Restart NINA.

3. Open the Polar Alignment module in N.I.N.A. This can be found in the Imaging section.

4. Press the start button to start the alignment process. NINA will rotate your camera several times, taking several alignment frames and plate solving them. Assuming everything goes well, NINA will show you the polar alignment error and prompt you to align up/down or left/right. It will continue taking frames and plate solving so it can update the metrics. For me, this step takes literally minutes to get a good polar alignment.
