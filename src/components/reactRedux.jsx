import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Navigation from "./navBarCompo";
import "../css/cardMedia.css";

export default function Redux() {
  return (
    <>
      <Typography
        component="div"
        style={{ height: "96vh", overflow: "scroll" }}
      >
        <Navigation header={true} footer={false} />
        <Container component="main" maxWidth="md">
          <div>
            <h5>Redux data handling work flow</h5>
          </div>
          <div>
            <p className={"Pc"}>
              <span role="img" aria-label="calender">
                📅
              </span>{" "}
              May 22, 2019
              <span> • </span>
              <span role="img" aria-label="clock">
                ⏱️
              </span>
              10 min read{" "}
            </p>
          </div>
          <h2>What is Redux ?</h2>
          <p className={"Pc"}>
            Redux is a state management tool which can be used with any
            javascript framework or libraries. Redux will save the state of the
            application in particular place called store and any component can
            read and make changes to the store without passing data from parent
            to child.
          </p>
          <h2>Why Redux ?</h2>
          <p className={"Pc"}>
            React will internally handle the state without the help of an
            external tool and it will handle data very well for few component
            because when our project grows handling data will become painful
            because there will be a bunch of data handled by each component. So
            it will be harder to find the data needed for the particular
            component which will lead to create bugs .
          </p>
          <p className={"Pc"}>
            In order to overcome this situation and to be comfortable with data
            manipulation we can use redux state management tool.
          </p>
          <p className={"Pc"}>
            Redux provides a better clarity of the state. Since state is a very
            powerful mechanism for building powerful and dynamic React apps, it
            becomes necessary that state is properly managed in the application.
            Thinking in redux its state is fixed in one place so any component
            in tree can access the state without the props so it will be easy
            for larger application for state manipulation in redux because its
            gives a clarity for the workflow.{" "}
          </p>
          <h2>Installation</h2>
          <pre>
            <code>npm install redux</code>
          </pre>
          <h2>React-binding</h2>
          <pre>
            <code>npm install react-redux</code>
          </pre>
          <blockquote>
            The react-redux package provide React binding for the Redux state
            container making it easy to the react application to connect to the
            store.
          </blockquote>
          <h2>How it works</h2>
          <p className={"Pc"}>
            Redux has a central store that holds the data of the entire
            application . Each component can access the store without explicitly
            passing props down so components are directly linked to the store .
          </p>
          <p>
            {" "}
            Redux mainly comes with three parts to manage data flow Action,
            Reducer, Store
          </p>
          <h2>Actions</h2>
          <p className={"Pc"}>
            To change the state we need to dispatch(call) an action with the
            action type, {<br />}
            Consider a login-in scenario the login button action type will be
            LOGINUSER.
          </p>
          <code>
            export const LOGINUSER = 'AddUser'{<br />}
            export function onUserLogin(statefromSignin){"{"}
            {<br />}
            type: LOGINUSER,{<br />}
            payload:{"{"}
            {<br />}
            username:'john doe',{<br />}
            password:'foo'{<br />}}}
          </code>
          <p className={"Pc mar"}>
            Action contain the data which we need to update to the store, data
            can be from user interaction's, api calls.Actions are plain
            javascript object in general action are events and the type convey
            what type of action have been called and the payload contains the
            data needed for the store.
          </p>
          <blockquote>Now lets look what happen's after the action</blockquote>
          <h2>Reducer</h2>
          <p className={"Pc"}>
            Reducer are pure functions that takes the current state of the
            application and perform the action received from the action handler
            and returns a new state . It specify how the state is gone change in
            response to an action.
          </p>
          <code>
            import {"{"}LOGINUSER} from "action/target"{<br />}
            export default function userReducer(state = [], action) {"{"}
            {<br />}
            switch (action.type) {"{"}
            {<br />}
            case LOGINUSER: {"{"}
            {<br />}
            state = [...state, action.payload];{<br />}
            return state; {<br />}}{<br />}default: {"{"}
            {<br />}
            return state;{<br />}}}}
          </code>
          <p className={"Pc mar"}>
            In here the reducer receive the action from the action handler and
            checks for the action type to confirm what to do with the data
            received.Then it will successfully return a new state. The reducer
            receive the type "AddUser" add it will take the current state and
            concat it with new data and returns a new state.
          </p>
          <h2>Store </h2>
          <p className={"Pc"}>
            The store holds all the data needed for the application . There will
            be only one store in any Redux application hence it is single source
            of truth. We can access the store ,update the state, retrieve data,
            from any component without continuously passing state from one
            component to another.
          </p>
          <p className={"Pc"}>
            Hence state is no longer needed to be lifted up the parent component
            doesn’t need to pass down state or method to the child component
            everything is handled by redux which makes it easier to maintain and
            write test cases and test component in isolation
          </p>
          <blockquote>Now lets dip hands to redux</blockquote>
          <h2> • Create Store</h2>
          <code>
            import {"{"} createStore } from 'redux'{<br />}
            const store = createStore();
          </code>
          <h2> • Pass the reducer to the store</h2>
          <code>
            import {"{"} createStore } from 'redux' {<br />}
            function reducer(state){"{"}
            {<br />}
            return 'State'; }{<br />}
            const store = createStore(reducer);{<br />}
            console.log(store.getState());{" "}
            <span style={{ color: "grey" }}>{"//"} will return State;</span>
          </code>
          <blockquote>
            Here we are passing the value of the state to the store from the
            reducer.
          </blockquote>
          <h2> • Action</h2>
          <code>
            import {"{"} createStore } from 'redux' {<br />}
            function reducer(state){"{"}
            {<br />}
            return 'State'; }{<br />}
            const store = createStore(reducer);{<br />}
            const action = {"{"}
            {<br />}
            type:'updateState',{<br />}
            payload:{"{"}
            {<br />}
            state:'updated state'{<br />}} }{<br />}
            store.dispatch(action);
            <span style={{ color: "grey" }}>
              {"//"} will trigger an action & reducer will catch the action;
            </span>
          </code>
          <h2>
            {" "}
            • Now update the reducer to react on the action that is send to it.
          </h2>
          <blockquote>
            Initialize state as an empty array in reducer and Initialize action
            . Reducers will listen to every single action that is send.
          </blockquote>
          <code>
            import {"{"} createStore } from 'redux' {<br />}
            function reducer(state = [] ,action){"{"}
            {<br />}
            switch(action.type){"{"}
            {<br />}
            case 'updateState' {"{"}
            {<br />}
            state = [...state, action.payload.state];{<br />}
            return state; {<br />}
            break;{<br />}}{<br />}
            default:{"{"}
            {<br />}
            return state;{<br />}
            }}}{<br />}
            const store = createStore(reducer);{<br />}
            const action = {"{"}
            {<br />}
            type:'updateState',{<br />}
            payload:{"{"}
            {<br />}
            state:'updated state'{<br />}} }{<br />}
            store.dispatch(action);
          </code>
          <blockquote>
            In a real world application, there will be many reducer's to manage
            the store.So there is an elegant way to categorize the reducers
            called combinereducers.
          </blockquote>
          <h2> • CombineReducers</h2>
          <code>
            import {"{"} combineReducers, createStore } from "redux"; {<br />}
            const allReducers = combineReducers({"{"}
            {<br />}
            login: LoginReducer,{<br />}
            signUp:signUpReducer{<br />}
            });{<br />}
            function signUpReducer(state="",action){"{"}
            {<br />}
            return state;{<br />}}{<br />}
            function LoginReducer(state = [] ,action){"{"}
            {<br />}
            switch(action.type){"{"}
            {<br />}
            case 'updateState'{"{"}
            <br />
            state = [...state, action.payload.state]; {<br />}
            return state; {<br />}
            break;{<br />}} default:{"{"}
            {<br />}
            return state;{<br />}
            }}}{<br />}
            const store = createStore(allReducers,{"{"}
            {<br />}
            login: "",{<br />}
            signUp:""{<br />}
            });
            <span style={{ color: "grey" }}>{"//"} pass allReducer;</span>
            {<br />}
            const action = {"{"}
            {<br />}
            type:'updateState',{<br />}
            payload:{"{"}
            {<br />}
            state:'updated state'{<br />}} }{<br />}
            store.dispatch(action);
          </code>
          <blockquote>
            Provider give our application access to the store.
          </blockquote>
          <p className={"Pc"}>
            Wrap our route component, with Provider similar to the
            "React-Context Provider" will give value to the app .
          </p>
          <p className={"Pc"}>
            <code>
              import {"{"}Provider } from 'react-redux'{<br />}
              ReactDOM.render({<br />}
              {"<Provider store={store}>"}
              {<br />}
              {"<HomePage />"} {<br />}
              {"</Provider>,"}
              {<br />}
              document.getElementById("root");{<br />}
              );
            </code>
          </p>
          <blockquote>
            Connect help's to give access to the store in component.
          </blockquote>
          <p className={"Pc"}>
            <code>
              import React, {"{"} Component } from "react";{<br />}
              import {"{"} connect } from 'react-redux';{<br />}
              class HomePage extends Component {"{"}
              {<br />}
              render() {"{"}
              {<br />}
              return ({<br />}
              {"<h1>Hello</h1>"}
              {<br />}
              );{<br />}} }{<br />}
              export default connect()(HomePage);
            </code>
          </p>
          <blockquote>Connect can take 3 arguments.</blockquote>
          <ul>
            <li>mapStateToProps</li>
            <li>mapActionToProps or mapDispatchToProps</li>
            <li>mergeProps</li>
          </ul>
        </Container>
      </Typography>
      <Navigation header={false} footer={true} />
    </>
  );
}
