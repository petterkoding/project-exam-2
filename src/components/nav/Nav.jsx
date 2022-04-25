import React, {useState, useContext} from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import styled from "styled-components";

const Nav = () => {

  const [auth, setAuth] = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const history = useNavigate();

  async function logout() {
    const confirmLogout = window.confirm("You're logging out. Are you sure?")

    if (confirmLogout) {
      try {
        setAuth(null);
        history("/");
        setMenuOpen(!menuOpen);
      } catch (error) {
        console.log(error)
      }
    }
  }

  const menuToggler = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };


  return (
    <Header>
      <NavContainer className="nav-container">
        <Logo to="/" exact="true" className="logo" onClick={closeMenu}>
          Holidaze
        </Logo>
        <Menu className={menuOpen ? "navOpen" : "navClosed"}>
          <MenuFlex>
            <StyledLink to="/accommodations" onClick={closeMenu}>Accommodations</StyledLink>
            <StyledLink to="/contact-us" onClick={closeMenu}>Contact us</StyledLink>
          </MenuFlex>
          {auth ? 
            <>
              <StyledLink to="/admin" className="admin-link" onClick={closeMenu}><i className="fas fa-user"></i>Admin</StyledLink>
              <button onClick={logout}  className="logout-btn">Logout</button>
            </>
           :
          <Link to="/login" className="login-btn" onClick={closeMenu}>
            Login
          </Link>
          }
        </Menu>
        <i onClick={menuToggler} className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </NavContainer>
    </Header>
  );
};

const Header = styled.header`
  padding: 1rem 0;
  margin-bottom: 2rem;
  height: 65px;
  box-shadow: 1px 3px 20px rgba(0,0,0,0.1);

`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 92rem;
  margin: 0 auto;
  padding: 0 10px;
  a {
    color: black;
  }

  .fa-times, .fa-bars{
    display: none;
  }

  @media(max-width:680px){
    .fa-times, .fa-bars{
      display: block;
      font-size: 1.8rem;
      transition: all 0.5s ease;
      margin-right: 1rem;
      &:hover{
        cursor: pointer;
        color: grey;
      }
    }
  }
`;

const Logo = styled(Link)`
  flex: 0.5;
  font-size: 2rem;
  font-weight: 400;
  color: black;
  text-decoration: none;

  @media (max-width: 680px){
    flex: 1;
    font-size: 1.2rem;
  }
`;

const Menu = styled.nav`
  display: flex;
  flex: 2;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  transition: all 0.3s ease;

  .login-btn, .logout-btn {
    border: none;
    background: ${props => props.theme.seaWater};
    color: white;
    padding: 0.7rem 1.3rem;
    border-radius: 20px;
    text-decoration: none;
    transition: all 0.25s ease;
    margin-left: 2rem;
    &:hover {
      cursor: pointer;
      background: ${props => props.theme.seaLight};
    }

    @media(max-width: 680px){
      margin-left: 0;
      padding: 1rem 2rem;
      margin-top: 1.3rem;
    }
  }

  @media(max-width: 680px){
    position: absolute;
    top: 65px;
    left: 0;
    z-index: 100;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: calc(100% - 65px);
    background: ${props=>props.theme.clouds};

    &.navOpen{
      left: 0;
    }

    &.navClosed{
      left: -100%;
    }
  }
`;

const MenuFlex = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  @media(max-width: 680px){
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 300px;
  }
`;

const StyledLink = styled(NavLink)`
  font-size: 1rem;
  color: black;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 20px;
  padding: 4px 6px;
  transition: all 0.25s ease;

  &:hover{
    border: 1px solid ${props => props.theme.seaLight};
  }

  &.active {
    border: 1px solid ${props => props.theme.seaLight};
    border-radius: 20px;
    padding: 4px 6px;   
  }

  &.admin-link{
    display: flex;
    font-weight: 600;
    i{
      padding-right: 3px;
    }
  }

  @media (max-width: 680px){
    font-size: 1.4rem;
  }
`;


export default Nav;
