const redux = require("redux");

const counterReducer = (state = {counter: 0}, action) => {
  if (action.type === "INCREAMENT") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "DECREAMENT") {
    return {
      counter: state.counter - 1,
    };
  }
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({type: "INCREAMENT"});

store.dispatch({type: "DECREAMENT"});
