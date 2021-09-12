import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import PageListTrip from "../Pages/PageListTrip/PageListTrip";
import AplicationForm from "../Pages/ApplcationForm/AplicationForm";

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
        <Route exact path={"/formtrip"}>
          <AplicationForm />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
