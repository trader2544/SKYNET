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

    const paymentLinks = {
        '3 Days': 'https://payment.intasend.com/pay/ad3f6c22-4af9-4ea1-b58e-a3f242266a26/',
        '1 Week': 'https://payment.intasend.com/pay/bf5f6d33-5bg0-5fb2-c69f-b4g353377b37/',
        '2 Weeks': 'https://payment.intasend.com/pay/cg6g7e44-6ch1-6gc3-d70g-c5h464488c48/',
        '1 Month': 'https://payment.intasend.com/pay/dh7h8f55-7di2-7hd4-e81h-d6i575599d59/',
        '6 Months': 'https://payment.intasend.com/pay/ei8i9g66-8ej3-8ie5-f92i-e7j686600e60/',
        '1 Year': 'https://payment.intasend.com/pay/fj9j0h77-9fk4-9jf6-g03j-f8k797711f71/'
    };

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
        // For this example, we'll just redirect to the appropriate payment page with the HWID, duration, and price
        const paymentUrl = `${paymentLinks[selectedDuration]}?hwid=${encodeURIComponent(hwid)}&duration=${encodeURIComponent(selectedDuration)}&price=${encodeURIComponent(selectedPrice)}`;
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

console.log("JavaScript code updated successfully!");