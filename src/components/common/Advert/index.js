import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import './style.modules.scss';

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
            <div className="common_advert" onClick={this.props.onClick} key = {this.props.key}>
                <div className="left_side_advert">
                    <h1>{this.props.orgName}</h1>
                    <div className="minor_info_advert">
                        <span className="ispdf_advert" ispdf={this.props.ispdf}>{this.state.text}</span>
                        <span className="circle_advert"></span>
                        <span className="date_advert">{this.props.createDate}</span>
                        <span className="circle_advert"></span>
                        <span className="place_advert">{this.props.cityPlace}</span>
                    </div>
                    <p>{this.props.about}</p>
                </div>
                <div className="right_side_advert">
                    <span className="fullprice_advert">{this.props.fullPrice}</span>
                    <span className="image_document_advert"><img alt="" style={{ height: '100%', width: '100%' }} src={this.props.image}></img></span>
                </div>

            </div>

        )
    }
}

export default connect(
    (state) => ({}),
    dispatch => ({})
)(Advert);