import { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

//* pages *//
import { Auth } from "@/pages";

//* routes *//
import { LoggedNavigation } from "@/routes";

export const App: React.FC = () => {
  const [user, setUser] = useState<any>(undefined);
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    setUser({ name: "Tomás Cuevas" });
  });

  if (user === undefined) return <></>;

  return user ? <LoggedNavigation /> : <Auth />;
};
