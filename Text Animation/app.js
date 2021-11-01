const h1 = document.querySelector('h1');
const h3 = document.querySelector('h3');

h1.innerHTML = h1.textContent.replace(/\S/g,"<span class='char'>$&</span>");
h3.innerHTML = h3.textContent.replace(/\S/g,"<span class='char'>$&</span>");

// GSAP ANIMATION
let tl = gsap.timeline({ease: "back"});
    tl.from('.char',{y:50,opacity: 0, stagger: 0.1})