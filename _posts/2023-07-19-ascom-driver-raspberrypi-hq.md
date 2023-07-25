---
layout: post
title:  "New ASCOM driver for Raspberry Pi HQ Camera"
---
I've been working on [another project recently](https://github.com/IanCassTwo/rpicam-ascom-alpaca) that's now ready for others to use. It's a new driver for the Raspberry PI HQ camera to allow it to be used in NINA or other ASCOM compatible devices. The driver itself runs on your Raspberry Pi and communicates with your PC remotely using ASCOM Alpaca. This is built into your ASCOM platform so there's nothing extra to install on the PC side. Once the driver is running on your Raspberry Pi, you can open the ASCOM chooser (e.g. via ASCOM Diagnostics), go to the Alpaca tab and enable Alpaca discovery. This should find your Raspberry Pi and offer to install it on your PC. Once this is done, you can use it in NINA, Sharpcap, PHD2, etc as you would any other ASCOM device.

The driver supports binning, subframes, gain, and exposure. It's pretty good performance-wise too but bear in mind that each frame from the HQ camera is 24MB. If you're connected with Wifi or Fast Ethernet, just the file transfer time will be almost 2.5seconds. It will probably be better on a modern Pi with gigabit ethernet or faster wifi. If you're going to use this as a guide cam, turn on binning and consider using subframes. It'll never be fast enough for planetary, but I wrote this for DSO

If you want to use it, you can clone my [git repo](https://github.com/IanCassTwo/rpicam-ascom-alpaca), install the dependencies and run it with "python app.py".

This driver was made possible by the [ASCOM AlpycaDevice Python SDK](https://github.com/ASCOMInitiative/AlpycaDevice) and the [Picamera2 libcamera SDK](https://github.com/raspberrypi/picamera2).
