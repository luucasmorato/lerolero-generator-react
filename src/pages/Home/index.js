import React, { useState } from "react";
import api from "../../services/api";
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
      <h1>Chuck Norris Lero Lero</h1>
      <div className="card">{loading ? <Loader /> : <> {phrase} </>}</div>

      <button onClick={loadLerolero}>Generate</button>
    </Container>
  );
}
