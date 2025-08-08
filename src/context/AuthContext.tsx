import { supabase } from "../services/client.ts";
import { createContext, ReactNode, useEffect, useState } from "react";

interface AuthContext {
  user: null | { id: string; email: string; avatar: string; name: string };
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContext>({
  user: null,
  loginWithGoogle: async () => {},
  logout: async () => {},
});

interface IAppProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<IAppProviderProps> = ({
  children,
}: IAppProviderProps) => {
  const [user, setUser] = useState<null | { id: string; email: string; avatar: string; name: string }>(null);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log("Auth state changed:", event, session);
        if (session)
          setUser({
            id: session.user.id,
            email: session.user.user_metadata.email,
            avatar: session.user.user_metadata.avatar_url,
            name: session.user.user_metadata.full_name,
          });
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const loginWithGoogle = async () => {
    console.log("Login with Google clicked");
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) console.error(error);
    else console.log("Redirecting to Google:", data);
  };

  const logout = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loginWithGoogle,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
