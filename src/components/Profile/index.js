import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { Redirect } from 'react-router-dom';
import links from '../../config/links';
// import * as actions from '../../store/actions/authorise';
import Header from '../themes/common/Header';
import './style.modules.scss';
import CreateAdvertBtn from '../common/CreateAdvertBtn';
import Advert from '../common/Advert';
import document from '../../assets/images/spa.jpg'
import { Redirect } from 'react-router-dom';

const mockData = [
  {
    name: 'FIRST PAGE',
    isPDF: false,
    date: '10/02/2019',
    city: 'Львів',
    price: '12 000',
    createdAt: '2019-07-29 7:10',
    about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
  },
  {
    name: 'Конституційно-правова агенція твого міста',
    isPDF: true,
    date: '10/02/2019',
    city: 'Львів',
    price: '12 000',
    createdAt: '2012-07-28 14:35',
    about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
  },
  {
    name: 'FIRST',
    isPDF: false,
    date: '10/02/2019',
    city: 'Львів',
    price: '12 000',
    createdAt: '2019-07-26 11:57',
    about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
  },
  {
    name: 'FIRST',
    isPDF: true,
    date: '10/02/2019',
    city: 'Львів',
    price: '12 000',
    createdAt: '2019-06-29 11:57',
    about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
  },
  {
    name: 'FIRST',
    isPDF: false,
    date: '10/02/2019',
    city: 'Львів',
    price: '12 000',
    createdAt: '2014-06-29 11:57',
    about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
  },
  {
    name: 'FIRST',
    isPDF: true,
    date: '10/02/2019',
    city: 'Львів',
    price: '12 000',
    createdAt: '2014-02-11 11:57',
    about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
  },
  // {
  //   name: 'TWICE PAGE',
  //   isPDF: false,
  //   date: '10/02/2019',
  //   city: 'Львів',
  //   price: '12 000',
  //   createdAt: '',
  //   about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
  // },
  // {
  //   name: 'Конституційно-правова агенція твого міста',
  //   isPDF: true,
  //   date: '10/02/2019',
  //   city: 'Львів',
  //   price: '12 000',
  //   createdAt: '',
  //   about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
  // },
  // {
  //   name: 'TWICE',
  //   isPDF: false,
  //   date: '10/02/2019',
  //   city: 'Львів',
  //   price: '12 000',
  //   createdAt: '',
  //   about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
  // },
  // {
  //   name: 'TWICE',
  //   isPDF: true,
  //   date: '10/02/2019',
  //   city: 'Львів',
  //   price: '12 000',
  //   createdAt: '',
  //   about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
  // },
  // {
  //   name: 'TWICE',
  //   isPDF: false,
  //   date: '10/02/2019',
  //   city: 'Львів',
  //   price: '12 000',
  //   createdAt: '',
  //   about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
  // },
  // {
  //   name: 'TWICE',
  //   isPDF: true,
  //   date: '10/02/2019',
  //   city: 'Львів',
  //   price: '12 000',
  //   createdAt: '',
  //   about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
  // },
  // {
  //   name: 'THIRD PAGE',
  //   isPDF: false,
  //   date: '10/02/2019',
  //   city: 'Львів',
  //   price: '12 000',
  //   createdAt: '',
  //   about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
  // },
  // {
  //   name: 'Конституційно-правова агенція твого міста',
  //   isPDF: true,
  //   date: '10/02/2019',
  //   city: 'Львів',
  //   price: '12 000',
  //   createdAt: '',
  //   about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
  // },


];

const pageStep = 3;
const pagesLength = Math.ceil(mockData.length / pageStep);

export class Profile extends Component {

  numersOfPages = [];

  state = {
    visiblePagination: 'visibility',
    currentPage: 1,
    disPrev: true,
    disNext: false,
    colorNext: '#1ccee9',
    colorPrev: '#aeaeae'
  }

  componentWillMount = () => {
    if (pagesLength === 1) {
      this.setState({ visiblePagination: 'hidden' })
    } else {
      this.setState({ visiblePagination: 'visibility' })
      if (pagesLength <= 4) {
        for (let i = 1; i <= pagesLength; i++) {
          this.numersOfPages.push(i)
        }
      } else {
        this.numersOfPages = [this.state.currentPage, this.state.currentPage + 1, this.state.currentPage + 2, '. . .', pagesLength]
      }
    }
  }

  renderCountPagination = () => {
    if (pagesLength > 4) {
      if (this.state.currentPage > 1 && this.state.currentPage < pagesLength - 2) {
        this.numersOfPages = [this.state.currentPage - 1, this.state.currentPage, this.state.currentPage + 1, '. . .', pagesLength];
      }
      if (this.state.currentPage === 1) {
        this.numersOfPages = [this.state.currentPage, this.state.currentPage + 1, this.state.currentPage + 2, '. . .', pagesLength]
      }
      if (this.state.currentPage > pagesLength - 3) {
        if (this.state.currentPage === pagesLength - 2) {
          this.numersOfPages = [1, '. . .', this.state.currentPage, this.state.currentPage + 1, pagesLength]
        }
        if (this.state.currentPage === pagesLength - 1) {
          this.numersOfPages = [1, '. . .', this.state.currentPage - 1, this.state.currentPage, pagesLength]
        }
        if (this.state.currentPage === pagesLength) {
          this.numersOfPages = [1, '. . .', this.state.currentPage - 2, this.state.currentPage - 1, this.state.currentPage]
        }
      }
    }
  }

