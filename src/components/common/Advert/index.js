import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './style.modules.scss';
import * as searchActions from '../../../store/actions/search'

class Advert extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    state = {
        text: ''
    }
    componentDidMount = () => {
        if (this.props.ispda) {
            this.setState({ text: 'Є платником ПДФ' })
        } else {
            this.setState({ text: 'НЕ є платником ПДФ' })
        }
    }

    handleClick = () => {
        const { advertid } = this.props
        console.log(this.props)
        this.props.searchActions.getAdvertDetails(advertid)
    }

    render() {

        return (
            <div className="common_advert" onClick={this.handleClick} key={this.props.key}>
                <div className="left_side_advert">
                    <h1>{this.props.orgName}</h1>
                    <div className="minor_info_advert" advertid={this.props.advertid}>
                        <span className="ispda_advert" ispda={this.props.ispda}>{this.state.text}</span>
                        {this.props.ispda ? <span className="ispda_confirmation"><span style={{top:'-10%',left:'37%', position: 'absolute', transform: `rotate(-133deg) scale(-1, 1)` }}>˥</span></span> : null}
                        <span className="circle_advert"></span>
                        <span className="date_advert"> 	{this.props.createDate}</span>
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
    dispatch => ({
        searchActions: bindActionCreators(searchActions, dispatch)
    })
)(Advert);