function toggle(id) {
  const el = document.getElementById(id);
  el.style.display = (el.style.display === 'block') ? 'none' : 'block';
}

function showContent(text) {
  document.getElementById('content').innerHTML = `
    <h2>File Content</h2>
    <p>${text}</p>
  `;
}
