function detectDevice() {
    const isMobile = window.innerWidth <= 768;
    document.body.classList.add(isMobile ? 'mobile' : 'desktop');
    document.body.classList.remove(!isMobile ? 'mobile' : 'desktop');
    //console.log(isMobile ? 'mobile' : 'desktop');
}