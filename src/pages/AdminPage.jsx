import React, { useContext} from "react";
import {useNavigate } from "react-router-dom";
import TabLayout from "../components/admin/TabLayout";
import WelcomeUser from "../components/admin/WelcomeUser";
import AuthContext from "../context/AuthContext";
import Motion from "../components/motion/Motion";

const AdminPage = () => {

  document.title = "Holidaze | Admin Dashboard";

  const [auth, setAuth] = useContext(AuthContext);

  const history = useNavigate();

  if (!auth) {
    history("/")
  }

  const { user: { username } } = auth;

  return(
    <Motion>
      {auth &&
      <>
        <WelcomeUser username={username} />
        <TabLayout/>
      </>
      }
    </Motion>
  );
};

export default AdminPage;
