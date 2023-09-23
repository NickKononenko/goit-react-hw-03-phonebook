import { Component } from 'react';
import css from './ContactList.module.css';

class ContactList extends Component {
  render() {
    return (
      <ul className={css.contactList}>
        {this.props.contacts
          .filter(contact => {
            return contact.name
              .toLowerCase()
              .includes(this.props.filter.toLowerCase());
          })
          .map(contact => {
            const { id, name, number } = contact;
            return (
              <li key={id} id={id}>
                <span className={css.contact}> {`${name}: ${number}`}</span>
                <button type="button" onClick={() => this.props.onDelete(id)}>
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    );
  }
}

export default ContactList;
