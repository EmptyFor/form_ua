import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actions from '../../store/actions/';
import GeneralInfo from './GeneralInfo';
import StatutInfo from './StatutInfo';
import OwnerInfo from './OwnerInfo';
import styles from '../CreateAdvert/style.modules.scss'
import { Modal } from '../common/Modal';
import { Select } from 'antd';
import { Button, Radio, Icon } from 'antd';
const { Option } = Select;
export class CreateAdvert extends Component {

    //  <GeneralInfo />
    // <StatutInfo />
    // <OwnerInfo />)

    static propTypes = {}

    render() {

        return (
            <Fragment>
                <div className="bg">
                    <Button type="danger" size={48}>
                        Danger
              </Button>
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