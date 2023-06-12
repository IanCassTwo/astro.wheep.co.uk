---
layout: default
title: Astrosharp
parent: Software
---
Astrosharp is a tool for sharpening astronomy pics. You can download it from Github <https://github.com/deepskydetail/AstroSharp>.

You can use it as follows:-

1. Open your final image as a TIF file in Gimp
2. Convert it to greyscale and save it. You can now undo this step to get your colour picture back
3. Run Astrosharp and upload the greyscalemage. Once it's done its thing, download the sharpened result
4. Drag the sharpened image into Gimp so that it loads as another layer
5. Reorder your layers so that the sharpened image layer is below the colour image layer
6. Change the blend mode on the colour layer to "LCh Color". You should now see a sharper colour image
7. Export a JPG and/or TIF

Before
{% picture blog m3-06-05-2023.jpg %}

After
{% picture blog m3-sharp.jpg %}

Before
{% picture blog whirlpool-06-05-2023.jpg %}

After
{% picture blog whirlpool-sharp.jpg %}
