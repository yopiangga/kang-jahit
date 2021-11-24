import React, { useContext } from "react";

import MainKonveksi from "./dashboard-konveksi/MainKonveksi.js";
import MainPenjahit from "./dashboard-penjahit/MainPenjahit.js";
import MainGuest from "./guest/MainGuest.js";

import { UserContext, UserProvider } from "./context/UserContext.js";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { Loader } from "./component/Loader.js";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <UserManager />
      </UserProvider>
    </QueryClientProvider>
  );
}

function UserManager() {
  const {user, setUser, menuActive, setMenuActive, isLogin, setIsLogin} = useContext(UserContext)

  if (!!!user) return <Loader />

  // if (error) return 'An error has occurred: ' + error.message

  if (isLogin == 1 && user?.role == 1) {
    return <MainKonveksi />;
  } else if (isLogin == 2 && user?.role == 2) {
    return <MainPenjahit />;
  } else {
    return <MainGuest />;
  }
}
