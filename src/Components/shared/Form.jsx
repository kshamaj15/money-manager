import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, TextField } from '@material-ui/core';
import useStyles from '../style';

const Form = props => {

    const classes = useStyles();

    const getJsx = field => {
        return <TextField type={field.type} id="outlined-basic" size="small" label={field.name} variant="outlined" />
    }

    return (
        <>
            {props.fields.map((f, index) => <Grid key={index} className={classes.formField}>{getJsx(f)}</Grid>)}
            <Grid className={[classes.formField, classes.submitBtn].join(' ')}><Button
                className={classes.actionButton}
                variant="contained"
                color="primary"
                size="small">{props.formSubmitLabel}
            </Button></Grid>
        </>
    )
}

Form.propTypes = {
    fields: PropTypes.array,
}

export default Form;
