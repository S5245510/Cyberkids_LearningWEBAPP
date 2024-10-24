/* function isDevToolsOpen() {
    var element = new Image();
    var devtoolsOpen = false;

    // Custom getter for console logging detection
    element.__defineGetter__("id", function() {
        devtoolsOpen = true;
    });

    // Performance timing to detect delays caused by dev tools
    var start = performance.now();
    console.log(element);
    var end = performance.now();

    // If the getter triggers or rendering takes too long, dev tools are open
    return devtoolsOpen || (end - start) > 100;
}
*/

const AchievementSystem = {
    achievements: {
        // Roma achievements
        roma_novice: { 
            unlocked: false, 
            title: "Roma Novice",
            description: "Earned 5 stars in the Roma story",
            logo: "achievment5.png",
            condition: () => ProgressTracker.getTotalStars('roma') >= 5 
        },
        roma_adept: { 
            unlocked: false, 
            title: "Roma Adept",
            description: "Earned 10 stars in the Roma story",
            logo: "achievment2.png",
            condition: () => ProgressTracker.getTotalStars('roma') >= 10 
        },
        caesar_emperor: { 
            unlocked: false, 
            title: "Caesar Emperor",
            description: "Legend! Earned 15 stars in the Roma story",
            logo: "achievment1.png",
            condition: () => ProgressTracker.getTotalStars('roma') >= 15 
        },
        
        // Vigenère achievements
        vig_apprentice: { 
            unlocked: false, 
            title: "Vigenère Apprentice",
            description: "Earned 5 stars in the Vigenère story",
            logo: "achievment5.png",
            condition: () => ProgressTracker.getTotalStars('vig') >= 5 
        },
        vig_expert: { 
            unlocked: false, 
            title: "Vigenère Expert",
            description: "Earned 10 stars in the Vigenère story",
            logo: "achievment2.png",
            condition: () => ProgressTracker.getTotalStars('vig') >= 10 
        },
        vig_grandmaster: { 
            unlocked: false, 
            title: "Vigenère Grandmaster",
            description: "Earned 15 stars in the Vigenère story",
            logo: "achievment1.png",
            condition: () => ProgressTracker.getTotalStars('vig') >= 15 
        },
        
        // Additional achievements
        cryptography_enthusiast: {
            unlocked: false,
            title: "Cryptography Enthusiast",
            description: "Started  both Roma and Vigenère stories",
            logo: "second.gif",
            condition: () => ProgressTracker.getTotalStars('roma') > 0 && ProgressTracker.getTotalStars('vig') > 0
        },
        perfect_score: {
            unlocked: false,
            title: "Perfect Cryptographer",
            description: "Achieved maximum stars in Roma and Vigenère stories",
            logo: "perfectscore.gif",
            condition: () => ProgressTracker.getTotalStars('roma') == 18 && ProgressTracker.getTotalStars('vig') >= 15
        },

        roma_chapter_2: {
            unlocked: false,
            title: "The Tunnel Explorer",
            description: "Unlocked Chapter 2 of the Roma story",
            logo: "Roma.jpg",
            condition: () => parseInt(localStorage.getItem('romaStoryLevel')) >= 2
        },
        roma_chapter_4: {
            unlocked: false,
            title: "The Camp Infiltrator",
            description: "Unlocked Chapter 4 of the Roma story",
            logo: "Roma3_3.jpeg",
            condition: () => parseInt(localStorage.getItem('romaStoryLevel')) >= 4
        },
        roma_chapter_6: {
            unlocked: false,
            title: "The Battle Strategist",
            description: "Unlocked Chapter 6 of the Roma story",
            logo: "Roma5_2.jpeg",
            condition: () => parseInt(localStorage.getItem('romaStoryLevel')) >= 6
        },
        roma_entry: {
            unlocked: false,
            title: "Roma Entry",
            description: "First reach in Roma",
            logo: "REP2.jpeg",
            condition: () => parseInt(localStorage.getItem('roma_stars_level1')) >= 1
        },

        vig_entry: {
            unlocked: false,
            title: "Vigenère Entry",
            description: "First reach in Vigenère",
            logo: "VigPoster.png",
            condition: () => parseInt(localStorage.getItem('vig_stars_level1')) >= 1
        },

        troll: {
            unlocked: false,
            title: "F12 Master",
            description: "Think you get the answer?",
            logo: "rick.gif",
            condition: () => false
        },

        F12_master: {
            unlocked: false,
            title: "F12 Master",
            description: "F12 to view the answer ",
            logo: "troll.png",
            condition: () => false
        },

        roma_tool: {
            unlocked: false,
            title: "Roma Tool",
            description: "Have you successed ",
            logo: "first.gif",
            condition: () => false
        },
        vig_tool: {
            unlocked: false,
            title: "Vigenère Tool",
            description: "Try another key and see what happens",
            logo: "first.gif",
            condition: () => false
        },

        // Binary achievements
        binary_entry: {
            unlocked: false,
            title: "Binary Entry",
            description: "First reach in Binary",
            logo: "BEP1.png",
            condition: () => parseInt(localStorage.getItem('binary_stars_level1')) >= 1
        },

        binary_novice: { 
            unlocked: false, 
            title: "Binary Novice",
            description: "Earned 6 stars in the Binary story",
            logo: "achievmentb4.png",
            condition: () => ProgressTracker.getTotalStars('binary') >= 6 
        },
        binary_intermediate: { 
            unlocked: false, 
            title: "Binary Intermediate",
            description: "Earned 12 stars in the Binary story",
            logo: "achievmentb3.png",
            condition: () => ProgressTracker.getTotalStars('binary') >= 12 
        },
        binary_advanced: { 
            unlocked: false, 
            title: "Binary Advanced",
            description: "Earned 18 stars in the Binary story",
            logo: "achievmentb5.png",
            condition: () => ProgressTracker.getTotalStars('binary') >= 18 
        },
        binary_expert: { 
            unlocked: false, 
            title: "Binary Expert",
            description: "Earned 24 stars in the Binary story",
            logo: "achievmentb1.png",
            condition: () => ProgressTracker.getTotalStars('binary') >= 24 
        },
        binary_master: { 
            unlocked: false, 
            title: "Binary Master",
            description: "Completed all 30 stars in the Binary story!",
            logo: "perfect.gif",
            condition: () => ProgressTracker.getTotalStars('binary') >= 30 
        },

        // Hash achievements
        hash_beginner: { 
            unlocked: false, 
            title: "Hash Beginner",
            description: "Earned 3 stars in the Hash story",
            logo: "achievment5.png",
            condition: () => ProgressTracker.getTotalStars('hash') >= 3 
        },
        hash_proficient: { 
            unlocked: false, 
            title: "Hash Proficient",
            description: "Earned 6 stars in the Hash story",
            logo: "achievment2.png",
            condition: () => ProgressTracker.getTotalStars('hash') >= 6 
        },
        hash_expert: { 
            unlocked: false, 
            title: "Hash Expert",
            description: "Completed all 9 stars in the Hash story!",
            logo: "achievment1.png",
            condition: () => ProgressTracker.getTotalStars('hash') >= 9 
        },

        // extra achievements
        mission_start: {
            unlocked: false,
            title: "Mission Start",
            description: "Get ID and be ready, Agent",
            logo: "coollogo_com-4309433.png",
            condition: () => false
        },

    },

    initializeUser() {
        Object.keys(this.achievements).forEach(achievement => {
            if (!localStorage.getItem(achievement)) {
                localStorage.setItem(achievement, 'false');
            }
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
        if (localStorage.getItem(achievement) !== 'true') {
            localStorage.setItem(achievement, 'true');

            // Update the count of unlocked achievements
            let achievementsUnlocked = parseInt(localStorage.getItem('achievements_unlocked') || 0);
            achievementsUnlocked++;
            localStorage.setItem('achievements_unlocked', achievementsUnlocked.toString());
            this.displayAchievementNotification(achievement);
            }

           
        },
    

    displayAchievementNotification(achievement) {
        const achievementData = this.achievements[achievement];
        const notification = document.createElement('div');
        notification.className = 'achievement-notification';
        notification.innerHTML = `
            <img src="images/${achievementData.logo}" alt="${achievementData.title} logo">
            <div>
                <h3>Achievement Unlocked!</h3>
                <p>${achievementData.title}</p>
                <p class="achievement-description">${achievementData.description}</p>
            </div>
        `;
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.remove();
        }, 5000);
    },

    updateStars(level, stars) {
        // This method can be used to trigger achievement checks when stars are updated
        this.checkAchievements();
    },

    getUnlockedAchievements() {
        return Object.keys(this.achievements).filter(achievement => 
            localStorage.getItem(achievement) === 'true'
        );
    },

    displayAchievementNotification(achievement) {
        const achievementData = this.achievements[achievement];
        const notification = document.createElement('div');
        notification.className = 'achievement-notification';
        notification.innerHTML = `
            <img src="../images/${achievementData.logo}" alt="${achievementData.title} logo">
            <div>
                <h3>Achievement Unlocked!</h3>
                <p>${achievementData.title}</p>
                <p class="achievement-description">${achievementData.description}</p>
            </div>
        `;
        document.body.appendChild(notification);
    
        // Create and append style if it doesn't exist
        if (!document.getElementById('achievement-notification-style')) {
            const style = document.createElement('style');
            style.id = 'achievement-notification-style';
            style.textContent = `
                .achievement-notification {
                    position: fixed;
                    top: -100px;
                    left: 50%;
                    transform: translateX(-50%);
                    background-color: #f0f0f0;
                    border: 2px solid #4CAF50;
                    border-radius: 10px;
                    padding: 15px;
                    z-index: 1000;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    display: flex;
                    align-items: center;
                    max-width: 400px;
                    opacity: 0;
                    transition: top 0.5s ease-out, opacity 0.5s ease-out;
                }
                .achievement-notification img {
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    margin-right: 15px;
                }
                .achievement-notification h3 {
                    margin: 0 0 5px 0;
                    color: #4CAF50;
                }
                .achievement-notification p {
                    margin: 0;
                }

                .achievement-notification .achievement-description {
                margin: 5px 0 0;
                color: #333333;
                font-weight: 500;
            }
            `;
            document.head.appendChild(style);
        }
    
        // Trigger the animation
        setTimeout(() => {
            notification.style.top = '20px';
            notification.style.opacity = '1';
        }, 100);
    
        // Remove the notification after 5 seconds
        setTimeout(() => {
            notification.style.top = '-100px';
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 600);
        }, 6000);
    },


    testDisplayAchievement: function(achievementKey) {
        console.log(`Attempting to display achievement: ${achievementKey}`);
        if (this.achievements[achievementKey]) {
            console.log(`Achievement "${achievementKey}" found. Displaying notification.`);
            this.displayAchievementNotification(achievementKey);
        } else {
            console.error(`Achievement "${achievementKey}" not found.`);
        }
    },

   /* checkDevToolsAchievement() {
        if (isDevToolsOpen() && !this.achievements.F12_master.unlocked) {
            this.unlockAchievement('F12_master');
        }
    } */



    
};

/* setInterval(() => {
    AchievementSystem.checkDevToolsAchievement();
}, 1000);  */




// Initialize achievements when the script loads

    AchievementSystem.initializeUser();

