function loadHTML(selector, url) {
  fetch(url)
    .then(res => res.text())
    .then(html => {
      document.querySelector(selector).innerHTML = html;
      onDynamicContentLoaded(url);
    });
}

function onDynamicContentLoaded(url) {
  initScript();
}


  
  function handleRoute() {
    const page = window.location.hash.replace('#', '') || 'home'; // Default to 'home' if no hash
    loadHTML('#content', `pages/${page}.html`);
    const buttons = document.querySelectorAll('nav a');
    buttons.forEach(button => {
      if (button.getAttribute('href') === `#${page}`) {
        button.classList.add('active'); // Add active class to the current button
      } else {
        button.classList.remove('active'); // Remove active class from other buttons
      }
    });
  }
  
  // Initialize by loading content based on current hash
  handleRoute();
  
  // Listen for hash changes (when users click links or change the URL)
  window.addEventListener('hashchange', handleRoute);

  window.addEventListener('load', detectDevice);
  window.addEventListener('resize', detectDevice);
  window.addEventListener('load', updatePersonalGrid);
  window.addEventListener('resize', updatePersonalGrid);


  // Load header and footer (static)
  loadHTML('#header', '/header.html');
  loadHTML('#footer', '/footer.html');


function detectDevice() {
    const isMobile = window.innerWidth <= 768;
    document.body.classList.add(isMobile ? 'mobile' : 'desktop');
    document.body.classList.remove(!isMobile ? 'mobile' : 'desktop');
    //console.log(isMobile ? 'mobile' : 'desktop');
}

let slideIndex = 1;

function moveSlideshow(n) {
  showSlides(slideIndex += n);
}

function initScript(){
  showSlides(slideIndex);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

function openLightbox(src) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

// Optional: close lightbox when clicking outside image
document.getElementById('lightbox').addEventListener('click', function(e) {
  if (e.target === this) {
    closeLightbox();
  }
});