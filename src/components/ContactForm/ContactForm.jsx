import { nanoid } from 'nanoid';
import { Component } from 'react';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const isContactExists = this.props.contacts.some(
      contact => contact.name === name
    );

    if (isContactExists) {
      alert(`${name} is already in contacts`);
      this.setState({
        name: '',
        number: '',
      });
    } else {
      const newContact = {
        name,
        number,
        id: nanoid(5),
      };
      this.props.addContact(newContact);
      this.setState({
        name: '',
        number: '',
      });
    }
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  checkContact = () => {
    const { name } = this.state;
    const isContactExists = this.props.contacts.some(
      contact => contact.name === name
    );

    if (isContactExists) {
      alert(`${name} is already in contacts`);
    }
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label>
          <span className={css.formLabel}>Name</span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          <span className={css.formLabel}>Number</span>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={this.state.number}
            onChange={this.handleChange}
            required
          />
        </label>
        <button
          type="submit"
          className={
            this.state.name && this.state.number
              ? css.addContactBtnYellow
              : css.addContactBtn
          }
        >
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
