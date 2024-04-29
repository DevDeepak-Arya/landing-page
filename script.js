// document.addEventListener("DOMContentLoaded", function() {
    const slideButton = document.getElementById("slide-in-button");
    const slideCard = document.getElementById("mobile-card");
    const overlay = document.getElementById("mobile-overlay");
    const mainmodal = document.getElementById("mobile-modal");
    // const menuTab = document.getElementById("menu-tab");
    // const categoriesTab = document.getElementById("categories-tab");
    const tabs =document.querySelectorAll('[data-tab-target]');
    const tabContents =document.querySelectorAll('[data-tab-content]');

    tabs.forEach(tab => {
        tab.addEventListener('click',()=>{
            const target =document.querySelector(tab.dataset.tabTarget);
            tabContents.forEach(tabContent=>{
                tabContent.classList.remove('active');
            })
            tabs.forEach(tab=>{
                tab.classList.remove('active');
            })
            tab.classList.add('active');
            target.classList.add('active');
        })
    })


    
    slideButton.addEventListener("click", function() {
        mainmodal.classList.toggle('active');
        overlay.classList.toggle('active');
        slideCard.classList.toggle("active");
    });
    overlay.addEventListener("click", function() {
        mainmodal.classList.toggle('active');
        overlay.classList.toggle('active');
        slideCard.classList.toggle("active");
    });

    window.addEventListener("scroll", function() {
        console.log(this.window.scrollY);
        var navbar = document.getElementById("header");
        if ( this.window.scrollY > 300) { // After scrolling 100vh
            console.log("check2");
            navbar.classList.add("header-fixed");
            navbar.classList.remove("style-absolute");
        } else {
            navbar.classList.remove("header-fixed");
            navbar.classList.add("style-absolute");
        }
    });
// });
