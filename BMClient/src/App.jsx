import React, { useState } from "react";
import Header from "./components/layout/Header";
import Navbar from "./components/nav/Navbar";
import EditorPad from "./components/editor/EditorPad";
import Recipients from "./components/recipients/Recipients";
import Settings from "./components/settings/Settings";
import SessionProvider from "./context/SessionContext";
import Preview from "./components/preview/Preview";
function App() {

  const [path, setPath] = useState('message');


  const getComponent = () => {
    switch (path) {
      case'message':
        return <EditorPad />;
      case'recipients':
        return <Recipients />;
      case'settings':
        return <Settings />;
      case 'preview':
        return <Preview />;
      default:
        return <EditorPad />;
    }
  }


  return (
    <React.Fragment>
      <SessionProvider>
        <div className="h-screen flex flex-col relative">
          <Header />
          <Navbar setPath={setPath} path={path} />
          {
            getComponent()
          }
        </div>
      </SessionProvider>
    </React.Fragment>
  );
}

export default App;