import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import PageListTrip from "../Pages/PageListTrip/PageListTrip";
import AplicationForm from "../Pages/ApplcationForm/AplicationForm";
import { Login } from "../Pages/Login/Login";
import TripDetails from "../Pages/TripDetails/TripDetails";
import { AdminHome } from "../Pages/AdimHome/AdminHome";
import CreateTrip from "../Pages/CreateTrip/CreateTrip";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route exact path={"/trips/list"}>
          <PageListTrip />
        </Route>
        <Route exact path={"/trips/application"}>
          <AplicationForm />
        </Route>
        <Route exact path={"/login"}>
          <Login />
        </Route>
        <Route exact path={"/admin/trips/list"}>
          <AdminHome />
        </Route>
        <Route exact path={"/admin/trips/create"}>
          <CreateTrip />
        </Route>
        <Route exact path={"/tripdetail/:id"}>
          <TripDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
