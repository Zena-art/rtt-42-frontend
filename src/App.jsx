import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import NotFound from './pages/NotFound.jsx'
import Navbar from './components/Navbar.jsx'
import ChatsPage from './pages/ChatsPage.jsx'


export default function App() {
  return (
    <main>
      <h1>
        App
      </h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chats" element={<ChatsPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </main>
  )
}