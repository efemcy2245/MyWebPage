function toggle(id) {
  const el = document.getElementById(id);
  el.style.display = (el.style.display === 'block') ? 'none' : 'block';
}






function showContent(content) {
  const contentDiv = document.getElementById("content");

  if (content === 'home') {
    // Load external HTML file for "home"
    fetch('home-content.html')
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.text();
      })
      .then(html => {
        contentDiv.innerHTML = html;
      })
      .catch(error => {
        contentDiv.innerHTML = `<p>Error loading content: ${error.message}</p>`;
      });
  } else {
    // For other contents, just insert the text
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

function loadContentFromFile(content) {
  const contentDiv = document.getElementById("content");

  if (content === 'home') {
    // Load external HTML file for "home"
    fetch('home-content.html')
      .then(response => {
        if (!response.ok) throw new Error('Network response was not o');
        return response.text();
      })
      .then(html => {
        contentDiv.innerHTML = html;
      })
      .catch(error => {
        contentDiv.innerHTML = `<p>Error loading content: ${error.message}</p>`;
      });
  } else {
    // For other contents, just insert the text
    contentDiv.innerHTML = `
      <h2>File Preview</h2>
      <p>${content}</p>
    `;
  }
}