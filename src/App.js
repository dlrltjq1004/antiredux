import React, { Component } from "react";
import AppPresenter from "./Components/App/AppPresenter";
import Store from "store";

class AppContainer extends Component {
  render() {
    return (
      <Store.Provider>
        <AppPresenter />
      </Store.Provider>
    );
  }
}

export default AppContainer;
