import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useProtetionPage } from "../../CustomHook/useProtetionPage";

export const AdminHome = () => {
  const [data, setdata] = useState([])
  useProtetionPage();
  const newPage = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/julio-sila/trip/:id",
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        newPage.push("/admin");
        console.log(res.data);
        setdata(res.data)
      })
      .catch(() => {
        newPage.push("/login");
      });
  },[]);

  

  return (
    <div>
      <h1>Página do ADM</h1>
      {data.candidates}
      
    </div>
  );
};
