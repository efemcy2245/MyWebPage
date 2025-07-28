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

  function loadAboutMe() {
  document.getElementById("content").innerHTML = aboutMeContent;
}


const aboutMeContent = `
  <h2>About me</h2>
  <p>
    I have a strong inner drive to learn and master every aspect of the job—what I would describe as an internal hunger, an endless source of motivation.
    I enjoy diving deep into topics and learning independently to build broad, cross-disciplinary knowledge.
    You can find some of my projects at the following link:
    <a href="https://efemcy2245.github.io/ForumMachineLearning/" target="_blank" rel="noopener noreferrer">
      https://efemcy2245.github.io/ForumMachineLearning/
    </a>.
  </p>
  <p>
    Over the past month, I’ve taken the time to organize my thoughts on several key topics.
    I’ve shared what I’ve learned by publishing my insights and perspectives.
    This is a great opportunity for me—not only to demonstrate what I’m capable of,
    but also to leave a piece of myself in the work.
  </p>
`;