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
        isPDF: false,
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
        isPDF: false,
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
]
class SearchResult extends Component {

    state = {
        currentCount: 0,
    }
    counter = () => {
        this.setState({ currentCount: this.state.currentCount + 1 })
    }
    componentDidMount = () => {
        setInterval(this.counter, 1000);
    }
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
        // let content =
        return (
            <div className='results_list'>
                <div className='results_list_header'><span>Всі оголошення </span><span className='results_header_counter'>{`(${mockData.length})`}</span></div>
                {this.renderAdverts()}
            </div>

        )
    }
}

export default connect(
    (state) => ({}),
    dispatch => ({})
)(SearchResult);