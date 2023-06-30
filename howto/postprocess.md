---
layout: default
title: Post Process
parent: How To
---
After initial processing in Siril, I will post-process with Gimp. The GIMP workflow is less linear than Siril, so rather than give a step by step approach, I'll simply list some techniques.


## Adjust levels

Choose Colors, Levels. Adjust the lower level to be at the bottom of the curve, adjust mid slide for appropriate black level

{% picture blog gimp-1.jpg %}

## Unpurple
If some of your stars have purple fringes, you can remove them by using the "unpurple" filter in [G'MIC Gimp plugin](https://gmic.eu/). Note, this will affect the colours in your entire image so if it's detrimental, you can clone your image into a 2nd layer, unpurple that layer, apply a layer mask so that you expose only the stars that were purple. For my image, the unpurple filter has resulted in the blues becoming slightly more cyan. I like this effect so I'm keeping it

{% picture blog gimp-2.jpg %}

## Sharpening with AstroSharp

I'll temporarily transform to greyscale and export a TIF. I'll then "undo" the greyscale.

{% picture blog gimp-3.jpg %}

Now I'll load the image into AstroSharp and wait for it to process. This will take a while. Once the image is finished, drag and drop it onto Gimp. This will load it as a new layer. Once this is loaded, change the layer mode to "luminance" and turn the opacity down to approximately 50% or until you're happy with the way it looks

{% picture blog gimp-4.jpg %}

## Shadows Highlights

Make sure you've selected your main layer, and adjust Shadows-Highlights from the Color menu. I suggest you push the white point adjustment as high as it will go, then adjust the shadows slider until your blacks look good. After that, adjust highlights slider to being some contrast

{% picture blog gimp-5.jpg %}

## Color Balance

Use the color balance sliders to tweak things until they look good

{% picture blog gimp-6.jpg %}






