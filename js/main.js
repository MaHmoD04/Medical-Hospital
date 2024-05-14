const barBtn = document.querySelector(".bar");
const list = document.querySelector(".bottom-header");

barBtn.addEventListener('click', function(){
  list.classList.toggle('show-list');
});


// AOS Library
AOS.init({
  once: true,
  offset: 70
});

