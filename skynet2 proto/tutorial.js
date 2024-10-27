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

    const searchFunctionality = () => {
        const searchInput = document.getElementById('search-input');
        const searchButton = document.getElementById('search-button');
        const tutorialCards = document.querySelectorAll('.tutorial-card');

        const performSearch = () => {
            const searchTerm = searchInput.value.toLowerCase();
            tutorialCards.forEach(card => {
                const title = card.querySelector('h2').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        };

        searchButton.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
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
                    const botResponse = getBotResponse(message);
                    addMessage(botResponse, 'bot');
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

        function getBotResponse(message) {
            // Simple bot logic (replace with more sophisticated logic or API call)
            const lowercaseMessage = message.toLowerCase();
            if (lowercaseMessage.includes('http custom')) {
                return "To set up HTTP Custom, follow these steps: 1. Download the app, 2. Import configuration file, 3. Connect to the server. For more details, check our HTTP Custom tutorial.";
            } else if (lowercaseMessage.includes('http injector')) {
                return "HTTP Injector setup: 1. Install the app, 2. Load the config file, 3. Start the connection. Visit our HTTP Injector tutorial for a complete guide.";
            } else if (lowercaseMessage.includes('dark tunnel')) {
                return "Dark Tunnel configuration: 1. Get the app, 2. Enter server details, 3. Connect. Our Dark Tunnel tutorial has in-depth instructions.";
            } else if (lowercaseMessage.includes('netmod')) {
                return "NetMod setup process: 1. Install NetMod, 2. Import settings, 3. Optimize your connection. Check out our NetMod tutorial for more information.";
            } else if (lowercaseMessage.includes('ha tunnel')) {
                return "HA Tunnel setup: 1. Download HA Tunnel, 2. Configure server settings, 3. Establish connection. Our HA Tunnel tutorial provides a detailed walkthrough.";
            } else {
                return "I'm sorry, I couldn't find specific information about that. Please check our tutorials page or ask a more specific question about one of our supported apps.";
            }
        }
    };

    navSlide();
    searchFunctionality();
    chatBox();
});