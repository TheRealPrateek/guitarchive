<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h1 align="center">Guit-archive</h1>

  <p align="center">
    A course project made by a student of CodeSquad Boston
    <br />
    <a href="https://elegant-coat-mite.cyclic.app/">Visit Guit-archive</a>
    .
    <a href="https://github.com/CodeSquad-Boston/course-project-TheRealPrateek/issues">Report Bug</a>
    ·
    <a href="https://github.com/CodeSquad-Boston/course-project-TheRealPrateek/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#further-development">Further Development</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



## About The Project


In 2023, I, seeking a career change from broke musician to (hopefully) well-paid developer, enrolled in a six-month web development bootcamp called CodeSquad. As a graduation requirement, CodeSquad students needed to design and code a web app from scratch that:

* Could recieve and store user input in a NoSQL database
* Used [Google OAuth](https://developers.google.com/identity/protocols/oauth2) so that users could create and log into an account
* Was built in the [Express.js](https://expressjs.com/) framework

While thinking about what kind of project could satisfy these requirements, I remembered one of my constant struggles as a musician: anytime I wanted to look up guitar tablature or guitar chords for a song that I wanted to learn, I was forced to go [Ultimate-Guitar.com](https://www.ultimate-guitar.com/), a user-driven database that paywalls many of its most useful features. Thus, I set out to create a web app that had most of the same features wuthout any pay-walling, if only as a proof-of-concept. These features include:

* A user-driven database of guitar tablature and chord charts, available to browse by song or by artist
* Links to YouTube videos on every tab/chart so that users can actually see a demonstration; many guitarists are visual learners after all
* The ability to create an account in order for users to upload tabs and charts on their own

You can visit Guit-archive [here](https://elegant-coat-mite.cyclic.app/).
  

### Built With

Guit-archive was built in [Express.js](https://expressjs.com/) and uses [Google OAuth](https://developers.google.com/identity/protocols/oauth2) for maintaining user credentials. Guit-archive was originally deployed on [Cyclic.sh](https://www.cyclic.sh/). The current version of the project is deployed on [Netlify](https://www.netlify.com/).


<p align="right">(<a href="#top">back to top</a>)</p>



## Getting Started

To run a local copy of Guit-archive, start by signing up for [Node Package Manager](https://www.npmjs.com/). Use the following command to make sure you have the latest version.

  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the project repo.
   
   ```sh
   git clone https://github.com/CodeSquad-Boston/course-project-TheRealPrateek.git
   ```
2. Install NPM packages.
   
   ```sh
   npm install
   ```
3. Start the server.
   
   ```js
   nodemon app.js
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



## Further Development

While this project was designed to be a proof-of-concept rather than an active website with a dedicated user-base, I do have plans to further refine Guit-archive now that I've graduated. The mast important update would be to switch to a relational database as a NoSQL database prevents the app's organizational features from working properly. If you would like to suggest a feature, please submit a report [here](https://github.com/CodeSquad-Boston/course-project-TheRealPrateek/issues).


<p align="right">(<a href="#top">back to top</a>)</p>



## Contact

Email - [poddarp312@gmail.com](mailto:poddarp312@gmail.com)

Project Link: https://github.com/CodeSquad-Boston/course-project-TheRealPrateek.git


<p align="right">(<a href="#top">back to top</a>)</p>



## Acknowledgments

I'd be remiss if I didn't mention [Font Awesome](https://fontawesome.com) and [Google Fonts](https://fonts.google.com/), where I got all of the fonts and icons that I used for this project.


<p align="right">(<a href="#top">back to top</a>)</p>
