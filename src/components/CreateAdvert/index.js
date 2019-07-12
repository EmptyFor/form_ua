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
                <div style={{display:'flex',justifyContent:'center'}}>
                <Select defaultValue="lucy" style={{ width: 120 }}>
                        <Option value="lucy">Lucy</Option>
                        <Option value="lucy">Jack</Option>
                        <Option value="lucy">Hitler</Option>
                    </Select>
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