import { useState } from "react";
import "./App.css";
import Company_DashBoard from "./components/Company-Dahboard";
import AuthToken from "./Company_Admin_DashBoard.tsx/AuthTocken";
import { authTocken } from "./context/authContext";
function App() {
  const [tocken, setTocken] = useState<string>("");
  const [auth, setAuth] = useState<boolean>(true);
  const handleTocken = (tocken: string) => {
    setTocken(tocken);
    setAuth(false);
  };

  return (
    <>
      {auth && <AuthToken onSubmit={handleTocken} />}
      {!auth && (
        <authTocken.Provider value={{ tocken }}>
          <Company_DashBoard />
        </authTocken.Provider>
      )}
    </>
  );
}

export default App;
