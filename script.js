document.addEventListener("DOMContentLoaded", function(){

let index = 0;
let slides = document.querySelectorAll(".slide");

function showSlide(i){
slides.forEach(slide => slide.classList.remove("active"));
slides[i].classList.add("active");
}

window.nextSlide = function(){
index = (index + 1) % slides.length;
showSlide(index);
}

window.prevSlide = function(){
index = (index - 1 + slides.length) % slides.length;
showSlide(index);
}
document.addEventListener("DOMContentLoaded", function(){

let index = 0;
let slides = document.querySelectorAll(".slide");

function showSlide(i){
slides.forEach(slide => slide.classList.remove("active"));
slides[i].classList.add("active");
}

window.nextSlide = function(){
index = (index + 1) % slides.length;
showSlide(index);
}

window.prevSlide = function(){
index = (index - 1 + slides.length) % slides.length;
showSlide(index);
}

});setInterval(nextSlide, 2500);

});

let music = document.getElementById("bgm");
let btn = document.getElementById("musicBtn");
let isPlaying = false;

function toggleMusic(){
if(!isPlaying){
music.play();
btn.innerHTML = "⏸";
isPlaying = true;
}else{
music.pause();
btn.innerHTML = "▶";
isPlaying = false;
}
}