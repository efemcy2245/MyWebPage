function toggle(id) {
  const element = document.getElementById(id);
  element.style.display = (element.style.display === 'none' || element.style.display === '') ? 'block' : 'none';
}

function loadExternalHTML(filename) {
  fetch(filename)
    .then(response => {
      if (!response.ok) {
        throw new Error('File not found: ' + filename);
      }
      return response.text();
    })
    .then(data => {
      document.getElementById("main-content").innerHTML = data;
    })
    .catch(error => {
      document.getElementById("main-content").innerHTML = `<p style="color:red;">${error.message}</p>`;
    });
}
