import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ErrorBoundary from "./Components/ErrorBoundary";
import NotFound from "./Components/NotFound";
import Home from "./Components/Home";
import Repos from "./Components/Repos";

const url = 'https://api.github.com/users/oyindamolaWbCode/repos';

function App() {

  const [repos, setRepos] = useState([]);

    useEffect(() =>{
      const fetchRepos = async () =>{
        const res = await fetch (url);
        const repos = await res.json()
        setRepos(repos)
      };
   fetchRepos();
    },[]);

  return (
    <div className="App">
      <ErrorBoundary key={Location.path}>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/Repos" element={<Repos repos={repos}/>} />
      </Routes>
     </ErrorBoundary>
    </div>
  );
}

export default App;
