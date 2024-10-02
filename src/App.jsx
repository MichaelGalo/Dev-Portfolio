import { Outlet, Route, Routes } from 'react-router-dom'
import { Home } from './components/views/Home'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

function App() {

  return (
      <Routes>
        <Route
          path="/"
          element={
            <>
              {<Navbar />}
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