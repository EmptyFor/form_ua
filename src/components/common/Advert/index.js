import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import styles from './style.modules.scss';
import { runInThisContext } from 'vm';
class Advert extends Component {

    state = {
        text: ''
    }
    componentDidMount = () => {
        if (this.props.isPdf) {
            this.setState({ text: 'Є платником ПДФ' })
        } else {
            this.setState({ text: 'НЕ є платником ПДФ' })
        }
    }
    render() {

        return (
            <div className="common_advert" key = {this.props.key}>
                <div className="left_side_advert">
                    <h1>{this.props.orgName}</h1>
                    <div className="minor_info_advert">
                        <span className="ispdf_advert" isPdf={this.props.isPdf}>{this.state.text}</span>
                        <span className="circle_advert"></span>
                        <span className="date_advert">{this.props.createDate}</span>
                        <span className="circle_advert"></span>
                        <span className="place_advert">{this.props.cityPlace}</span>
                    </div>
                    <p>{this.props.about}</p>
                </div>
                <div className="right_side_advert">
                    <span className="fullprice_advert">{this.props.fullPrice}</span>
                    <span className="image_document_advert">{this.props.image}</span>
                </div>

            </div>

        )
    }
}

export default connect(
    (state) => ({}),
    dispatch => ({})
)(Advert);