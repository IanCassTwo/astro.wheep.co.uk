---
layout: default
title: Siril Narrowband Formula
parent: Image Processing
grand_parent: Tutorials
nav_order: 9997
---
## Processing Narrowband with Siril Pixel Math

  <h3>Please select your image sensor</h3>
  <select id="jsonSelect">
    <option value="imx178.json" selected>IMX178</option>
    <option value="imx071.json">IMX071</option>
    <option value="imx290.json">IMX290</option>
    <option value="imx294.json">IMX294</option>
    <option value="imx464.json">IMX464</option>
    <option value="imx477.json">IMX477</option>
    <option value="imx533.json">IMX533</option>
    <option value="imx585.json">IMX585</option>
    <option value="imx662.json">IMX662</option>
  </select>

<p id="templateOutput">
<h3>Selected sensor correction values</h3>
These values are showing where the red, green and blue channels intercept OIII (500nm) and Ha (656nm) according to the response graphs for the given sensor. These are shown for your information only. These are automatically inserted into the formula below once you choose your sensor from the dropdown list
<table>
<tr><th>Colour</th><th>OIII (500nm)</th><th>Ha (656nm)</th></tr>
<tr><td>Red</td><td><span data-key="red.oiii"/></td><td><span data-key="red.ha"/></td></tr>
<tr><td>Green</td><td><span data-key="green.oiii"/></td><td><span data-key="green.ha"/></td></tr>
<tr><td>Blue</td><td><span data-key="blue.oiii"/></td><td><span data-key="blue.ha"/></td></tr>
</table>
<h3>Initial Preparation</h3>
For best results, you should stack with "Bayer Drizzle Algorithm (no interpolation, no debayer)" in Deep Sky Stacker. This should prevent leakage of colour information to adjacent pixels from the debayering process. However, this process will work regardless of how you stack. To begin with, you should load your stacked unprocessed RGB into Siril and split channels to save separate R, G and B FITS files. You should then load these into pixel math using variable names R, G and B. 

<h3>Pixel Math Prepatory Steps</h3>
For each line in the table below, you should enter the formula as "single RGB/K expression" in pixel math and hit apply. You should then save the resulting image according to the name in column 1. You should then load the image you just saved back into pixel math with the variable named accordingly and proceed to the next step
<table>
<tr><th>File/Variable Name</th><th>Formula</th></tr>
<tr><td>OIII_G</td><td>(G - (<span data-key="green.ha"/> / <span data-key="red.ha"/>)*R) / (<span data-key="green.oiii"/> - (<span data-key="green.ha"/> * <span data-key="red.oiii"/> / <span data-key="red.ha"/>))</td></tr>
<tr><td>OIII_B</td><td>(B - (<span data-key="blue.ha"/> / <span data-key="red.ha"/>)*R) / (<span data-key="blue.oiii"/> - (<span data-key="blue.ha"/> * <span data-key="red.oiii"/> / <span data-key="red.ha"/>))</td></tr>
<tr><td>OIII</td><td>(2 * 0.9 * OIII_G + 0.5 * OIII_B) / 2.3</td></tr>
<tr><td>Ha</td><td>(R - <span data-key="red.oiii"/> * OIII) / <span data-key="red.ha"/></td></tr>
</table>

<h3>Pixel Math Final Steps</h3>
Once you're done, you can Untick "use single RGB/K expression" and enter the following formula into  R, G and B boxes
<table>
<tr><th>File/Variable Name</th><th>Formula</th></tr>
<tr><td>R</td><td>Ha</td></tr>
<tr><td>G</td><td>(0.9 * OIII + 0.1 * Ha)</td></tr>
<tr><td>B</td><td>OIII</td></tr>
</table>
Now you can proceed with your normal processing, including color calibration

<h3>Further Processing</h3>
<p>If you want to explore some more pixelmath, here's a formula to get your nebula looking even better. However these must be done in the linear domain. So, to begin with, you should load your Ha and OIII fits files individually into Siril and run an autostretch. Save them as Ha-str.fit and OIII-str.fit.</p>

<p>Once you've done this, open pixelmath and remove any previously loaded images by highlighting them and click the minus symbol at the top right. Now load your Ha-str.fit and OIII-str.fit, naming them Ha and OIII as before.</p>

<p>For each line in the table below, you should enter the formula as "single RGB/K expression" in pixel math and hit apply. You should then save the resulting image according to the name in column 1. You should then load the image you just saved back into pixel math</p>

<table>
<tr><th>File/Variable Name</th><th>Formula</th></tr>
<tr><td>f</td><td>(Ha*OIII)^~(Ha*OIII)</td></tr>
</table>

Now, untick "single RGB/K expression" and enter the following formula into each of the R, G and B boxes

<table>
<tr><th>File/Variable Name</th><th>Formula</th></tr>
<tr><td>R</td><td>Ha</td></tr>
<tr><td>G</td><td>f*Ha + ~f*OIII</td></tr>
<tr><td>B</td><td>OIII</td></tr>
</table>

Now you can proceed with your usual processing techniques

</p>

<script type="text/javascript" src="/assets/js/pixelmath.js?{{site.time | date: '%s'}}"></script>
