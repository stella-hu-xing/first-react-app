## Composition via Children:

Some components don’t know their children ahead of time. This is especially common for components like Sidebar or Dialog that represent generic “boxes”.

We recommend that such components use the special children prop to pass children elements directly into their output:

```
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}
```

This lets other components pass arbitrary children to them by nesting the JSX:

```
function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}
```

Ref: https://reactjs.org/docs/composition-vs-inheritance.html

## Hooks

Hooks let you use state and other React features without writing a class, e.g. useState, useEffect...

https://reactjs.org/docs/hooks-overview.html

### Use previous state

```
  const [userInput, setUserInput] = userState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });
```

use `prev` prop to get latest state

```
  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      // use latest state
      return {...prevState, enteredAmount: event.target.value};
    });
  };
```

## Communicate from Child to Parent (Bottom up)

How to pass data from child component to its parent in ReactJS ?

- In the parent component, create a callback function. ...
- Pass the callback function to the child as a props from the parent component.
- The child component calls the parent callback function using props and passes the data to the parent component.
