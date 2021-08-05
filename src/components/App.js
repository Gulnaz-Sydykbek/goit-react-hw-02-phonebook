import React, { Component } from 'react';
import shortId from 'shortid';
import Container from './container/Container';
import ContactList from './phonebook/ContactList';
import ContactForm from './phonebook/ContactForm';
import Filter from './phonebook/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addNewContact = (name, number) => {
    const { contacts } = this.state;

    const contact = {
      id: shortId.generate(),
      name,
      number,
    };

    const addSameName = contacts.map(contact => contact.name).includes(name);

    if (addSameName) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    const target = e.currentTarget;

    this.setState({
      filter: target.value,
    });
  };

  render() {
    const { value } = this.state;

    const normolizedFilter = this.state.filter.toLowerCase();

    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normolizedFilter),
    );

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onAddNewContact={this.addNewContact} />

        <h2>Contacts</h2>
        <Filter value={value} onChangeFilter={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
