import {BrowserRouter as Router ,Routes,Route, Link} from 'react-router-dom'
import {Home,CreateRecipes,SavedRecipes,Auth} from './pages/index';
import './App.css'

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/auth" element={<Auth/>} />
      <Route path="/create-recipes" element={<CreateRecipes/>} />
      <Route path="/saved-recipes" element={<SavedRecipes/>} />

    </Routes>
    </Router>
  )
}

export default App;
