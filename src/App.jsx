import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Tweets from "./pages/Tweets/Tweets";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home/Home";

export const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/users" element={<Tweets />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
