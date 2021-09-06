import { useDispatch, useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth/auth-selectors";
import * as authOperations from "../../redux/auth/auth-operations";
import defaultImage from "../../images/user_default.png";

import styles from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={styles.userMenuContainer}>
      <div className={styles.userContainer}>
        <img src={defaultImage} alt="" width="32" />
        <span>Welcome, {name}</span>
      </div>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log Out
      </button>
    </div>
  );
}
