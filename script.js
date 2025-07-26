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
