import MaterialUI from '../../components/MaterialUI';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSelector } from 'react-redux';
import {selectUser} from '../../redux/auth/authSelectors';

const UserMenu = () => {
  const user = useSelector(selectUser);

  return (
    <>
      <MaterialUI.Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '2rem',
          alignItems: 'center',
        }}
      >
        <MaterialUI.Box>
          <p>Hello, {user.name} !</p>
          <p>Email: {user.email} </p>
        </MaterialUI.Box>
        <MaterialUI.Button
          startIcon={<LogoutIcon />}
          variant="contained"
          color="error"
          type="button"
          sx={{ height: 'max-content' }}
        //   onClick={() => dispatch(logOut())}
        >
          Log Out
        </MaterialUI.Button>
      </MaterialUI.Box>
    </>
  );
}

export default UserMenu;