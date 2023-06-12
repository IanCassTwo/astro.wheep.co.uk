// Get a reference to the existing image element
const existingImage = document.getElementById('livestackimage');

// Function to fetch and update the image
function fetchAndUpdateImage() {
  // Fetch the new image from a URL
  const timestamp = Date.now();
  //fetch('/als/web_image.jpg?ts=' + timestamp)
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
    })
    .catch(error => {
      // Handle any errors that occur during the fetch process
      existingImage.src = "/assets/images/offline.jpg"
    });
}

// Fetch and update the image immediately
fetchAndUpdateImage();

// Fetch and update the image every 10 seconds
setInterval(fetchAndUpdateImage, 10000);

