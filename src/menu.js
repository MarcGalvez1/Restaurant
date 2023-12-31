function menuContent() {
  //Create main content container
  const contentContainer = document.createElement("div");
  contentContainer.classList.add(
    "card",
    "custom-card",
    "mx-auto",
    "mt-5",
    "px-4"
  );
  contentContainer.id = "home";
  //Create title
  const titleContainer = document.createElement("h1");
  titleContainer.classList.add("card-header", "text-light", "mx-auto", "h1");
  titleContainer.innerText = "Menu";

  //Create image
  const homeImg = document.createElement("img");
  homeImg.classList.add("custom-img", "mx-auto", "my-3");
  homeImg.src = "./images/sanji-cooking.png";

  // Create the card body
  const bodyContainer = document.createElement("div");
  bodyContainer.classList.add("card-body", "mx-auto");

  // Create paragraph
  const bodyParagraph = document.createElement("p");
  bodyParagraph.classList.add(
    "card-text",
    "text-light",
    "text-center",
    "display-6"
  );
  bodyParagraph.innerText = "Cooked by the best chef in the New Wold";
  bodyContainer.appendChild(bodyParagraph);

  // attach all child element of homeContent
  contentContainer.appendChild(titleContainer);
  contentContainer.appendChild(homeImg);
  contentContainer.appendChild(bodyContainer);
  return { contentContainer };
}
export default menuContent;
