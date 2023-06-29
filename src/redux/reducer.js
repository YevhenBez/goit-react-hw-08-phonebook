import { contactsReducer } from './contactsSlice';
import { filterReducer } from '../redux/filterSlice';
import { authReducer } from '../redux/auth/authSlice';


export const reducer = {
  contacts: contactsReducer,
  filter: filterReducer,
  auth: authReducer,
};
