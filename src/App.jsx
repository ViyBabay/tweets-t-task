import { Route, Routes } from "react-router";
import "./App.css";
import Tweets from "./pages/Tweets/Tweets";
import { Suspense } from "react";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home/Home";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/users" element={<Tweets />} />
      </Route>
    </Routes>
  );
};
