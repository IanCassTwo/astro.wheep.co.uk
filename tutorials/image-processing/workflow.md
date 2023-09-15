---
layout: default
title: Imaging Workflow
parent: Image Processing
grand_parent: Tutorials
nav_order: 1
---
A workflow for a typical evening would be as follows:-

1. Set up tripod pointing north, ensure it's reasonably level. Power everything up, remove lens caps, turn on dew heaters. Make sure that all clutches and focus locks are tight
2. Whilst standing next to your equipment, run remote desktop on your laptop to access your control centre
3. Run NINA. Connect your equipment
4. Run the three point polar alignment process
5. Check focus. Go to the imaging tab, set up a suitable exposure and gain so that you can see stars and start looping exposures using the same gain & exposure length that you've configured in your three point polar alignment settings. Once you see stars, check that focus is good by adjusting slightly and checking the HFR history graph. <https://nighttime-imaging.eu/docs/master/site/quickstart/focusing/>. Click the plate solve button to check that NINA can identify where it's pointing
6. Run the three point polar alignment process. I always manually offset the scope to the left side and click the "start from current position" in the alignment tool. Follow the alignment process and make sure you're reasonably well aligned. I tend to be happy with anything less than 10"
7. Start PHD2, connect all, and begin looping exposures. Make sure that it's in focus
8. Now that everything is physically set up, you can go indoors
9. Use the sky atlas to choose your target, then select "set for framing assistant"
10. Go to the "Framing" tab. Click "Slew and Center". Wait for NINA to instruct the scope to move and to fine tune via plate solving. Click the "send to sequencer" button
9. Once this is done, you can click "determine rotation from camera" to see if your field of view is appropriate. If not, you can go and physically rotate your camera
11. Go to PHD2, start guiding. If your scope has rotated since the last time you did a PHD2 alignment, re-do the alignment now
11. Go to sequencer tab and configure to take a number of frames of your chosen length (e.g. 60 secs) of type LIGHT. Make sure to enable dither every 1 or 2 frames. Save your sequence so you can come back to it another night
12. Go to imaging tab, make sure guiding is working well, and when you're ready, start the sequence

Everything should happen automatically now. However, I like to keep my eye on things on a regular basis. I also like to download frames throughout the evening and process them to check everything is ok so I don't waste my time on junk data

Once you're nearing the end of the evening, make sure to take dark and bias frames. You can use the flat wizard for this
