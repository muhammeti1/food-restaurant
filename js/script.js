// carousel

    const carousel = new bootstrap.Carousel(document.querySelector('#carouselExample'), {
    interval: 3000, // Slayt değişim aralığı (ms)
    pause:false,
  });
  

  // navbar js code
window.addEventListener("DOMContentLoaded", event => {
  var navbarMobile=function(){
      const nCollapsible=document.body.querySelector("#mainNavbar");
      if(!nCollapsible){
          return;
      }
      if(window.scrollY === 0){
          nCollapsible.classList.remove("navbar-mobile");
      }else{
          nCollapsible.classList.add("navbar-mobile");
      }
  };
  navbarMobile();
  document.addEventListener("scroll",navbarMobile);
  const myNavbar=document.body.querySelector("#mainNavbar");
  if(myNavbar){
      new bootstrap.ScrollSpy(document.body,{
          target:"#mainNavbar",
          offset:74,
      });
  }
});
var BtnCanvas  = document.querySelectorAll(".btn-close-canvas");
for( let i = 0; i < BtnCanvas.length; i++){
  BtnCanvas[i].addEventListener("click", function(){
      document.querySelector("[data-bs-dismiss='offcanvas']").click();
  });
}

// counter
var counters = document.querySelectorAll('.counter');

function countUp(element) {
  var target = parseInt(element.getAttribute('data-target'));
  var duration = 1200; // Animasyon süresi (ms)
  var interval = 10; // Her aralıkta bir artış

  var step = target / (duration / interval);
  var current = 0;

  var timer = setInterval(function () {
    current += step;
    element.textContent = Math.round(current);

    if (current >= target) {
      element.textContent = target + "+";
      clearInterval(timer);
    }
  }, interval);
}

counters.forEach(function (counter) {
  countUp(counter);
});


// touch carousel


