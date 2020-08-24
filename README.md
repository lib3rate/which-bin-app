
# 🌳 ReForest 🌳

## Description:
ReForest helps users determine which bin (recycling, organics or garbage) they should discard their waste into through machine learning image recognition. The user will receive points for recycling and organic material and less points for garbage items. This encourages them to consume more recyclable and compostable items. The user scores are linked to an animated svg tree, which grows larger as their points increase. The users can compete with others in the leaderboard and see a forest of a variety of other user trees.

See gifs and images of the final product further down

This project was created by Dmitry Petrov, Julian Bustos and Jehanne Hodge and published as part of our learnings at [Lighthouse Labs.](https://www.lighthouselabs.ca/)

## Features:
- Users can login using their google account through Auth0
- Users can check thier waste by capturing or uploading a photo of thier items. The image recognition will notify them which bin they should discard their waste
- Users will receive more points for recyclable and organic items and fewer points for garbage items
- On the user page, they can see a tree as a representation of their score as well as a table with the categories of trash
- As their score increases the tree will grow (animate)
- The Forest page displays numerous trees at different stages of growth, these represent all the other user trees
- Users can compete in the leaderboard with others for the highest score (and the tallest tree!)

## Stack:
- Machine learning - AWS
- Front-end - React
- Routes - React router, Express
- Database - PosgreSQL
- Styles - Material UI
- Testing - Cypress

## Dependencies:
- Auth0/auth0-react": "^1.0.0",
- Material-ui/core": "^4.11.0",
- Material-ui/icons": "^4.9.1",
- Material-ui/styles": "^4.10.0",
- Testing-library/jest-dom": "^4.2.4",
- Testing-library/react": "^9.5.0",
- Testing-library/user-event": "^7.2.1",
- Aws-sdk": "^2.725.0",
- Axios": "^0.19.2",
- Material-ui-icons": "^1.0.0-beta.36",
- React": "^16.13.1",
- React-dom": "^16.13.1",
- React-router-dom": "^5.2.0",
- React-scripts": "3.4.1",
- React-tooltip": "^4.2.8",
- Styled-components": "^5.1.1",
- "cypress": "^4.12.1"

## Final Product:

!["Home Page of ReForest"](https://github.com/lib3rate/which-bin-app/blob/master/public/images/ReadME/ReForest-Home.JPG)

#### Uploading an image of a banana, the image recognition indicates the item should go in the organics bin. Upon trashing the item, the user is taken to their page and the tree grows to the second stage.
!["Uploads an image of a waste item"](https://github.com/lib3rate/which-bin-app/blob/master/public/images/ReadME/Upload.gif)


#### Capturing a can, the image recognition indicates the item should be thrown in the recycling bin. Upon trashing the item, the user is taken to their page and the tree grows to it's final stage. The user also receive a badge for growing their first tree!
!["Captures an image from a camera feed to recognize an item"](https://github.com/lib3rate/which-bin-app/blob/master/public/images/ReadME/Euni.gif)

#### Forest page shows all the different user trees and their scores on the leaderboard. Hovering over each of the trees indicates which user it belongs to.
["View of the leaderboard with Tooltips"](https://github.com/lib3rate/which-bin-app/blob/master/public/images/ReadME/Forest.gif)



## Additional:
- Mobile-first design
- User friendly loading animation while the image recognition is running
- When the tree has reach maximum height and score, the user receives a badge for growing their first tree (visible in their user profile). In addtion, they receive an email through sendgrid indicating that they have grown their first tree and reached the highest score for that tree

## Getting Started:
Install all dependencies (using the 'npm install' command).
Be sure to install the server as well at https://github.com/lib3rate/which-bin-api and have it running in the background.
Run the local server using the 'npm start' command in your terminal of choice.
Direct your browser to http://localhost/3002.
