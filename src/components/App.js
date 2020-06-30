import React from "react";
import Header from "./Header";
import Router from "./Router";

const App = () => (
  <main className="Main">
    <Header />
    <section className="Content">
      <Router />
    </section>
  </main>
);

export default App;
