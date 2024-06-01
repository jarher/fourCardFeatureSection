export function Card({
  cardTitle,
  cardDescription,
  imgUrl,
  imgAlt,
  cardClass,
}) {
  return `
    <div class="card ${cardClass}">
        <h2>${cardTitle}</h2>
        <p>${cardDescription}</p>
        <img src="${imgUrl}" alt="${imgAlt}">
    </div>
    `;
}
