# 2048 - A Online Game

<!-- TABLE OF CONTENTS -->

# Table of Contents

- [Contents](#table-of-contents)
    - [About The Project](#about-the-project)
        - [Game Walkthrough](#game-walkthrough)
        - [Extra Features](#extra-features)
    - [Built With](#built-with)
    - [License](#license)
    - [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

A Popular Online 2048-Game. It is a Single-Player Sliding Tile Puzzle Game.

### Game Walkthrough

<table border="0" align="center">
  <tr>
      <p align="center" >
          <a href="https://runtime-terror-team.github.io/2048-Game" target="_blank">
              <img align="center" src="./readme/gameplay.gif" alt="Basic composition: square and circle" />
              <h4 align="center">Game Page</h4>
          </a>
      </p>
  </tr>
  <tr>
    <td>
      <a href="https://runtime-terror-team.github.io/2048-Game" target="_blank">
        <img src="./readme/game_complete.gif" alt="GameCompelete Popup" />
        <h4 align="center">GameCompelete Popup</h4>
      </a>
    </td>
    <td>
    <a href="https://runtime-terror-team.github.io/2048-Game" target="_blank">
        <img src="readme/game_over.gif" alt="GameOver Popup" />
        <h4 align="center">GameOver Popup</h4>
      </a>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <a href="https://runtime-terror-team.github.io/2048-Game" target="_blank">
        <img src="./readme/howtoplay.png" alt="How to Play Popup" />
        <h4 align="center">How to Play Popup</h4>
      </a>
    </td>
    <td>
        <a href="https://runtime-terror-team.github.io/2048-Game" target="_blank">
          <img src="readme/tips_tricks.gif" alt="Tips and Tricks Popup" />
          <h4 align="center">Tips and Tricks Popup</h4>
      </a>
    </td>
  </tr>
</table>

### Extra Features
* Store HighScore in Local Storage
* Addition of Score Animation
* Who first open the game first, HowToPlay Popup showup

## Basic structure of the project repository 📂

```terminal
|- build              # production build
|- public             # Any files within this directory will not be processed by Webpack but copied directly to the build folder.
|- readme             # Contains files helps to create project readme
|- src:               # Contains all source code for the React application.
|
    |- assets
    |- container
    |
        |- profile
            |- profile-card
            |- profile
        |- header
        |- about
        |- main               # Contains main element of landing page
        
    |- game:
    |
            |- assets         # Contains media file
                |- image      # all image store here 
            |- components     # Contains all the components used within the app.
            |- helper         # Contains helper functions
            |- hooks          # Contains custom hooks
            |- pages          # Contaion pages used in the projects
            |- styles         # Contains sass or css files.
            |- game           # Conatin game main element
            
    |- App.js
    |- index.js
```

## Built With
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

<!-- LICENSE -->

## License

MIT License

## Acknowledgements

- [InspireBy](https://play2048.co/)
- [GameLogic](https://www.youtube.com/watch?v=ca0BEH2bBLs)
- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Pages](https://pages.github.com)
- [GitHub Socialify](https://socialify.git.ci/)
- [Img Shields](https://shields.io)
