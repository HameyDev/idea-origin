import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import ScientistProfile from "./pages/ScientistProfile";
import DiscoveryStory from "./pages/DiscoveryStory";
import Timeline from "./pages/Timeline";
import About from "./pages/About";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import AddDiscovery from "./pages/AddDiscovery";
import AddScientist from "./pages/AddScientist";
import ManageUsers from "./pages/ManageUsers";
import EditStories from "./pages/EditStories";
import EditScientistsInfo from "./pages/EditScientistsInfo";
import EditDiscovery from "./pages/EditDiscovery";
import EditScientist from "./pages/EditScientist";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore-discovery" element={<Explore />} />
        <Route path="/scientist/:id" element={<ScientistProfile />} />
        <Route path="/discovery/:id" element={<DiscoveryStory />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/add-discovery" element={<AddDiscovery />} />
        <Route path="/admin/add-scientist" element={<AddScientist />} />
        <Route path="/admin/users" element={<ManageUsers />} />
        <Route path="/admin/stories" element={<EditStories />} />
        <Route path="/admin/scientists" element={<EditScientistsInfo />} />
        <Route path="/admin/edit-discovery/:id" element={<EditDiscovery />} />
        <Route path="/admin/edit-scientist/:id" element={<EditScientist />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
