import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import './sprite.svg';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));


const ContactListItem = ({name, number, onClickRemove}) => {
    const classes = useStyles();

    return (
    <List>
        <ListItem button divider className={classes.itelElement}>
            {/* <li className={styles.contactListItem}> */}
            <ListItemText><p>{name}<br/>{number}</p></ListItemText>
            {/* <ListItemText primary={number} /> */}
                {/* <p>{name}: {number}</p> */}
                <Button 
                    type="button"
                    variant="contained"
                    color="secondary"
                    onClick={onClickRemove}
                >
                    Delete
                </Button>
            {/* </li> */}
        </ListItem>
    </List>
    )
}

const ContactList = ({filteredContacts, onRemove}) => {
    return (
        filteredContacts.length > 0 && (
            <ul className={styles.contactList}>
                {filteredContacts.map(({id, name, number}) => (
                    <ContactListItem key={id} name={name} number={number} onClickRemove={() => onRemove(id)} />
                ))}
            </ul>
        )
    )
}

export default ContactList;

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClickRemove: PropTypes.func.isRequired,
}

ContactList.propTypes = {
    filteredContacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onRemove: PropTypes.func.isRequired,
}