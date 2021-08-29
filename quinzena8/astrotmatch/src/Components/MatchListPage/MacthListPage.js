import axios from "axios";
import React, { useEffect, useState } from "react";
import { URLGetMathes } from "../../constants/GETMatches/URLGetMatches";
import MatchListItem from "./MatchListItem/MatchListItem";
import { ListContainer } from "./StyleMacthListPage";

export default function MacthListPage() {
  const [matches, setmatches] = useState([]);

  useEffect(() => {
    axios
      .get(URLGetMathes)
      .then((res) => {
        setmatches(res.data.matches);
      })
      .catch(() => {
        alert("Ops, Algo deu errado");
      });
  }, []);

  return (
    <ListContainer>
      {matches.map((person) => {
        return <MatchListItem person={person} />;
      })}
    </ListContainer>
  );
}
