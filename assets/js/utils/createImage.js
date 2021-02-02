
function createImage({ name, profilePicture, id }, { className }) {
  const img = document.createElement("img");
  img.classList.add(className);
  img.dataset.id = id;
  img.setAttribute("alt", name);
  img.setAttribute("src", profilePicture);
  img.addEventListener("error", handleImageError);
  img.addEventListener("load", handleImageLoad);
  return img;
}

function handleImageError({ target }) {
  target.remove();
}

function handleImageLoad({
  target,
  target: {
    dataset: { id },
  },
}) {
  document.getElementById(`wrapper${id}`).append(target);
}
