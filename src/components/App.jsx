import css from './App.module.css'
import { Phonebook } from './Phonebook/Phonebook';
import { Filter } from './Filter/Filter';
import { PhoneBookList } from './PhoneBookList/PhoneBookList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors'

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.layout}>
      <h1>Phonebook</h1>
      <Phonebook />

      <h2 className={css.contacts}>Contacts</h2>
      <Filter />
      {isLoading ? <p>Loading Contacts</p> : <PhoneBookList />}
      {error && <p>Contacts loading error</p>}
    </div>
  );
};