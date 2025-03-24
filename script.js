document.querySelectorAll('[data-scroll-to]').forEach(element => {
    element.addEventListener('click', function () {
        const targetSelector = this.getAttribute('data-scroll-to');
        const targetElement = document.querySelector(targetSelector);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});