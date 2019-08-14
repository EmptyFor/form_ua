import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../Modal/style.modules.scss';
import * as actions from '../../../store/actions/advert';
import * as profileActions from '../../../store/actions/profile';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import links from '../../../config/links';
import { removePostId, setPostId, getPostId } from '../../../store/helpers/localStorage'



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

    setAdvertid = () => {
        const localPostId = getPostId();

        if (this.advertid !== localPostId) {
            removePostId();
            setPostId(this.advertid);
        }
        this.status = ''
        this.props.actions.setClearStatus(this.status)
    }

    handleClose = () => {
        this.status = ''
        this.props.actions.setClearStatus(this.status)
    }

    deleteConfirmation = () => {
        this.props.profileActions.deleteAdvert(this.advertid);
        this.closeModal()
    }

    deactivateConfirmation = () => {
        this.closeModal()
    }

    closeModal = () => {
        this.setState({ isOpen: false });
        this.props.profileActions.clearAdvertId()
    }

    render() {
        const { isOpen } = this.state
        return (<div>

            {isOpen ? <div className="modal_wrapper" type={this.props.type} >

                {this.props.type === 'delete' ?
                    <div className="modal_window" status={this.props.status} advertid={this.props.advertid}>
                        <div className="modal_header">
                            <span onClick={this.closeModal}>&times;</span>
                        </div>
                        <p className="modal_text">Ви дійсно хочете видалити це оголошення?</p>
                        <div className="modal_button_group">
                            <div onClick={this.props.confirmation} style={{ width: '40%' }}><Button width="100%" className="delete_modal_btn" text="Так" onClick={this.deleteConfirmation} /></div>
                            <Button width="40%" onClick={this.closeModal} className="delete_modal_btn" text="Скасувати" />
                        </div>
                    </div> :


                    this.props.type === 'deactivate' ?
                        <div className="modal_window" status={this.props.status} advertid={this.props.advertid}>
                            <div className="modal_header">
                                <span onClick={this.closeModal}>&times;</span>
                            </div>
                            <p className="modal_text">Ви дійсно хочете деактивувати це оголошення?</p>
                            <div className="modal_button_group">
                                <div  style={{ width: '40%' }}><Button width="100%" className="delete_modal_btn" text="Так" onClick={this.deactivateConfirmation} /></div>
                                <Button width="40%" onClick={this.closeModal} className="delete_modal_btn" text="Скасувати" />
                            </div>
                        </div>


                        : <div className="modal_window" status={this.props.status} advertid={this.props.advertid}>
                            <div className="modal_header">
                                <span onClick={this.handleClose}>&times;</span>
                            </div>
                            <p className="modal_text">Ваше оголошення було успішно опубліковане.<br />
                                Очікуйте дзвінків від покупців.
                </p>
                            <span className="link_modal_btn"><Link className='common_btn_link' to={links.details}><Button width="100%" text="Переглянути" onClick={this.setAdvertid} /></Link></span>

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
        actions: bindActionCreators(actions, dispatch),
        profileActions: bindActionCreators(profileActions, dispatch),
    })
)(Modal);