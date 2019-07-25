import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import styles from '../SearchResult/style.modules.scss';
import Advert from '../../common/Advert';
import { Link } from 'react-router-dom';
import links from '../../../config/links';

const mockData = [
    {
        name: 'FIRST PAGE',
        isPDF: false,
        date: '10/02/2019',
        city: 'Львів',
        price: '12 000',
        about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
    },
    {
        name: 'Конституційно-правова агенція твого міста',
        isPDF: true,
        date: '10/02/2019',
        city: 'Львів',
        price: '12 000',
        about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
    },
    {
        name: 'FIRST',
        isPDF: false,
        date: '10/02/2019',
        city: 'Львів',
        price: '12 000',
        about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
    },
    {
        name: 'FIRST',
        isPDF: true,
        date: '10/02/2019',
        city: 'Львів',
        price: '12 000',
        about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
    },
    {
        name: 'FIRST',
        isPDF: false,
        date: '10/02/2019',
        city: 'Львів',
        price: '12 000',
        about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
    },
    {
        name: 'FIRST',
        isPDF: true,
        date: '10/02/2019',
        city: 'Львів',
        price: '12 000',
        about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
    },
    {
        name: 'TWICE PAGE',
        isPDF: false,
        date: '10/02/2019',
        city: 'Львів',
        price: '12 000',
        about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
    },
    {
        name: 'Конституційно-правова агенція твого міста',
        isPDF: true,
        date: '10/02/2019',
        city: 'Львів',
        price: '12 000',
        about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
    },
    {
        name: 'TWICE',
        isPDF: false,
        date: '10/02/2019',
        city: 'Львів',
        price: '12 000',
        about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
    },
    {
        name: 'TWICE',
        isPDF: true,
        date: '10/02/2019',
        city: 'Львів',
        price: '12 000',
        about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
    },
    {
        name: 'TWICE',
        isPDF: false,
        date: '10/02/2019',
        city: 'Львів',
        price: '12 000',
        about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
    },
    {
        name: 'TWICE',
        isPDF: true,
        date: '10/02/2019',
        city: 'Львів',
        price: '12 000',
        about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
    },
    {
        name: 'THIRD PAGE',
        isPDF: false,
        date: '10/02/2019',
        city: 'Львів',
        price: '12 000',
        about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
    },
    {
        name: 'Конституційно-правова агенція твого міста',
        isPDF: true,
        date: '10/02/2019',
        city: 'Львів',
        price: '12 000',
        about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
    },
    {
        name: 'THIRD',
        isPDF: false,
        date: '10/02/2019',
        city: 'Львів',
        price: '12 000',
        about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
    },
    {
        name: 'THIRD',
        isPDF: true,
        date: '10/02/2019',
        city: 'Львів',
        price: '12 000',
        about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
    },
    {
        name: 'THIRD',
        isPDF: false,
        date: '10/02/2019',
        city: 'Львів',
        price: '12 000',
        about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
    },
    {
        name: 'THIRD',
        isPDF: true,
        date: '10/02/2019',
        city: 'Львів',
        price: '12 000',
        about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
    },
    {
        name: 'FOUR PAGE',
        isPDF: false,
        date: '10/02/2019',
        city: 'Львів',
        price: '12 000',
        about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
    },
    {
        name: 'Конституційно-правова агенція твого міста',
        isPDF: true,
        date: '10/02/2019',
        city: 'Львів',
        price: '12 000',
        about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
    },
    {
        name: 'FOUR',
        isPDF: false,
        date: '10/02/2019',
        city: 'Львів',
        price: '12 000',
        about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
    },
    {
        name: 'FOUR',
        isPDF: true,
        date: '10/02/2019',
        city: 'Львів',
        price: '12 000',
        about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
    },
    {
        name: 'FOUR',
        isPDF: false,
        date: '10/02/2019',
        city: 'Львів',
        price: '12 000',
        about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
    },
    {
        name: 'FOUR',
        isPDF: true,
        date: '10/02/2019',
        city: 'Львів',
        price: '12 000',
        about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
    },
    {
        name: 'FIVE PAGE',
        isPDF: false,
        date: '10/02/2019',
        city: 'Львів',
        price: '12 000',
        about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
    },
    {
        name: 'Конституційно-правова агенція твого міста',
        isPDF: true,
        date: '10/02/2019',
        city: 'Львів',
        price: '12 000',
        about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
    },
    {
        name: 'FIVE',
        isPDF: false,
        date: '10/02/2019',
        city: 'Львів',
        price: '12 000',
        about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
    },
    {
        name: 'FIVE',
        isPDF: true,
        date: '10/02/2019',
        city: 'Львів',
        price: '12 000',
        about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
    },

];

const pageStep = 4;
const pagesLength = Math.ceil(mockData.length / pageStep);
class SearchResult extends Component {

    state = {
        currentPage: 1,
        disPrev: true,
        disNext: false,
        colorNext: '#1ccee9',
        colorPrev: '#aeaeae'
    }

