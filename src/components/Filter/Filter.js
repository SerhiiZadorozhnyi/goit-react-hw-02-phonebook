import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import styles from './Filter.module.css';


const useStyles = makeStyles((theme) => ({
    inputFilter: {
      '& > *': {
        margin: theme.spacing(1),
        // width: '25ch',
        // width: '100%',
        // height: '5ch',
      },
    },
  }));

export default function Filter({value, onChangeFilter}) {
    const classes = useStyles();

    return (
        <div className={styles.filter}>
            <p className={styles.labelFilter}>Find contacts by name</p>
            {/* <input type="text" value={value} onChange={e => onChangeFilter(e.target.value)}/> */}
            <TextField
                id="outlined-textarea"
                label="Name or number"
                placeholder="Enter name or number"
                multiline
                variant="outlined"
                size="small"
                value={value}
                type="text"
                onChange={e => onChangeFilter(e.target.value)}
                className={classes.inputFilter}
                // width="100%"
            />
        </div>
    )
}

Filter.defaultProps = {
    value: '',
}

Filter.propTypes = {
    value: PropTypes.string,
    onChangeFilter: PropTypes.func.isRequired,
}