import MaterialUI from '../../components/MaterialUI';
import LogoutIcon from '@mui/icons-material/Logout';

const UserMenu = () => {

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
          <p>Hello,  !</p>
          <p>Email: </p>
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