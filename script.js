function toggle(id) {
  const el = document.getElementById(id);
  el.style.display = (el.style.display === 'block') ? 'none' : 'block';
}

function showContent(content) {
  const contentDiv = document.getElementById("content");

  if (content === 'home') {
    contentDiv.innerHTML = `
      <h2>About me</h2>
      <p>Description of my-self.</p>
    `;
  } else {
    contentDiv.innerHTML = `
      <h2>File Preview</h2>
      <p>${content}</p>
    `;
  }
}

function showContentFromDiv(sourceDivId) {
  const source = document.getElementById(sourceDivId);
  const target = document.getElementById("content");

  if (source && target) {
    target.innerHTML = source.innerHTML;
  }
}

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
