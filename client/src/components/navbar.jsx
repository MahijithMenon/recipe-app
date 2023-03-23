import React from 'react'
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const [cookies, setCookies,removeCookie] = useCookies(['access_token']);
  const navigate = useNavigate();
  const logout = () => {
    removeCookie('access_token', { path: '/', domain: 'localhost' });
    // removeCookie('access_token',{path:'/'});
    window.localStorage.removeItem('UserId');
    navigate('/auth');
  };
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/create-recipes">Create Recipes</Link>
        <Link to="/saved-recipes">Saved Recipes</Link>
        {cookies.access_token ? <button onClick={logout}>Logout</button> : <Link to="/auth">Login/Register</Link>}

    </div>
  )
}
