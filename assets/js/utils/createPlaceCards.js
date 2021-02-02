function createPlaceCards(place) {
  const p = createElement(
    "p",
    { classNames: ["cardDescription"] },
    document.createTextNode(place.description)
  );

  const h3 = createElement(
    "h3",
    { classNames: ["cardName"] },
    document.createTextNode(place.name || "")
  );

  const article = createElement(
    "article",
    { classNames: ["cardContainer"] },
    createImageWrapper(place),
    h3,
    p
  );

  return createElement("li", { classNames: ["cardWrapper"] }, article);
}