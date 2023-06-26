import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
const Contacts = lazy(() => import('../pages/contacts/Contacts'));
const Layout = lazy(() => import('../components/layout/Layout'));

const App = () => {
  return (
    <div>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;

// import ContactForm from './contactForm/ContactForm';
// import ContactList from './contactList/ContactList';
// import Filter from './Filter/Filter';
// import Loader from './loader/Loader';
// import { useSelector } from 'react-redux';
// import { selectIsLoading } from '../redux/selectors';

// const App = () => {
//   const isLoadingApp = useSelector(selectIsLoading);

//   console.log(`Проверка isLoading ${isLoadingApp}`);

//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       {/* React homework template */}
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm />
//         <h2>Contacts</h2>
//         <Filter />
//         {isLoadingApp && <Loader />}
//         <ContactList />
//       </div>
//     </div>
//   );
// };

// export default App;