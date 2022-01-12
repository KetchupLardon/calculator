**Context:**

Build a calculator in ReactJS for the frontend and NodeJS for the backend.

The calculation should be made in the backend.

**Technologies used**: ReactJS/NodeJS/Express

**Run the code:**

- use ‘yarn start’ at the root project to run the frontend.
- use ‘yarn dev’ at calculator/server/ to run the server.

**Development & choices:**

I started to code the frontend of the app, because it didn’t need any special datas from the API to start to code it.

Then I developed the backend. I never built an API REST with NodeJS, only GraphQL API. I felt like building a GraphQL API and importing ApolloJS just for one functionality was a bit too much so I decided to learn about Express and build a REST API.

I used a MVC structure that I already knew from my experience building websites in PHP and Symfony.

**Problem encounter:**

I wanted to turn the variable "operators" into a static variable but it triggered an error in the parsedToArray() methos in the class CalculatorActions in the folder src/utils/Calculator.js. The error says that it couldn't read the property includes and I don't know where it comes from.
