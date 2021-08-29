import axios from "axios";
import React, { useEffect, useState } from "react";
import { URLProfileChoose } from "../../../constants/GET ProfileToChoose/URLProfileChoose";
import { URLChoosePerson } from "../../../constants/POSTChoosePerson/URLPostChoosePerson";
import ChooseProfileButtons from "../ChooseProfileButtons/ChooseProfileButtons";
import ChooseProfileCard from "../ChooseProfileCard/ChooseProfileCard";
import { CircularProgress } from "@material-ui/core";
import { ContainerLoad } from "./Style.CjooseProfilePage";

export default function ChooseProfilePage(props) {
  const [profileToChoose, setprofileToChoose] = useState({ undefined });

  const getProfileChoose = () => {
    axios
      .get(URLProfileChoose)
      .then((res) => {
        setprofileToChoose(res.data.profile);
      })
      .catch((e) => {
        console.log(e);
      });
    setprofileToChoose(undefined);
  };

  const chooseProfile = (choice) => {
    const body = {
      choice: choice,
      id: profileToChoose.id,
    };

    axios.post(URLChoosePerson, body).then(() => {
      getProfileChoose();
    });
  };

  useEffect(() => {
    getProfileChoose();
  }, []);

  const onClickPositive = () => {
    chooseProfile(true);
  };

  const onClickNegative = () => {
    chooseProfile(false);
  };

  return (
    <div>
      {profileToChoose ? (
        <>
          <ChooseProfileCard profile={profileToChoose} />
          <ChooseProfileButtons
            onClickPositive={onClickPositive}
            onClickNegative={onClickNegative}
          />
        </>
      ) : (
        <ContainerLoad>
          <CircularProgress color="secondary" />
        </ContainerLoad>
      )}
    </div>
  );
}
