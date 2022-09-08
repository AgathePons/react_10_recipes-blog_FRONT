import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './style.scss';

function Menu() {
  const recipes = useSelector((state) => state.recipes.list);
  const activeClassName = 'menu-link--active';
  return (
    <nav className="menu">
      <NavLink
        className={({ isActive }) => (isActive ? `menu-link ${activeClassName}` : 'menu-link')}
        to="/"
      >
        Accueil
      </NavLink>
      {recipes.map((recipe) => (
        <NavLink
          key={recipe.id}
          className={({ isActive }) => (isActive ? `menu-link ${activeClassName}` : 'menu-link')}
          to={`/recipe/${recipe.slug}`}
        >
          {recipe.title}
        </NavLink>
      ))}
    </nav>
  );
}

export default Menu;
