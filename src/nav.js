function nav() {
  // Initialize the nav container
  const navBar = document.createElement("nav");
  navBar.classList.add(
    "navbar",
    "navbar-expand-lg",
    "navbar-dark",
    "custom-nav"
  );

  // Initialize the div container containing nav content
  const navContent = document.createElement("div");
  navContent.classList.add("container-fluid");

  // Initialize the div container containing the logo and header
  const navLogoContainer = document.createElement("div");
  navLogoContainer.classList.add("d-flex", "align-items-center");

  // Anchor tag for the logo
  const logoAnchor = document.createElement("a");
  logoAnchor.classList.add("custom-brand");

  // image inside the logo anchor
  const logoImg = document.createElement("img");
  logoImg.classList.add("d-inline-block", "align-text-top", "custom-logo");
  logoImg.src = "./images/onepiecelogo.png";

  // Attach the logo image with its anchor tag
  logoAnchor.appendChild(logoImg);

  // Create the title
  const navTitle = document.createElement("h1");
  navTitle.classList.add("text-center", "mx-auto", "mb-auto", "custom-title");
  navTitle.textContent = "One Piece Restaurant";

  // Create the hamburger menu
  const hamburgerBtn = document.createElement("button");
  hamburgerBtn.classList.add("navbar-toggler");
  hamburgerBtn.type = "button";
  hamburgerBtn.setAttribute("data-bs-toggle", "collapse");
  hamburgerBtn.setAttribute("data-bs-target", "#navbarNav");
  hamburgerBtn.setAttribute("aria-controls", "navbarNav");
  hamburgerBtn.setAttribute("aria-expanded", "false");
  hamburgerBtn.setAttribute("aria-label", "Toggle navigation");

  // Create the hamburger menu icon
  const hamburgerIcon = document.createElement("span");
  hamburgerIcon.classList.add("navbar-toggler-icon");

  //Attach the icon to the button
  hamburgerBtn.appendChild(hamburgerIcon);

  // Attach all logoContainer children
  navLogoContainer.appendChild(logoAnchor);
  navLogoContainer.appendChild(navTitle);
  navLogoContainer.appendChild(hamburgerBtn);

  // Create the nav list
  const navListContainer = document.createElement("div");
  navListContainer.classList.add("collapse", "navbar-collapse", "me-2");

  // Attach all navContent child elements
  navContent.appendChild(navLogoContainer);
  navBar.append(navContent);

  return { navBar };
}

export default nav;
