---
layout: default
title: Gain
parent: Glossary
---
System gain in a camera refers to the overall amplification of the signal from the sensor to produce a usable image. It is a measure of the camera's sensitivity, and is typically expressed in units of electrons per analog-to-digital unit (e-/ADU).

The system gain is determined by several factors, including the sensor's quantum efficiency (QE), the camera's read noise, and the analog-to-digital converter's gain. Higher system gain means that the camera is more sensitive, but it also means that the image will be noisier. Conversely, lower system gain means that the camera is less sensitive, but the resulting image will be cleaner.

The optimal system gain for a particular camera and imaging scenario depends on the characteristics of the camera, the telescope or lens being used, and the specific imaging targets. In astrophotography, finding the right balance between sensitivity and noise is critical to producing high-quality images.

Some cameras offer a dual gain capability (LCG = low conversion gain and HCG = high conversion gain). The High Conversion Gain mode effectively gives a gain boost, by a multiplier (usually x2). Some cameras allow this mode to be selected explicitly whilst others enable it automatically depending on the chosen gain value.

The following graphs were created by myself from data obtained from Sharcap Sensor Analysis tool. They show data from my SvBony sv505c and is remarkably similar to the advertised data. You can see the results of the HCG mode kicking in at 100 gain.

{% picture blog dynamic-range.png %}

{% picture blog read-noise.png %}

{% picture blog relative-gain.png %}

{% picture blog fwc.png %}
