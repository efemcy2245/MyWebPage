  // Toggle visibility of subfolders
  function toggle(id) {
    const elem = document.getElementById(id);
    if (!elem) return;
    if (elem.style.display === 'block') {
      elem.style.display = 'none';
    } else {
      elem.style.display = 'block';
    }
  }

  // Load external HTML into the #content div
  async function loadExternalHTML(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response was not ok');
      const html = await response.text();
      document.getElementById('content').innerHTML = html;
    } catch (error) {
      document.getElementById('content').innerHTML = `<p>Error loading content: ${error.message}</p>`;
    }
  }