// Fetch and display selected JSON file
function fetchSelectedJSON() {
  const selectedFile = '/assets/json/' + document.getElementById("jsonSelect").value;

  fetch(selectedFile)
    .then(response => response.json())
    .then(data => {
      // Iterate over each placeholder element and replace the content
      document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        const value = getKeyByPath(data, key);
        element.textContent = value;
      });
    })
    .catch(error => console.error("Error fetching data:", error));
}

// Helper function to access nested properties using a dot-separated path
function getKeyByPath(obj, path) {
  return path.split('.').reduce((acc, key) => acc[key], obj);
}

// Attach event listener to the select element
document.getElementById("jsonSelect").addEventListener("change", fetchSelectedJSON);

// Fetch and display initial JSON data on page load
fetchSelectedJSON();
