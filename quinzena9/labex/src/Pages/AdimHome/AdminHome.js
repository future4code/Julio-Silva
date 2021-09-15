import axios from "axios";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { BaseURLTripDetail } from "../../Constants/BaseURL";

export const useProtetionPage = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      history.push("/login");
    }
  });
};

export const AdminHome = () => {
  const newPage = useHistory();
  useProtetionPage();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(BaseURLTripDetail, {
        headers: {
          auth: token,
        },
      })
      .then(() => {
        newPage.push("/admin");
      })
      .catch(() => {
        console.log("usuário não logado");
      });
  });

  return (
    <div>
      <h1>Página do ADM</h1>
    </div>
  );
};
