document.addEventListener("DOMContentLoaded", ()=> {
    const images = document.querySelectorAll('.categories img , img');

    images.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.15)';
            img.style.transition = 'transform 0.3s ease';
        });

        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
            img.style.transition = 'transform 0.3 ease';
        });
    });
});
