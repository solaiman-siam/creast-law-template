

$(document).ready(function(){


  
  // ------------------ why choose us conter starts -----------------//
    $(".why-choose-us-counter-wrapper").each(function () {
      var $this = $(this);
      $this.on("inview", function (event, visible) {
        if (visible) {
          const smCounters = document.querySelectorAll('.sm-counter')
          const speed = 1000;
          
          
          smCounters?.forEach( counter => {
            const animate = () => {
               const value = +counter.getAttribute('limit');
               const data = +counter.innerText;
              
               const time = value / speed;
              if(data < value) {
                   counter.innerText = Math.ceil(data + time);
                   setTimeout(animate, 1);
                 }else{
                   counter.innerText = value;
                 }
              
            }
            
            animate();
          });
    
        }
      });
    });


// ------------------ why choose us conter starts -----------------//


// ------------------ meet out legal experts slider starts -----------//

$('.meet-our-legal-experts-card-wrapper .owl-carousel').owlCarousel({
  loop:true,
  margin:32,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      700:{
          items:2
      },
      1000:{
          items:3
      }
  }, 
  navText : [`<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <path d="M11.1641 21.082L4.0824 14.0004L11.1641 6.9187" stroke="#BE8A37" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M23.9141 14L4.27906 14" stroke="#BE8A37" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,`<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <path d="M16.8359 6.91797L23.9176 13.9996L16.8359 21.0813" stroke="#BE8A37" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.08594 14H23.7209" stroke="#BE8A37" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`],
})

// ------------------ meet out legal experts slider end --------------//



// ------------------ testimonial slider  starts -----------//

$('.testimonial-slider-wrapper .owl-carousel').owlCarousel({
  loop:true,
  margin:32,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }, 
  navText : [`<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <path d="M11.1641 21.082L4.0824 14.0004L11.1641 6.9187" stroke="#F4F5F1" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M23.9141 14L4.27906 14" stroke="#F4F5F1" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,`<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <path d="M16.8359 6.91797L23.9176 13.9996L16.8359 21.0813" stroke="#F4F5F1" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.08594 14H23.7209" stroke="#F4F5F1" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`],
})

// ------------------ testimonial slider ends --------------//


// =========================== nahian js starts
//  meet our legal experts js starts //


// function itemsIcon(){

//   let toggleButtons = document.querySelectorAll(".nr--team--memberinner--item--img-logo--plus");
//   let contentDivs = document.querySelectorAll(".nr--team--memberinner--item--img-logos");
//   let icons = document.querySelectorAll(".nr--plus--icon")
   
//   function inner(){
//     icons.forEach((itemms, i)=>{
//       if(contentDivs[i].style.width === '0px' || contentDivs[i].style.width === ''){
//         itemms.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
//           <path d="M35 20C35 20.3315 34.8683 20.6495 34.6339 20.8839C34.3995 21.1183 34.0815 21.25 33.75 21.25H6.25C5.91848 21.25 5.60054 21.1183 5.36612 20.8839C5.1317 20.6495 5 20.3315 5 20C5 19.6685 5.1317 19.3505 5.36612 19.1161C5.60054 18.8817 5.91848 18.75 6.25 18.75H33.75C34.0815 18.75 34.3995 18.8817 34.6339 19.1161C34.8683 19.3505 35 19.6685 35 20Z" fill="white"/>
//           </svg>`
//       }else{
//         itemms.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
//             <path d="M35 20C35 20.3315 34.8683 20.6495 34.6339 20.8839C34.3995 21.1183 34.0815 21.25 33.75 21.25H21.25V33.75C21.25 34.0815 21.1183 34.3995 20.8839 34.6339C20.6495 34.8683 20.3315 35 20 35C19.6685 35 19.3505 34.8683 19.1161 34.6339C18.8817 34.3995 18.75 34.0815 18.75 33.75V21.25H6.25C5.91848 21.25 5.60054 21.1183 5.36612 20.8839C5.1317 20.6495 5 20.3315 5 20C5 19.6685 5.1317 19.3505 5.36612 19.1161C5.60054 18.8817 5.91848 18.75 6.25 18.75H18.75V6.25C18.75 5.91848 18.8817 5.60054 19.1161 5.36612C19.3505 5.1317 19.6685 5 20 5C20.3315 5 20.6495 5.1317 20.8839 5.36612C21.1183 5.60054 21.25 5.91848 21.25 6.25V18.75H33.75C34.0815 18.75 34.3995 18.8817 34.6339 19.1161C34.8683 19.3505 35 19.6685 35 20Z" fill="white"/>
//             </svg>`;
//       }
//     })
  
//   }
  
  
//   toggleButtons.forEach((button, index) => {
    
//       button?.addEventListener('click', function() {
//         // Toggle visibility of corresponding content div
//         if (contentDivs[index].style.width === '0px' || contentDivs[index].style.width === '') {
//           contentDivs[index].style.width = '50%'; 
//           contentDivs[index].style.visibility = 'visible';
//           inner()
          
//         } else {
//           contentDivs[index].style.width = '0px';
//           contentDivs[index].style.visibility = 'hidden';
//           // inner()
//         }
//       });
      
  
//     // Ensure content is initially hidden
//     contentDivs[index].style.width = '0';
//     contentDivs[index].style.visibility = 'hidden';
  
//     // Trigger reflow to apply initial styles and allow transition to take effect
//     setTimeout(() => {
//       contentDivs[index].style.transition = 'width 0.3s ease, visibility 0.3s ease';
//     }, 100); // Delay to ensure transition is applied after initial hiding
//   });

// }

// itemsIcon()



function itemsIcon() {
  const toggleButtons = document.querySelectorAll(".nr--team--memberinner--item--img-logo--plus");
  const contentDivs = document.querySelectorAll(".nr--team--memberinner--item--img-logos");
  const icons = document.querySelectorAll(".nr--plus--icon");

  // Function to update the icon based on the content div's visibility
  function updateIcon(index) {
    if (contentDivs[index].classList.contains('hidden')) {
      if(icons) {
        icons[index].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M35 20C35 20.3315 34.8683 20.6495 34.6339 20.8839C34.3995 21.1183 34.0815 21.25 33.75 21.25H21.25V33.75C21.25 34.0815 21.1183 34.3995 20.8839 34.6339C20.6495 34.8683 20.3315 35 20 35C19.6685 35 19.3505 34.8683 19.1161 34.6339C18.8817 34.3995 18.75 34.0815 18.75 33.75V21.25H6.25C5.91848 21.25 5.60054 21.1183 5.36612 20.8839C5.1317 20.6495 5 20.3315 5 20C5 19.6685 5.1317 19.3505 5.36612 19.1161C5.60054 18.8817 5.91848 18.75 6.25 18.75H18.75V6.25C18.75 5.91848 18.8817 5.60054 19.1161 5.36612C19.3505 5.1317 19.6685 5 20 5C20.3315 5 20.6495 5.1317 20.8839 5.36612C21.1183 5.60054 21.25 5.91848 21.25 6.25V18.75H33.75C34.0815 18.75 34.3995 18.8817 34.6339 19.1161C34.8683 19.3505 35 19.6685 35 20Z" fill="white"/>
      </svg>`;
      }
    } else {
      icons[index].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M35 20C35 20.3315 34.8683 20.6495 34.6339 20.8839C34.3995 21.1183 34.0815 21.25 33.75 21.25H6.25C5.91848 21.25 5.60054 21.1183 5.36612 20.8839C5.1317 20.6495 5 20.3315 5 20C5 19.6685 5.1317 19.3505 5.36612 19.1161C5.60054 18.8817 5.91848 18.75 6.25 18.75H33.75C34.0815 18.75 34.3995 18.8817 34.6339 19.1161C34.8683 19.3505 35 19.6685 35 20Z" fill="white"/>
      </svg>`;
    }
  }

  // Function to hide all content divs initially
  function hideAllContentDivs() {
    contentDivs.forEach((contentDiv, index) => {
      contentDiv.classList.add('hidden');
      updateIcon(index);
    });
  }

  // Click event handling for toggle buttons
  toggleButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
      contentDivs[index].classList.toggle('hidden');
      updateIcon(index);
    });
  });

  // Initially hide all content divs
  hideAllContentDivs();
}

