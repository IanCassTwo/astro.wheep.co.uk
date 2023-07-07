---
layout: default
title: Process
parent: Image Processing
---
I do my initial image processing with Siril. I've documented the process that I follow below by reprocessing my recent Veil Nebula data. Note, the results I got here are not as good as I got previously. It's not unusual for me to reprocess data several times until I'm happy that I've got the most out of it.

Import your stacked tif into Siril and view it with autostretch. 

{% picture blog siril-1.jpg %}

We need to crop the image to remove the dithering artifacts. To do this, stretch a box, right click and select "crop". Prior to this, I usually also right click, choose selection and then choose a regular aspect ratio, either 3:2, 4:3 or 16:9 depending on what I'm editing. It makes it easier to display on my blog when it's a regular ratio.

{% picture blog siril-2.jpg %}

and after crop

{% picture blog siril-3.jpg %}

I remove the background gradient. To do this, select Image Processing menu and choose Background Extraction. Once the box pops up, click Generate. Now right click on any red squares that appear over your target. This will stop Siril from affecting your target.

{% picture blog siril-4.jpg %}

Once done, click Compute Background and then Apply

{% picture blog siril-5.jpg %}

I'll do an initial colour calibration. To do this, go to Image Processing menu, Color Calibration and choose Photometric Color Calibration. When the box pops up, find your target, click it in the results list and then click OK. Click close once done. 

{% picture blog siril-7.jpg %}

At this point, I'll look at the image and decide if I need to do further star processing or not. I'll ask myself, do the stars look overly busy and instrusive? Generally they do but some galaxy targets look just fine. Our example here is rather busy so I'll proceeed with star processing. Now we'll select Image Processing, Star Processing, Starnet Star Removal. Tick "Pre-strech linear image", untick "Recompose stars on completion", tick "Generate star mask" and untick "apply to sequence". Click Execute. 

{% picture blog siril-8.jpg %}

After a while, you'll see a starless image.

{% picture blog siril-9.jpg %}

Up to now, we've been operating in the linear domain with an autostrech view. Now it's time to stretch our data and view it as linear data. Change back to linear view

{% picture blog siril-10.jpg %}

Choose Image Processing, Generalised Hyperbolic Stretch Transformations. Now click the "+" symbol at the top to zoom in on your curve so it's visible to you. Click in the middle of the left side of the curve. This will set your symmetry point

{% picture blog siril-11.jpg %}

Click the "1" icon at the top to reset your zoom and then move your stretch factor slider until your target emerges from the darkness. Don't worry too much about black levels for now. We can fix those later. Click Apply

{% picture blog siril-12.jpg %}

Click on the right hand side of your curve and stretch again. This time, just a little bit to stretch the highlights. Click Apply

{% picture blog siril-13.jpg %}

Close this stretch window and go to Image Processing, Histogram Transformation. Move your left slide towards the bottom of the curve without clipping. Move your right slide to the right to lower the black level. Click Apply

{% picture blog siril-14.jpg %}

This step is IMPORTANT. Click the save button at top right. It looks like a downward arrow. Save your image as a fit file

{% picture blog siril-15.jpg %}

Let's get some stars back. Go to Image Processing, Star Processing and select "Star Recomposition". Once this is opened, select the file that you just saved in the file selector on the left and the star mask in the selector on the right

{% picture blog siril-16.jpg %}

We can use the right hand slider to bring our stars back. You can play with the highlight protection slide to try to avoid blowing out bright stars. Once you're happy with the results, you can click Apply

{% picture blog siril-17.jpg %}

We can reset our levels again with the histogram transformation

{% picture blog siril-18.jpg %}

And recalibrate our colours. This time we'll use the Color Calibration tool. To use this, zoom in (control + scroll wheel) and select an area of the background. Click "Use current selection" and then "Background Neutralization". Once you've done this, click "close"

{% picture blog siril-19.jpg %}

We need to remove some green noise. Click Image Processing, Remove Green Noise, then Apply

{% picture blog siril-20.jpg %}

You'll notice your image looks a bit "pale". So once again, let's do another background neutralization. I usually repeat these last 2 steps a few times until the image looks good.

{% picture blog siril-21.jpg %}

We're just about done in Siril. At this point, I'll play with histogram to get the black levels better, perhaps adjust saturation until it looks better. Once you've done all you can in Siril, save this as a TIF and we'll load this into Gimp to make the final tweaks

{% picture blog siril-22.jpg %}
