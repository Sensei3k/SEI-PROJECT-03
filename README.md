# General Assembly Project 3: Dating Application (Crush)

## Timeframe
7 days

## Tech used
HTML5, XML
SCSS, CSS, Bulma
JavaScript (ES6): React, Node.js - Express
Mongoose, MongoDB
Git + GitHub

## Installation
Clone or download the repo 
In terminal run 3 things: mongod, yarn run:server, yarn run:client

## Our Web Application - Crush
link to hosted version ----> http://crush-sei.herokuapp.com/#/


## Application Overview

<img width="1414" alt="Screenshot 2019-06-18 at 16 38 19" src="https://user-images.githubusercontent.com/45519121/59702494-c469f380-91ef-11e9-93de-6f49341739de.png">

The premise of our Web App, wasn’t to try and create something that had never been done before, but rather to demonstrate what we had learned so far on the course, all the while challenging ourselves to learn something completely new, that we’d not yet learned on the course. Therefore the main focus of our project was our multiple matching algorithms, which worked by extracting the data that was input by each user as they edited their profile. 


## Process
When breaking down our project, we decided to do so in what seemed like the most logical order. First we tackled the database/API, then we moved onto the backend, where we built our User model, structured our seeds file and got started on our index.js. Once this structure was in place, and we had something to work with, we decided to split the work down into Frontend and Backend files; those of us who had a preference for the backend took on relevant files and the same for those of us with a preference for the backend, However, we all helped out in different areas when an extra pair of hands or a second opinion was in need. Additionally, we checked in with each other several times throughout the day and kept our group trello board up to date with what we were currently working on and what needed to be done. Both of these things combined made working in a group much easier as we found we were always aware of what each of us were working, we could understand each others code and we could avoid merge conflicts.

We decided to tackle some of the biggest and most important challenges first. For us this was on the backend with the Matching Algorithms. Being aware that all the popular Dating Applications available pay millions of pounds to get their matching algorithms working to such a high standard, we knew it was going to be pretty tricky to try and replicate even a fraction of what they do, and we only had a week to do so. Please see pictures below for our Matching algorithms.

<img width="1224" alt="Screenshot 2019-06-18 at 16 48 35" src="https://user-images.githubusercontent.com/45519121/59702754-5c67dd00-91f0-11e9-97eb-6033bf18c74d.png">

Another big challenge for us was setting up an internal messaging system so that, once matched with one another, users could communicate with each other. As the week went on, and we started running out of time, we realised it was going to be risky to try and get this finished before the end of the week. But we wanted the users to still be able to react out to one another, therefore we went with a compromise, which was comments. We wanted to make it so that the user could leave a comment on any of their matches profiles and that message would be stored in on that user through the user of a commentSchema in the user model, which can be seen in the picture below.

When it came to writing the Frontend for the comments section, we wanted the comments to be private so that they would act a bit more like an internal messaging system. We felt this would be more user friendly as it would mean that only the user who’s profile it is can see the comments people have left on their profile. The user would then be able to click on the comment and it would redirect them to the profile of whoever left the comment, and allow them to reply by writing a comment on their profile.

<img width="343" alt="Screenshot 2019-06-18 at 16 49 16" src="https://user-images.githubusercontent.com/45519121/59746583-1ef66480-926f-11e9-9472-977eb9de1c29.png"> <img width="427" alt="Screenshot 2019-06-18 at 16 49 32" src="https://user-images.githubusercontent.com/45519121/59703033-fc256b00-91f0-11e9-93a9-0d89735d3057.png">

When it came to the homepage, we had a couple of different approaches. Initially we thought it would be better to
have a static image on the page, with some information describing our website to users visiting the website with a
CTA (Call to action) that would prompt the user to sign up. In the end we settled for keeping the CTA as it was but 
instead of having a static background image, we decided to have the images on the homepage transition to different 
images on a set interval of 4 seconds. 

To achieve this, we had to create a seperate file path of images in an array that would be displayed on the homepage 
background. Then import those images into the home file path and then set them on an interval of 4 seconds on an 
ease transition method in scss. To make the visual transition look seamless.

We were pleased with the upload photo feature, which like other dating apps, would allow you to upload a photo from a range of different places including: social media platforms, images stored on your device or even take one from your device at that moment (if you were using a smart phone as opposed to a computer. To do so we used a package called file stack which we installed through the terminal and imported onto the relevant page in atom. Handle upload function was then written to tell the computer what to do with the image once the user had selected ‘upload’. The code for this can be seen below. The snippets have been taken from the UserEdit.js page.

 
## Challenges
Delegating work:
Managing our expectations:
Matching Algorithms:
Getting forms to look how we wanted them to:
Git merging:
Time Constraints


## Wins
Matching Algorithms:
Attention grabbing homepage:
Ability to communicate with matches:
User friendly features: loading page, no matches found page, user path redirection - register to login, to user profile, to edit profile or matches etc.
We had fun making it:


## Future Features
Initially our scope for this project and what we wanted to achieve was very large and we realised halfway through the project that in order to achieve all of these things we would need a lot more time. Therefore, we have a rather long list of additional features that we would like to have included in the project and will hopefully add in the future. Those are as follows:
- Using Geolocation, suggest date ideas to both users, taking both of their locations and suggest a good venue in the middle for both to meet.
- Incorporate a Shallow mode like the swipe function used in Tinder and other dating apps.
- Application interaction: for example, being able to set up dates with another user and the app giving you the option to put this date in your phone's calendar.
- Internal messaging system, either as well as being able to comment on someone's profile, or just instead of.
- Links to users social media sites, which we explored doing through the use of a package called Mongoose Friends.
