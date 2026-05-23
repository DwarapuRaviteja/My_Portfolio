/* =========================
   BUTTON SCROLL
========================= */

function scrollToProjects(){

    document.getElementById('projects').scrollIntoView({
        behavior:'smooth'
    });

}

/* =========================
   SCROLL REVEAL
========================= */

window.addEventListener('scroll', reveal);

function reveal(){

    let reveals = document.querySelectorAll('.reveal');

    for(let i = 0; i < reveals.length; i++){

        let windowHeight = window.innerHeight;

        let revealTop = reveals[i].getBoundingClientRect().top;

        let revealPoint = 150;

        if(revealTop < windowHeight - revealPoint){

            reveals[i].classList.add('active');

        }

    }

}

reveal();

/* =========================
   3D CARD EFFECT
========================= */

const cards = document.querySelectorAll('.card');

cards.forEach(card => {

    card.addEventListener('mousemove', (e) => {

        let rect = card.getBoundingClientRect();

        let x = e.clientX - rect.left;

        let y = e.clientY - rect.top;

        let centerX = rect.width / 2;

        let centerY = rect.height / 2;

        let rotateX = ((y - centerY) / 15);

        let rotateY = ((centerX - x) / 15);

        card.style.transform = `
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.05)
        `;

    });

    card.addEventListener('mouseleave', () => {

        card.style.transform = `
            rotateX(0deg)
            rotateY(0deg)
            scale(1)
        `;

    });

});

/* =========================
   PROJECT OPEN ANIMATION
========================= */

function toggleProject(project){

    const allProjects =
    document.querySelectorAll('.project-card');

    allProjects.forEach(item => {

        if(item !== project){

            item.classList.remove('active');

        }

    });

    project.classList.toggle('active');

}

/* =========================
   ACHIEVEMENT 3D EFFECT
========================= */

const achievementBoxes =
document.querySelectorAll('.achievement-box');

achievementBoxes.forEach(box => {

    box.addEventListener('mousemove', (e) => {

        let rect = box.getBoundingClientRect();

        let x = e.clientX - rect.left;

        let y = e.clientY - rect.top;

        let centerX = rect.width / 2;

        let centerY = rect.height / 2;

        let rotateX = ((y - centerY) / 18);

        let rotateY = ((centerX - x) / 18);

        box.style.transform = `
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.08)
        `;

    });

    box.addEventListener('mouseleave', () => {

        box.style.transform = `
            rotateX(0deg)
            rotateY(0deg)
            scale(1)
        `;

    });

});

/* =========================
   NAVBAR ACTIVE LINK
========================= */

const sections =
document.querySelectorAll('section');

const navLinks =
document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {

    let current = '';

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 200;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute('id');

        }

    });

    navLinks.forEach(link => {

        link.classList.remove('active-link');

        if(
            link.getAttribute('href')
            .includes(current)
        ){

            link.classList.add('active-link');

        }

    });

});

/* =========================
   PROJECT IMAGE HOVER
========================= */

const projectImages =
document.querySelectorAll('.project-image img');

projectImages.forEach(image => {

    image.addEventListener('mousemove', (e) => {

        let rect = image.getBoundingClientRect();

        let x = e.clientX - rect.left;

        let y = e.clientY - rect.top;

        let moveX =
        (x - rect.width / 2) / 30;

        let moveY =
        (y - rect.height / 2) / 30;

        image.style.transform = `
            scale(1.05)
            translate(${moveX}px, ${moveY}px)
        `;

    });

    image.addEventListener('mouseleave', () => {

        image.style.transform = `
            scale(1)
            translate(0px,0px)
        `;

    });

});

/* =========================
   BUTTON GLOW EFFECT
========================= */

const buttons =
document.querySelectorAll(
'.project-buttons a, .hero-right button'
);

buttons.forEach(button => {

    button.addEventListener('mouseenter', () => {

        button.style.boxShadow = `
        0 0 20px rgba(0,240,255,0.6),
        0 0 40px rgba(123,47,247,0.4)
        `;

    });

    button.addEventListener('mouseleave', () => {

        button.style.boxShadow = 'none';

    });

});