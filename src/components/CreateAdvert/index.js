import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actions from '../../store/actions/';
import FormHeader from './FormHeader';
import GeneralInfo from './GeneralInfo';
import AdditionlInfo from './AdditionlInfo';
import OwnerInfo from './OwnerInfo';
import FormFooter from './FormFooter';
import '../CreateAdvert/style.modules.scss';
export class CreateAdvert extends Component {

    //  <GeneralInfo />
    // <StatutInfo />
    // <OwnerInfo />)

    static propTypes = {}

    render() {

        return (
            <Fragment>
                <div className="ca_bg">
                    <div className="form_bg">
                        <FormHeader />
                        <div className="form_content_bg">
                            <GeneralInfo />
                            <AdditionlInfo />
                            <OwnerInfo />
                        </div>
                        <FormFooter />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default connect(
    (state) => ({}),
    dispatch => ({
        // actions: bindActionCreators(actions, dispatch)
    })
)(CreateAdvert);