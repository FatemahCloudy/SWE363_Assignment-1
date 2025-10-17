// Simple form handling (no backend)
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    this.reset();
});

// Personalized Greeting
const greetingEl = document.getElementById('greeting');
const username = localStorage.getItem('username') || prompt("Hello! What's your name?");
if (username) localStorage.setItem('username', username);

function getGreeting() {
    const hour = new Date().getHours();
    let timeGreeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
    greetingEl.textContent = `${timeGreeting}, ${username}! Welcome to my portfolio.`;
}
getGreeting();

// Filter Projects by Category
function filterProjects(category) {
    const projects = document.querySelectorAll('.project');
    let visibleCount = 0;
    projects.forEach(proj => {
        const match = category === 'all' || proj.dataset.category === category;
        proj.style.display = match ? 'block' : 'none';
        if (match) visibleCount++;
    });
    document.getElementById('noResults').style.display = visibleCount ? 'none' : 'block';
}