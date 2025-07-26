  function toggle(id) {
    const element = document.getElementById(id);
    if (element.style.display === "none" || element.style.display === "") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }

  function loadExternalHTML(file) {
    fetch(file)
      .then(response => {
        if (!response.ok) throw new Error("File not found");
        return response.text();
      })
      .then(data => {
        document.getElementById("content").innerHTML = data;
      })
      .catch(error => {
        document.getElementById("content").innerHTML =
          `<p style="color:red;">Error loading content: ${error.message}</p>`;
      });
  }