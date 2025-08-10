document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function () {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');

            const bars = this.querySelectorAll('.bar');
            if (navMenu.classList.contains('active')) {
                bars[0].style.transform = 'rotate(45deg) translate(0.375rem, 0.375rem)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(-45deg) translate(0.375rem, -0.375rem)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');

                const bars = mobileMenuToggle.querySelectorAll('.bar');
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }

            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    window.addEventListener('scroll', function () {
        const header = document.querySelector('.header');
        if (header) {
            if (window.scrollY > 50) {
                header.style.boxShadow = 'var(--shadow-dark)';
            } else {
                header.style.boxShadow = 'var(--shadow-light)';
            }
        }
    });

    function setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop();
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            link.classList.remove('active');

            if (currentPage === 'index.html' && link.getAttribute('href') === 'index.html') {
                link.classList.add('active');
            } else if (currentPage !== 'index.html') {
                const href = link.getAttribute('href');
                if (href && href.includes(currentPage)) {
                    link.classList.add('active');
                }
            }
        });
    }
    setActiveNavLink();

    /* 页面加载 */
    document.body.style.opacity = 0;
    window.setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s';
        document.body.style.opacity = 1;
    }, 100);

    /* 视频控制 */
    const farmVideo = document.getElementById('farmVideo');
});