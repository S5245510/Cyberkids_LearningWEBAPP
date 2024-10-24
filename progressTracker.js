// progressTracker.js

const ProgressTracker = {
    startTime: null,
    attempts: {},

    // Record an attempt for the given story and level
    recordAttempt: function(storyKey, level) {
        const attempts = parseInt(localStorage.getItem(`${storyKey}_attempts_level${level}`)) || 0;
        localStorage.setItem(`${storyKey}_attempts_level${level}`, attempts + 1);
        console.log(`Story: ${storyKey}, Level: ${level}, Attempts: ${attempts + 1}`);
    },

    // Calculate stars based on the level, time spent, and attempts
    calculateStars: function(storyKey, level) {
        const timeSpent = this.stopTimer();
        const attempts = parseInt(localStorage.getItem(`${storyKey}_attempts_level${level}`)) || 1;

        let stars = 3;
        if ( attempts > 3) stars = 2;
        if ( attempts > 5) stars = 1;

        localStorage.setItem(`${storyKey}_stars_level${level}`, stars);
        console.log(`Story: ${storyKey}, Level: ${level} completed. Time spent: ${timeSpent} seconds, Attempts: ${attempts}, Stars awarded: ${stars}`);

        let totalStars = parseInt(localStorage.getItem(`${storyKey}_total_stars`)) || 0;
        totalStars += stars;
        localStorage.setItem(`${storyKey}_total_stars`, totalStars);
        console.log(`Total stars for ${storyKey}: ${totalStars}`);
        
        
        AchievementSystem.updateStars(level, stars); // Existing logic for updating stars
        AchievementSystem.checkAchievements(); // Check for any other achievements
    
        return stars;
    },

    // Start a timer for the current level
    startTimer: function(storyKey, level) {
        this.startTime = new Date();
        console.log(`Timer started for story: ${storyKey}, level ${level}`);
    },

    // Stop the timer and return the time spent in seconds
    stopTimer: function() {
        const endTime = new Date();
        return Math.floor((endTime - this.startTime) / 1000);
    },

    setHintUsed: function(storyKey, level, used) {
        localStorage.setItem(`${storyKey}_hint_used_level${level}`, used);
        console.log(`Hint used for ${storyKey}, level ${level}: ${used}`);
    },

    getHintUsed: function(storyKey, level) {
        return localStorage.getItem(`${storyKey}_hint_used_level${level}`) === 'true';
    },

    getTotalStars: function(storyKey) {
        return parseInt(localStorage.getItem(`${storyKey}_total_stars`)) || 0;
    }
};





function displayStars(storyKey) {
    const levels = document.querySelectorAll('.level-stars'); // Get all level star containers
    
    levels.forEach((levelContainer, index) => {
        const level = index + 1; // Levels are 1-based index
        const stars = localStorage.getItem(`${storyKey}_stars_level${level}`) || 0; // Retrieve stored stars for the specific story
        console.log(`Displaying ${stars} stars for level ${level}`);
        
        const starIcons = levelContainer.querySelectorAll('.fas.fa-star'); // Select the star icons

        
        starIcons.forEach((star, starIndex) => {
            if (starIndex < stars) {
                star.classList.add('active'); // Add 'active' class to show filled star
            } else {
                star.classList.remove('active'); // Remove 'active' class to show unfilled star
            }
        });
    });
}



function resetProgress(storyKey) {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
        localStorage.removeItem('lastSolvedPuzzleLevel'); // Clear the last solved level
        for (let i = 1; i <= puzzles.length; i++) {
            localStorage.removeItem(`${storyKey}_stars_level${i}`);
            localStorage.removeItem(`${storyKey}_timeSpent_level${i}`);
            localStorage.removeItem(`${storyKey}_attempts_level${i}`);
        }
        console.log(`Progress for ${storyKey} has been reset.`);
        alert(`All progress for ${storyKey} has been reset.`);
        displayStars(storyKey); // Pass storyKey to ensure stars display correctly
    } else {
        console.log('Progress reset was canceled.');
    }
}

function clearLocalStorage() {
    if (confirm('Are you sure you want to clear all data? This action cannot be undone.')) {
        const password = prompt('Please ask your Teacher to enter the password to confirm:');
        
        if (password === 'tutor') {
            localStorage.clear();
            alert('All local storage data has been cleared.');
            console.log('Local storage has been cleared.');
            window.location.reload();
        } else {
            alert('Incorrect password. Data reset has been canceled.');
            console.log('Incorrect password. Clear local storage action was canceled.');
        }
    } else {
        console.log('Clear local storage action was canceled.');
    }
}








// Add event listeners for puzzle start and submission
document.querySelectorAll('.puzzle-button').forEach(button => {
    button.addEventListener('click', function() {
        const level = localStorage.getItem('lastSolvedPuzzleLevel') || currentLevel;
        ProgressTracker.startTimer(level);
    });
});

// Trigger when puzzle is solved (add to puzzle submission logic)
document.querySelector('#submitPuzzle').addEventListener('click', function() {
    const storyKey = getCurrentStoryKey();  // Function to get the correct story key dynamically
    const level = localStorage.getItem('lastSolvedPuzzleLevel') || currentLevel;

    ProgressTracker.recordAttempt(storyKey, level);
    ProgressTracker.calculateStars(storyKey, level);
});

function getCurrentStoryKey() {
    // Logic to determine the current story, for example based on the URL or game state
    if (window.location.href.includes('roma')) {
        return 'roma';
    } else if (window.location.href.includes('vig')) {
        return 'vig';
    } else if (window.location.href.includes('Binary')) {
        return 'binary';  // Default or other stories
    } else if (window.location.href.includes('hash')) {
        return 'hash';  // Default or other stories
    }
}
