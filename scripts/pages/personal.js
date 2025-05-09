function updatePersonalGrid() {
    const grid = document.querySelector('.grid-personal');
    if (!grid) return;

    const width = window.innerWidth;

    if (width < 600) {
        grid.style.gridTemplateColumns = '1fr';
    } else if (width < 900) {
        grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
    } else {
        grid.style.gridTemplateColumns = 'repeat(3, 1fr)';
    }
}

function updateProjectPage() {
    const grid = document.querySelector('.dual-grid');
    if (!grid) return;

    const width = window.innerWidth;

    if (width < 600) {
        grid.style.gridTemplateColumns = '1fr';
    } else if (width < 900) {
        grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
    }
}

//TODO add event listener to only necessary elements
window.addEventListener('load', updatePersonalGrid);
window.addEventListener('resize', updatePersonalGrid);

window.addEventListener('load', updateProjectPage);
window.addEventListener('resize', updateProjectPage);