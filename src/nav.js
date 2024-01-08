import homeContent from "./home";
import menuContent from "./menu";
const mainContent = document.getElementById("content");
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
  // This contains the nav list
  const navListContainer = document.createElement("div");
  navListContainer.classList.add(
    "collapse",
    "navbar-collapse",
    "nav-tabs",
    "me-2"
  );
  navListContainer.id = "navbarNav";

  const navList = document.createElement("ul");
  navList.classList.add("navbar-nav", "ms-auto", "custom-nav-list");
  navList.appendChild(listItem("Home", true));
  navList.appendChild(listItem("Menu", false));
  navList.appendChild(listItem("Contact", false));

  navListContainer.appendChild(navList);
  // Attach all navContent child elements
  navContent.appendChild(navLogoContainer);
  navContent.appendChild(navListContainer);
  navBar.append(navContent);

  return { navBar };
}

function listItem(title, isActive) {
  // Create list item
  const listItm = document.createElement("li");
  listItm.classList.add("nav-item", "mx-2", "custom-nav-item");

  // Create anchor tag
  const navListAnchor = document.createElement("a");
  navListAnchor.classList.add("nav-link");
  if (isActive) {
    navListAnchor.classList.add("active");
    navListAnchor.setAttribute("aria-current", "page");
  }
  navListAnchor.textContent = title;

  listItm.appendChild(navListAnchor);

  listItm.addEventListener("click", () => {
    const pageToVisit = title.toLowerCase();
    // Remove "active" class from all list items

    const allListItems = document.querySelectorAll(".custom-nav-item");
    allListItems.forEach((item) => {
      item.querySelector(".nav-link").classList.remove("active");
    });

    // Add "active" class to the clicked list item
    navListAnchor.classList.add("active");

    // Remove "active" page
    const currPage = document.querySelector("div#content > div");
    mainContent.removeChild(currPage);

    // Add page to visit
    switch (pageToVisit) {
      case "home":
        mainContent.appendChild(homeContent().contentContainer);
        break;
      case "menu":
        mainContent.appendChild(menuContent().contentContainer);
        break;
      case "contact":
        break;
      default:
        console.log("Page is broken");
    }
  });
  return listItm;
}

export default nav;
