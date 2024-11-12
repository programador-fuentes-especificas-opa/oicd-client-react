import React, { useEffect, useState } from "react";
import authService from "./authService";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if the user is logged in
    const checkUser = async () => {
      const currentUser = await authService.getUser();
      setUser(currentUser);
    };

    checkUser();
  }, []);

  const login = () => {
    authService.login();
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  const handleCallback = async () => {
    const user = await authService.handleCallback();
    setUser(user);
  };

  if (user) {
    return (
      <div>
        <h1>Welcome, {user.profile.name}</h1>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <h1>React OIDC Login</h1>
      <button onClick={login}>Login</button>
      {/* Optionally add the callback route */}
      <a href="/callback">Callback</a>
    </div>
  );
};

export default App;
