import React from "react";
import ReactDOM from "react-dom/client"

// Nested header Element creation using React.createElement
const header = React.createElement(
    "div",
    { className: "title1" },
    [
        React.createElement("h1", { key: "1" }, "This is H1 tag. Nested header Element creation using React.createElement"),
        React.createElement("h2", { key: "2" }, "This is H2 tag. Nested header Element creation using React.createElement"),
        React.createElement("h3", { key: "3" }, "This is H3 tag. Nested header Element creation using React.createElement")
    ]
)

// Nested header Element creation using JSX
const headerJsx = (
    <div className="title2">
        <h1>This is H1 tag. Nested header Element creation using JSX</h1>
        <h2>This is H2 tag. Nested header Element creation using JSX</h2>
        <h3>This is H3 tag. Nested header Element creation using JSX</h3>
    </div>
)

// Create the functional component of the same JSX
const HeaderComponent = () => {
    return (
        <div>
            <h1>This is H1 tag. functional component of the same JSX</h1>
            <h2>This is H2 tag. functional component of the same JSX</h2>
            <h3>This is H3 tag. functional component of the same JSX</h3>
        </div>
    )
}

// Pass attributes into the tag in JSX




// Compisition of component (add a component inside another)
const DisplayAllElements = () => {
    return (
        <div>
            {header}
            {headerJsx}
            <HeaderComponent />
        </div>
    )
}
// console.log(header);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DisplayAllElements />)
// The function of render() is to modify the DOM