# Quiz game project

## About

This project is for a front-end developer portfolio. The general target of this project is to demonstrate my skills and knowledge of React, SCSS, JS and Redux. In this app, you can create custom quizzes or play already-created quizzes.

<a href="https://quiz-game-n2q7.onrender.com">**You can find my project here**</a>

### In this project, I use this stack of technologies:

- React
- Redux toolkit & Redux query
- React router
- SCSS
- JavaScript(ES6+)
- Firebase Real-time database & Auth REST API
- Render hosting

## Features

### User authentication

When you open the app, you need to be login. You can sign in if you have an account, or you must create a user account.**Here you can see how to create a user account:**

![image](https://drive.google.com/uc?export=view&id=14TrlPNUfAOz_8WP7XJaUIh1M9_WkQaLo)

I implemented this feature with Firebase auth REST API. **In this screenshot, you can see the Firebase authentication dashboard:**

![image](https://drive.google.com/uc?export=view&id=1T-qB-_QyFsP0H4DqqgZocdB_l2XF40_v)

### Auto logout

After one hour, the active session will automatically close, so the user must log in a second time

### Real-time database

This app store quizzes in Firebase's real-time database. To fetch quizzes from the database, I use a redux query technology. When the user adds a new quiz list will automatically update

### Form validation

If a user leaves empty inputs, he can't add this question and create a new quiz

![image](https://drive.google.com/uc?export=view&id=1-P2VRCzQlT-DqYBUfZAvV3kqDF8c5Tcq)
