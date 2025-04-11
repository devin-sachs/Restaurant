export function renderHomePage() {
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
    
    const imagelink = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX_eA8ZErtv5Za3B6mQiuxFS89D-JhFQ9ngQ&s";
    
    
    contentBlock.classList.add("content-block");
    navBar.classList.add("navbar");
    contentBody.classList.add("content-body");
    headline.classList.add("headline");
    paragraphBody.classList.add("paragraph-body");

    homeButton.id = "homeButton";
    menuButton.id = "menuButton";
    aboutButton.id = "aboutButton";
    
    homeButton.innerText = "Home";
    menuButton.innerText = "Menu";
    aboutButton.innerText = "About";
    headline.innerText = "Vooni's Drive in Burgers and Fries";
    paragraphBody.innerText = "At Vooni's Burgers and Fries, we pride ourselves in providing delicious, fresh, and affordable meals to the community for people from all backgrounds to enjoy."; 
    
    burgerImage.src = imagelink;
    
    contentBlock.appendChild(navBar);
    
    navBar.appendChild(homeButton);
    navBar.appendChild(menuButton);
    navBar.appendChild(aboutButton);

    contentBody.appendChild(headline);
    contentBody.appendChild(burgerImage);
    contentBody.appendChild(paragraphBody);
    
    contentBlock.appendChild(contentBody);
    
    mainContent.appendChild(contentBlock);
}