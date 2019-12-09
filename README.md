# Technical Exercise

# Description
This is a simple simulation of an imaginary robotic hoover navigating with given directions around an imaginary room with established dimensions.

# Table of contents
    * Requirements
    * Installation/Setup
    * Running the code
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

# Technologies used:
- node js
- jest
