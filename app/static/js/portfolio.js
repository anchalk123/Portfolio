// ===== SMOOTH SCROLL =====

document.querySelectorAll('.nav-links a').forEach(link => {

link.addEventListener('click', function(e) {

e.preventDefault();

const targetId = this.getAttribute("href");

const targetSection = document.querySelector(targetId);

window.scrollTo({
top: targetSection.offsetTop - 70,
behavior: "smooth"
});

});

});



// ===== ACTIVE NAVBAR LINK ON SCROLL =====

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 100;

if (scrollY >= sectionTop) {
current = section.getAttribute("id");
}

});

navLinks.forEach(link => {

link.classList.remove("active");

if (link.getAttribute("href") === "#" + current) {
link.classList.add("active");
}

});

});



// ===== CONTACT FORM SUCCESS MESSAGE =====

const form = document.querySelector(".contact-form");
const statusDiv = document.querySelector(".form-status");

if(form){

form.addEventListener("submit", function(){

if(statusDiv){

statusDiv.innerText = "Message sent successfully!";
statusDiv.classList.add("success");

}

});

}
