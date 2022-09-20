import { useDispatch, useSelector } from 'react-redux';
import {
  selectUserEmail,
  selectUserPassword,
  selectUserLogged,
  selectUserPseudo,
  selectUserToken,
  selectUserErrorMessage,
} from 'src/selectors/user';
import { actionUpdateLoginValue, actionSubmitLogin, actionLogout } from 'src/actions/user';
import './style.scss';
import logo from '../../assets/logo.png';
import LoginForm from '../LoginForm';

function AppHeader() {
  const dispatch = useDispatch();
  const email = useSelector(selectUserEmail);
  const password = useSelector(selectUserPassword);
  const logged = useSelector(selectUserLogged);
  const pseudo = useSelector(selectUserPseudo);
  const token = useSelector(selectUserToken);
  const errorMessage = useSelector(selectUserErrorMessage);

  const handleChange = (value, name) => {
    dispatch(actionUpdateLoginValue(value, name));
  };

  const handleLogin = () => {
    console.log('login clic');
    dispatch(actionSubmitLogin());
  };

  const handleLogout = () => {
    console.log('logout clic');
    dispatch(actionLogout());
  };

  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="Logo oRecipes" />
      <LoginForm
        email={email}
        password={password}
        changeField={handleChange}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        isLogged={logged}
        loggedMessage={`Bienvenu ${pseudo} !`}
      />
    </header>
  );
}

export default AppHeader;
