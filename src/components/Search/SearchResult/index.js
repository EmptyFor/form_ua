import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import styles from '../SearchResult/style.modules.scss';
import Advert from '../../common/Advert';
import { Link } from 'react-router-dom';

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
        name: 'TWICE PAGE',
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
    {
        name: 'Конституційно-правова агенція твого міста',
        isPDF: false,
        date: '10/02/2019',
        city: 'Львів',
        price: '12 000',
        about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
    },
    {
        name: 'THIRD PAGE',
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
        name: 'SIX PAGE',
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
        name: 'sdadsasd-правова агенція твого міста',
        isPDF: true,
        date: '10/02/2019',
        city: 'Львів',
        price: '12 000',
        about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
    },
];

const pageStep = 6;
const pagesLength = Math.ceil(mockData.length / pageStep);
class SearchResult extends Component {

    state = {
        currentPage: 1,
        crumbs: false,
        disPrev: true,
        disNext: false,
        colorNext: '#1ccee9',
        colorPrev: '#aeaeae'
    }

    componentDidMount = () => {
        if (pagesLength > 4) {
            this.setState({ crumbs: true });
        }
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
        const data = mockData.filter(item => mockData.indexOf(item) < range  && mockData.indexOf(item) >= range - pageStep);
        return (
            data.map((item, i) => {
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
    // mockData.filter(item => mockData.indexOf(item) < range  && mockData.indexOf(item) >= range - step);

    render() {
        const { disPrev, disNext, colorNext, colorPrev } = this.state;
        // let pagesNum = moc
        console.log(this.state)
        return (
            <div className='results_list'>
                <div className='results_list_header'><span>Всі оголошення </span><span className='results_header_counter'>{`(${mockData.length})`}</span></div>
                {this.renderAdverts()}

                <div className="pagination_div">
                    <button style={{ color: colorPrev }} onClick={this.prevPage} ref='_prevBtn' disabled={disPrev}>{`<< Попередня `} </button>
                    <span className='pagination_current'> {this.state.currentPage} </span>
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