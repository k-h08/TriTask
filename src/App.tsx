import React from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Report from "./pages/Report"
import NoMatch from "./pages/NoMatch"
import AppLayout from "./components/layout/AppLayout"

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/report" element={<Report />} />
          <Route path="/*" element={<NoMatch />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
