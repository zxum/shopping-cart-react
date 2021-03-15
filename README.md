![banner](./public/shopping-cart-banner.png)
# Shopping Cart 
A project built for [The Odin Project Ruby on Rails Course](https://www.theodinproject.com/courses/javascript/lessons/shopping-cart) to practice using ReactJS Routers. The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The website features a Shop page, along with individual product pages that are connected to a shopping cart. 

## Features 
A catalog JSON file prepopulates the website with travel experiences, organized by destination. Each travel experience has it's own product page where the user can the product to their cart. The user is notified when there's a change in the cart. On the cart page, the user can further adjust the quantity of each product in their cart, or they can remove the item completely. 

The Checkout button is not functional, but serves as a placeholder for the workflow that would be integrated in a real e-commerce platform. 

## Demo 
Check out the live version [here](https://zxum.github.io/shopping-cart-react/).

![demo](./public/shopping-cart-demo.gif)

## Modules Used 
* [React Router Dom](https://github.com/ReactTraining/react-router)
* [React Toastify](https://fkhadra.github.io/react-toastify/introduction/)

## Image Credits 
All images are from [Kaboompics](https://kaboompics.com/gallery/photoshoots) 

## Reflections 
Upon completion of this project, I feel very confident using React Routes. The path definitions and component integration made using the routes seamless with ReactJS. I'm most proud of my implementation of the cart functions, by using a simple hash table and my catalog JSON file, I was able to extract product information without duplicating the data in multiple places. 

I faced a challenge towards the end of the project trying to figure out how to deploy to Github Pages. Originally I had all the paths start with '/' without a base name, and because I didn't specify the public url as part of the route path, it kept leading me back to my Github Pages profile page. I fixed it by adding in the public url as part of all of my route definitions. 


