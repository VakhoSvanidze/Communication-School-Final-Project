import AuthGuard from "../components/AuthGuard";
import GuestGuard from "../components/GuestGuard";
import {
  Dashboard, SignUp,
  SignIn, Search, User
} from "../pages";


const ROUTES = {
  SIGN_UP: "signup",
  SIGN_IN: "signin",
  USER: "user/:login",
  SEARCH: "search",
  DASHBOARD: "/"
};

// Token in .env file does not work, it comments the remainder
// of code after double slashes. because of that, here everything
// is set on GuestGuard.  

const ROUTES_CONFIG = [
  {
    path: ROUTES.SIGN_UP,
    guard: GuestGuard,
    page: SignUp
  },
  {
    path: ROUTES.SIGN_IN,
    guard: GuestGuard,
    page: SignIn,
  },
  {
    path: ROUTES.DASHBOARD,
    guard: AuthGuard,
    page: Dashboard
  },
  {
    path: ROUTES.USER,
    guard: AuthGuard,
    page: User,
  },
  {
    path: ROUTES.SEARCH,
    guard: AuthGuard,
    page: Search,
  },
]

export default ROUTES;
export { ROUTES_CONFIG };
