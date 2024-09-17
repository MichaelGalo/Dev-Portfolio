import { Outlet, Route, Routes } from 'react-router-dom'
import { Home } from './components/views/Home'
import { Navbar } from './components/Navbar/Navbar'
import { ThemeToggle } from './components/ThemeToggle'

function App() {

  return (
      <Routes>
        <Route
          path="/"
          element={
            <>
              {<Navbar />}
              {/* {<ThemeToggle />} */}
              <Outlet />
            </>
          }
        >
          <Route path="/" element={<Home />} />
        </Route>
    </Routes>
  )
}

export default App