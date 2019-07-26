import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../store/actions/advert'
import './styles.modules.scss';
// import globalStyle from '../../../assets/styles/global.styles.scss';
import ulpoad_img from '../../../assets/images/document@2x.png';
export class UloadField extends Component {

    dropRef = React.createRef()
    imageRef = React.createRef()
    uploadInfoRef = React.createRef()

    initialState = {
        drag: false,
        dragoverClass: '',
        image: {
            src: ulpoad_img
        }
    }

    state = {
        drag: false,
        dragoverClass: '',
        image: {
            src: ulpoad_img
        }
    }

    handleDrag = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }

    handleDragIn = (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.dragCounter++
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            this.setState({
                dragging: true,
                dragoverClass: 'dragover'
            })
        }
        // console.log(e.dataTransfer)
    }

    handleDragOut = (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.dragCounter--
        this.setState({
            dragging: false,
            dragoverClass: ''
        })
    }

    handleDrop = (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.setState({
            dragging: false,
            dragoverClass: ''
        })
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            let file = e.dataTransfer.files
            e.dataTransfer.clearData()
            this.dragCounter = 0
            this.previewFile(file)
        }
    }

    //Preview Image

    previewFile(file) {
        let reader = new FileReader();
        let img = this.imageRef.current
        let uploadInfo = this.uploadInfoRef.current
        let uploadContainer = document.getElementById('upload-container')

        reader.onloadend = function () {
            this.setState({image:{src:reader.result}})
            img.style.width = '100%'
            uploadContainer.style.padding = '0'
            uploadInfo.style.display = 'none'
            img.src = this.state.image.src
            this.props.actions.setDocumentPhoto(this.state.image.src)
        }.bind(this)

        if (file[0]) {
            reader.readAsDataURL(file[0]); //reads the data as a URL
        } else {
            this.state.image.src = "";
        }
        this.props.actions.clearAllInfo(false)
    }

    //Init handle func
    componentDidMount() {
        this.dragCounter = 0
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

    clearValue = () => {
        let uploadContainer = document.getElementById('upload-container')
        let img = this.imageRef.current
        let uploadInfo = this.uploadInfoRef.current
        this.setState({
            image: {
                src: ulpoad_img
            }
        })
        this.props.actions.setDocumentPhoto('')
        img.style.width = '51px'
        uploadContainer.style.padding = '5%'
        uploadInfo.style.display = 'flex'
    }

    componentWillReceiveProps(nextProps) {
        nextProps.clear ? this.clearValue() : void 0
    }

    render() {
        return (
            <form id="upload-container" ref={this.dropRef} className={this.state.dragoverClass} >
                <img id="upload-image" src={this.state.image.src} ref={this.imageRef}></img>
                <div className="upload_info" ref={this.uploadInfoRef}>
                    <input id="file-input" type="file" name="file" multiple></input>
                    <span>Завантажте фото документу, щ зсвідчує право на володіння організацією у форматі JPG, PDF (не більше 46 МБ)</span>
                    <label htmlFor="file-input">Завантажити</label>
                </div>
            </form>
        );
    }
}

export default connect(
    (state) => ({
        documentPhoto: state.advert.documentPhoto,
        // clear: state.advert.clear
    }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(UloadField);