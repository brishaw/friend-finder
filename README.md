## Friend Finder ("LIPS" - Let's Introduce Perfect Strangers)
A compatibility-based "FriendFinder" application

## Link to the deployed app
https://afternoon-shelf-51759.herokuapp.com/

## What is this repo or project?
Friend Finder is a full-stack site which will take in results from user's surveys, then compare the answers with those from other users. The app will then display the name and picture of the user with the best overall match. 

## How does it work?
Friend Finder uses Express to handle the routing and the application has been deployed to Heroku so other users can fill it out.

1. The survey has 10 random questions. Each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with the question.

2. There is a `server.js` file that requires the basic npm packages used in class: `express` and `path`.

3. The `htmlRoutes.js` file includes two routes:

   * A GET Route to `/survey` which displays the survey page.
   * A default, catch-all route that leads to `home.html` which displays the home page. 

4. The `apiRoutes.js` file contains two routes:

   * A GET route with the url `/api/friends`. This is used to display a JSON of all possible friends.
   * A POST routes `/api/friends`. This is used to handle incoming survey results. This route also is used to handle the compatibility logic. 

5. The application's data is saved inside of `app/data/friends.js` as an array of objects.

The user's most compatible friend is determined by comparing the difference between the current user's scores against those from other users, question by question. Then the differences are added up to calculate the `totalDifference`.

## Who will use this repo or project?
**Anyone** who enjoys seeing who their "perfect stranger" match could be...

## What is the goal of this project?
To learn how to create a full-stack application that uses Node, Express, HTML, CSS, JavaScript and jQuery.