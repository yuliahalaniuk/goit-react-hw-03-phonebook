import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ contactList, handleDelete }) => {
  return (
    <ul className={css.contactList}>
      {contactList.map(({ id, name, number }) => (
        <li key={id} className={css.contactItem}>
          <span>
            {name}: {number}
          </span>
          <button
            className={css.contactItemBtn}
            type="button"
            onClick={() => {
              handleDelete(id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactList;
