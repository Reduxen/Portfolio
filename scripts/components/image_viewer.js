let slideIndex = 1;

let currentSlideshowDir = "";
let currentSlideshowLength = 0;

//Init slideshow per page
function onDynamicContentLoaded(url) {
  const pageName = url.substring(url.lastIndexOf('/') + 1);
  slideIndex = 1;
  switch(pageName){
    case "shimmer_of_light.html":
      initSlideshow("/images/shimmer_of_light/", 6);
      break;
    case "mercy_break.html":
      initSlideshow("/images/mercy_break/", 6);
      break;
    case "all_on_cardboard.html":
      initSlideshow("/images/all_on_cardboard/", 5);
      break;
    case "fractal_explorer_vr.html":
      initSlideshow("/images/fractal_explorer_vr/", 9);
      break;
    case "fractal_explorer.html":
      initSlideshow("/images/fractal_explorer/", 9);
      break;
    default:

  }
}

function initSlideshow(slideshowDirectory, slideshowLength){
  currentSlideshowDir = slideshowDirectory;
  currentSlideshowLength = slideshowLength;
}

function openLightbox(element) {
  document.getElementById('lightbox-img').src = element.src;
  document.getElementById('lightbox').style.display = 'flex';
  document.getElementById('lightbox-prev').style.display = 'block';
  document.getElementById('lightbox-next').style.display = 'block';
  document.getElementById('lightbox-description').textContent = "";
}

//This hides the navigation elemets for individual picture viewing
function openLightboxSimple(element){
  document.getElementById('lightbox-img').src = element.src;
  document.getElementById('lightbox').style.display = 'flex';
  document.getElementById('lightbox-prev').style.display = 'none';
  document.getElementById('lightbox-next').style.display = 'none';

  //Set image descr by img title
  document.getElementById('lightbox-description').textContent = element.title;
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

// Optional: close lightbox when clicking outside image
document.getElementById('lightbox').addEventListener('click', function (e) {
  if (e.target === this) {
    closeLightbox();
  }
});

function moveSlides(direction){
  const slideshow = document.getElementById('slideshow');
  const numbertext = document.getElementById('slideshow-index');

  //Move slide index
  slideIndex += direction;
  if(slideIndex > currentSlideshowLength){
    slideIndex = 1;
  }
  if(slideIndex < 1){
    slideIndex = currentSlideshowLength;
  }

  //Set img and text
  numbertext.textContent = slideIndex + "/" + currentSlideshowLength;
  slideshow.src = currentSlideshowDir + "screenshot" + slideIndex + ".png"

  //Also set lightbox image
  document.getElementById('lightbox-img').src = currentSlideshowDir + "screenshot" + slideIndex + ".png"
}