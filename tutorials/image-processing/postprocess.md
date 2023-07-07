---
layout: default
title: Post Process
parent: Image Processing
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

If you've used star processing in Siril to separate your stars from your nebula, you can recombine in Gimp with more control than if you did it in Siril. To do this, you can load the starless TIF image in Gimp then use the methods shown above to get the levels right and get the colours looking good.

{% picture blog final-layer1.jpg %}

You should then load your starmask in Gimp as a new layer. Set the layer blend mode to "lighten only". Turn off any other layers that you may have loaded.

{% picture blog sm1.jpg %}

You should then go to colors / levels Change the blend mode to "linear light" or "hard light" and move your mid-level slider quite far to the left. Click "OK" when it looks good

{% picture blog sm2.jpg %}

You can then get rid of any purple halo on your stars with the Q'Mic "Unpurple" filter.

{% picture blog sm3.jpg %}

You can then enhance the sharpness of your stars. Go to filters / enhance and choose "sharpen (usharp mask)". Zoom in so you can see one of your larger stars and play with the radius/amount sliders until your stars look sharper but still look good. I like to set the radius so the larger stars still have a corona around them but the smaller stars look sharper. tick/untick the "preview" option to see the difference. Once done, click OK.

{% picture blog sm3.jpg %}

Finally, you want to play with the colors / Exposure or even the opacity settings to give your stars a little sparkle. You can renable your nebula layer so that you can make sure you don't make the stars too distracting. Remember to set your star layer to "lighten only"

{% picture blog sm4.jpg %}

You can now spend some time tweaking colours, levels, saturation, etc. Remember you can do this for each of your 3 layers. Once finished, save and export your TIF/JPEG.

{% picture blog veil-definitive.jpg %}
