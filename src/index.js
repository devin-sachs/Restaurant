import "./styles.css";
import { renderHomePage } from "./home";
import { renderMenuPage } from "./menu";

function clearPageContent(){
    const mainContent = document.querySelector("#content"); 
    while (mainContent.firstChild) {
        mainContent.removeChild(mainContent.firstChild);
    }
}

function changePage(){

    const homeButton = document.querySelector("#homeButton");
    const menuButton = document.querySelector("#menuButton");
    const aboutButton = document.querySelector("#aboutButton");

    homeButton.addEventListener("click", function(){
        clearPageContent();
        renderHomePage();
        changePage();
    });

    menuButton.addEventListener("click", function(){
        clearPageContent();
        renderMenuPage();
        changePage();
    });

    aboutButton.addEventListener("click", function(){
        clearPageContent();
        renderAboutPage();
        changePage();
    });

    

}

renderHomePage();
changePage();

