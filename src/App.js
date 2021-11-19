import React, { useContext } from "react";

import MainKonveksi from "./dashboard-konveksi/MainKonveksi.js";
import MainPenjahit from "./dashboard-penjahit/MainPenjahit.js";
import MainGuest from "./guest/MainGuest.js";

import { UserContext, UserProvider } from "./context/UserContext.js";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

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
  const { user, setUser } = useContext(UserContext);
  const isLogin = 0;

  // if (isLoading) return 'Loading...'

  // if (error) return 'An error has occurred: ' + error.message

  if (isLogin == 1) {
    return <MainKonveksi />;
  } else if (isLogin == 2) {
    return <MainPenjahit />;
  } else {
    return <MainGuest />;
  }
}
