function homeContent() {
  //Create main content container
  const contentContainer = document.createElement("div");
  contentContainer.classList.add(
    "card",
    "custom-card",
    "mx-auto",
    "mt-5",
    "px-4"
  );
  //Create title
  const titleContainer = document.createElement("h1");
  titleContainer.classList.add("card-header", "text-light", "mx-auto", "h1");
  titleContainer.innerText = "Taste the meals the Pirate King journeyed with";

  //Create image
  const homeImg = document.createElement("img");
  homeImg.classList.add("custom-img", "mx-auto", "my-3");
  homeImg.src = "./images/sanji-cooking.png";

  // attach all child element of homeContent
  contentContainer.appendChild(titleContainer);
  contentContainer.appendChild(homeImg);
  return { contentContainer };
}
export default homeContent;
