import axios from "axios";
import React, { useEffect, useState } from "react";

const baseURL = "https://script.google.com/macros/s/AKfycbwyfLqYhmryHuAauw9Af1vMSM06_9E6Kc1r6y3ZgqGwjlpKqsw-cfb-r59n_HEMph3D/exec";

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get(baseURL)
        .then(response => setData(response.data))
        .catch(error => console.log(error));
    }, []);

  return (
    <div>
    <h1>List</h1>
    {console.log(data)}
    <ul>
      {data.data?data.data.map(i => (
        <li key={i.jobs}>{i.jobs}</li>
      )):""}
    </ul>
  </div>
  );
}

export default App;