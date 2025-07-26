function loadContentFromFile(filePath) {
  fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load file: ' + response.statusText);
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('content').innerHTML = data;
    })
    .catch(error => {
      document.getElementById('content').innerHTML =
        '<p style="color:red;">Error loading content: ' + error.message + '</p>';
    });
}
