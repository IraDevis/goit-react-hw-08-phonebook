import { useSelector, useDispatch } from "react-redux";
import { useEffect, lazy, Suspense } from "react";
import { Switch } from "react-router-dom";
import * as authSelectors from "./redux/auth/auth-selectors";
import * as authOperations from "./redux/auth/auth-operations";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import AppBar from "./components/AppBar";

import "modern-normalize";
import "./styles.css";

const HomeView = lazy(() => import("./views/HomeView/HomeView.js"));
const RegisterView = lazy(() => import("./views/RegisterView/RegisterView.js"));
const LoginView = lazy(() => import("./views/LoginView/LoginView.js"));
const ContactsView = lazy(() => import("./views/ContactsView/ContactsView.js"));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div className="container">
      {!isFetchingCurrentUser && (
        <Suspense fallback={<h3>Loading... Wait, please</h3>}>
          <AppBar />

          <Switch>
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>

            <PublicRoute
              exact
              path="/register"
              redirectTo="/contacts"
              restricted
            >
              <RegisterView />
            </PublicRoute>

            <PublicRoute path="/login" redirectTo="/contacts" restricted>
              <LoginView />
            </PublicRoute>

            <PrivateRoute path="/contacts">
              <ContactsView />
            </PrivateRoute>
          </Switch>
        </Suspense>
      )}
    </div>
  );
}
