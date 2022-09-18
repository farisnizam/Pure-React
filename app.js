const Person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", { key: 1 }, props.name),
    React.createElement("p", { key: 2 }, props.occupation),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement(
      "h1",
      { className: "title", key: 3 },
      "React IS rendered"
    ),
    React.createElement(
      Person,
      { name: "Faris", occupation: "Software Engineer", key: 4 },
      null
    ),
    React.createElement(
      Person,
      { name: "Nizam", occupation: "Lecturer", key: 5 },
      null
    ),
    React.createElement(
      Person,
      { name: "Husna", occupation: "Customer Service", key: 6 },
      null
    ),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
