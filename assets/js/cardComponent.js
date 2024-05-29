export function Card({ cardTitle, cardDescription, imgUrl, imgAlt }) {
  return `
    <div class="card">
        <h2>${cardTitle}</h2>
        <p>${cardDescription}</p>
        <img src="${imgUrl}" alt="${imgAlt}">
    </div>
    `;
}
