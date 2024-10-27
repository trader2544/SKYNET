document.addEventListener('DOMContentLoaded', () => {
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');

            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            burger.classList.toggle('toggle');
        });
    };

    const modal = document.getElementById('hwid-modal');
    const buyButtons = document.querySelectorAll('.buy-button');
    const closeButton = document.querySelector('.close');
    const hwidForm = document.getElementById('hwid-form');
    let selectedDuration, selectedPrice;

    buyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            selectedDuration = button.getAttribute('data-duration');
            selectedPrice = button.getAttribute('data-price');
            modal.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    hwidForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const hwid = document.getElementById('hwid-input').value;
        // Here you would typically validate the HWID
        // For this example, we'll just redirect to a payment page with the HWID, duration, and price
        const paymentUrl = `https://your-payment-page.com?hwid=${encodeURIComponent(hwid)}&duration=${encodeURIComponent(selectedDuration)}&price=${encodeURIComponent(selectedPrice)}`;
        window.location.href = paymentUrl;
    });

    const observeElements = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll('.file-card, .feature-card, .faq-item');
        elements.forEach(element => {
            observer.observe(element);
        });
    };

    navSlide();
    observeElements();
});