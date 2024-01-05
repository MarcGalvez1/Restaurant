function nav() {
  const mainContent = document.getElementById("content");
  const navBar = document.createElement("h1");
  navBar.textContent = "Hello World";
  mainContent.appendChild(navBar);
  return { navBar };
}

export default nav();
