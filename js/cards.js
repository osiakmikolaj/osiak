const cardsContainer = document.querySelector("#section-2");
let openCardArray = [];
let windowWidth = window.innerWidth;

// cards data
const cardData = {
    1: {
        title: "zalasek.pl",
        text: `The zalasek.pl website is about the Zalasek resort, located in the Beskid Wyspowy mountains. 
        It was built using the Bootstrap framework, which provides a responsive layout that adapts to various devices.`,
        links: `<a class="project-link" href="https://www.zalasek.pl/" target="_blank">zalasek.pl</a></br>
        <a class="project-link" href="https://github.com/osiakmikolaj/zalasek" target="_blank">Github</a>`,
        image: "assets/zalasek_view.png",
    },
    2: {
        title: "Survival Game",
        text: "A 2D Shooter made with HTML5 Canvas and JavaScript.",
        links: `<a class="project-link" href="https://survivalgame.pages.dev/" target="_blank">survivalgame.pages.dev</a></br>
        <a class="project-link" href="https://github.com/osiakmikolaj/SurvivalGame" target="_blank">Github</a>`,
        image: "assets/game_view.png",
    },
    3: {
        title: "TV Show Search",
        text: "A webiste for searching images of TV series.",
        links: `<a class="project-link" href="https://searchtvshows.pages.dev/" target="_blank">searchtvshows.pages.dev</a></br> 
        <a class="project-link" href="https://github.com/osiakmikolaj/searchTvShows" target="_blank">Github</a>`,
        image: "assets/search_view.png",
    },
    4: {
        title: "Portfolio",
        text: "The very site you're exploring right now! I designed it with mobile devices in mind, so you can seamlessly browse my work and experience whether you're on your phone, tablet, or computer.",
        links: `<a class="project-link" href="https://www.osiak.dev/" target="_blank">osiak.dev</a></br> 
        <a class="project-link" href="https://github.com/osiakmikolaj/osiak" target="_blank">Github</a>`,
        image: "assets/portfolio_view.png",
    },
};

// close / open all cards
function openCloseCards(windowWidth) {
    if (windowWidth > 682) {
        openCardArray = [];
        const cards = cardsContainer.querySelectorAll(".card");
        cards.forEach((card) => {
            const cardId = card.dataset.cardId;
            const data = cardData[cardId];
            card.innerHTML = `
                <div class="card-title">${data.title}</div>
                <div class="card-text">
                    <div class="project-about">${data.text}</div>
                    <div class="project-links">${data.links}</div>
                </div>
                <div class="card-pictures">
                    <img src="${data.image}" alt="${data.title} image">
                </div>
            `;
        });
    } else if (windowWidth < 683) {
        const cards = cardsContainer.querySelectorAll(".card");
        cards.forEach((card) => {
            const cardId = card.dataset.cardId;
            const data = cardData[cardId];
            card.innerHTML = `<div class="card-title"><span class="material-symbols-outlined"> keyboard_arrow_right </span>${data.title}</div>`;
        });
    }
}

// open / close card
function openCloseCard(event) {
    if (windowWidth > 682) return;

    const card = event.target.closest(".card");
    if (card) {
        const cardId = card.dataset.cardId;
        const data = cardData[cardId];
        const isTitleClicked = event.target.closest(".card-title");

        if (isTitleClicked && openCardArray.includes(cardId)) {
            card.innerHTML = `<div class="card-title"><span class="material-symbols-outlined"> keyboard_arrow_right </span>${data.title}</div>`;
            openCardArray = openCardArray.filter((id) => id !== cardId);
        } else if (!openCardArray.includes(cardId)) {
            openCardArray.push(cardId);
            card.innerHTML = `
                <div class="card-title"><span class="material-symbols-outlined"> keyboard_arrow_down </span>${data.title}</div>
                <div class="card-text">
                    <div class="project-about">${data.text}</div>
                    <div class="project-links">${data.links}</div>
                </div>
                <div class="card-pictures">
                    <img src="${data.image}" alt="${data.title} image">
                </div>
            `;
        }
    }
}

// all cards
document.addEventListener("DOMContentLoaded", () => {
    openCloseCards(windowWidth);
});

// close cards only if window width changes
window.addEventListener("resize", () => {
    const newWindowWidth = window.innerWidth;
    if (newWindowWidth !== windowWidth) {
        windowWidth = newWindowWidth;
        openCloseCards(windowWidth);
    }
});

// single card
cardsContainer.addEventListener("click", (event) => {
    if (event.target.closest(".card")) {
        openCloseCard(event);
    }
});
