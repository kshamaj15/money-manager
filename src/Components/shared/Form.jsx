import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, TextField } from '@material-ui/core';
import useStyles from '../style';
import { FormGroup, FormControl } from '@material-ui/core';

const Form = props => {

    const classes = useStyles();

    const getJsx = field => {
        return <TextField type={field.type} id="outlined-basic" size="small" label={field.name} variant="outlined" />
    }

    return (
        <>
            <form style={{width: '80%'}}>
                {props.fields.map((f, index) => <FormControl required style={{width: '100%'}} className={classes.formField} key={index}>{getJsx(f)}</FormControl>)}
            </form>
            <Grid className={[classes.formField, classes.submitBtn].join(' ')}><Button
                className={classes.actionButton}
                variant="contained"
                color="primary"
                onClick={props.onSubmit}
                size="small">{props.formSubmitLabel}
            </Button></Grid>
        </>
    )
}

Form.propTypes = {
    fields: PropTypes.array,
}

export default Form;
