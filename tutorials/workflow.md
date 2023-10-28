---
layout: default
title: Image Processing Workflow
parent: Tutorials
nav_order: 1
---
A workflow for processing image data for a nebula is as follows:-

1. Stack your data with [Deep Sky Stacker](http://deepskystacker.free.fr/). Make sure to use calibration frames. If you're dithering, enable 2x or 3x drizzle mode
1. Use [GraXpert](https://github.com/Steffenhir/GraXpert) to crop your image to remove stacking artifacts and extract the background gradient with AI mode
1. Load your image into [Siril](https://siril.org/)
1. Run a Noise Reduction with SOS as your secondary denoising stage. This never seems to reduce noise visibly but does increase SNR
1. Colour correct your image with Photometric colour correction in Siril, save as cropped.tif
1. Create a stretched image with nice looking stars. Don't worry about exposing your nebula at present. Do this in Siril with a Modified Arcsinh stretch. Once stars look nice, save as stars.tif
1. Back with cropped.tif, use Siril Star Processing Starnet++ to extract the stars. Stretch the starless result with GHS, colour correcting and removing green noise to suit. I usually use Siril's Image Information / Noise Estimation to tell me when I'm increasing background noise too much. I try to stay as close to 1.0 as possible. Save as nebula.tif once it looks good
1. Back with the pre-stretched starless image, extract Ha and OIII according to my [Siril Pixel Math tutorial](/tutorials/pixelmath/). We'll use this Ha and OIII data to enhance our nebula
1. Once you have your linear Ha and OIII data, it's time to stretch them. Don’t stretch too much. Less is definitely more. Save each result as a tif
1. Load your starmask into Siril and save as a TIF. No other changes needed here
1. In Gimp, load stars,tif, apply unsharp mask, set the layer blend mode to “lighten only”, fix the black level as necessary. This should always be your top-most layer
1. Load stretched Ha as new layer beneath the stars layer. Colorized it red, fix black levels. Consider applying a guassian blur. Set to “screen” layer mode
1. Do the same with your OIII stretched data except colorize it cyan
1. Load nebula.tif as bottom layer. The blend mode should be normal
1. Adjust blackpoint & curves on each layer so that they look good combined. You may have to clip the blacks on the Ha and OIII layers to prevent the background becoming obtrusive
1. Once image looks good, disable stars layer, create new layer from visible and call it “background”. This layer should be directly beneath the stars layer
1. Perform final cosmetic adjustments, renable the stars layer and save as TIF. Remember to untick the "save layers" when exporting the TIF in Gimp
1. Load back into Siril and run a final “remove green noise”. Save as jpg

Workflow for processing galaxies and star clusters would be similar except I wouldn't need to extract Ha and OIII data
