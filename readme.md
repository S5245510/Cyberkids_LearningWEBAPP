# Cyberkids

## Table of Contents

1. [Aims and Objectives](#aims-and-objectives)
2. [Features](#features)
3. [Installation and Setup](#installation-and-setup)
   - [Requirements](#requirements)
   - [Running Cyberkids](#running-cyberkids)
   - [Offline Deployment (Linux VM)](#offline-deployment-linux-vm)
4. [Technical Details](#technical-details)
5. [Usage](#usage)
6. [Acknowledgments](#acknowledgments)

Cyberkids is an interactive learning web application designed for high school students to gain a foundational understanding of cybersecurity concepts. It offers engaging lessons covering Caesar cipher, Vigenère cipher, Binary and Hexadecimal systems, and Hash functions. The web app aims to make learning about cybersecurity fun and accessible by incorporating interactive features.

Try the demo (https://d6f79bdc.cyberkids-learningwebapp.pages.dev )

### Aims and Objectives

E-learning is very common in most Brisbane high schools; however, most of the learning material consists of simple digitized paper material, with simple text and questions. Without fully utilizing the power of technology, we want to take a step forward to provide a better learning experience git commit -m "Update with latest changes"
that motivates and encourages students to learn more complicated concepts and knowledge. By integrating interactive features, storytelling, and puzzles, Cyberkids aims to create an immersive learning environment that inspires curiosity and a deeper understanding of cybersecurity.

### Features

- **Stories and Puzzles**: Integrated stories and puzzles throughout the learning experience to create a more engaging journey. The chapters and puzzles are designed from easy to hard levels to gradually build student confidence and skills.

![Alt Text](/screenshot/feature1.png)

- **Interactive Lessons**: Learn about encryption, hashing, and number systems with examples and activities.

![Alt Text](/screenshot/feature2.png)


- **Dynamic Story Endings**: Student performance and ratings while solving puzzles will affect the final outcome of their journey. Depending on their success, students will either achieve a successful ending or face a bad ending, adding an element of challenge and excitement.

![Alt Text](/screenshot/feature3.png)

- **Achievement, Scoreboard, and Rating System**: Track performance with achievements, a scoreboard, and a rating system to motivate and encourage students.

![Alt Text](/screenshot/feature4.png)
  ![Alt Text](/screenshot/feature42.png)
  ![Alt Text](/screenshot/feature43.png)

- **Hint System**: Hints are provided in every puzzle and chapter to ensure students are not frustrated by failure and can continue learning.

![Alt Text](/screenshot/feature5.png)

- **Tutor-Control**: Available on the chapter list page, where tutors can unlock specific chapters for students by entering a code. Below is an example of the HTML code used to implement this feature:

  ```html
  <div id="unlockModal" class="modal">
      <div class="modal-content">
          <h2>Select Chapters to Unlock</h2>
          <div class="checkbox-group">
              <label>
                  <input type="checkbox" id="vigCheckbox"> Vigenère Cipher (Chapter 2) code: BELLASO
              </label>
              <label>
                  <input type="checkbox" id="binaryCheckbox"> Binary Code (Chapter 3) code: BOOLE
              </label>
              <label>
                  <input type="checkbox" id="hashCheckbox"> Hash Functions (Chapter 4) code: MERKLE
              </label>
          </div>
          <button onclick="updateChapters()">Update</button>
      </div>
  </div>
  ```

- **Offline Capability**: Designed to be fully functional in offline environments, ideal for restricted access networks or local-only scenarios.

- **Progress Tracking**: User progress is saved locally via `localStorage`, allowing students to track their learning journey.

- **Local Resources**: All media resources (videos, images, fonts, and code) are packaged within the app, ensuring complete offline availability.

- **AI-Generated Content**: Includes our own AI-generated content such as pictures, videos, and animations to enrich the learning experience.

- **Simulations**: Exciting simulations, such as hacking and encoding/decoding, are included in all stories to make the experience more thrilling and immersive.

- **Modular Development**: The code is developed in a modular way, allowing for easy expansion. If users want to add more content, such as new chapters, additional puzzles, or personalized achievements, they can do so by expanding the arrays in the corresponding code files. For example, to add a new puzzle in `vig_Puzzle.html`, simply follow the current format:

  ```javascript
  const puzzles = [
      {
          question: "Clue: Your first stop brings you to a towering presence that once stored life's most essential element. Remember the challenge of climbing higher?<br><br><strong class='encrypted-word'>Encrypted Word: HADICTKRV</strong>",
          answer: "WaterTank",
          hint: "This structure is typically tall and cylindrical, used to store and distribute water in communities or large buildings."
      },
      // skipping middle codes
      {
          question: "Clue: Your journey nears its end, where the sun sets and the rocking chair waits. This is where reflections become clearer, and the memories rest. What is the name of this peaceful final stop?<br><br><strong class='encrypted-word'>Encrypted Word: AOBGS</strong>",
          answer: "Porch",
          hint: "This covered entrance or platform along the outside of a house is often used for relaxation and enjoying the outdoors."
      }
  ];
  ```

  The puzzle page will automatically update the progress bar, total questions, and integrate with the `ProgressTracker` function without any further user modifications.

## Installation and Setup

# Installation Instructions for CyberApp

Welcome to CyberApp! Follow these steps to set up the web application and experience the immersive mission briefing.

## Prerequisites

    System Requirements 

    Operating System: Ubuntu or another Linux-based system preferred/ Any platform with local webserver allowed 

    Web Server: Apache Web Server (apache2) 

    Media Player: VLC Media Player (for MP4 playback) 

    Web Browser: Firefox/ Chrome/ Edge 

    Admin/ Sudo privileges (for installation) 

    Testing VM Specifications (Minimum):  

    3 CPUS 

    4GB RAM  

    64MB VideoMemory 

    1GB available Space 

## Step-by-Step Installation

1. **Download and Prepare the Setup Script and Source Code**

   - cd \<repository\_directory>Clone the repository from the GitHub:
     ```bash
     git https://github.com/S5245510/Cyberkids_LearningWEBAPP.git
     cd Cyberkids_LearningWEBAPP
     ```
![Alt Text](/screenshot/install1.png)

2. **Run the Setup Script**

   - Make sure the `webapp_setup.sh` script is executable:

     ```bash
     sudo chmod +x webapp_setup.sh
     ```

   - Execute the setup script:

     ```bash
     ./webapp_setup.sh
     ```

   This script will:

   - Create and set up the web app directory in `/var/www/html/`
   - Copy necessary files
   - Set the correct permissions
   - Restart the Apache server
   - Create an immersive mission script (`launch_mission.sh`) and a Desktop shortcut (`launch_cyberapp_mission.desktop`)

![Alt Text](/screenshot/install22.png)

3. **Check the Installation**

   - After running the setup script, you will find a new file on your desktop called **CyberApp Mission**. Double-click this file to start the immersive mission.

   ![Alt Text](/screenshot/install2.png)

   ![Alt Text](/screenshot/install3.png)

  -Make sure the /var/www/html folder has all files from GitHub. 

  ![Alt Text](/screenshot/install32.png)

4. **Troubleshooting**

 

If encounter any permission deny issue, you could try to enter the root level by: 
 

 ```bash
 su -
 ```

 
then open the sudoers.tmp to add user account to root privilage 

 
 ```bash
 sudo visudo
 ```

 ![Alt Text](/screenshot/trouble1.png)


 
Find ”root ALL=(ALL:ALL) ALL”  
Add a line (revise to your name) ”username ALL=(ALL:ALL) ALL” 
Use Ctrl+X to leave and save the file. 
Restart the VM to install again.  

![Alt Text](/screenshot/trouble2.png)
## Uninstallation

To remove CyberApp, delete the web app files and desktop shortcuts manually:

```bash
sudo rm -rf /var/www/html/*
rm ~/Desktop/launch_mission.sh
rm ~/Desktop/launch_cyberapp_mission.desktop
```

Thank you for installing CyberApp! Enjoy the journey through cryptography.



### Running Cyberkids

1. **Mission-Style Startup Script (Linux)**:

   - You can use the provided desktop file `launch_cyberapp_mission.desktop` which shown as "CyberAPP Mission" in Desktop to run the mission-style script (`open_localhost_mission.sh`) automatically.
   - If not executable, run `sudo chmod +x launch_cyberapp_mission.desktop` to make it executable and right-click to "Allow Launching".

     ![Alt Text](/screenshot/run1.png)

    ![Alt Text](/screenshot/run2.png)

   - Simply double-click on "CyberAPP Mission", and it will execute the mission-style script to launch Cyberkids.
   - This adds an interactive experience, creating a more fun and exciting start for students by simulating a mission brief.

   ![Alt Text](/screenshot/install3.png)

   ![Alt Text](/screenshot/run3.png)
  

OR 2.  **Set Up a Local Web Server**:


  -Use Apache or any other web server to host the files locally.

 **Access the Application**: Open your browser and navigate to `http://localhost` (or the port you've configured).

### Offline Deployment (Linux VM)

For the client, Cyberkids is designed to be deployed in a Linux-based virtual machine without internet access. The entire application is self-contained, meaning all resources are available locally.

To deploy:

1. Copy the Cyberkids folder into the Linux VM.
2. Set up a local web server inside the VM (e.g., using Python or Apache).
3. Launch the web server and access Cyberkids through the browser.

## Technical Details

- **LocalStorage for Progress Tracking**: User progress is saved using the browser's `localStorage` feature, allowing consistent tracking without requiring a server backend.
- **Offline Resources**: Videos, images, fonts, and code are all stored locally, ensuring that the application works seamlessly in an offline environment.

## Usage

Cyberkids provides a series of modules, each designed to introduce and reinforce a key concept in cybersecurity:

1. **Caesar Cipher**: Learn how simple substitution ciphers work.
2. **Vigenère Cipher**: Understand more advanced encryption techniques using keyword-based ciphers.
3. **Binary and Hexadecimal Systems**: Explore how computers represent data and how these systems are used in computing.
4. **Hash Functions**: Discover the concept of hashing and its importance in cybersecurity.

Students can watch instructional videos, participate in interactive puzzles, and track their progress throughout the course. All four chapters are related and have storyline and character consistency.

## Contact Information

For any questions or support, please contact:

Tszhoi Leung

- Email: [tszhoilllll@gmail.com](mailto\:tszhoilllll@gmail.com)
- University Email: [tszhoi.leung@griffithuni.edu.au](mailto\:tszhoi.leung@griffithuni.edu.au)

## Acknowledgments

- Griffith University for supporting the development of this web app.
- Dr. Elizabeth Chang for guidance on the cybersecurity content.

![Alt text](../images/decode1.png)
