import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Button from "./components/Button";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <Form />
      <Button />
    </div>
  );
}
