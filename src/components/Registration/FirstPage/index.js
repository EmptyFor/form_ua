import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import links from '../../../config/links';
import { Input } from '../../common/Input';
import styles from './style.modules.scss';
import { Button } from '../../common/Button';

export class RegistrationFirst extends Component {

    static propTypes = {
        token: PropTypes.string,
        error: PropTypes.string,
        authActions: PropTypes.object,
    }

    render() {
        // const { token, error, authActions } = this.props;

        // if (token) {
        //   return <Redirect to={links.home} />
        // }


        return (

            <div className="login_page">
                <span>Log</span>
                <div className='login_modal_form'>
                    <span className="login_form_header">Реєстрація</span>
                    <form>
                        <Input placeholder="Прізвище Ім'я або Назва компанії" />
                        <Input type='password' placeholder="+38(0_ _) - _ _ _ - _ _ - _ _" />
                        <Link to={links.registrationTwice}><Button width='340px' text='Далі' /></Link>
                    </form>
                    <div className="login_form_footer">Вже зареєстровані? &nbsp; <Link to={links.login}> Увійти >></Link></div>
                </div>


            </div>

        );
    }
}

export default connect(
    (state) => ({}),
    dispatch => ({
        // actions: bindActionCreators(actions, dispatch)
    })
)(RegistrationFirst);