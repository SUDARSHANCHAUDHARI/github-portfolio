// Enhanced JavaScript Features

// Theme Switcher
const themes = {
    default: {
        primary: '#667eea',
        secondary: '#764ba2',
        accent: '#f093fb'
    },
    dark: {
        primary: '#4a5568',
        secondary: '#2d3748',
        accent: '#718096'
    },
    ocean: {
        primary: '#006994',
        secondary: '#00a8cc',
        accent: '#00d4aa'
    },
    sunset: {
        primary: '#ff6b6b',
        secondary: '#feca57',
        accent: '#ff9ff3'
    }
};

function initThemeSwitcher() {
    const themeSwitcher = document.createElement('div');
    themeSwitcher.className = 'theme-switcher';
    themeSwitcher.innerHTML = `
        <button class="theme-btn active" data-theme="default" style="background: linear-gradient(135deg, #667eea, #764ba2)"></button>
        <button class="theme-btn" data-theme="dark" style="background: linear-gradient(135deg, #2d3748, #4a5568)"></button>
        <button class="theme-btn" data-theme="ocean" style="background: linear-gradient(135deg, #006994, #00a8cc)"></button>
        <button class="theme-btn" data-theme="sunset" style="background: linear-gradient(135deg, #ff6b6b, #feca57)"></button>
    `;
    
    document.body.appendChild(themeSwitcher);
    
    // Theme switching logic
    const themeButtons = themeSwitcher.querySelectorAll('.theme-btn');
    themeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.dataset.theme;
            switchTheme(theme);
            
            // Update active button
            themeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

function switchTheme(theme) {
    document.body.className = theme === 'default' ? '' : `${theme}-theme`;
    if (themes[theme]) {
        const root = document.documentElement;
        root.style.setProperty('--primary', themes[theme].primary);
        root.style.setProperty('--secondary', themes[theme].secondary);
        root.style.setProperty('--accent', themes[theme].accent);
    }
    localStorage.setItem('selectedTheme', theme);
}

// GitHub Status
function updateGitHubStatus() {
    const statuses = [
        "🚀 Building Android Apps",
        "🧪 Testing New Features",
        "📱 Learning Kotlin",
        "🤖 Creating Bots",
        "💡 Brainstorming Ideas",
        "🔧 Optimizing Code",
        "📚 Reading Documentation",
        "🌟 Contributing to Open Source"
    ];
    
    const statusElement = document.createElement('div');
    statusElement.className = 'github-status';
    statusElement.textContent = statuses[0];
    document.body.appendChild(statusElement);
    
    let currentIndex = 0;
    setInterval(() => {
        currentIndex = (currentIndex + 1) % statuses.length;
        statusElement.textContent = statuses[currentIndex];
    }, 5000);
}

// GitHub Stats Integration
async function loadGitHubStats() {
    try {
        const response = await fetch('https://api.github.com/users/SUDARSHANCHAUDHARI');
        const data = await response.json();
        
        const statsSection = document.createElement('section');
        statsSection.className = 'github-stats';
        statsSection.innerHTML = `
            <h2 class="section-title">📊 GitHub Statistics</h2>
            <div class="stats-grid">
                <div class="stat-card">
                    <span class="stat-number">${data.public_repos + 22}</span>
                    <span class="stat-label">Total Repositories</span>
                </div>
                <div class="stat-card">
                    <span class="stat-number">${data.followers}</span>
                    <span class="stat-label">Followers</span>
                </div>
                <div class="stat-card">
                    <span class="stat-number">${data.following}</span>
                    <span class="stat-label">Following</span>
                </div>
                <div class="stat-card">
                    <span class="stat-number">${data.public_gists}</span>
                    <span class="stat-label">Public Gists</span>
                </div>
            </div>
        `;
        
        // Insert after hero section
        const heroSection = document.querySelector('.hero');
        heroSection.parentNode.insertBefore(statsSection, heroSection.nextSibling);
        
    } catch (error) {
        console.log('Could not load GitHub stats:', error);
    }
}

// Achievements Section
function addAchievementsSection() {
    const achievements = [
        {
            icon: '🏆',
            title: '13+ Years Experience',
            description: 'Professional software testing and development expertise',
            date: 'Since 2011'
        },
        {
            icon: '📱',
            title: '15+ Android Apps',
            description: 'Published and maintained multiple Android applications',
            date: '2020-2024'
        },
        {
            icon: '🌍',
            title: 'Global Experience',
            description: 'Worked across India and Thailand as an expat professional',
            date: '2018-Present'
        },
        {
            icon: '🤖',
            title: 'Bot Developer',
            description: 'Created automation tools and LINE bots with multi-language support',
            date: '2021-Present'
        },
        {
            icon: '📚',
            title: 'Open Source Contributor',
            description: 'Active contributor to GitHub community with 39+ repositories',
            date: '2020-Present'
        },
        {
            icon: '🎯',
            title: 'Productivity Expert',
            description: 'Specialized in productivity and lifestyle applications',
            date: '2019-Present'
        }
    ];
    
    const achievementsSection = document.createElement('section');
    achievementsSection.className = 'achievements';
    achievementsSection.innerHTML = `
        <h2 class="section-title">🏆 Professional Achievements</h2>
        <div class="achievements-grid">
            ${achievements.map(achievement => `
                <div class="achievement-card">
                    <span class="achievement-icon">${achievement.icon}</span>
                    <h3 class="achievement-title">${achievement.title}</h3>
                    <p class="achievement-description">${achievement.description}</p>
                    <p class="achievement-date">${achievement.date}</p>
                </div>
            `).join('')}
        </div>
    `;
    
    // Insert before contact section
    const contactSection = document.querySelector('.contact');
    contactSection.parentNode.insertBefore(achievementsSection, contactSection);
}

// Project Roadmap
function addRoadmapSection() {
    const roadmap = [
        {
            date: 'Q1 2024',
            title: 'Portfolio Launch',
            description: 'Created professional GitHub portfolio and personal website'
        },
        {
            date: 'Q2 2024',
            title: 'App Expansion',
            description: 'Release 5 new Android apps with advanced features'
        },
        {
            date: 'Q3 2024',
            title: 'Open Source Growth',
            description: 'Increase GitHub contributions and community engagement'
        },
        {
            date: 'Q4 2024',
            title: 'AI Integration',
            description: 'Implement AI features in existing applications'
        },
        {
            date: 'Q1 2025',
            title: 'Cross-Platform',
            description: 'Expand to iOS and web applications'
        },
        {
            date: 'Q2 2025',
            date: 'Startup Launch',
            description: 'Launch tech startup based on mobile app portfolio'
        }
    ];
    
    const roadmapSection = document.createElement('section');
    roadmapSection.className = 'roadmap';
    roadmapSection.innerHTML = `
        <h2 class="section-title">📈 Development Roadmap</h2>
        <div class="roadmap-timeline">
            ${roadmap.map((item, index) => `
                <div class="timeline-item">
                    <div class="timeline-content">
                        <div class="timeline-dot"></div>
                        <div class="timeline-date">${item.date}</div>
                        <h3 class="timeline-title">${item.title}</h3>
                        <p class="timeline-description">${item.description}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    // Insert before achievements section
    const achievementsSection = document.querySelector('.achievements');
    achievementsSection.parentNode.insertBefore(roadmapSection, achievementsSection);
}

// Mini Memory Game
function initMiniGame() {
    const gameSection = document.createElement('section');
    gameSection.className = 'mini-game';
    gameSection.innerHTML = `
        <h2 class="section-title">🎮 Quick Memory Challenge</h2>
        <div class="game-container">
            <p>Test your memory! Click the buttons in the order they appear.</p>
            <div class="game-score">Score: <span id="score">0</span></div>
            <div id="game-buttons">
                <button class="game-button" data-color="red">🔴</button>
                <button class="game-button" data-color="blue">🔵</button>
                <button class="game-button" data-color="green">🟢</button>
                <button class="game-button" data-color="yellow">🟡</button>
            </div>
            <button class="game-button" id="start-game">Start Game</button>
        </div>
    `;
    
    // Insert before footer
    const footer = document.querySelector('footer');
    footer.parentNode.insertBefore(gameSection, footer);
    
    // Game logic
    let sequence = [];
    let playerSequence = [];
    let score = 0;
    let isPlaying = false;
    
    const buttons = document.querySelectorAll('#game-buttons .game-button');
    const startButton = document.getElementById('start-game');
    const scoreElement = document.getElementById('score');
    
    startButton.addEventListener('click', startGame);
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (isPlaying) {
                const color = button.dataset.color;
                playerSequence.push(color);
                button.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    button.style.transform = 'scale(1)';
                }, 200);
                
                checkSequence();
            }
        });
    });
    
    function startGame() {
        sequence = [];
        playerSequence = [];
        score = 0;
        isPlaying = true;
        scoreElement.textContent = score;
        startButton.textContent = 'Game in Progress...';
        startButton.disabled = true;
        nextRound();
    }
    
    function nextRound() {
        playerSequence = [];
        const colors = ['red', 'blue', 'green', 'yellow'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        sequence.push(randomColor);
        
        showSequence();
    }
    
    function showSequence() {
        let i = 0;
        const interval = setInterval(() => {
            if (i >= sequence.length) {
                clearInterval(interval);
                return;
            }
            
            const button = document.querySelector(`[data-color="${sequence[i]}"]`);
            button.style.transform = 'scale(1.3)';
            button.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.8)';
            
            setTimeout(() => {
                button.style.transform = 'scale(1)';
                button.style.boxShadow = 'none';
                i++;
            }, 600);
        }, 800);
    }
    
    function checkSequence() {
        const currentIndex = playerSequence.length - 1;
        
        if (playerSequence[currentIndex] !== sequence[currentIndex]) {
            gameOver();
            return;
        }
        
        if (playerSequence.length === sequence.length) {
            score++;
            scoreElement.textContent = score;
            setTimeout(nextRound, 1000);
        }
    }
    
    function gameOver() {
        isPlaying = false;
        startButton.textContent = `Game Over! Final Score: ${score}`;
        startButton.disabled = false;
        
        // Flash all buttons
        buttons.forEach(button => {
            button.style.transform = 'scale(1.2)';
            button.style.background = '#ff6b6b';
        });
        
        setTimeout(() => {
            buttons.forEach(button => {
                button.style.transform = 'scale(1)';
                button.style.background = '';
            });
        }, 500);
    }
}

// Performance Optimizations
function initPerformanceOptimizations() {
    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Debounce scroll events
    let ticking = false;
    function updateScrollEffects() {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                // Add scroll-based animations here
                ticking = false;
            });
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', updateScrollEffects);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Load saved theme
    const savedTheme = localStorage.getItem('selectedTheme') || 'default';
    switchTheme(savedTheme);
    
    // Initialize all features
    initThemeSwitcher();
    updateGitHubStatus();
    loadGitHubStats();
    addAchievementsSection();
    addRoadmapSection();
    initMiniGame();
    initPerformanceOptimizations();
});

// Add smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
