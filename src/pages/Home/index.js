import React, { useState } from "react";
import api from "../../services/api";
import chuck from "../../assets/images/chuck.png";
import Loader from "../../components/Loader";

import { Container } from "./styles";

export default function Home() {
  const [phrase, setPhrase] = useState("");
  const [loading, setLoading] = useState(false);

  async function loadLerolero() {
    setLoading(true);

    const response = await api.get();
    setPhrase(response.data.value);

    setLoading(false);
  }

  return (
    <Container>
      <h2>Chuck Norris Lero Lero</h2>
      <img src={chuck} alt="Chuck Norris" />

      {loading ? <Loader /> : <> {phrase} </>}

      <button onClick={loadLerolero}>Generate</button>
    </Container>
  );
}
