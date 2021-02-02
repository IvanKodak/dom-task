function createImageWrapper(place) {
  const { name, id } = place;

  const imageWrapper = document.createElement("div");
  imageWrapper.setAttribute("id", `wrapper${id}`);
  imageWrapper.classList.add("cardImageWrapper");
  imageWrapper.style.backgroundColor = stringToColour(name);

  const initials = document.createElement("div");
  initials.classList.add("initials");
  initials.append(document.createTextNode(name.trim().charAt(0) || ""));

  createImage(place, { className: "cardImage" });

  imageWrapper.append(initials);
  return imageWrapper;
}
