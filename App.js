import React from "react";
import ReactDOM from "react-dom/client";

/**
 * <div id="parent">
 *  <div id="child">
 *   <h1>This is a H1 taG</h1>
 *   <h1>This is a H2 taG</h1>
 *  </div>
 * </div>
 * <div id="parent">
 *  <div id="child">
 *   <h1>This is a H1 taG</h1>
 *   <h1>This is a H2 taG</h1>
 *  </div>
 * </div>
 * 
 * ReactElement(object) => HTML(Browser Understand)
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is from ReactJS 🚀"),
    React.createElement("h2", {}, "This is a H2 taG"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This is a H1 taG"),
    React.createElement("h2", {}, "This is a H2 taG"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React"
);

// console.log(heading);
console.log("parent", parent); // Object

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parent);
