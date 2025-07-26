function toggle(id) {
  const el = document.getElementById(id);
  el.style.display = (el.style.display === 'block') ? 'none' : 'block';
}




function loadExternalHTML(filePath, targetElementId) {
  const target = document.getElementById(targetElementId);

  fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch ${filePath}: ${response.statusText}`);
      }
      return response.text();
    })
    .then(html => {
      target.innerHTML = html;
    })
    .catch(error => {
      target.innerHTML = `<p>Error loading content: ${error.message}</p>`;
    });
}

function showContent(file) {
    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error("Could not load content.");
            return response.text();
        })
        .then(html => {
            document.getElementById("main-content").innerHTML = html;
        })
        .catch(err => {
            document.getElementById("main-content").innerHTML = `<p>Error: ${err.message}</p>`;
        });
}