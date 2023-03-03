import axios from "axios";
import React, { useEffect, useState } from "react";
import { FilteringComponent } from "./components/FilteringComponent";

import "./app.css";

const baseURL = "https://script.google.com/macros/s/AKfycbzyCD_5mnwI-WIKdMqjiUexDwXeGoVclNbrdjQ5ZdRQTDNV7I_UxvRAZ-Nl71TECDF1/exec";
function App() {

  const [jobDiscipline, setJobDiscipline] = useState("");
  const [jobFamily, setJobFamily] = useState("");

  const [jobDisciplineOptions, setJobDisciplineOptions] = useState([]);
  const [jobFamilyOptions, setJobFamilyOptions] = useState([]);

  useEffect(() => {
    axios.get(baseURL, { params: {
      searchBy:'disciplines'
    }})
      .then(response => setJobDisciplineOptions(response.data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    // Fetch the second set of options when the first value changes
    if (jobDiscipline !== "") {
      axios
        .get(baseURL, { params: {
          searchBy:'families',
          selectedDiscipline: jobDiscipline
        }})
        .then((response) => {
          setJobFamilyOptions(response.data);
        });
    }
  }, [jobDiscipline]);

  function handleJobDisciplineChange(event) {
    setJobDiscipline(event.target.value);
    setJobFamily("");
  }

  function handleJobFamilyChange(event) {
    setJobFamily(event.target.value);
  }

  return (
    <>
      <h1>Navigate to desired job profile</h1>
    <FilteringComponent 
      name="JobDiscipline" 
      data={jobDisciplineOptions} 
      handleChange={handleJobDisciplineChange} 
      selectedValue={jobDiscipline}
    />
    {
      jobDiscipline && (
       <FilteringComponent 
        name="JobFamily" 
        data={jobFamilyOptions} 
        handleChange={handleJobFamilyChange} 
        selectedValue={jobFamily}/>
      )
    }
    </>
  );
};

export default App;
