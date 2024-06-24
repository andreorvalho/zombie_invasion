import { Outlet } from "react-router-dom";
import { Nav, NavItem, NavLink } from 'reactstrap';

const Layout = () => {
  return (
    <>
      <h1 className="text-uppercase text-center my-4">Zombie Survival Social Network</h1>
      <Nav justified>
        <NavItem>
          <NavLink href="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/survivors/new" data-cy="create-link">
            Create a survivor
          </NavLink>
        </NavItem>
      </Nav>
      <div className="row">
        <Outlet />
      </div>
    </>
  )
};

export default Layout;
