{
  /* <h1 id='heading'>Hello World from React!</h1> */
}
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//------------------------------------------------------------------------------------------
{
  /* <div id='parent'>
    <div id='child'>
        <h1 id='heading'>Hello World from React!</h1> 
    </div>
</div> */
}
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", { id: "heading" }, "Hello World from React!")
//   )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

//------------------------------------------------------------------------------------------

{
  /* <div id='parent'>
      <div id='child'>
          <h1 id='heading'>Hello World from React!</h1> 
          <h2 id='heading'>Hello World from React!</h2> 
      </div>
  </div> */
}
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Hello World from React!"),
    React.createElement("h2", { id: "heading" }, "Hello World from React!"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
