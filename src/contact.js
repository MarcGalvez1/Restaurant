function contactContent() {
  //Create main content container
  const contentContainer = document.createElement("div");
  contentContainer.classList.add(
    "card",
    "custom-card",
    "mx-auto",
    "mt-5",
    "px-4"
  );
  contentContainer.id = "contact";
  //Create title
  const titleContainer = document.createElement("h1");
  titleContainer.classList.add("card-header", "text-light", "mx-auto", "h1");
  titleContainer.innerText = "Contact";

  // Create the card body
  const bodyContainer = document.createElement("div");
  bodyContainer.classList.add("card-body", "mx-auto");

  // Create contact info
  const phoneTitle = document.createElement("h1");
  phoneTitle.classList.add(
    "card-text",
    "text-light",
    "text-center",
    "display-5"
  );
  phoneTitle.innerText = "Phone";

  const phoneNum = document.createElement("p");
  phoneNum.classList.add("card-text", "text-light", "text-center", "display-6");
  phoneNum.innerText = "(123) 456 - 7890";

  const locationTitle = document.createElement("h1");
  locationTitle.classList.add(
    "card-text",
    "text-light",
    "text-center",
    "display-5"
  );
  locationTitle.innerText = "Location";

  const locationAddr = document.createElement("p");
  locationAddr.classList.add(
    "card-text",
    "text-light",
    "text-center",
    "display-6"
  );
  locationAddr.innerText = "Somewhere in the New World";

  // append children of body container
  bodyContainer.appendChild(phoneTitle);
  bodyContainer.appendChild(phoneNum);
  bodyContainer.appendChild(locationTitle);
  bodyContainer.appendChild(locationAddr);

  // attach all child element of homeContent
  contentContainer.appendChild(titleContainer);
  contentContainer.appendChild(bodyContainer);

  return { contentContainer };
}
export default contactContent;
