document.addEventListener('DOMContentLoaded', () => {
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        burger.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('nav-active');

            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            // Burger Animation
            burger.classList.toggle('toggle');
        });
    };

    const smoothScroll = () => {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                const offsetTop = document.querySelector(href).offsetTop - 80;

                scroll({
                    top: offsetTop,
                    behavior: "smooth"
                });
            });
        });
    };

    const chatBox = () => {
        const openChatBtn = document.querySelector('.open-chat');
        const closeChatBtn = document.querySelector('.close-chat');
        const chatBox = document.querySelector('.chat-box');
        const sendMessageBtn = document.querySelector('.send-message');
        const messageInput = document.querySelector('.chat-input input');
        const chatMessages = document.querySelector('.chat-messages');

        openChatBtn.addEventListener('click', () => {
            chatBox.style.display = 'block';
            openChatBtn.style.display = 'none';
        });

        closeChatBtn.addEventListener('click', () => {
            chatBox.style.display = 'none';
            openChatBtn.style.display = 'block';
        });

        sendMessageBtn.addEventListener('click', sendMessage);
        messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });

        function sendMessage() {
            const message = messageInput.value.trim();
            if (message) {
                addMessage(message, 'user');
                messageInput.value = '';
                // Simulate bot response (replace with actual bot logic)
                setTimeout(() => {
                    addMessage("Thank you for your message. Our support team will get back to you soon.", 'bot');
                }, 1000);
            }
        }

        function addMessage(message, sender) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message', sender);
            messageElement.innerHTML = `<p>${message}</p>`;
            chatMessages.appendChild(messageElement);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    };

    const observeElements = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll('.feature-card, .app-card, .tutorial-card, .resource-card');
        elements.forEach(element => {
            observer.observe(element);
        });
    };

    navSlide();
    smoothScroll();
    chatBox();
    observeElements();
});