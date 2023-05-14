let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () =>{
   sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            document.querySelector('header nav a[href*='+ id +']').classList.add('active')
            });
        };
    });
let header =document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100)};

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


    let darkModeIcon = document.querySelector('#darkMode-icon');
    
darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});

ScrollReveal().reveal('.home-content, .heading', {origin:'top'});
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about img',{origin:'left'});
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content',{origin:'right'});

const form = document.querySelector("form");
const statusTxt = form.querySelector(".status-text span");

function sendMessage(e) {
  e.preventDefault();
  statusTxt.style.color = "red";
  statusTxt.style.display = "block";
  window.location.href = "index.html";
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "message.php", true);
  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let response = xhr.response;
      if (response.indexOf("Email and message fields are required!") != -1 || response.indexOf("Enter a valid email address!") != -1 || response.indexOf("Sorry, failed to send your message!") != -1) {
        statusTxt.style.color = "red";
      } else {
        form.reset();
        setTimeout(() => {
          statusTxt.style.display = "none";
        }, 3000);
      }
      statusTxt.innerText = response;
    }
  };
  let formData = new FormData(form);
  xhr.send(formData);
}

form.addEventListener('submit', sendMessage);