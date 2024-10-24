#!/bin/bash

# Webapp Setup Script

# Set up the web app directory
WEBAPP_DIR="/var/www/html/"
if [ -d "$WEBAPP_DIR" ]; then
  sudo rm -rf "$WEBAPP_DIR"
fi

# Create the web app directory and copy files
sudo mkdir -p "$WEBAPP_DIR"
# Copy files from the current directory to the web app directory
sudo cp -r ./* "$WEBAPP_DIR"

# Set permissions
sudo chown -R www-data:www-data "$WEBAPP_DIR"
sudo chmod -R 755 "$WEBAPP_DIR"

# Restart Apache to apply changes
sudo systemctl restart apache2

# Create a launch_mission.sh file to start the mission experience
echo "#!/bin/bash

# Environment Variables
export NO_AT_BRIDGE=1
export GTK_A11Y=none

# ANSI color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Function to simulate typing
simulate_typing() {
    text=\"\$1\"
    for ((i=0; i<\${#text}; i++)); do
        echo -n \"\${text:\$i:1}\"
        sleep 0.05
    done
    echo
}

# Simulate receiving mission
echo -e \"\${RED}INCOMING TRANSMISSION\${NC}\"
echo -e \"\${YELLOW}\$(simulate_typing 'Decrypting...')\${NC}\"
echo -e \"\${GREEN}TRANSMISSION DECRYPTED\${NC}\"

echo
echo -e \"\${CYAN}\$(simulate_typing 'Agent, your mission, should you choose to accept it:')\${NC}\"
echo -e \"\${MAGENTA}\$(simulate_typing 'The world of cryptography is in chaos. Your task is to navigate through time, mastering encryption techniques from different eras to secure our future.')\${NC}\"

echo -e \"\${BLUE}\$(simulate_typing 'Your journey will take you through:')\${NC}\"
echo -e \"\${YELLOW}\$(simulate_typing '  • Ancient Rome: Crack the Caesar Cipher')\${NC}\"
echo -e \"\${YELLOW}\$(simulate_typing '  • Modern Age: Decipher the Vigenère Code')\${NC}\"
echo -e \"\${YELLOW}\$(simulate_typing '  • Digital Era: Master Binary Encryption')\${NC}\"
echo -e \"\${YELLOW}\$(simulate_typing '  • Quantum Future: Unravel Hash Functions')\${NC}\"

echo -e \"\${GREEN}\$(simulate_typing 'Initiating time travel sequence...')\${NC}\"
for ((i=5; i>0; i--)); do
    echo -e -n \"\${GREEN}\$i... \${NC}\"
    sleep 1
done
echo -e \"\${GREEN}LAUNCH!\${NC}\"

# Open browser to localhost
sleep 0.5
echo -e \"\n\${CYAN}Opening secure channel to mission control...\${NC}\"
firefox --new-window http://localhost

echo -e \"\n\${GREEN}Good luck, Agent... \${NC}\"
sleep 3" > ~/Desktop/launch_mission.sh

# Set the launch_mission.sh file as executable
chmod +x ~/Desktop/launch_mission.sh

# Create a localhost.desktop file to start the mission experience
echo "[Desktop Entry]
Name=CyberApp Mission
Comment=Launch mission briefing and start localhost
Exec=gnome-terminal -- bash -c '~/Desktop/launch_mission.sh; exec bash'
Icon=utilities-terminal
Terminal=true
Type=Application
X-GNOME-Autostart-enabled=true" > ~/Desktop/launch_cyberapp_mission.desktop

# Set the desktop file to executable
chmod +x ~/Desktop/launch_cyberapp_mission.desktop

# Display completion message
echo "Web application setup completed successfully! Start the web app by the shortcut on Desktop or Visit http://localhost/ in Browser to view your app."
