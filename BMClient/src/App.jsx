import React from "react";
import Header from "./components/layout/Header";
import Navbar from "./components/nav/Navbar";
import EditorPad from "./components/editor/EditorPad";
import Recipients from "./components/recipients/Recipients";
function App() {
  return (
    <React.Fragment>
      <div className="h-screen flex flex-col relative">
        <Header />
        <Navbar />
        {/* <EditorPad /> */}
        <Recipients />
      </div>
    </React.Fragment>
  );
}

export default App;