import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PermissionDenied from "./components/PermissionDenied/permissionDenied.jsx";
import Kapable from "./Kapable.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Kapable />} />
        <Route path="/permission-denied" element={<PermissionDenied />} />
      </Routes>
    </Router>
  );
}
