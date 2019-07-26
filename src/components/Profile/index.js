import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { Redirect } from 'react-router-dom';
// import links from '../../config/links';
// import * as actions from '../../store/actions/authorise';
// import Header from '../themes/common/Header';
import './style.modules.scss';
// import CreateAdvertBtn from '../common/CreateAdvertBtn';
// import Advert from '../common/Advert';

// const mockData = [
//   {
//     name: 'FIRST PAGE',
//     isPDF: false,
//     date: '10/02/2019',
//     city: 'Львів',
//     price: '12 000',
//     about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
//   },
//   {
//     name: 'Конституційно-правова агенція твого міста',
//     isPDF: true,
//     date: '10/02/2019',
//     city: 'Львів',
//     price: '12 000',
//     about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
//   },
//   {
//     name: 'FIRST',
//     isPDF: false,
//     date: '10/02/2019',
//     city: 'Львів',
//     price: '12 000',
//     about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
//   },
//   {
//     name: 'FIRST',
//     isPDF: true,
//     date: '10/02/2019',
//     city: 'Львів',
//     price: '12 000',
//     about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
//   },
//   {
//     name: 'FIRST',
//     isPDF: false,
//     date: '10/02/2019',
//     city: 'Львів',
//     price: '12 000',
//     about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
//   },
//   {
//     name: 'FIRST',
//     isPDF: true,
//     date: '10/02/2019',
//     city: 'Львів',
//     price: '12 000',
//     about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
//   },
//   {
//     name: 'TWICE PAGE',
//     isPDF: false,
//     date: '10/02/2019',
//     city: 'Львів',
//     price: '12 000',
//     about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
//   },
//   {
//     name: 'Конституційно-правова агенція твого міста',
//     isPDF: true,
//     date: '10/02/2019',
//     city: 'Львів',
//     price: '12 000',
//     about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
//   },
//   {
//     name: 'TWICE',
//     isPDF: false,
//     date: '10/02/2019',
//     city: 'Львів',
//     price: '12 000',
//     about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
//   },
//   {
//     name: 'TWICE',
//     isPDF: true,
//     date: '10/02/2019',
//     city: 'Львів',
//     price: '12 000',
//     about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
//   },
//   {
//     name: 'TWICE',
//     isPDF: false,
//     date: '10/02/2019',
//     city: 'Львів',
//     price: '12 000',
//     about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
//   },
//   {
//     name: 'TWICE',
//     isPDF: true,
//     date: '10/02/2019',
//     city: 'Львів',
//     price: '12 000',
//     about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
//   },
//   {
//     name: 'THIRD PAGE',
//     isPDF: false,
//     date: '10/02/2019',
//     city: 'Львів',
//     price: '12 000',
//     about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
//   },
//   {
//     name: 'Конституційно-правова агенція твого міста',
//     isPDF: true,
//     date: '10/02/2019',
//     city: 'Львів',
//     price: '12 000',
//     about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
//   },


// ];

// const pageStep = 4;
// const pagesLength = Math.ceil(mockData.length / pageStep);
export class Profile extends Component {

//   state = {
//     currentPage: 1,
//     disPrev: true,
//     disNext: false,
//     colorNext: '#1ccee9',
//     colorPrev: '#aeaeae',
//   }

//   getCurrentPageNumber = e => {

//     this.setState({
//       currentPage: this.state.currentPage = +e.target.innerHTML
//     })

//     if (this.state.currentPage !== 1) {
//       if (this.state.currentPage === pagesLength) {
//         this.setState({ disPrev: false, colorPrev: '#1ccee9', disNext: true, colorNext: '#aeaeae' })
//       } else {
//         this.setState({ disPrev: false, colorPrev: '#1ccee9', disNext: false, colorNext: '#1ccee9' })
//       }
//     } else {
//       this.setState({ disPrev: true, colorPrev: '#aeaeae', disNext: false, colorNext: '#1ccee9' })
//     }
//     console.log(this.state.currentPage)
//   }

//   nextPage = e => {
//     const { currentPage } = this.state;
//     if (currentPage === pagesLength - 1) {
//       this.setState({ disNext: true, colorNext: '#aeaeae' })
//     }
//     this.setState({ currentPage: currentPage + 1, colorPrev: '#1ccee9', disPrev: false })
//   }

//   prevPage = e => {
//     const { currentPage } = this.state;
//     if (currentPage === 1 + 1) {
//       this.setState({ disPrev: true, colorPrev: '#aeaeae' })
//     }
//     this.setState({ currentPage: currentPage - 1, disNext: false, colorNext: '#1ccee9' })
//   }

//   renderAdverts = () => {
//     let range = this.state.currentPage * pageStep;
//     const data = mockData.filter(item => mockData.indexOf(item) < range && mockData.indexOf(item) >= range - pageStep);
//     return (
//       data.map((item, i) => {
//         return (
//           <Link to={links.details} key={i}>
//             <Advert
//               orgName={item.name}
//               isPdf={item.isPDF}
//               createDate={`від ${item.date}`}
//               cityPlace={item.city}
//               fullPrice={`${item.price} $`}
//               about={item.about}
//             />
//           </Link>
//         )
//       }))
//   }

