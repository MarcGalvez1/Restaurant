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

  // Create the card body
  const bodyContainer = document.createElement("div");
  bodyContainer.classList.add("card-body", "mx-auto");

  // Create Menu
  // Create Chicken Sandwhich Item
  const chickenSandwhichContainer = document.createElement("div");
  const chickenSandwhichTitle = document.createElement("p");
  chickenSandwhichTitle.classList.add(
    "card-text",
    "text-light",
    "text-center",
    "display-5"
  );
  chickenSandwhichTitle.innerText = "Chicken Sandwhich";
  const chickenSandwhichDesc = document.createElement("p");
  chickenSandwhichDesc.classList.add(
    "card-text",
    "text-light",
    "text-start",
    "display-6"
  );
  chickenSandwhichDesc.innerText =
    "Succulent grilled chicken nestled in a soft bun with crisp lettuce and flavorful mayo, creating a mouthwatering and satisfying sandwich.";

  const chickenSandwichHorizontalRule = document.createElement("hr");
  chickenSandwichHorizontalRule.classList.add("custom-hr");

  chickenSandwhichContainer.appendChild(chickenSandwhichTitle);
  chickenSandwhichContainer.appendChild(chickenSandwhichDesc);
  chickenSandwhichContainer.appendChild(chickenSandwichHorizontalRule);

  // Create Hamburger menu Item
  const hamburgerContainer = document.createElement("div");
  const hamburgerTitle = document.createElement("p");
  hamburgerTitle.classList.add(
    "card-text",
    "text-light",
    "text-center",
    "display-5"
  );
  hamburgerTitle.innerText = "Hamburger";
  const hamburgerDesc = document.createElement("p");
  hamburgerDesc.classList.add(
    "card-text",
    "text-light",
    "text-start",
    "display-6"
  );
  hamburgerDesc.innerText =
    "Juicy beef patty embraced by a tender bun, topped with fresh lettuce, ripe tomatoes, and savory condiments for a delightful burger experience.";

  const hamburgerHorizontalRule = document.createElement("hr");
  hamburgerHorizontalRule.classList.add("custom-hr");

  hamburgerContainer.appendChild(hamburgerTitle);
  hamburgerContainer.appendChild(hamburgerDesc);
  hamburgerContainer.appendChild(hamburgerHorizontalRule);

  // Create Menu
  // Create sloppy joes menu Item
  const sloppyJoesContainer = document.createElement("div");
  const sloppyJoesTitle = document.createElement("p");
  sloppyJoesTitle.classList.add(
    "card-text",
    "text-light",
    "text-center",
    "display-5"
  );
  sloppyJoesTitle.innerText = "Sloppy Joes";
  const sloppyJoesDesc = document.createElement("p");
  sloppyJoesDesc.classList.add(
    "card-text",
    "text-light",
    "text-start",
    "display-6"
  );
  sloppyJoesDesc.innerText =
    "Juicy beef patty embraced by a tender bun, topped with fresh lettuce, ripe tomatoes, and savory condiments for a delightful burger experience.";

  const sloppyJoesHorizontalRule = document.createElement("hr");

  sloppyJoesContainer.appendChild(sloppyJoesTitle);
  sloppyJoesContainer.appendChild(sloppyJoesDesc);
  sloppyJoesContainer.appendChild(sloppyJoesHorizontalRule);
  sloppyJoesHorizontalRule.classList.add("custom-hr");

  bodyContainer.appendChild(chickenSandwhichContainer);
  bodyContainer.appendChild(hamburgerContainer);
  bodyContainer.appendChild(sloppyJoesContainer);
  // attach all child element of homeContent
  contentContainer.appendChild(titleContainer);
  contentContainer.appendChild(bodyContainer);

  return { contentContainer };
}
export default menuContent;
