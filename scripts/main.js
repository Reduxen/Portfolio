// Initialize by loading content based on current hash
handleRoute();

// Listen for hash changes
window.addEventListener('hashchange', handleRoute);

//Detect device based on screen size
window.addEventListener('load', detectDevice);
window.addEventListener('resize', detectDevice);


function loadHTML(selector, url) {
  fetch(url)
  .then(res => res.text())
  .then(html => {
      document.querySelector(selector).innerHTML = html;
      onDynamicContentLoaded(url);
      window.scrollTo(0, 0);
  });
}


function handleRoute() {
  const page = window.location.hash.replace('#', '') || 'home'; // Default to 'home' if no hash
  let parentPage = page.substring(0, page.lastIndexOf('/'));
  if(parentPage.length == 0){parentPage = page;}
  loadHTML('#content', `pages/${page}.html`);
  const buttons = document.querySelectorAll('nav a');
  buttons.forEach(button => {
    if (button.getAttribute('href') === `#${parentPage}`) {
      button.classList.add('active'); // Add active class to the current button
    } else {
      button.classList.remove('active'); // Remove active class from other buttons
    }
  });
}

function detectDevice() {
  const isMobile = window.innerWidth <= 768;
  document.body.classList.add(isMobile ? 'mobile' : 'desktop');
  document.body.classList.remove(!isMobile ? 'mobile' : 'desktop');
}
