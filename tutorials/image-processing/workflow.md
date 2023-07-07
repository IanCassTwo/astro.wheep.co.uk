---
layout: default
title: Imaging Workflow
parent: Image Processing
grand_parent: Tutorials
nav_order: 1
---
A workflow for a typical evening would be as follows:-

1. Set up tripod pointing north, ensure it's level. Power everything up, remove lens caps, turn on dew heaters. Make sure that all clutches and focus locks are tight
2. Whilst standing next to your equipment, run remote desktop on your laptop to access your control centre
3. Run NINA. Connect your imaging camera, guider and mount
4. Run the polar alignment process
5. Check focus. Go to the imaging tab, set up a suitable exposure and gain so that you can see stars and start looping exposures. Check that focus is good by adjusting slightly and checking the HFR history graph. <https://nighttime-imaging.eu/docs/master/site/quickstart/focusing/>
6. Now that everything is physically set up, you can go indoors
7. Use the sky atlas to choose your target, then select "set for framing assistant"
8. Go to the "Framing" tab. Click "Slew and Center". Wait for NINA to instruct the scope to move and to fine tune via plate solving
9. Once this is done, you can click "determine rotation from camera" to see if your field of view is appropriate. If not, you can go and physically rotate your camera
10. Go to PHD2, start guiding
11. Go to sequencer tab and add a new imaging sequence by clicking the "+" button. Configure to take a number of frames of your chosen length (e.g. 60 secs) of type LIGHT. Make sure to enable dither every 1 or 2 frames
12. Go to imaging tab, make sure guiding is working well, and when you're ready, start the sequence

Everything should happen automatically now. However, I like to keep my eye on things on a regular basis. I also like to download frames throughout the evening and process them to check everything is ok so I don't waste my time on junk data

Once you're nearing the end of the evening, make sure to take dark and bias frames. You can use the flat wizard for this
