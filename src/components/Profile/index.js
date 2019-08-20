import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { Redirect } from 'react-router-dom';
import links from '../../config/links';
import * as actions from '../../store/actions/user';
import * as profileActions from '../../store/actions/profile';
import Header from '../themes/common/Header';
import './style.modules.scss';
import './style.modules.media.scss';
import CreateAdvertBtn from '../common/CreateAdvertBtn';
import Advert from '../common/Advert';
import { Redirect } from 'react-router-dom';
import triangle_bg from '../../assets/images/triangle_bg.png'
import { getToken } from '../../store/helpers/localStorage'
import profile_phone from '../../assets/images/profile_phone2x.png'
import profile_email from '../../assets/images/profile_mail2x.png'
import Modal from '../common/Modal';
import { withTranslation } from 'react-i18next';

const pageStep = 3;
let pagesLength;

export class Profile extends Component {

  constructor(props) {
    super(props);
    this.token = getToken()
    this.t = props.t 
  }

  state = {
    currentPage: 1,
    disPrev: true,
    disNext: false,
    colorNext: '#1ccee9',
    colorPrev: '#aeaeae',
    modal: false
  }



  componentWillReceiveProps = () => {
    if (this.props.active_status) {
      this.setState({ modal: false })
    }
  }

  componentDidMount = () => {
    this.props.actions.getProfileInfo(this.state.currentPage)
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

    this.props.actions.getProfileInfo(this.state.currentPage)
  }

  nextPage = () => {
    if (this.state.currentPage === pagesLength - 1) {
      this.setState({ disNext: true, colorNext: '#aeaeae' })
    }
    this.setState({ currentPage: this.state.currentPage = this.state.currentPage + 1, colorPrev: '#1ccee9', disPrev: false });
    this.props.actions.getProfileInfo(this.state.currentPage)
  }

  prevPage = () => {
    if (this.state.currentPage === 1 + 1) {
      this.setState({ disPrev: true, colorPrev: '#aeaeae' })
    }
    this.setState({ currentPage: this.state.currentPage = this.state.currentPage - 1, disNext: false, colorNext: '#1ccee9' });
    this.props.actions.getProfileInfo(this.state.currentPage)
  }



  renderAdverts = (posts) => {
    if (!posts) {
      return <div> . . .</div>
    }
    if (posts.length === 0) {
      return <div className="profile_adverts_nodata"> {this.t('profile-adverts-nodata')}</div>
    } else {
      return (
        posts.map((item, i) => {
          let dateResult, range;
          let dateRange = Math.ceil((new Date() - new Date(item.created_at)) / 1000);
          if (dateRange > 0 && dateRange < 60) {
            dateResult = this.t('profile-info-time-justnow');
          } else if (dateRange > 60 && dateRange < 3600) {
            range = Math.floor(dateRange / 60);
            range === 1 || range === 21 || range === 31 || range === 41 || range === 51 ? dateResult = `${range} ${this.t('profile-info-time-minute-ten')}`
              : range < 5 || (range > 20 && range < 25) || (range > 30 && range < 35) || (range > 40 && range < 45) || (range > 50 && range < 55) ? dateResult = `${range} ${this.t('profile-info-time-minute-more')}`
                : dateResult = `${range} ${this.t('profile-info-time-minute-last')}`
          } else if (dateRange > 3600 && dateRange < 86400) {
            range = Math.floor(dateRange / 3600);
            range === 1 || range === 21 ? dateResult = `${range} ${this.t('profile-info-time-minute-ten')}`
              : range < 5 || range > 20 ? dateResult = `${range} ${this.t('profile-info-time-minute-more')}`
                : dateResult = `${range} ${this.t('profile-info-time-minute-last')}`
          } else if (dateRange > 86400 && dateRange < 604800) {
            range = Math.floor(dateRange / 86400)
            range === 1 ? dateResult = `${range} ${this.t('profile-info-time-days-ten')}` :
              range < 5 ? dateResult = `${range} ${this.t('profile-info-time-days-more')}` :
                dateResult = `${range} ${this.t('profile-info-time-days-last')}`
          } else {
            dateResult = `${new Date(item.created_at).getDate()} / ${new Date(item.created_at).getMonth() < 10 ? `0${new Date(item.created_at).getMonth()}` : new Date(item.created_at).getMonth()} / ${new Date(item.created_at).getFullYear()}`
          }
          return (
            <div id={`x${item.id}`} className="profile_advert_hover" key={`_${item.id}`}>
              <Advert
                advertid={item.id}
                placement={'profile'}
                activate={item.active}
                onClick={this.handleClickInfo}
                orgName={item.name}
                ispda={item.ispda}
                createDate={`${this.t('from')} ${item.registered_at}`}
                cityPlace={item.city}
                fullPrice={`${item.price} ₴`}
                about={`${[item.kved_name, item.extra_kved_name].join(', ')}`}
                image={item.image.url}
                dateResult={dateResult}
              />
            </div>
          )
        }))
    }
  }


