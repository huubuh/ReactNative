import React from "react";
import { NativeRouter, Routes, Route } from "react-router-native";
import Welcome from "./screens/Welcome";
import Home from "./screens/Home";
import AddJob from "./screens/AddJob";

export default function App() {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add" element={<AddJob />} />
      </Routes>
    </NativeRouter>
  );
}
