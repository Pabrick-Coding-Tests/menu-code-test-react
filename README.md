## Please find the approach taken at the end of this file

---

# OpenTable front-end coding challenge

Thank you for accepting our coding challenge. Please take as much time as required to give us a good indication of your coding strengths, as your application will provide many topics of conversation in the next interview stage.

However, in this challenging time, we understand that not everyone has the luxury of sitting down to work on a test uninterrupted. Therefore if you don't manage to implement all of the rules, please describes how you would achieve them or any improvement you would make in the email.

## The task

We would like you to build a web application.

-   The application will allow one user to select dishes on behalf of two diners.
-   The application will present a menu that will be provided and may later require adjustment by a restaurant.
-   The application will enforce some restrictions provided by the restaurant. (see [#rules](#rules))

We have prepared a basic application structure for you using React and Webpack. Please add **any** additional libraries that you think are suitable, for example for data fetching, CSS, and testing.

The menu data is served via GraphQL (http://localhost:3000/graphql) or the API (http://localhost:3000/api/v1/menu). The client application is in `src/App.js`.

**IMPORTANT!** Please use either the GraphQL (preferred) or API approach to fetch menu data on your application, write as clean and maintainable code as possible, and make sure that it's covered by test cases.

## Rules

_To recap, you will build an interface that allows a user to select dishes for a fixed party of **two diners**._\
This restaurant, unfortunately, has a number of rules about the meals that can be ordered.

-   Each person must have at least two courses, one of which must be a main.
-   Each diner cannot have more than one of the same course.
-   There is only one piece of cheesecake left.
-   Pierre the snobby waiter will not let you have a prawn cocktail and salmon fillet in the same meal.

## Acceptance criteria

-   The total bill amount is displayed when at least one dish has been selected.
-   An error message is displayed when I try to select an invalid menu combination.

## Submission

Please submit your program as an online repository or downloadable link to your point of contact at OpenTable.

---

# The Aproach

After reading the rules the first step is design the wireflow of the app and identify the components that the app needs.
I have identify a landing page, a menu page and like we need to check if the combination chosen on the menu page I thought a good idea will be to have a final page.
The most complex page is the menu, which it will have the dish component, and to solve the problem of haveing different guests another component that help as to switch between the and reuse the same page for different guests.

Now that we know how our app will be it's coding time!

First thing I like to do is checking that the data is been retrieved from the database correctly.
After fixing a CORS problem, the app could now read all the menu provided.
Then I created the routes for my different pages: landing, menu and bill.
After the whole path was working is time to build the components and add a little bit styling, just to check that the Sass library was working.
Now it's time to prepared the app for the store where we can put the data shared accross the app.
I add the actions, reducers and the rest.
The app works without rules, so the last bit will be to add the extra logic and the popup we need to show the user if something has gone wrong.
When that is done we are ready to style the app a little bit more.

## Things that left

- **Testing** the whole app. Create unit testing for each component, test the comunication between the and the store and test that the logic applied works. I should have install JEST and another library like Enzyme, or RTL. In this case RTL because Enzyme do not support React 17.
- Create a **style theme**, with more architecture, and styled classes for elements.
- Reorganise the **logic**: I am a huge fan of simple components, for that the logic should be placed in somewhere else, like a service or other technique.
