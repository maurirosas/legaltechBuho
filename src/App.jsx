import { Outlet, useNavigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { MainContentWrapper, GlobalStyle } from "./styles/Global.styled";
import React, { useState, useContext, useEffect } from "react";
import { SideBarComponent } from "./components/SideBar";
import AuthProvider, { AuthContext } from "./context/AuthContext"; // Asegúrate de importar AuthContext
import { getChatsByUser, createNewChat } from "./services/chatService";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (user?.id) {
      (async () => {
        const chats = await getChatsByUser(user.id);
        if (chats.length > 0) {
          // Redirigir al chat más reciente
          const latestChat = chats[0]; // Ordenado por created_at desc
          navigate(`/Chat/${latestChat.id}`);
        } else {
          // Crear un nuevo chat si no hay ninguno
          const newChat = await createNewChat(user.id);
          navigate(`/Chat/${newChat.id}`);
        }
      })();
    }
  }, [user?.id, navigate]);

  return (
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
  );
}

function AppWrapper() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}

export default AppWrapper;