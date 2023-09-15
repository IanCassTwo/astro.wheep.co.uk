// Get a reference to the existing image element
const existingImage = document.getElementById('livestackimage');
const link = document.getElementById('stacking_link');

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const parts = [];
  if (hours > 0) {
    parts.push(`${hours}h`);
  }
  if (minutes > 0) {
    parts.push(`${minutes}m`);
  }
  if (remainingSeconds > 0 || parts.length === 0) {
    parts.push(`${remainingSeconds}s`);
  }

  return parts.join(' ');
}

// Function to fetch and update the image
function fetchAndUpdateImage() {
  // Fetch the new image from a URL
  const timestamp = Date.now();
  fetch('/als/web_image.jpg')
    .then(response => {
      // Check if the response status is 200 (OK)
      if (response.ok) {
        return response.blob();
      } else {
        throw new Error('Image request failed with status: ' + response.status);
      }
    })
    .then(blob => {
      // Create a local URL for the fetched image
      const imageURL = URL.createObjectURL(blob);

      // Replace the source of the existing image with the fetched image
      existingImage.src = imageURL;
      link.href = imageURL;
    })
    .catch(error => {
      // Handle any errors that occur during the fetch process
      existingImage.src = "/assets/images/offline.jpg"
      link.href = "#";
      stacking_details.innerHTML = ""
    });
}

existingImage.onload = function() {
    // Remove exifdata property if it exists
    if (this.exifdata) {
        delete this.exifdata;
    }
    EXIF.getData(this, function() {
        var imageDescription = EXIF.getTag(this, "ImageDescription");
        if (imageDescription) {
            imageJson = JSON.parse(imageDescription)
            var stacking_details = document.getElementById("stacking_details");
            var formattedTime = formatTime(imageJson.total_exposure_time);
            stacking_details.innerHTML = `${formattedTime} total integration time from ${imageJson.stack_size} frames`
        }
    });
};

// Fetch and update the image immediately
fetchAndUpdateImage();

// Fetch and update the image every 10 seconds
setInterval(fetchAndUpdateImage, 10000);

