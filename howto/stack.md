---
layout: default
title: Stack
parent: How To
---
In astrophotography, you're not using your gamera to take pictures, you're gathering data. This data will consist of signal and of noise. To get high quality results, you'll need to gather a lot of data. This means that you'll need many images, each of somewhere between 30 secs to 5mins depending on your equipment and your target. Generally, your total integration time for all images should be in the region of 1 to 10 hours. The more data you gather, the more signal you can extract from the noise. The first step in extracting that data is to combine it all together along with your calibration frames.

My stacking tool of choice is Deep Sky Stacker. I find this tool most flexible and capable.

To stack images taken over the course of the night, you would typically follow these steps in Deep Sky Stacker:

1. Load your light frames: In Deep Sky Stacker, go to File > Open Picture Files and select all of your light frames. These are the images that contain the actual data of the objects you were imaging.

2. Load your calibration frames: To improve the quality of your stacked image, you'll want to use calibration frames to remove unwanted noise and artifacts. Load your bias frames, dark frames, and flat frames by going to File > Open Calibration Files and selecting each type of frame. Bias frames contain only the readout noise of the camera, dark frames contain the readout noise plus the thermal noise of the camera, and flat frames are used to correct for dust and vignetting.

3. Register your images: Deep Sky Stacker will now align and stack your light frames. To do this, click on the Register tab and select the appropriate settings for your images. You can also choose to use one of the calibration frames as a reference image for alignment.

4. After registration, I like to manually example each frame and discard those that show excessive star trails or other artifacts such as blur, clouds or excessive light pollution. It would not be unusual for me to discard 10% of frames

5. Stack your images: Once your images are registered, click on the Stacking tab to stack your images. You can choose from a variety of stacking methods and adjust the settings to optimize the final result. Typically I'd choose Kappa-Sigma clipping method for my light frames. This will generally discard satellite trails from your light frames so that they don't mess up your final stacked image. I'll also turn on 2x drizzle which will extract a bit more detail from your data especially if you're using dithering.

6. Save your final image: Once the stacking process is complete, you can save your final stacked image as a FITS or TIFF file ready for processing.

It's important to note that the quality of your final stacked image will depend on the quality of your individual frames and calibration frames, as well as the settings you choose in Deep Sky Stacker.

You can also use Deep Sky Stacker to combine images taken on different nights. To do this, simply repeat the process documented above but select a different group tabs at the bottom of the screen. Each evening should be in a different group. You can also use this to group images taken with different settings on the same evening. For example if you decide to change the exposure time or the gain settings, put the resulting images into their own group.