# CS Club Website / React.js Project
<br>

**Please do not edit the website until you read this.**
<br>
If you have any questions regarding anything in this document feel free to email me at ```cmangan1@my.brookdalecc.edu```
<br>

## Git & Github

This project uses Git and Github for our repositories and development copies of this site. Please email me at ```cmangan1@my.brookdalecc.edu``` with your Github username or email to be added to the repository.
### Git
See <a href='https://www.theodinproject.com/lessons/foundations-setting-up-git'>this link</a> for instructions on how to set up Git on your computer.
<br>
See <a href='https://www.theodinproject.com/lessons/foundations-git-basics'>this link</a> for the basics of how Git works and how to use it.

## About React.js
React.js is a front-end Javascript library that allows you to return HTML elements in Javascript functions.
It is the most popular library today for web apps due to its functionality. 
<br>

 Also, it is used as it is faster than other UI frameworks as it uses something called virtual DOM.
In regular javascript, every time an element is changed it is rerendered through the DOM - Document Object Modeling, which basically is in charge of displaying websites on your screen.
<br> 

The difference between the virtual DOM (React's 'copy') and the actual DOM (what you see) is that the virtual DOM never gets rendered, so changes can be made much faster to the virtual DOM. React looks at the changes in the virtual DOM to determine the fastest way to render the actual DOM (which updates slower as it has to render > 1 million pixels)

### How to use React

Since React uses Javascript, it is recommended to gain some familiarity with JS before diving in. W3 schools is a good reference and the syntax of JS is very similar to Java, but JavaScript is generally simpler.
<br>

Most React components (the functions which return HTML) are declared using this format:
```jsx
    const MyComponent = () => { // This is called an arrow function. You can research the syntax behind it, but it's basically just a function in different syntax..
        return ( // Notice how this is wrapped in a div. You can only return one HTML element per function, but you can nest as many elements inside of that one element. The easiest way to get around this is using a <div> or <> block.
            <div>
                <h1>My Website</h1>
                <p>I love computer science</p>
            </div>
        ) // These parenthesis surrounding the returning statement are required if your return statement is multiple lines long.
    }
    export default myComponent // This is required so other .js files can import your component.
```

**It is common practice to CapitalizeAllWords in a component name, similar to classes.**
<br>

MyComponent would be added to another file like this:
```jsx
    import  MyComponent from './FILEPATH'

    const HomePage = () => {
        return (
            <h1>Look at my component:</h1>
            <MyComponent /> // The slash is required at the end to signify the end of the component.
            
        )
    }
```
You will see in this repository the components folder. This is where all the webpages will go. Home is a working example and you can copy the entire folder and name your page accordingly.

**To test a React project, you cannot just run it in html as it will not work. Run ```npm run start``` in your terminal to view your progress.**
### CSS

CSS can easily be added to React components by importing the desired CSS file to the component's JavaScript file.
<br>

Example:
```jsx
    import './index.css'

     const MyComponent = () => { // This is called an arrow function. You can research the syntax behind it, but it's basically just a function in different syntax..
        return (
        // Add HTML here
        )
    }
    export default myComponent // This will export the HTML, with the CSS imported from above styling it.
```
Note: To use classes in React with CSS, you must use 'className' instead of 'class' as the argument.

## Roles
<br>

### Design / Mobile Optimizaton:
JL, Tony

### Home Page:
Mike

### Resources:
Daniel

### About Us:
John

### Student Team
Dylan

### Events
???

### Routing/React Stuff
Artur, Chris
