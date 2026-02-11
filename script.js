document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const luckyBtn = document.getElementById('lucky-btn');
    const searchView = document.getElementById('search-view');
    const resultsView = document.getElementById('results-view');
    const invitationView = document.getElementById('invitation-view');
    const goOutResult = document.getElementById('go-out');
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const successMsg = document.getElementById('success-msg');
    const optionsDiv = document.querySelector('.options');
    const backToHome = document.getElementById('back-to-home');

    const searchText = "What should I do this weekend?";
    let charIndex = 0;

    // Simulated Typing
    function typeEffect() {
        if (charIndex < searchText.length) {
            searchInput.value += searchText.charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 100);
        } else {
            // Auto trigger search after typing
            setTimeout(showResults, 1000);
        }
    }

    function showResults() {
        searchView.classList.remove('active');
        setTimeout(() => {
            resultsView.classList.add('active');
        }, 500);
    }

    function showInvitation() {
        resultsView.classList.remove('active');
        setTimeout(() => {
            invitationView.classList.add('active');
            createHearts();
        }, 500);
    }

    // Event Listeners
    setTimeout(typeEffect, 1000); // Start typing after 1s

    searchBtn.addEventListener('click', showResults);
    luckyBtn.addEventListener('click', showResults);
    goOutResult.addEventListener('click', showInvitation);

    backToHome.addEventListener('click', () => {
        resultsView.classList.remove('active');
        searchView.classList.add('active');
        searchInput.value = "";
        charIndex = 0;
        setTimeout(typeEffect, 1000);
    });

    yesBtn.addEventListener('click', () => {
        optionsDiv.classList.add('hidden');
        successMsg.classList.remove('hidden');
        startConfetti();
    });

    // Handle "No" button - it runs away!
    noBtn.addEventListener('mouseover', () => {
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        
        noBtn.style.position = 'fixed';
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });

    // Background Hearts for Invitation
    function createHearts() {
        const container = document.querySelector('.hearts-container');
        if (!container) return;
        
        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'absolute';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
            heart.style.opacity = Math.random() * 0.5;
            heart.style.animation = `float ${Math.random() * 3 + 2}s infinite ease-in-out`;
            container.appendChild(heart);
        }
    }

    function startConfetti() {
        // Simple CSS confetti could be added here or just leave the text
        console.log("Confetti started!");
    }
});

// Animation styles
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
    }
`;
document.head.appendChild(styleSheet);
