import MaterialUI from '../../components/MaterialUI';
import Navigation from '../../components/navigation/Navigation';
import UserMenu from '../../components/userMenu/UserMenu';

const AppBar = () => {

  return (
    <MaterialUI.AppBar>
      <MaterialUI.Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Navigation />
        <MaterialUI.Toolbar>{<UserMenu />}</MaterialUI.Toolbar>
      </MaterialUI.Container>
    </MaterialUI.AppBar>
  );
}

export default AppBar;