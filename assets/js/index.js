import { Card } from "./cardComponent.js";
import { getData } from "./getData.js";

(async function () {
  const cardsData = await getData();

  const cardsTemplates = cardsData.reduce(
    (prev, next) => (prev += Card(next)),
    ""
  );
  document.querySelector(".cards-container").innerHTML = cardsTemplates;
})();
