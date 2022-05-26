import { Routes as RouterRoutes, Route} from "react-router-dom";
import ROUTES from "./config/routes";
import {Dashboard, 
  SignUp, 
  SignIn, 
  // Favorites,
  Search, 
  User 
} from "./pages";


function Routes() {
  return (
    <RouterRoutes>
      <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
      <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
      <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
      <Route path={ROUTES.USER} element={<User />} />
      <Route path={ROUTES.SEARCH} element={<Search />} />
      
      {/* <Route path={ROUTES.Favorites} element={<Favorites />} /> */}
      <Route path="*" element={<h1>Not Found</h1>} />
    </RouterRoutes>
  )
}

export default Routes;