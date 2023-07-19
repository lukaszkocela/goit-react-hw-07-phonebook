
import { useDispatch, useSelector } from 'react-redux';
import css from './Phonebook.module.css';
import { addNewContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

export const Phonebook = () => {
  const dispatch = useDispatch();
  const stateContacts = useSelector(selectContacts);
  const stateContactsNames = stateContacts.map(contact => contact.name);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;

    const contact = {
      name,
      phone,
    };

    if (stateContactsNames.includes(name)) {
      form.reset();
      return alert(`${name} is already in contacts!!!`)
    }

dispatch(addNewContact(contact));

    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.label}>
          Name
          <input
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className={css.input}
          />
        </label>

        <label className={css.label}>
          Number
          <input
            type="tel"
            name="phone"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            className={css.input}
          />
        </label>

        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </form>
    </div>
  );
};

