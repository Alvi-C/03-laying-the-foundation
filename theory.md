Q1: React.createElement vs JSX
A: React.createElement is a method used in React to create a virtual representation of a DOM element, which can then be rendered to the actual DOM. It takes three arguments: the type of element to create, an object of properties for the element, and any children of the element.

JSX is a syntax extension for JavaScript that allows you to write HTML-like elements in your JavaScript code. When your code is transpiled, it is transformed into calls to React.createElement.

For example, the JSX code:

<div className="my-div">Hello, world!</div>
is transpiled into:
React.createElement("div", { className: "my-div" }, "Hello, world!")

---

Q2: What is JSX?
A: JSX is a syntax extension for JavaScript that allows you to write HTML-like elements in your JavaScript code. It is used in React to describe the structure of components. When your code that contains JSX is transpiled, it is transformed into calls to React.createElement, which is a method used in React to create a virtual representation of a DOM element, which can then be rendered to the actual DOM.

JSX makes it easy to read and understand the structure of a component, because it uses a syntax that is similar to HTML, which is a familiar format for most web developers. It also allows you to embed JavaScript expressions within the JSX code by wrapping them in curly braces {}. For example, you can use a variable to set the value of a JSX element's attribute, or use a JavaScript function to conditionally render a JSX element.

It is not a part of JavaScript, it needs to be transpiled to JavaScript with the help of tools like babel.

---

Q3: {TitleComponent} vs {<TitleComponent />} vs {<TitleComponent><TitleComponent/>} in JSX?

A: In JSX, when you want to render a component, you can use it in several ways:

`{TitleComponent}`: This notation is used to render a component without any props. It will render the component as a plain JavaScript object, not as a JSX element. This notation is not commonly used, and it is not recommended to use this way of component rendering.

{<TitleComponent />} : This notation is used to render a component with no children. It will render the component as a JSX element, with any props passed as attributes. This is the most common way to render a component in JSX.

{<TitleComponent> <TitleComponent/> </TitleComponent> } : This notation is used to render a component with children. It will render the component as a JSX element, with any props passed as attributes and any children passed between the opening and closing tags. This way of component rendering is mostly used when the component is a container component and wants to render multiple children.

It's important to note that the component name should always be capitalized when used in JSX, because JSX uses a convention of capitalized names for custom components and lowercase names for built-in HTML elements.

---

Q4: Role of type attribute in script tag? What other option i can use there?
A: The type attribute in a <script> tag is used to specify the type of script that is being included in the HTML document. The default value for the type attribute is "text/javascript", which indicates that the script is written in JavaScript.

Other options that can be used for the type attribute include:

    - "application/javascript": This is an alternate value that can be used to indicate that the script is written in JavaScript.
    - "text/ecmascript": This value can be used to indicate that the script is written in ECMAScript, the standard that JavaScript is based on.
    - "text/babel": This value can be used to indicate that the script is written in JSX and is transpiled using Babel.
    - "text/typescript": This value can be used to indicate that the script is written in TypeScript.

It is worth noting that, in some cases, you may not need to include the type attribute at all, as many modern browsers will assume the script is JavaScript if the type attribute is not specified.

It's also possible to use module and nomodule attributes with script tag to have different scripts for different browser versions.
