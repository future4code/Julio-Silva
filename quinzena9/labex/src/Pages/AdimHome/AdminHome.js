import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useProtetionPage } from "../../CustomHook/useProtetionPage";

export const AdminHome = () => {
  useProtetionPage();
  const newPage = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trip/:id",
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        newPage.push("/admin");
        console.log(res);
        const trips = res.data.trip;
      })
      .catch(() => {
        newPage.push("/login");
      });
  });

  return (
    <div>
      <h1>Página do ADM</h1>
    </div>
  );
};
