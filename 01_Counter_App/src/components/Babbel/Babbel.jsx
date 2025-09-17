import React from "react";
// This is jsx(expression) stored in a variable called element
const element = (
  <h1 className="h1-heading" style={{ textAlign: "center" }}>
    <p style={{ color: "green" }}>I am paragraph</p>
  </h1>
);

let alpha = "alhpa";
let age = 25;
let company = "School4U";

const user = {
  name: "vishal",
  age: 30,
};
const Babbel = () => {
  return (
    <>
      {element}
      {/* Babbel convert above {element} to  js using React.createElement in background to connect with browser*/}
      {React.createElement(
        "h1",
        { className: "h1-heading", style: { textAlign: "center" } },
        React.createElement(
          "p",
          { style: { color: "green", fontSize: "3rem" } },
          "I am paragraph"
        )
      )}

      {React.createElement(
        "a",
        {
          href: "https://www.school4u.in",
          target: "_blank",
          className: "link",
        },
        company  // variable
      )}

      {React.createElement("h2", null, `Hello ${alpha}!`)}
      {React.createElement(
        "div",
        null,
        `Hello, ${alpha}. You are ${age} years old.`
      )}

      {React.createElement(
        "div",
        { className: "card" },
        React.createElement("h1", null, `Hello, ${user.name}`),
        React.createElement(
          "p",
          null,
          `You are ${user.age + 1} years old next year.`
        )
      )}

      {React.createElement(
        "div",
        { className: "alpha", style: { color: "red", fontSize: "20px" } },
        "Hello Red Color"
      )}
    </>
  );
};

export default Babbel;
