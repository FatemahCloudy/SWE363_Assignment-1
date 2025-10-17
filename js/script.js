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

// contact
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popupMessage");
    const closePopup = document.getElementById("closePopup");

    function showPopup(message) {
        popupMessage.textContent = message;
        popup.classList.add("show");
    }

    closePopup.addEventListener("click", () => {
        popup.classList.remove("show");
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            showPopup("⚠️ Please fill out all fields.");
            return;
        }

        showPopup("Message sent successfully!");
        form.reset();
    });
});
