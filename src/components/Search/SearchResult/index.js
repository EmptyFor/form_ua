import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import styles from '../SearchResult/style.modules.scss';
import Advert from '../../common/Advert';
import { Link } from 'react-router-dom';

const mockData = [
    {
        name: 'Конституційно-правова агенція твого міста',
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
        name: 'Конституційно-правова агенція твого міста',
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
        name: 'Конституційно-правова агенція твого міста',
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
]
class SearchResult extends Component {

    state = {
        currentPage: 1,
        pagesLength: 5,
        pageStep: 6,
        crumbs: false,
        disPrev: true,
        disNext: false,
        colorNext: '#1ccee9',
        colorPrev: '#aeaeae'
    }

    componentDidMount = () => {
        const { pagesLength } = this.state;
        if (pagesLength > 4) {
            this.setState({ crumbs: true });
        }
    }

    nextPage = e => {
        const { currentPage, pagesLength } = this.state;
        if (currentPage === pagesLength - 1) {
            this.setState({ disNext: true, colorNext: '#aeaeae' })
        }
        this.setState({ currentPage: currentPage + 1, colorPrev: '#1ccee9', disPrev: false })
    }

    prevPage = e => {
        const { currentPage, pagesLength } = this.state;
        if (currentPage === 1 + 1) {
            this.setState({ disPrev: true, colorPrev: '#aeaeae' })
        }
        this.setState({ currentPage: currentPage - 1, disNext: false, colorNext: '#1ccee9' })
    }

    // ----------------------- ! Pagination

    renderAdverts = () => {
        return (
            mockData.map((item, i) => {
                return (
                    <Link to="/" key={i}>
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


    render() {
        const { crumbs, pagesLength, disPrev, disNext, colorNext, colorPrev } = this.state;
        // let pagesNum = moc
        console.log(this.state)
        return (
            <div className='results_list'>
                <div className='results_list_header'><span>Всі оголошення </span><span className='results_header_counter'>{`(${mockData.length})`}</span></div>
                {this.renderAdverts()}

                <div className="pagination_div">
                    <button style={{ color: colorPrev }} onClick={this.prevPage} ref='_prevBtn' disabled={disPrev}>{`<< Попередня `} </button>
                    {`${this.state.currentPage - 1}`} &nbsp;
                     <span className='pagination_current'> {this.state.currentPage} </span> &nbsp; {`${this.state.currentPage + 1} .. ${this.state.pagesLength}`}
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