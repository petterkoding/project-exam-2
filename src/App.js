import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Accommodations from "./pages/Accommodations";
import Details from "./pages/Details";
import Login from "./pages/Login";
import AdminPage from "./pages/AdminPage";
import Messages from "./components/admin/Messages";
import Enquiries from "./components/admin/Enquiries";
import Host from "./pages/Host";
import CreateEstablishment from "./pages/CreateEstablishment";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyles";
import theme from "./styles/theme";
import AddHost from "./pages/AddHost";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Nav />
          <div className="wrapper">
            <Container>
              <Routes>
                <Route path="/" exact="true" element={<Home />} />
                <Route path="/accommodations" element={<Accommodations />} />
                <Route
                  path="/accommodations/:id"
                  exact="true"
                  element={<Details />}
                />
                <Route path="/host" element={<Host />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<AdminPage />}>
                  <Route path="/admin" element={<Messages />} />
                  <Route path="enquiries" element={<Enquiries />} />
                </Route>
                <Route
                  path="admin/create-establishment"
                  exact="true"
                  element={<CreateEstablishment />}
                />
                <Route
                  path="admin/add-host/:id"
                  exact="true"
                  element={<AddHost />}
                />
              </Routes>
            </Container>
          </div>
          <Footer />
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

const Container = styled.div`
  max-width: 92rem;
  margin: 0 auto;
  padding: 0 10px;
`;

export default App;
