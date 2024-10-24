#!/bin/bash

# Step 1: Install dependencies from local .deb files
echo "Installing dependencies from local files..."

# Replace with the actual path to the .deb packages for vlc and apache2
sudo dpkg -i ./packages/apache2.deb
sudo dpkg -i ./packages/vlc.deb
sudo apt-get install -f  # To resolve any dependencies

# Step 2: Copy web app files to /var/www/html
echo "Setting up the web app in /var/www/html..."
sudo rm -rf /var/www/html/*  # Clear existing web content
sudo cp -r .home/Downloads/cyberkids/webapp/* /var/www/html/

# Step 3: Set proper permissions
echo "Setting permissions..."
sudo chown -R www-data:www-data /var/www/html
sudo chmod -R 755 /var/www/html

# Step 4: Enable and start Apache2
echo "Enabling and starting Apache2..."
sudo systemctl enable apache2
sudo systemctl start apache2

# Step 5: Create a desktop shortcut to open the web app
echo "Creating desktop shortcut..."
cat <<EOL > ~/Desktop/LaunchWebApp.desktop
[Desktop Entry]
Name=Launch Web App
Comment=Open the web app in your browser
Exec=xdg-open http://localhost
Icon=firefox
Terminal=false
Type=Application
EOL

# Make the desktop shortcut executable
chmod +x ~/Desktop/LaunchWebApp.desktop

# Step 6: Finish
echo "Web app setup complete. You can launch it using the desktop shortcut."
