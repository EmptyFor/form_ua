import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes, { func } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
// import links from '../../config/links';
import styles from './style.modules.scss';
import arrow from '../../../../src/assets/images/arrow.png'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export function MaterialCheckBoxSelect() {

    const menuItems = [
        "Aкціонерне товариство",
        "Aсоціація",
        "Благодійна асоціація",
        "Виробничий підрозділ",
        "Гаражний кооператив",
        "Господарські товариства",
        "Громадська організація",
        "Житлово-будівельний кооператив",
        "Концерн",
        "Кооператив",
    ]

    const classes = useStyles();
    const [values, setValues] = React.useState({
        age: '',
        name: 'hai',
    });

    function handleChange(event) {
        setValues(oldValues => ({
            ...oldValues,
            [event.target.name]: event.target.value,
        }));
    }

    return (
        <form className={classes.root} autoComplete="off">
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-simple">Age</InputLabel>
                <Select
                    value={values.age}
                    onChange={handleChange}
                    inputProps={{
                        name: 'age',
                        id: 'age-simple',
                    }}
                >

                    {menuItems.map(menuItem => <MenuItem value={menuItem}>{menuItem}</MenuItem>)}
                    
                </Select>
            </FormControl>

        </form>
    );
}