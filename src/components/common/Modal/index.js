import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../Modal/style.modules.scss';
import * as actions from '../../../store/actions/advert';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import links from '../../../config/links';



class Modal extends Component {

    constructor(props) {
        super(props);
        this.status = props.status;
        this.advertid = props.advertid
    }

    state = {
        isOpen: ''
    }

    componentDidMount = () => {
        this.setState({
            isOpen: true
        })
    }

    handleClose = () => {
        this.status = ''
        this.props.actions.setClearStatus(this.status)
    }

    closeModal = () => {
        this.setState({ isOpen: false })
    }

    render() {
        const { isOpen } = this.state
        return (<div>

            { isOpen ? <div className="modal_wrapper" type={this.props.type} >

                {this.props.type === 'delete' ?
                    //delete modal
                    <div className="modal_window" status={this.props.status} advertid={this.props.advertid}>
                        <div className="modal_header">
                            <span onClick={this.closeModal}>&times;</span>
                        </div>
                        <p className="modal_text">Ви дійсно хочете видалити це оголошення?</p>
                        <div className="modal_button_group">
                            <div onClick={ this.props.confirmation } style={{width:'40%'}}><Button width="100%" text="Так" /></div>
                            <Button width ="40%" onClick={this.closeModal} text="Скасувати" />
                        </div>
                    </div>


                    : <div className="modal_window" status={this.props.status} advertid={this.props.advertid}>
                        <div className="modal_header">
                            <span onClick={this.handleClose}>&times;</span>
                        </div>
                        <p className="modal_text">Ваше оголошення було успішно опубліковане.<br />
                            Очікуйте дзвінків від покупців.
                </p>
                        <Link className='common_btn_link' to={links.details}><Button width="40%" text="Переглянути" /></Link>

                    </div>}

            </div> : null}
        </div>
        );
    }
}


export default connect(
    (state) => ({
        info: state.search.info,
    }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(Modal);