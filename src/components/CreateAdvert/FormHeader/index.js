import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.modules.scss';

export class FormHeader extends Component {

    static propTypes = {}

    render() {

        return (
            <div className="form_header" >
                <h1>Створити оголошення про продаж</h1>
            </div>
        );
    }
}

export default connect()(FormHeader);