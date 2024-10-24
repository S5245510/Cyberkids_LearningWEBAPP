#!/bin/bash

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
    text="$1"
    for ((i=0; i<${#text}; i++)); do
        echo -n "${text:$i:1}"
        sleep 0.05
    done
    echo
}

# Simulate receiving mission
echo -e "${RED}INCOMING TRANSMISSION${NC}"

echo -e "${YELLOW}$(simulate_typing "Decrypting...")${NC}"

echo -e "${GREEN}TRANSMISSION DECRYPTED${NC}"


echo
echo -e "${CYAN}$(simulate_typing "Agent, your mission, should you choose to accept it:")${NC}"

echo -e "${MAGENTA}$(simulate_typing "The world of cryptography is in chaos. Your task is to navigate through time,")${NC}"
echo -e "${MAGENTA}$(simulate_typing "mastering encryption techniques from different eras to secure our future.")${NC}"

echo -e "${BLUE}$(simulate_typing "Your journey will take you through:")${NC}"

echo -e "${YELLOW}$(simulate_typing "  • Ancient Rome: Crack the Caesar Cipher")${NC}"
echo -e "${YELLOW}$(simulate_typing "  • Modern Age: Decipher the Vigenère Code")${NC}"
echo -e "${YELLOW}$(simulate_typing "  • Digital Era: Master Binary Encryption")${NC}"
echo -e "${YELLOW}$(simulate_typing "  • Quantum Future: Unravel Hash Functions")${NC}"


echo -e "${GREEN}$(simulate_typing "Initiating time travel sequence...")${NC}"
for i in {5..1}; do
    echo -e -n "${GREEN}$i... ${NC}"
 
done
echo -e "${GREEN}LAUNCH!${NC}"

# Open browser to localhost
sleep 0.5
echo -e "\n${CYAN}Opening secure channel to mission control...${NC}"

firefox --new-window http://localhost


echo -e "\n${GREEN}Good luck, Agent... ${NC}"
sleep 3