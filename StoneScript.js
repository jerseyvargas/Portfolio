document.addEventListener('DOMContentLoaded', function() {
    const icons = document.querySelectorAll('.constraint_item');
    const texts = document.querySelectorAll('.constraint_text');

    icons.forEach((icon, index) => {
        icon.addEventListener('mouseover', () => {
            texts.forEach((txt, i) => {
                if (i === index) {
                    txt.classList.toggle('show');
                } else {
                    txt.classList.remove('show');
                }
            });
        });
    });
});