    getCurrentPageNumber = e => {

        this.setState({
            currentPage: this.state.currentPage = +e.target.innerHTML
        })

        if (this.state.currentPage !== 1) {
            if (this.state.currentPage === pagesLength) {
                this.setState({ disPrev: false, colorPrev: '#1ccee9', disNext: true, colorNext: '#aeaeae' })
            } else {
                this.setState({ disPrev: false, colorPrev: '#1ccee9', disNext: false, colorNext: '#1ccee9' })
            }
        } else {
            this.setState({ disPrev: true, colorPrev: '#aeaeae', disNext: false, colorNext: '#1ccee9' })
        }
        console.log(this.state.currentPage)
    }

    nextPage = e => {
        const { currentPage } = this.state;
        if (currentPage === pagesLength - 1) {
            this.setState({ disNext: true, colorNext: '#aeaeae' })
        }
        this.setState({ currentPage: currentPage + 1, colorPrev: '#1ccee9', disPrev: false })
    }

    prevPage = e => {
        const { currentPage } = this.state;
        if (currentPage === 1 + 1) {
            this.setState({ disPrev: true, colorPrev: '#aeaeae' })
        }
        this.setState({ currentPage: currentPage - 1, disNext: false, colorNext: '#1ccee9' })
    }

    renderAdverts = () => {
        let range = this.state.currentPage * pageStep;
        const data = mockData.filter(item => mockData.indexOf(item) < range && mockData.indexOf(item) >= range - pageStep);
        return (
            data.map((item, i) => {
                return (
                    <Link to={links.details} key={i}>
                        <Advert
                            orgName={item.name}
                            isPdf={item.isPDF}
                            createDate={`від ${item.date}`}
                            cityPlace={item.city}
                            fullPrice={`${item.price} $`}
                            about={item.about}
                        />
                    </Link>
                )
            }))
    }
    // mockData.filter(item => mockData.indexOf(item) < range  && mockData.indexOf(item) >= range - step);

    render() {
        const { disPrev, disNext, colorNext, colorPrev, currentPage } = this.state;
        // this.changeColorBtns()
        return (
            <div className='results_list'>
                <div className='results_list_header'><span>Всі оголошення </span><span className='results_header_counter'>{`(${mockData.length})`}</span></div>
                {this.renderAdverts()}

                <div className="pagination_div">
                    <button style={{ color: colorPrev }} onClick={this.prevPage} ref='_prevBtn' disabled={disPrev}>{`<< Попередня `} </button>

                    {/* Pagination counting */}

                    {
                        currentPage === pagesLength - 2 ? <div className="pagination_count" >
                            <span onClick={this.getCurrentPageNumber} > 1 </span>
                            <span> . . . </span>
                            <span className='pagination_current'> {currentPage} </span>
                            <span onClick={this.getCurrentPageNumber} > {currentPage + 1} </span>
                            <span onClick={this.getCurrentPageNumber} > {currentPage + 2} </span>
                        </div>
                            : currentPage === pagesLength - 1 ? <div className="pagination_count">
                                <span onClick={this.getCurrentPageNumber} > 1 </span>
                                <span> . . . </span>
                                <span onClick={this.getCurrentPageNumber} > {currentPage - 1} </span>
                                <span className='pagination_current'> {currentPage} </span>
                                <span onClick={this.getCurrentPageNumber} > {currentPage + 1} </span>

                            </div>
                                : currentPage === pagesLength ? <div className="pagination_count" >
                                    <span onClick={this.getCurrentPageNumber} > 1 </span>
                                    <span> . . . </span>
                                    <span onClick={this.getCurrentPageNumber} > {currentPage - 2} </span>
                                    <span onClick={this.getCurrentPageNumber} > {currentPage - 1} </span>
                                    <span className='pagination_current'> {currentPage} </span>
                                </div>
                                    : currentPage < pagesLength - 2 && currentPage >= 3 ? <div className="pagination_count">
                                        <span onClick={this.getCurrentPageNumber} > {currentPage - 1} </span>
                                        <span className='pagination_current'> {currentPage} </span>
                                        <span onClick={this.getCurrentPageNumber} > {currentPage + 1} </span>
                                        <span>. . .</span>
                                        <span onClick={this.getCurrentPageNumber} > {pagesLength} </span>
                                    </div>
                                        : currentPage === 2 ? <div className="pagination_count">
                                            <span onClick={this.getCurrentPageNumber} > {currentPage - 1} </span>
                                            <span className='pagination_current'> {currentPage} </span>
                                            <span onClick={this.getCurrentPageNumber} > {currentPage + 1} </span>
                                            <span>. . .</span>
                                            <span onClick={this.getCurrentPageNumber} > {pagesLength} </span>
                                        </div>
                                            : currentPage === 1 ? <div className="pagination_count">
                                                <span className='pagination_current'> {currentPage} </span>
                                                <span onClick={this.getCurrentPageNumber} > {currentPage + 1} </span>
                                                <span onClick={this.getCurrentPageNumber} > {currentPage + 2} </span>
                                                <span>. . .</span>
                                                <span onClick={this.getCurrentPageNumber} > {pagesLength} </span>
                                            </div> : null
                    }
                    <button style={{ color: colorNext }} onClick={this.nextPage} ref='_nextBtn' disabled={disNext}>{`Наступна >>`}</button>
                </div>



            </div>

        )
    }
}

export default connect(
    (state) => ({}),
    dispatch => ({})
)(SearchResult);