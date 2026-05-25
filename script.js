// Back to top button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopBtn.classList.remove('opacity-0');
        backToTopBtn.classList.add('opacity-100');
    } else {
        backToTopBtn.classList.add('opacity-0');
        backToTopBtn.classList.remove('opacity-100');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Copy terminology tags to clipboard
document.querySelectorAll('.terminology-tag').forEach(tag => {
    tag.addEventListener('click', function () {
        const text = this.textContent.trim().split(' ')[0];
        navigator.clipboard.writeText(text);
        const originalContent = this.innerHTML;
        this.innerHTML = '¡Copiado!';
        setTimeout(() => {
            this.innerHTML = originalContent;
        }, 1000);
    });
});

// Active section tracking for sidebar
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove(
            'font-bold', 'text-primary', 'dark:text-primary-fixed',
            'border-l-4', 'bg-surface-container-low',
            'dark:bg-surface-container-high', 'pl-3'
        );
        item.classList.add(
            'text-on-surface-variant', 'dark:text-surface-variant', 'pl-4'
        );

        if (item.getAttribute('href').includes(current)) {
            item.classList.add(
                'font-bold', 'text-primary', 'dark:text-primary-fixed',
                'border-l-4', 'border-primary', 'dark:border-primary-fixed',
                'pl-3', 'bg-surface-container-low', 'dark:bg-surface-container-high'
            );
            item.classList.remove(
                'text-on-surface-variant', 'dark:text-surface-variant', 'pl-4'
            );
        }
    });
});
