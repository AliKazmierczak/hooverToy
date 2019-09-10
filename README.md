# Technical Exercise

# Description
This is a simple simulation of an imaginary robotic hoover navigating with given directions around an imaginary room with established dimensions.

# Table of contents
    * Requirements
    * Installation/Setup
    * Running the code
    * Usage
    * Technologies
    * End notes
# Requirements
- Node.js >= 8.10.0
- npm
# Installation/Setup:
- Run:
    ```
    git clone git@github.com:AliKazmierczak/trayHoover.git
    npm install
    ```
# Running the code:
- for tests run:
    ```
    npm test
    ```
- for the application run with 'input.txt' as data souce:
    ```
    npm start 
    ```
- if you want to use an other text file as source material (enter the target file and path in place of '.\newFileName.txt') run:
    ```
    node index.js .\newFileName.txt
    ```

# Usage 
This simulation has little usage outside of fun and games.
## This program
Doesn't allow for invalid placement of the imaginary hoover inside the imaginary room.

# Technologies used:
- node js
- jest

# End notes
I enjoyed this assignment and thought of fun ways to toy with it. 
I have some ideas on how to improve this little simulation and I will most likely do it later on. I didn't do it now since it essentially wasn't part of my assignment ;) 
What I intend to do is to have the program provide a solution of additional directions, in case the imaginary room wasn't fully cleaned of dirt patches.