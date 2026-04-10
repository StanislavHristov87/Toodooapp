/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ user, logout }) => {
  return (
    <nav
      className="flex justify-between
         items-center p-4 bg-green-800 rounded text-white"
    >
      <h1 className="text-xl font-bold">Todo App</h1>

      <div
        className="flex gap-4 
            items-center  "
      >
        {user ? (
          <>
            <Link to="/profile">Profile</Link>
            <Link to="/todos">Todos</Link>

            <button onClick={logout} className="mr-7 px-3 py-1 bg-red-500 rounded">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="login">Login</Link>
            <Link to="register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

Navbar.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func.isRequired,
};