itemsIcon();


//   meet our legal experts js ends 



// ================================ nahian js




$(document).ready(function(){
  // nice select
  $("select").niceSelect();
})



  
})




$(".why-choose-us-counter-wrapper").each(function () {
  var $this = $(this);
  $this.on("inview", function (event, visible) {
    if (visible) {
      const smCounters = document.querySelectorAll('.sm-counter')
      const speed = 1000;
      
      
      smCounters?.forEach( counter => {
        const animate = () => {
           const value = +counter.getAttribute('limit');
           const data = +counter.innerText;
          
           const time = value / speed;
          if(data < value) {
               counter.innerText = Math.ceil(data + time);
               setTimeout(animate, 1);
             }else{
               counter.innerText = value;
             }
          
        }
        animate();
      });

    }
  });
});

const navIconBtn = document.getElementById('mobile-nav-icon-btn');
const navCloseBtn = document.getElementById('mobile-nav-close-btn');
const navContainer = document.getElementById('sm-nav-mobile-container-wrapper');

if (navIconBtn && navContainer) {
  navIconBtn.addEventListener('click', () => {
    navContainer.style.transform = 'translateX(0)'; // Open the menu
  });
}

if (navCloseBtn && navContainer) {
  navCloseBtn.addEventListener('click', () => {
    navContainer.style.transform = 'translateX(-100%)'; // Close the menu
  });
}