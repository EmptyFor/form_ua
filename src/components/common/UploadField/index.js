import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './styles.modules.scss';
// import globalStyle from '../../../assets/styles/global.styles.scss';
import ulpoad_img from '../../../assets/images/document@2x.png';
export class UloadField extends Component {

    
    dragZone 

    state = {
        drag: false
    }

    dropRef = React.createRef()

    handleDrag = (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.dragZone.classList.add("dragover")
        console.log(this.dragZone.classList)
    }

    handleDragIn = (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.dragCounter++
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            this.setState({ drag: true })
        }
    }

    handleDragOut = (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.dragCounter--
        if (this.dragCounter === 0) {
            this.setState({ drag: false })
        }
        this.dragZone.classList.remove("dragover")
        
    }

    handleDrop = (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.setState({ drag: false })
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            this.props.handleDrop(e.dataTransfer.files)
            e.dataTransfer.clearData()
            this.dragCounter = 0
        }
    }

    componentDidMount() {
        this.dragZone = document.getElementById('upload-container')
        let div = this.dropRef.current
        div.addEventListener('dragenter', this.handleDragIn)
        div.addEventListener('dragleave', this.handleDragOut)
        div.addEventListener('dragover', this.handleDrag)
        div.addEventListener('drop', this.handleDrop)
    }

    componentWillUnmount() {
        let div = this.dropRef.current
        div.removeEventListener('dragenter', this.handleDragIn)
        div.removeEventListener('dragleave', this.handleDragOut)
        div.removeEventListener('dragover', this.handleDrag)
        div.removeEventListener('drop', this.handleDrop)
    }

    render() {
        return (
            <form id="upload-container" method="POST" action="send.php" ref={this.dropRef}>
                <img id="upload-image" src={ulpoad_img}></img>
                <div>
                    <input id="file-input" type="file" name="file" multiple></input>
                    <span>Завантажте фото документу, щ зсвідчує право на володіння організацією у форматі JPG, PDF (не більше 46 МБ)</span>
                </div>
                <label for="file-input">Завантажити</label>
            </form>
        );
    }
}






export default connect(
    (state) => ({

    }),
    dispatch => ({
        // actions: bindActionCreators(actions, dispatch)
    })
)(UloadField);