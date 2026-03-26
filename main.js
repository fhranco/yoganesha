// YOGANHESHA v13.4 - Chakra Convergence Engine (Slow & Full Spectrum)

document.addEventListener('DOMContentLoaded', () => {
    console.log('ॐ YOGANHESHA | Engine v13.4 - Chakra Convergence Activado');

    const html = document.documentElement;
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const themeLabel = document.getElementById('theme-label');
    const portal = document.getElementById('sanctuary-portal');
    const portalOpen = document.getElementById('portal-open');
    const portalClose = document.getElementById('portal-close');
    const logoGroup = document.querySelector('.logo-main-group');
    const heroContent = document.querySelector('.hero-content'); 
    const canvas = document.getElementById('aura-particles');
    const ctx = canvas.getContext('2d');

    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2, radius: 240 };
    let particles = [];

    // --- 🌌 CLASS PARTICLE (CHAKRA CONVERGENCE) ---
    class Particle {
        constructor() { this.init(); }
        init() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 4 + 1.5; 
            this.baseX = this.x;
            this.baseY = this.y;
            this.density = (Math.random() * 25) + 10;
            
            // FULL CHAKRA SPECTRUM (Subtle & Elegant Versions) + White Base
            const colors = [
                '#ffffff', '#ffffff', '#ffffff', // 30% White Base
                '#FF4E50', // Muladhara (Muted Red)
                '#FC913A', // Svadhisthana (Sacred Orange)
                '#F9D423', // Manipura (Gold)
                '#2D8C8C', // Anahata (Heart/Brand Teal)
                '#5D9CEC', // Vishuddha (Soft Blue)
                '#4A89DC', // Ajna (Indigo)
                '#C9B6D9'  // Sahasrara (Crown Lavender)
            ];
            this.color = colors[Math.floor(Math.random() * colors.length)];
            
            this.opacity = Math.random() * 0.4 + 0.3; 
            // VERY SLOW SERENE SPEED
            this.velY = Math.random() * 0.4 + 0.1; 
        }
        draw() {
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.opacity;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 10;
            ctx.shadowColor = this.color;
        }
        update() {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx*dx + dy*dy);
            
            if (distance < mouse.radius) {
                let force = (mouse.radius - distance) / mouse.radius;
                this.x -= (dx / distance) * force * this.density * 0.35;
                this.y -= (dy / distance) * force * this.density * 0.35;
            } else {
                this.x -= (this.x - this.baseX) / 60;
                this.y -= (this.y - this.baseY) / 60;
            }
            
            this.baseY -= this.velY;
            if (this.baseY < -20) {
                this.baseY = canvas.height + 20;
                this.baseX = Math.random() * canvas.width;
                this.x = this.baseX;
            }
        }
    }

    function initParticles() {
        particles = [];
        let pCount = (window.innerWidth < 768) ? 80 : 250; 
        for (let i = 0; i < pCount; i++) particles.push(new Particle());
    }

    // --- 🌗 THE DUALITY LOGIC ---
    const updateThemeUI = (theme) => {
        if (!themeIcon || !themeLabel) return;
        if (theme === 'light') {
            themeIcon.innerText = '☀️';
            themeLabel.innerText = 'Luz';
        } else {
            themeIcon.innerText = '🌙';
            themeLabel.innerText = 'Sombra';
        }
    };
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    updateThemeUI(savedTheme);

    if (themeToggle && themeIcon && themeLabel) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', nextTheme);
            localStorage.setItem('theme', nextTheme);
            updateThemeUI(nextTheme);
        });
    }

    // --- 🚪 PORTAL LOGIC ---
    if (portalOpen && portal && portalClose) {
        portalOpen.addEventListener('click', () => {
            portal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        portalClose.addEventListener('click', () => {
            portal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    // --- 🏟️ INTERACTIVE CENTER ---
    const moveContent = (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        if (logoGroup) {
            const rotX = (e.clientY - window.innerHeight/2) * -0.01;
            const rotY = (e.clientX - window.innerWidth/2) * 0.01;
            logoGroup.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`;
        }
        if (heroContent) {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const distFromCenterX = (e.clientX - centerX) * 0.03;
            const distFromCenterY = (e.clientY - centerY) * 0.03; 
            heroContent.style.transform = `translate(${distFromCenterX}px, ${distFromCenterY}px)`;
        }
    };
    window.addEventListener('mousemove', moveContent);

    // --- 🌌 ENGINE RUN ---
    function resize() {
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        }
    }
    window.addEventListener('resize', resize);
    resize();

    function animate() {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.draw(); p.update(); });
        requestAnimationFrame(animate);
    }
    animate();

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active'); });
    }, { threshold: 0.05 });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    setTimeout(() => {
        const hv = document.querySelector('.hero .hero-visual');
        const hc = document.querySelector('.hero .hero-content');
        if (hv) hv.classList.add('active');
        if (hc) hc.classList.add('active');
    }, 500);
});
