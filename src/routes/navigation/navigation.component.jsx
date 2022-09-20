import { Link, Outlet } from "react-router-dom";
import Logo from "../../assets/logo.jpg";
import { UserContext } from "../../contexts/user.context";
import "./navigation.styles.css";
import { useContext } from "react";
import { signOutUser } from "../../utils/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <div>
      <div className="navigation">
        <div className="navigation-left">
          <a href="/">
            <img className="logo" src={Logo} />
          </a>
        </div>
        <div className="navigation-right">
          <Link className="nav-link" to="shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="auth">
              Sign in
            </Link>
          )}
          <Link className="nav-link" to="contact">
            Contact
          </Link>
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
