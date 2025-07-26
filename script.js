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