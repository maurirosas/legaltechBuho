import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { MainContentWrapper, GlobalStyle } from "./styles/Global.styled";
import React, { useState } from "react";
import { SideBarComponent } from "./components/SideBar"; // si ya lo tenés hecho
import AuthProvider from "./context/AuthContext"; // Asegúrate de que la ruta sea correcta
function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <AuthProvider>
      <div className="App" style={{ display: "flex", height: "100vh" }}>
        <SideBarComponent
          isOpen={isSidebarOpen}
          handleSidebarToggle={handleSidebarToggle}
        />
        <MainContentWrapper $isOpen={isSidebarOpen}>
          <Navbar
            handleSidebarToggle={handleSidebarToggle}
            isSidebarOpen={isSidebarOpen}
          />
          <Outlet context={{ isSidebarOpen }} />
        </MainContentWrapper>
        <GlobalStyle />
      </div>
    </AuthProvider>
  );
}

export default App;
