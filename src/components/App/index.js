import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import Menu from 'src/components/Menu';
import Home from 'src/components/Home';
import Recipe from 'src/components/Recipe';
import Error from 'src/components/Error';
import { selectRecipesList } from 'src/selectors/recipes';
import { actionRequestRecipesList } from 'src/actions/recipes';
import Loading from './Loading';

import './style.scss';

function App() {
  const dispatch = useDispatch();
  const recipesList = useSelector(selectRecipesList);

  useEffect(() => {
    dispatch(actionRequestRecipesList());
  }, []);

  if (recipesList.length === 0) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />
      <Routes>
        <Route
          path="/"
          element={(
            <Home />
          )}
        />
        <Route
          path="/recipe/:slug"
          element={(
            <Recipe />
          )}
        />
        <Route
          path="*"
          element={(
            <Error />
          )}
        />
      </Routes>
    </div>
  );
}

App.propTypes = {
  loading: PropTypes.bool,
};

App.defaultProps = {
  loading: false,
};

export default App;
