import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import css from './PhoneBookContact.module.css';
import { deleteContact } from 'redux/operations';

export const PhoneBookContact = ({ contact }) => {
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteContact(contact.id));

    return (
        <div>
            {contact.name}: {contact.phone}
            <button
                type="submit"
                value={contact.id}
                onClick={handleDelete}
                className={css.delete}
            >
                Delete
            </button>
        </div>
    );
};

PhoneBookContact.propTypes = {
    contact: PropTypes.object.isRequired,
};

