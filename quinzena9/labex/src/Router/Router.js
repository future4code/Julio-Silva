import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import PageListTrip from "../Pages/PageListTrip/PageListTrip";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route exact path={"/listTrip"}>
          <PageListTrip />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
