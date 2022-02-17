// Nav bar effects on scroll
    window.addEventListener("scroll" , function() {
        const header = document.querySelector("header")
        header.classList.toggle("sticky", window.scrollY > 0 )
    })
// Services Section Modal
    const serviceModals = document.querySelectorAll(".service-modal")
    const learnMoreBtns = document.querySelectorAll(".learn-more-btn")
    const modalCloseBtns = document.querySelectorAll(".modal-close-btn")

    let modal = function(modalClick){
        serviceModals[modalClick].classList.add("active");
    }

    learnMoreBtns.forEach((learnMoreBtns, i) => {
        learnMoreBtns.addEventListener("click", () => {
            modal(i);
        });
    });

    modalCloseBtns.forEach((modalCloseBtns) => {
        modalCloseBtns.addEventListener("click", () => {
            serviceModals.forEach((modalView) => {
                modalView.classList.remove('active');
            });
        });
    });

// Portfolio Section Modal
    const portfolioModals = document.querySelectorAll(".portfolio-model")
    const imgCards = document.querySelectorAll(".img-card")
    const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn")

    let portfolioModal = function(modalClick){
        portfolioModals[modalClick].classList.add("active");
    }

    imgCards.forEach((imgCard, i) => {
        imgCard.addEventListener("click", () => {
            portfolioModal(i);
        });
    });

    portfolioCloseBtns.forEach((portfolioCloseBtns) => {
        portfolioCloseBtns.addEventListener("click", () => {
            portfolioModals.forEach((portfolioModalView) => {
                portfolioModalView.classList.remove('active');
            });
        });
    });

// Our Clients - Swiper

// Dark Light Theme

// Scroll To Top Button

// Nav Menu Items On Page Scroll 

// Nav Menu Toggle 

// Responsive Nav Menu Toggle

// scroll reveal animations 