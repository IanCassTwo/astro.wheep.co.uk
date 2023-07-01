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

## Star Recombining

If you've used star processing in Siril to separate your stars from your nebula, you can recombine in Gimp with more control than if you did it in Siril. To do this, I would usually load the starless TIF image in Gimp then use the methods shown above to get the levels right and get the colours looking good. I won't run AstroSharp on the starless image.

{% picture blog final-layer1.jpg %}

After I've done this, I will then clone the starless image onto a 2nd layer. I'll then run a heavy gaussian blur and/or a despeckle filter on this layer. I'll then adjust the opacity to find the best balance between sharpness and fullness

{% picture blog final-layer2.jpg %}

I'll then load my starmask in Gimp as a new layer and set the mode to "lighten only". I'll then use the Colors/Levels menu to make the stars visible by moving the mid point to the left. Once the stars are looking good, I'll turn off all other layers so I only see stars, then export the image as a TIF. Make sure to untick the "save layers" button. Once the stars are exported, I'll process it with AstroSharp. When this is finished, I'll delete the star layer from my image and import the sharpened image as a new layer.

Now I have 3 layers. One for the starless nebula, one for a heavily blurred version, and one for the stars. I'll now spend some time tweaking colours, levels, saturation, etc. Remember you can do this for each of your 3 layers. Once finished, save and export your TIF/JPEG.

{% picture blog final-layered.jpg %}
