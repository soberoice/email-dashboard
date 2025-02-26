import { BrowserRouter, Route, Routes } from "react-router";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import ResetPassword from "./pages/ResetPassword";
import { links } from "./utils/constants";
import DashboardContent from "./components/DashboardContent";
import Reports from "./components/Reports";
import Wallets from "./components/Wallets";
import Pricing from "./components/Pricing";
import Profile from "./components/Profile";
import Developer from "./components/Developer";
import Settings from "./components/Settings";
import ApiConsole from "./components/ApiConsole";
import Support from "./components/Support";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgot-password" element={<ResetPassword />} />
        <Route exact path="/home" element={<Dashboard />}>
          <Route path="dashboard" element={<DashboardContent />} />
          <Route path="settings" element={<Settings />} />
          <Route path="reports" element={<Reports />} />
          <Route path="wallets" element={<Wallets />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="profile" element={<Profile />} />
          <Route path="developer" element={<Developer />} />
          <Route path="apiconsole" element={<ApiConsole />} />
          <Route path="support" element={<Support />} />
          {/* {links.map((link) => (
              <Route path={`/${link.name}`} element={link.name} />
            ))} */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
