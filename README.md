This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

# How I Make This Test

# Testing: What would you do to test the project?

* Test the API function in the console
* Search for users
* Search for users that do not exist
* Enter a URL out of the router
* Call different parts the user repositories
* With the colors languages search for different languages and see if they match.
* Search for a repository with more than one branch.
* When values like null or undefined are found in the parts of the repository, verify if the search includes invalidation. 
* Filter for a repository name that does not exist 
* Filter for languages that do not exist

# Further work - if you had more time, what would you like to add to the website or change into the code?

* I would have made functional the button “follow”
* I would have finished the SCSS of the User component 
* I would have created a message of _invalid_ and _not found_ in users search 
* I would have made a responsive web

# What were the main obstacles you had to overcome while working on your solution?

A good thing of React is it displays in the code the errors or issues in the code so it does not render until the issues are resolved.

I always read the console warning and errors, like the following:

## Render Colors Languages:
Render the color values null or undefined into the repositories.  So I created a simulation of the languages’ colors and applied a validation to these values.

## Show the number of branches:
at the first moment, the Repository component was a functional component so when I called the branches it only showed me the URL of the branches. I solved this changing the type of the component from functional to a class component and created a state with branches as a number and updated it with setState.

## Error 403 (rate limit exceeded):  
This was the bigger challenge to me. In the last part of the test, I could not make more API requests, this slowed down the project. First I read the API documentation, then I searched on the internet, asked and after, I tried to install different programs to create different IPs for my computer or using a VPN but almost nothing worked. This was my first-time using SCSS preprocessors so due to API request limit issue, I could not finish the SCSS file of the User component (since it did not display anything).


# What patterns did you use? Why?

The project is divided into reusable files. First, I’ve installed react-router-dom to create the user views of the test for the pages (home.jsx and user.jxs) and thus I made dynamic the URL with the username. Then, I created a common folder "components" that contains all the components of the project, so it’s not necessary for them to be child components.
I used both functional and class components. Class components are sensitive to the user interaction while searching for a Github user and into the different user-profile repositories, this means that the state is updated with setState. While the functional components use destructuring to extract arrays and objects data. 

The common folder contains:

## JSON folder: 
contains the colors of the user repositories. When user-github did not write code but a document, the system processed this as a null value so the JSON cannot reference it so it does not apply any color.

## SCSS folder: 
I used JSX and SCSS preprocessors as they allow to build more efficient and more clear code. I used them for example, in the styles.

## JS folder:
that uses the fetch method to bring the API information in a global way and can manipulate requests and responses.

Finally, I made a validation on the Null values in the API so it does not render values like_null_ or_undefined_.
