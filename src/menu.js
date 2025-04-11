export function renderMenuPage() {
    const mainContent = document.querySelector("#content");

    const contentBlock = document.createElement("div");
  
    const navBar = document.createElement("div");
    const homeButton = document.createElement("button");
    const menuButton = document.createElement("button");
    const aboutButton = document.createElement("button");
    const contentBody = document.createElement("div");
    const headline = document.createElement("h2");
    const burgerImage = document.createElement("img");
    const paragraphBody = document.createElement("div");
    const menuBurgers = document.createElement("div");
    const menuBurgerHeader = document.createElement("h3");
    const menuSides = document.createElement("div");
    const menuSidesHeader = document.createElement("h3");
    const menuDrinks = document.createElement("div");
    const menuDrinksHeader = document.createElement("h3");

    const burgers = [
        "House Special Burg",
        "Beet Veggie Burg",
        "Fifteen Minutes Or its Free",
        "Spicy Crispy Chicken"
    ];
    const sides = [
        "Fries",
        "Sweet Potato Fries",
        "Onion Rings",
    ];
    const drinks = [
        "Cola",
        "Rootbeer",
        "Lemonade",
        "Shakes",
        "Floats",
    ];

    
    
    const imagelink = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX_eA8ZErtv5Za3B6mQiuxFS89D-JhFQ9ngQ&s";
    
    
    contentBlock.classList.add("content-block");
    navBar.classList.add("navbar");
 
    contentBody.classList.add("content-body");
    headline.classList.add("headline");
    paragraphBody.classList.add("paragraph-body");
    menuBurgers.classList.add("burgers");
    menuSides.classList.add("sides");
    menuDrinks.classList.add("drinks");

    homeButton.id = "homeButton";
    menuButton.id = "menuButton";
    aboutButton.id = "aboutButton";
    
    homeButton.innerText = "Home";
    menuButton.innerText = "Menu";
    aboutButton.innerText = "About";
    headline.innerText = "Menu";
    menuBurgerHeader.innerText = "Burgers";
    menuSidesHeader.innerText = "Sides";
    menuDrinksHeader.innerText = "Drinks";

    burgerImage.src = imagelink;
    
    contentBlock.appendChild(navBar);
    
    navBar.appendChild(homeButton);
    navBar.appendChild(menuButton);
    navBar.appendChild(aboutButton);

    contentBody.appendChild(headline);
    contentBody.appendChild(burgerImage);

    menuBurgers.appendChild(menuBurgerHeader);
    menuSides.appendChild(menuSidesHeader);
    menuDrinks.appendChild(menuDrinksHeader);

    contentBody.appendChild(menuBurgers);
    contentBody.appendChild(menuSides);
    contentBody.appendChild(menuDrinks);

    burgers.forEach(function(burger) {
        const currentBurg = document.createElement("div");
        currentBurg.textContent = burger;
        menuBurgers.appendChild(currentBurg);
    });

    sides.forEach(function(side) {
        const currentSide = document.createElement("div");
        currentSide.textContent = side;
        menuSides.appendChild(currentSide);
    });

    drinks.forEach(function(drink) {
        const currentDrink = document.createElement("div");
        currentDrink.textContent = drink;
        menuDrinks.appendChild(currentDrink);
    });
    
    contentBlock.appendChild(contentBody);
    
    mainContent.appendChild(contentBlock);
}