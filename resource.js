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

    const configFilesHover = () => {
        const basicConfigCard = document.getElementById('basic-config');
        const viewBtn = basicConfigCard.querySelector('.view-btn');
        const configFilesGrid = basicConfigCard.querySelector('.config-files-grid');

        // Sample config files (replace with actual file names)
        const configFiles = [
            'HTTP_Custom.hc', 'HTTP_Injector.ehi', 'Dark_Tunnel.dt',
            'NetMod.nm', 'HA_Tunnel.ha', 'OpenVPN.ovpn', 'V2Ray.json',
            'Shadowsocks.ss', 'Trojan.json', 'Wireguard.conf',
            'Clash.yaml', 'Surge.conf', 'Quantumult.conf', 'Loon.conf',
            'Surfboard.conf', 'Kitsunebi.json', 'Shuttle.conf', 'Leaf.conf',
            'Outline.json', 'NapsternetV.json',
        ];

        // Populate config files grid
        configFiles.forEach(file => {
            const fileElement = document.createElement('div');
            fileElement.classList.add('config-file');
            fileElement.textContent = file;
            configFilesGrid.appendChild(fileElement);
        });

        viewBtn.addEventListener('click', () => {
            configFilesGrid.style.display = configFilesGrid.style.display === 'grid' ? 'none' : 'grid';
            viewBtn.textContent = configFilesGrid.style.display === 'grid' ? 'Hide Files' : 'View Files';
        });

        // Add click event to config files (for future download functionality)
        configFilesGrid.addEventListener('click', (e) => {
            if (e.target.classList.contains('config-file')) {
                alert(`Downloading ${e.target.textContent}...`);
                // Implement actual download functionality here
            }
        });
    };

    const newsletterSubmit = () => {
        const form = document.getElementById('newsletter-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing with email: ${email}`);
            form.reset();
        });
    };

    navSlide();
    configFilesHover();
    newsletterSubmit();
});