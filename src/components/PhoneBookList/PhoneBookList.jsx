import css from './PhoneBookList.module.css';
import { PhoneBookContact } from 'components/PhoneBookContact/PhoneBookContact';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors'

export const PhoneBookList = props => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {contacts.map(contact => (
          <li key={contact.id} className={css.list}>
            <PhoneBookContact contact={contact} />
          </li>
        ))}
    </ul>
  );
};
