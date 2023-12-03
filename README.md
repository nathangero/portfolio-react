# My Portfolio (React)

## Description

This is an updated version of [my portfolio](https://nathangero.github.io/my-portfolio/) but this time written in React! Here you'll find a section about me, some of my projects I've created/worked on, and my resume. Thank you for taking the time to visit, and feel free to reach out to me for job opportunities.

This site is mobile **and** dark theme friendly!

You can view my portfolio here: [https://glittery-puffpuff-5e401e.netlify.app/](https://glittery-puffpuff-5e401e.netlify.app/)

## Image

Image of my site

<img src="./src/assets/site-image.png" style="width: 500px; height: auto;" alt="image of the about me section in my site"/>

## Learning Points

* Using Bootstrap fully requires two specific imports in the `main.jsx`. The `.css` is for the css classes, the `.js` is getting functionality like `navbar-toggler` to work.
```js
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
```
* For some reason using the `offcanvas` navbar leaves the window dimmed if closed by clicking outside of it. If closed by the `X` close button, then the window is not left dimmed
* React is very easy to use to keep track of if an element has changed, focused, or unfocused.

## Code Snippets

Iterating through my skills to populate on the page
```js
const frontendItems = skills.frontend.map((skill, index) => {
    return <li key={index} className="list-group-item">{skill}</li>
})
const backendItems = skills.backend.map((skill, index) => {
    return <li key={index} className="list-group-item">{skill}</li>
})
const miscItems = skills.misc.map((skill, index) => {
    return <li key={index} className="list-group-item">{skill}</li>
})
```

Checking if the user filled out a form field or not, and showing the "fill out this field" text if not filled out 
```js
const handleOnBlur = ({ target }) => {
    switch (target.id) {
        case `contact-${FIELD.NAME}`:
            document.getElementById(`field-${FIELD.NAME}`)
                .style.visibility = target.checkValidity() ? "hidden" : "visible"
            break;

        case `contact-${FIELD.EMAIL}`:
            document.getElementById(`field-${FIELD.EMAIL}`)
                .style.visibility = target.checkValidity() ? "hidden" : "visible"
            break;

        case `contact-${FIELD.MESSAGE}`:
            document.getElementById(`field-${FIELD.MESSAGE}`)
                .style.visibility = target.checkValidity() ? "hidden" : "visible"
            break;

    }
}
```

## Credits 

[Bootstrap align navbar to right](https://www.studytonight.com/bootstrap/how-to-align-bootstrap-5-navbar-items-to-the-right)

[React create download button](https://www.geeksforgeeks.org/how-to-download-pdf-file-in-reactjs/)

[React monitor screen size](https://stackoverflow.com/a/44481429)

[React onBlur docs](https://legacy.reactjs.org/docs/events.html)

[HTML .reportValidity()](https://stackoverflow.com/a/7562439)

[JS for bootstrap modal](https://getbootstrap.com/docs/5.3/components/modal/#via-javascript)

[Idea for .navbar-collapse.show](https://stackoverflow.com/a/42401686)

[Idea to import bootstrap.min.js](https://stackoverflow.com/a/55890504)

[Idea to apply style to all router pages](https://stackoverflow.com/a/47898141)

[Idea to calculate the router page height](https://stackoverflow.com/q/47623772)

[Idea for onBlur in react](https://stackoverflow.com/a/30619329)

## Resources

[react-responsive package docs](https://www.npmjs.com/package/react-responsive)