  render() {
    // const { disPrev, disNext, colorNext, colorPrev, currentPage } = this.state;

    return (
//       <Fragment>
//         <Header className='menu_fix' fix={true} />
//         <div className="profile_wrapper">
//           <div className="profile_list" >
//             <div className='profile_list_header'><span style={{ width: '30%' }}>Мої оголошення <label className='results_header_counter'>{`(${mockData.length})`}</label></span><span className=''><CreateAdvertBtn className="profile_create_advert_btn" /></span></div>
//             {this.renderAdverts()}
//             {
//               mockData.length >= pageStep ? <div className="pagination_div" >
//                 <button style={{ color: colorPrev }} onClick={this.prevPage} ref='_prevBtn' disabled={disPrev}>{`<< Попередня `} </button>
//                 { 

//                   pagesLength < 5 ?
//                     <div className="pagination_count">
//                       <span className='pagination_current'> {currentPage} </span>
//                       <span onClick={this.getCurrentPageNumber} > {currentPage + 1} </span>
//                       <span onClick={this.getCurrentPageNumber} > {currentPage + 2} </span>
//                       <span onClick={this.getCurrentPageNumber} > {pagesLength} </span>
//                     </div>
//                     : currentPage === 2 ?
//                       <div className="pagination_count">
//                         <span onClick={this.getCurrentPageNumber} > {currentPage - 1} </span>
//                         <span className='pagination_current'> {currentPage} </span>
//                         <span onClick={this.getCurrentPageNumber} > {currentPage + 1} </span>
//                         <span onClick={this.getCurrentPageNumber} > {pagesLength} </span>
//                       </div>
//                       : currentPage === 3 ?
//                       <div className="pagination_count">
//                         <span onClick={this.getCurrentPageNumber} > {currentPage - 2} </span>
//                         <span onClick={this.getCurrentPageNumber} > {currentPage - 1} </span>
//                         <span className='pagination_current'> {currentPage} </span>
//                         <span onClick={this.getCurrentPageNumber} > {pagesLength} </span>
//                       </div>
//                       : currentPage === 1 && pagesLength > 5 ?
//                         <div className="pagination_count">
//                           <span className='pagination_current'> {currentPage} </span>
//                           <span onClick={this.getCurrentPageNumber} > {currentPage + 1} </span>
//                           <span onClick={this.getCurrentPageNumber} > {currentPage + 2} </span>
//                           <span>. . .</span>
//                           <span onClick={this.getCurrentPageNumber} > {pagesLength} </span>
//                         </div>
//                         : currentPage === 2 && pagesLength > 5 ?
//                           <div className="pagination_count">
//                             <span onClick={this.getCurrentPageNumber} > {currentPage - 1} </span>
//                             <span className='pagination_current'> {currentPage} </span>
//                             <span onClick={this.getCurrentPageNumber} > {currentPage + 1} </span>
//                             <span>. . .</span>
//                             <span onClick={this.getCurrentPageNumber} > {pagesLength} </span>
//                           </div>
//                           : currentPage < pagesLength - 2 && currentPage >= 5 ?
//                             <div className="pagination_count">
//                               <span onClick={this.getCurrentPageNumber} > {currentPage - 1} </span>
//                               <span className='pagination_current'> {currentPage} </span>
//                               <span onClick={this.getCurrentPageNumber} > {currentPage + 1} </span>
//                               <span>. . .</span>
//                               <span onClick={this.getCurrentPageNumber} > {pagesLength} </span>
//                             </div>
//                             : currentPage === pagesLength ?
//                               <div className="pagination_count" >
//                                 <span onClick={this.getCurrentPageNumber} > 1 </span>
//                                 <span> . . . </span>
//                                 <span onClick={this.getCurrentPageNumber} > {currentPage - 2} </span>
//                                 <span onClick={this.getCurrentPageNumber} > {currentPage - 1} </span>
//                                 <span className='pagination_current'> {currentPage} </span>
//                               </div>
//                               : currentPage === pagesLength - 1 ?
//                                 <div className="pagination_count">
//                                   <span onClick={this.getCurrentPageNumber} > 1 </span>
//                                   <span> . . . </span>
//                                   <span onClick={this.getCurrentPageNumber} > {currentPage - 1} </span>
//                                   <span className='pagination_current'> {currentPage} </span>
//                                   <span onClick={this.getCurrentPageNumber} > {currentPage + 1} </span>
//                                 </div>
//                                 : currentPage === pagesLength - 2 ?
//                                   <div className="pagination_count" >
//                                     <span onClick={this.getCurrentPageNumber} > 1 </span>
//                                     <span> . . . </span>
//                                     <span className='pagination_current'> {currentPage} </span>
//                                     <span onClick={this.getCurrentPageNumber} > {currentPage + 1} </span>
//                                     <span onClick={this.getCurrentPageNumber} > {currentPage + 2} </span>
//                                   </div> : null
//                 }


//                 <button style={{ color: colorNext }} onClick={this.nextPage} ref='_nextBtn' disabled={disNext}>{`Наступна >>`}</button>
//               </div> : null
//             }

//           </div>

//           <div className="profile_info" >
//             <div className='profile_list_header info_head'><span>Особисті дані </span></div>
//             <div className="profile_info_main_contain ">
//               <span style={{ fontWeight: 'bold', fontSize: '25px' }}>Name Profile</span>
//               <span style={{ marginBlockEnd: '5%' }}>number</span>
//               <span style={{ marginBlockEnd: '5%' }}>email</span>
//             </div>
//           </div>
//         </div>
//       </Fragment>
<div></div>
    );
  }
}

export default connect(
  // ({ }) => ({
  // }),
  // dispatch => ({
  //   actions: bindActionCreators(actions, dispatch)
  // })
)(Profile);