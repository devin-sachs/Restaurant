export function renderAboutPage(){
        const mainContent = document.querySelector("#content");
    
        const contentBlock = document.createElement("div");
        const navBar = document.createElement("div");
        const homeButton = document.createElement("button");
        const menuButton = document.createElement("button");
        const aboutButton = document.createElement("button");
        const contentBody = document.createElement("div");
        const headline = document.createElement("h2");
        const burgerImage = document.createElement("img");
        const paragraphContainer = document.createElement("div");
        const paragraphBody = document.createElement("div");
        const paragraphBodyTwo = document.createElement("div");
        const paragraphBodyThree = document.createElement("div");
        const paragraphBodyFour = document.createElement("div");
        const paragraphBodyFive = document.createElement("div");
        
        const imagelink = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX_eA8ZErtv5Za3B6mQiuxFS89D-JhFQ9ngQ&s";
        
        
        contentBlock.classList.add("content-block");
        navBar.classList.add("navbar");
        contentBody.classList.add("content-body");
        headline.classList.add("headline");
        paragraphContainer.classList.add("paragraph-container");
        paragraphBody.classList.add("paragraph-body");
        paragraphBodyTwo.classList.add("paragraph-body");
        paragraphBodyThree.classList.add("paragraph-body");
        paragraphBodyFour.classList.add("paragraph-body");
        paragraphBodyFive.classList.add("paragraph-body");
    
        homeButton.id = "homeButton";
        menuButton.id = "menuButton";
        aboutButton.id = "aboutButton";
        
        homeButton.innerText = "Home";
        menuButton.innerText = "Menu";
        aboutButton.innerText = "About";
        headline.innerText = "About";
        paragraphBody.innerText = "Welcome to Vooni’s Burgers and Fries—where big flavors, fresh ingredients, and feel-good vibes come together under one roof.";

        paragraphBodyTwo.innerText = "Founded with a passion for juicy burgers, crispy fries, and good times, Vooni’s isn’t just another burger joint. We're your neighborhood go-to spot for handcrafted burgers made with 100% real beef (or plant-based if that’s your jam), golden fries cooked to crispy perfection, and sauces that’ll make your taste buds dance.";  

        paragraphBodyThree.innerText = "At Vooni’s, we believe food should be fun, fast, and full of flavor. Whether you’re grabbing a quick lunch, chilling with friends after work, or bringing the whole crew for a weekend bite, we’ve got something for everyone—classic combos, creative twists, and indulgent treats. "

        paragraphBodyFour.innerText = "We’re proud to serve up food that’s fresh, never frozen, and made to order just the way you like it. And we keep it real with a side of good vibes, friendly faces, and a dash of nostalgia. "

        paragraphBodyFive.innerText = "So come on in, pull up a chair (or a booth), and let us serve you something delicious. Vooni’s Burgers and Fries—Your new favorite craving.";
        
        burgerImage.src = imagelink;
        
        contentBlock.appendChild(navBar);
        
        navBar.appendChild(homeButton);
        navBar.appendChild(menuButton);
        navBar.appendChild(aboutButton);

        paragraphContainer.appendChild(paragraphBody);
        paragraphContainer.appendChild(paragraphBodyTwo);
        paragraphContainer.appendChild(paragraphBodyThree);
        paragraphContainer.appendChild(paragraphBodyFour);
        paragraphContainer.appendChild(paragraphBodyFive);
    
        contentBody.appendChild(headline);
        contentBody.appendChild(burgerImage);

        contentBody.appendChild(paragraphContainer);
   
        
        contentBlock.appendChild(contentBody);
        
        mainContent.appendChild(contentBlock);
}