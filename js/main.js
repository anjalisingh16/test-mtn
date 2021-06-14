


       /*new nav  */
      function classToggle() {
        const navs = document.querySelectorAll('.Nav-Items')
        
        navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
      }
      
       document.querySelector('.Navbar__Link-toggle')
       .addEventListener('click', classToggle);

// top nav end 




//swiper  js 

var swiper = new Swiper(".mySwiper", {
  // slidesPerView: 'auto',       
  slidesPerView: 5,
    spaceBetween: 60,
    centeredSlides:true,         
    grabCursor: true,
    slidesPerGroup: 5,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
/**/

