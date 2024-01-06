import React from "react";
import ReactDOM from "react-dom/client";

const counter = 67676;
const Title = (a) => <h1>Namatey React</h1>;
const HeadingComponent = (a) => (
  <div id="test">
    <Title />
    <Title></Title>
    {Title()}
    {console.log(1000)}
    {counter}
    <h1> Functional component test</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent></HeadingComponent>);
