import axios from "axios";
import React, { useEffect, useState } from "react";
import { URLProfileChoose } from "../../../constants/GET ProfileToChoose/URLProfileChoose";
import HeaderCard from "../../HeaderCard/HeaderCard";
import ChooseProfileButtons from "../ChooseProfileButtons/ChooseProfileButtons";
import ChooseProfileCard from "../ChooseProfileCard/ChooseProfileCard";

export default function ChooseProfilePage() {
  const [profileToChoose, setprofileToChoose] = useState({});
  useEffect(() => {
    axios
      .get(URLProfileChoose)
      .then((res) => {
        setprofileToChoose(res.data.profile);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <HeaderCard />
      <ChooseProfileCard profile={profileToChoose} />
      <ChooseProfileButtons />
    </div>
  );
}