  getCurrentPageNumber = e => {
    this.setState({
      currentPage: this.state.currentPage = +e.currentTarget.innerHTML
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
  }

  nextPage = () => {
    if (this.state.currentPage === pagesLength - 1) {
      this.setState({ disNext: true, colorNext: '#aeaeae' })
    }
    this.setState({ currentPage: this.state.currentPage + 1, colorPrev: '#1ccee9', disPrev: false });
  }

  prevPage = () => {
    if (this.state.currentPage === 1 + 1) {
      this.setState({ disPrev: true, colorPrev: '#aeaeae' })
    }
    this.setState({ currentPage: this.state.currentPage - 1, disNext: false, colorNext: '#1ccee9' });
  }

  renderAdverts = () => {
    let range = this.state.currentPage * pageStep;
    const data = mockData.filter(item => mockData.indexOf(item) < range && mockData.indexOf(item) >= range - pageStep);

    return (
      data.map((item, i) => {
        let dateResult;
        let dateRange = Math.ceil((new Date() - new Date(item.createdAt)) / 1000);
        if (dateRange > 0 && dateRange < 60) {
          dateResult = 'Щойно'
        } else if (dateRange > 60 && dateRange < 3600) {
          let range = Math.floor(dateRange / 60);
          range === 1 || range === 21 || range === 31 || range === 41 || range === 51 ? dateResult = `${range} хвилина тому`
            : range < 5 || (range > 20 && range < 25) || (range > 30 && range < 35) || (range > 40 && range < 45) || (range > 50 && range < 55) ? dateResult = `${range} хвилини тому`
              : dateResult = `${range} хвилин тому`
        } else if (dateRange > 3600 && dateRange < 86400) {
          let range = Math.floor(dateRange / 3600);
          range === 1 || range === 21 ? dateResult = `${range} година тому`
            : range < 5 || range > 20 ? dateResult = `${range} години тому`
              : dateResult = `${range} годин тому`
        } else if (dateRange > 86400 && dateRange < 604800) {
          let range = Math.floor(dateRange / 86400)
          range === 1 ? dateResult = `${range} день тому` :
            range < 5 ? dateResult = `${range} дні тому` :
              dateResult = `${range} днів тому`
        } else {
          dateResult = `${new Date(item.createdAt).getDate()} / ${new Date(item.createdAt).getMonth() < 10 ? `0${new Date(item.createdAt).getMonth()}` : new Date(item.createdAt).getMonth()} / ${new Date(item.createdAt).getFullYear()}`
        }
        return (
          <div className="profile_advert_hover" key={i}>
            <Link to={links.details}>
              <Advert
                onClick={this.handleClickInfo}
                orgName={item.name}
                ispdf={item.isPDF + ''}
                createDate={`від ${item.date}`}
                cityPlace={item.city}
                fullPrice={`${item.price} $`}
                about={item.about}
                image={document}
              />
            </Link>
            <div className="advert_action_bar">
              <div className="advert_action_bar_time">{`${dateResult}`}</div>
              <div className="advert_action_bar_actions">
                <span>Видалити</span>
                <span>Деактивувати</span>
                <span>Редагувати</span>
              </div>
            </div>
          </div>
        )
      }))
  }
  render() {
    const { disPrev, disNext, colorNext, colorPrev, visiblePagination } = this.state;
    const { user,token } = this.props;

    if(!token){
      return <Redirect to={links.login} />
    }

    let dynamicWidth = 3 * this.numersOfPages.length + "%";
    let paginationPageCounter = this.numersOfPages.map((item, index) => {
      if (this.state.currentPage === item) {
        return <span className="pagination_current" key={index} > {item} </span>
      }
      if (item !== +item) {
        return <span style={{ cursor: 'auto' }} key={index} > {item} </span>
      }
      return <span onClick={this.getCurrentPageNumber} key={index} > {item} </span>
    });

    this.renderCountPagination();
    return (
      <Fragment>
        <Header className='menu_fix' fix={'true'} />
        <div className="profile_wrapper">
          <div className="profile_list" >
            <div className='profile_list_header'><span style={{ width: '30%' }}>Мої оголошення <label className='results_header_counter'>{`(${mockData.length})`}</label></span><span className=''><CreateAdvertBtn className="profile_create_advert_btn" /></span></div>
            {this.renderAdverts()}
            <div className="pagination_div" style={{ visibility: visiblePagination }}>
              <button style={{ color: colorPrev }} onClick={this.prevPage} ref='_prevBtn' disabled={disPrev}>{`<< Попередня `} </button>

              {/* Pagination counting */}
              <div className="pagination_count" style={{ width: dynamicWidth }}>
                {paginationPageCounter}
              </div>

              <button style={{ color: colorNext }} onClick={this.nextPage} ref='_nextBtn' disabled={disNext}>{`Наступна >>`}</button>
            </div>


          </div>

          <div className="profile_info" >
            <div className='profile_list_header info_head'><span>Особисті дані </span></div>
            <div className="profile_info_main_contain ">
              <span style={{ fontWeight: 'bold', fontSize: '25px' }}>{user.first_name}</span>
              <span style={{ marginBlockEnd: '5%' }}>{user.phone}</span>
              <span style={{ marginBlockEnd: '5%' }}>{user.email}</span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect(
  (state) => ({
    user: state.usr.user,
    token: state.auth.token
  }),
  // dispatch => ({
  //   actions: bindActionCreators(actions, dispatch)
  // })
)(Profile);