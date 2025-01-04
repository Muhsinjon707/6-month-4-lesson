import React from "react";
import "./App.css";

import UserCreation from "./components/UserCreation";

import ReverseText from "./components/ReverseText";

import DisplayPassword from "./components/DisplayPassword";
import ChooseDye from "./components/ChooseDye";
import InputPrivateData from "./components/InputPrivateData";
import DynimicInput from "./components/DynamicView";

import PronounceSytem from "./components/PronounceSystem";

import CalculateNumbers from "./components/Calculation";
import CheckField from "./components/CheckField";
import AcceptTerms from "./components/AcceptTerms";


function App() {
  return (
    <div>
      <h2>1 - Homework</h2>
      <UserCreation />
      <hr />
      <h2>2 - Homework</h2>
      <ReverseText />
      <hr />
      <h2>3 - Homework</h2>
      <DisplayPassword />
      <hr />
      <h2>4 - Homework</h2>
      <ChooseDye />
      <hr />
      <h2>5 - Homework</h2>
      <InputPrivateData />
      <hr />
      <h2>6 - Homework</h2>
      <DynimicInput />
      <hr />
      <h2>7 - Homework</h2>
      {/* <PronounceSytem /> */}
      No homework has been added
      <hr />
      <h2>8 - Homework</h2>
      <CalculateNumbers />
      <hr />
      <h2>9 - Homework</h2>
      <CheckField />
      <hr />
      <h2>10 - Homework</h2>
      <AcceptTerms />
      <hr />
    </div>
  );
}

export default App;
