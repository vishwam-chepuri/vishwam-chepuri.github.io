var Portfolio = {
    initializeDataScrolls: function () {
        document.querySelectorAll('[data-scroll-to]').forEach(element => {
            element.addEventListener('click', function () {
                const targetSelector = this.getAttribute('data-scroll-to');
                const targetElement = document.querySelector(targetSelector);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    },

    setProjectTitleHeights: function () {
        const projectTitles = document.querySelectorAll('.project-title');
        let maxProjectTitleHeight = 0;
        projectTitles.forEach(title => {
            if (title.offsetHeight > maxProjectTitleHeight) {
                maxProjectTitleHeight = title.offsetHeight;
            }
        });
        projectTitles.forEach(title => {
            title.style.height = maxProjectTitleHeight + 'px';
        });
    }
}

window.onload = function () {
    Portfolio.initializeDataScrolls();
    Portfolio.setProjectTitleHeights();
}