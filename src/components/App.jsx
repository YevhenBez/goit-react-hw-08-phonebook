import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './Filter/Filter';
import Loader from './loader/Loader';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../redux/selectors';

const App = () => {
  const isLoadingApp = useSelector(selectIsLoading);

  console.log(`Проверка isLoading ${isLoadingApp}`);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {/* React homework template */}
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {isLoadingApp && <Loader />}
        <ContactList />
      </div>
    </div>
  );
};

export default App;