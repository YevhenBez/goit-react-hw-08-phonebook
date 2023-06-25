import { contactsReducer } from './contactsSlice';
import { filterReducer } from '../redux/filterSlice';

export const reducer = {
  contacts: contactsReducer,
  filter: filterReducer,
};