  render() {
    const { disPrev, disNext, colorNext, colorPrev, currentPage, modal } = this.state;
    const { user } = this.props;
    const { data } = this.props
    let paginationPageCounter, dynamicWidth;

    const token = localStorage.getItem('firm-token')
    if (!token) {
      return <Redirect to={links.login} />
    }

    if (data) {
      let numersOfPages = [];

      pagesLength = Math.ceil(data.total / pageStep)

      if (pagesLength > 1) {
        if (pagesLength <= 4) {
          for (let i = 1; i <= pagesLength; i++) {
            numersOfPages.push(i)
          }
        }
        else {
          numersOfPages = [currentPage, currentPage + 1, currentPage + 2, '. . .', pagesLength]

          if (pagesLength > 4) {
            if (currentPage > 1 && currentPage < pagesLength - 2) {
              numersOfPages = [currentPage - 1, currentPage, currentPage + 1, '. . .', pagesLength];
            }
            if (currentPage === 1) {
              numersOfPages = [currentPage, currentPage + 1, currentPage + 2, '. . .', pagesLength]
            }

            if (currentPage > pagesLength - 3) {
              if (currentPage === pagesLength - 2) {
                numersOfPages = [1, '. . .', currentPage, currentPage + 1, pagesLength]
              }
              if (currentPage === pagesLength - 1) {
                numersOfPages = [1, '. . .', currentPage - 1, currentPage, pagesLength]
              }
              if (currentPage === pagesLength) {
                numersOfPages = [1, '. . .', currentPage - 2, currentPage - 1, currentPage]
              }
            }
          }
        }
      }

      paginationPageCounter = numersOfPages.map((item, index) => {
        if (currentPage === item) {
          return <span className="pagination_current" key={index} > {item} </span>
        }
        if (item !== +item) {
          return <span style={{ cursor: 'auto' }} key={index} > {item} </span>
        }
        return <span onClick={this.getCurrentPageNumber} key={index} > {item} </span>
      })

      dynamicWidth = 3 * numersOfPages.length + "%"
    }
    if (this.props.status === 200) {
      if ((data.total / 3) !== currentPage) {
        this.props.actions.getProfileInfo(this.state.currentPage - 1);
      } else {
        this.props.actions.getProfileInfo(this.state.currentPage);
      }
      this.props.profileActions.checkAdvertStatus('')
    }

    return (

      <Fragment>
        {
          this.props.id && this.props.tupe ? <Modal type={this.props.tupe} advertid={this.props.id} /> : null
        }
        <Header className='menu_fix' fix="true" />
        <div className="profile_wrapper">
          <img className="image_bg" alt="" src={triangle_bg}></img>
          {!data ? <p className="results_preloader">{this.t('result-preloader')}</p> : <div className="profile_list" >
            <div>
              {data ? <div className='profile_list_header'>
                <span className="results_header" >{this.t('profile-adverts-header')} <label className='results_header_counter'>{!data.total ? ' ' : `(${data.total})`}</label></span>
                <span className='profile_create_advert_btn_span'><CreateAdvertBtn className="profile_create_advert_btn" /></span></div> : null}

              {this.renderAdverts(data.posts)}

            </div>
            {/* Pagination counting */}

            {pagesLength <= 1 ? null : <div className="pagination_div">
              <button style={{ color: colorPrev }} onClick={this.prevPage} ref='_prevBtn' disabled={disPrev}>{`<< ${this.t('pagination-btn-prev')} `} </button>
              <div className="pagination_count" style={{ width: dynamicWidth }} >
                {paginationPageCounter}
              </div>
              <button style={{ color: colorNext }} onClick={this.nextPage} ref='_nextBtn' disabled={disNext}>{`${this.t('pagination-btn-next')} >>`}</button>
            </div>}

          </div>}

          {/* Profile information */}

          <div className="profile_info" >
            <div className='profile_list_header info_head'><span>{this.t('profile-info')}</span></div>
            <div className="profile_info_main_contain ">
              <span className="profile_info_name" >{user.first_name}</span>
              <span className="profile_info_labels" style={{ marginBlockEnd: '5%' }}><img src={profile_phone} />{user.phone}</span>
              <span className="profile_info_labels" style={{ marginBlockEnd: '5%' }}><img src={profile_email} />{user.email}</span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withTranslation()(connect(
  (state) => ({
    user: state.usr.user,
    data: state.usr.data,
    id: state.profile.id,
    tupe: state.profile.tupe,
    status: state.profile.status,
    active_status: state.profile.active_status
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch),
    profileActions: bindActionCreators(profileActions, dispatch),
  })
)(Profile));