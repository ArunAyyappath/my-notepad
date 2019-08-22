import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Navigation from "./navBarCompo";
import "../css/cardMedia.css";

export default function Context() {
  return (
    <>
      <Typography
        component="div"
        style={{ height: "96vh", overflow: "scroll" }}
      >
        <Navigation header={true} footer={false} />
        <Container component="main" maxWidth="md">
          <div>
            <h5>React data handling & Context Api</h5>
          </div>
          <div>
            <p className={"Pc"}>
              <span role="img" aria-label="calender">
                📅
              </span>{" "}
              May 17, 2019
              <span> • </span>
              <span role="img" aria-label="clock">
                ⏱️
              </span>
              2 min read{" "}
            </p>
          </div>

          <p className={"Pc"}>
            React provide two methods for providing data to the component namely
            PROPS and STATE . Props stand for "properties" is a read only which
            cannot be manipulated, it is passed from parent component to the
            child component to get updated with the state .
          </p>
          <p className={"Pc"}>
            Every time when we call setState we are telling react that the state
            of this component is going to be changed so react will re-render the
            component and its children if necessary by comparing the difference
            between real-dom & virtual-dom
          </p>
          <p className={"Pc"}>
            <b>State.</b>
          </p>
          <p className={"Pc"}>
            State holds the data which is needed for the component . State comes
            with a golden rule that the "component which owns the state is the
            only one which can manipulate it " state can not be changed in the
            child component. It is passed from owned-component to the child
            component and the child component can read it through props .
          </p>
          <p className={"Pc"}>
            As we said earlier props is a read only data provider we cannot
            manipulate it but we can tell react to update state from child
            component by passing down the event handler. Now if we need to
            access the state of a component to the deep children component we
            need to pass the props down to the children component .
          </p>
          <p className={"Pc"}>
            This makes our code messy and will be hard to debug and maintain .
            So react provides a way to pass data towards its children without
            the pain of passing it down as props called React Context .
          </p>
          <p className={"Pc"}>
            So without struggling with props we can easily access the data from
            state of the component we need no matter how deep the component is
            in the tree
          </p>

          <blockquote className={"Pc"}>
            Here React.createContext is initialized with a default value .
          </blockquote>

          <p className={"Pc"}>
            <code>
              const DataContext = React.createContext('defaultValue');
            </code>
          </p>
          <p className={"Pc"}>
            <code>export const DataProvider = DataContext.Provider</code>
          </p>
          <p className={"Pc"}>
            <code>export const DataConsumer = DataContext.Consumer</code>
          </p>
          <p className={"Pc"}>
            <code>export default DataContext</code>
          </p>
          <p className={"Pc"}>
            The value we need can be initialized in the Context.provider. As its
            name states it's the value provider to the component (Consumer
            component) which is under it in the tree
          </p>
          <p className={"Pc"}>
            <code>import {"{ "}DataProvider } from './file destination'</code>
          </p>
          <p className={"Pc"}>
            <code>
              {"<"}DataProvider value={"{"}give the value}>
            </code>
          </p>
          <p className={"Pc"}>
            <code>{"//"} intermediate components</code>
          </p>
          <p className={"Pc"}>
            <code>{"<"}/DataProvider></code>
          </p>
          <p className={"Pc"}>
            If no value is given in the provider react will return the default
            value which we give at the beginning . If we provide a value in the
            provider react will return the value from the provider .
          </p>
          <p className={"Pc"}>
            Now in consumer as the name states here we are consuming the value
            which is passed from the context-provider.
          </p>
          <p className={"Pc"}>
            The value passed will be equal to the value of the closest Provider
            for this context above in the tree. If there is no Provider for this
            context above, the value will be equal to the defaultValue that was
            passed to <code>createContext()</code>.
          </p>
          <p className={"Pc"}>
            <code>import {"{"} DataConsumer } from './file destination'</code>
          </p>
          <p className={"Pc"}>
            <code>
              {"<"}DataConsumer>{"{"}value => ({"<h1>{value.heading}</h1>"})}
              {"<"}/DataConsumer>
            </code>
          </p>
          <p className={"Pc"}>
            When the value changes in the provider react will update the
            consumer .
          </p>
        </Container>
      </Typography>
      <Navigation header={false} footer={true} />
    </>
  );
}
