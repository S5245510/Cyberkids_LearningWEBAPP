// achievements.js

const AchievementSystem = {
    achievements: {
        firstPuzzle: { unlocked: false, condition: () => ProgressTracker.attempts[1] === 1 },
        speedDemon: { unlocked: false, condition: () => localStorage.getItem('timeSpentLevel1') < 300 }
    },

    initializeUser() {
        Object.keys(this.achievements).forEach(achievement => {
            localStorage.setItem(achievement, false);
        });
    },

    checkAchievements() {
        Object.keys(this.achievements).forEach(achievement => {
            if (this.achievements[achievement].condition()) {
                this.unlockAchievement(achievement);
            }
        });
    },

    unlockAchievement(achievement) {
        localStorage.setItem(achievement, true);
        console.log(`Achievement Unlocked: ${achievement}`);
        // Display achievement UI or notification
    },

    updateStars(level, stars) {
        // Unlock achievements based on star count
        if (stars === 3) this.unlockAchievement('perfectScore');
    }
};

// Achievement check example
AchievementSystem.checkAchievements();
