// Default users with more detailed stats
const defaultUsers = [
    { name: "Alice", totalStars: 50, roma: 15, vig: 12, binary: 18, hash: 5, achievements: 8 },
    { name: "Bob", totalStars: 45, roma: 14, vig: 11, binary: 15, hash: 5, achievements: 7 },
    { name: "Charlie", totalStars: 40, roma: 12, vig: 10, binary: 14, hash: 4, achievements: 6 },
    { name: "David", totalStars: 35, roma: 10, vig: 9, binary: 12, hash: 4, achievements: 5 },
    { name: "Eve", totalStars: 30, roma: 9, vig: 8, binary: 10, hash: 3, achievements: 4 },
    { name: "Frank", totalStars: 25, roma: 8, vig: 7, binary: 8, hash: 2, achievements: 3 },
    { name: "Grace", totalStars: 20, roma: 6, vig: 6, binary: 6, hash: 2, achievements: 2 },
    { name: "Henry", totalStars: 15, roma: 5, vig: 4, binary: 5, hash: 1, achievements: 1 },
    { name: "Ivy", totalStars: 10, roma: 3, vig: 3, binary: 3, hash: 1, achievements: 1 },
    { name: "Jack", totalStars: 5, roma: 2, vig: 1, binary: 2, hash: 0, achievements: 0 }
];

function getCurrentUserStats() {
    const stories = ['roma', 'vig', 'binary', 'hash'];
    const stats = {
        name: "Agent-" + (localStorage.getItem('UserID') || 'Unknown'),
        totalStars: 0,
        achievements: parseInt(localStorage.getItem('achievements_unlocked') || 0)
    };

    stories.forEach(story => {
        const storyStars = parseInt(localStorage.getItem(`${story}_total_stars`) || 0);
        stats[story] = storyStars;
        stats.totalStars += storyStars;
    });

    return stats;
}

function updateScoreboard(category = 'totalStars') {
    const currentUser = getCurrentUserStats();
    let allUsers = [...defaultUsers, currentUser];
    
    allUsers.sort((a, b) => b[category] - a[category] || b.achievements - a.achievements);

    const scoreboardBody = document.getElementById('scoreboardBody');
    scoreboardBody.innerHTML = '';

    allUsers.forEach((user, index) => {
        const row = scoreboardBody.insertRow();
        const rankCell = row.insertCell(0);
        const nameCell = row.insertCell(1);
        const scoreCell = row.insertCell(2);
        const achievementsCell = row.insertCell(3);
        nameCell.innerHTML += ` <button onclick="showUserDetails('${user.name}')">Details</button>`;

        let rankIcon = '';
        if (index === 0) {
            rankIcon = '<i class="fas fa-crown gold rank-icon"></i>';
        } else if (index === 1) {
            rankIcon = '<i class="fas fa-medal silver rank-icon"></i>';
        } else if (index === 2) {
            rankIcon = '<i class="fas fa-award bronze rank-icon"></i>';
        }

        rankCell.innerHTML = `${rankIcon}${index + 1}`;
        nameCell.textContent = user.name;
        scoreCell.innerHTML = `<i class="fas fa-star" style="color: #ffd700;"></i> ${user[category]}`;
        achievementsCell.innerHTML = `<i class="fas fa-trophy" style="color: #00fff5;"></i> ${user.achievements}`;

        if (user.name === "You") {
            row.classList.add('current-user');
        }

        row.style.animationDelay = `${index * 0.1}s`;
    });
}

function setActiveTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    updateScoreboard(tabId);
}


function updatePersonalProgress() {
    const currentUser = getCurrentUserStats();
    const progressBars = document.getElementById('progressBars');
    progressBars.innerHTML = '';

    const categories = ['totalStars', 'roma', 'vig', 'binary', 'hash', 'achievements'];
    categories.forEach(category => {
        const progress = (currentUser[category] / Math.max(...defaultUsers.map(u => u[category]))) * 100;
        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        progressBar.innerHTML = `
            <span>${category}: ${currentUser[category]}</span>
            <div class="bar" style="width: ${progress}%"></div>
        `;
        progressBars.appendChild(progressBar);
    });
}

function showUserDetails(userName) {
    const user = [...defaultUsers, getCurrentUserStats()].find(u => u.name === userName);
    if (!user) return;

    const detailsModal = document.createElement('div');
    detailsModal.className = 'modal';
    detailsModal.innerHTML = `
        <div class="modal-content">
            <h2>${user.name}'s Details</h2>
            <p>Total Stars: ${user.totalStars}</p>
            <p>Roma Score: ${user.roma}</p>
            <p>Vig Score: ${user.vig}</p>
            <p>Binary Score: ${user.binary}</p>
            <p>Hash Score: ${user.hash}</p>
            <p>Achievements: ${user.achievements}</p>
            <button onclick="this.parentElement.parentElement.remove()">Close</button>
        </div>
    `;
    document.body.appendChild(detailsModal);
}



// Initial update
document.addEventListener('DOMContentLoaded', () => {
    setActiveTab('totalStars');
    updatePersonalProgress();
    setInterval(() => {
        updateScoreboard(document.querySelector('.tab.active').id);
        updatePersonalProgress();},
         5000);
    
});