// cards
const cardsContainer = document.querySelector("#section-2");
let openCardArray = [];
let windowWidth = window.innerWidth;

const cardData = {
    1: {
        title: "zalasek.pl",
        text: `The zalasek.pl website is about the Zalasek resort, located in the Beskid Wyspowy mountains. 
        It was built using the Bootstrap framework, which provides a responsive layout that adapts to various devices.`,
        links: `<a href="https://zalasek.pl/" target="_blank">https://zalasek.pl/</a> 
        <a href="https://github.com/osiakmikolaj/zalasek" target="_blank">Code at Github</a>`,
        image: "assets/zalasek_view.png",
    },
    2: {
        title: "Test",
        text: "Treść karty 2",
        links: "Linki do karty 2",
        image: "assets/test.png",
    },
    3: {
        title: "Test",
        text: "Treść karty 3",
        links: "Linki do karty 1",
        image: "assets/test.png",
    },
    4: {
        title: "Test",
        text: "Treść karty 4",
        links: "Linki do karty 1",
        image: "assets/test.png",
    },
};

function openCloseCards(windowWidth) {
    if (windowWidth > 683) {
        openCardArray = [];
        const cards = cardsContainer.querySelectorAll(".card");
        cards.forEach((card) => {
            const cardId = card.dataset.cardId;
            const data = cardData[cardId];
            card.innerHTML = `
                <div class="card-title">${data.title}</div>
                <div class="card-text">
                    <p>${data.text}</p>
                    <p>${data.links}</p>
                </div>
                <div class="card-pictures">
                    <img src="${data.image}">
                </div>
            `;
        });
    } else if (windowWidth <= 683) {
        const cards = cardsContainer.querySelectorAll(".card");
        cards.forEach((card) => {
            const cardId = card.dataset.cardId;
            const data = cardData[cardId];
            card.innerHTML = `<div class="card-title"><span class="material-symbols-outlined"> keyboard_arrow_right </span>${data.title}</div>`;
        });
    }
}

function openCloseCard(event) {
    if (windowWidth > 683) return;

    const card = event.target.closest(".card");
    if (card) {
        const cardId = card.dataset.cardId;
        const data = cardData[cardId];
        const isTitleClicked = event.target.classList.contains("card-title");

        if (isTitleClicked && openCardArray.includes(cardId)) {
            card.innerHTML = `<div class="card-title"><span class="material-symbols-outlined"> keyboard_arrow_right </span>${data.title}</div>`;
            openCardArray = openCardArray.filter((id) => id !== cardId);
        } else if (!openCardArray.includes(cardId)) {
            openCardArray.push(cardId);
            card.innerHTML = `
                <div class="card-title"><span class="material-symbols-outlined"> keyboard_arrow_down </span>${data.title}</div>
                <div class="card-text">
                    <p>${data.text}</p>
                    <p>${data.links}</p>
                </div>
                <div class="card-pictures">
                    <img src="${data.image}">
                </div>
            `;
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    openCloseCards(windowWidth);
});

window.addEventListener("resize", () => {
    windowWidth = window.innerWidth;
    openCloseCards(windowWidth);
});

cardsContainer.addEventListener("click", (event) => {
    openCloseCard(event);
});
