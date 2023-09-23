import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    console.log(parsedContacts);
    this.setState({
      contacts: parsedContacts,
    });
  }

  handleDelete = id => {
    const newContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState({
      contacts: newContacts,
    });
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className={'phoneBook'}>
        <h1>Phonebook</h1>
        <ContactForm
          contacts={this.state.contacts}
          addContact={this.addContact}
        />
        <h2>Contacts</h2>
        <Filter
          handleChange={this.handleChange}
          contacts={this.state.contacts}
        />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
