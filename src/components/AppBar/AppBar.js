import { useSelector } from "react-redux";
import Navigation from "../Navigation";
import UserMenu from "../UserMenu";
import * as authSelectors from "../../redux/auth/auth-selectors";

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return <header>{isLoggedIn ? <UserMenu /> : <Navigation />}</header>;
}
