import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styles from './ContactForm.module.css';


const INITIAL_STATE = {
    name: '',
    number: '',
  }

export default class ContactForm extends Component {

    state = INITIAL_STATE;

    handleChange = (type, e) => {
        const {contacts} = this.props;
        if (type==='name') {
          const contactInState = contacts.find(contact => contact.name.toLowerCase() === e.target.value.toLowerCase());
          if (contactInState) {
            alert(`${contactInState.name} is already in contacts!`);
          }
        }
        this.setState({[type]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        const {name, number} = this.state;
        const {contacts, onAddContact} = this.props;
        const contactInState = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
        contactInState && alert(`${contactInState.name} is already in contacts!`);
        if (!contactInState && name && number) {
            onAddContact(name, number);
            this.setState(INITIAL_STATE);
        }
    }
    
    render() {
        const {name, number} = this.state;
        return (
            <form onSubmit={this.handleSubmit} className={styles.formButtons}>
                <label>
                    <TextField
                        id="outlined-textarea"
                        label="Name"
                        placeholder="Enter name"
                        multiline
                        variant="outlined"
                        size="small"
                        value={name}
                        type="text"
                        onChange={e => this.handleChange('name', e)}
                    />
                </label><br/>

                <label>
                    <TextField
                        id="outlined-textarea"
                        label="Number"
                        placeholder="Enter number"
                        multiline
                        variant="outlined"
                        size="small"
                        value={number}
                        type="tel"
                        onChange={e => this.handleChange('number', e)}
                    />
                </label><br/>

                <div className={styles.sectionAddButton}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={styles.addButton}
                    >
                        Add contact
                    </Button>
                </div>
            </form>
        )
    }
}

ContactForm.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onAddContact: PropTypes.func.isRequired,
}