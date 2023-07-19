
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filtersSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = evt => dispatch(filterContacts(evt.target.value));

  return (
    <>
      <h3 className={css.filter}>Find contact by name</h3>
      <input onChange={handleChange} />
    </>
  );
};
