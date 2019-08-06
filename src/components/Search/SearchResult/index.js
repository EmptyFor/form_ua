import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../store/actions/search';
import '../SearchResult/style.modules.scss';
import Advert from '../../common/Advert';
import { Link } from 'react-router-dom';
import links from '../../../config/links';
import document from '../../../assets/images/spa.jpg'
import nodata from '../../../assets/images/nodata.png'


const vata = [
    {
        name: 'FIVE PAGE',
        isPDF: false,
        date: '10/02/2019',
        city: 'Львів',
        price: '12 000',
        about: 'Акціонерне товариство, операції з нерухомим майном, загальна система оподаткування, зовнішньоекономічна діяльність разова імпортна / експортна ліцензія, ведення сільськогосподарської діяльності, без  заборгованостей та обтяжень…'
    },
];

const pageStep = 5;
const pagesLength = Math.ceil(vata.length / pageStep);

class SearchResult extends Component {


    numersOfPages = [];

    state = {
        visiblePagination: 'visibility',
        currentPage: 1,
        disPrev: true,
        disNext: false,
        colorNext: '#1ccee9',
        colorPrev: '#aeaeae'
    }

    constructor(props) {
        super(props);

    }

    componentWillMount = () => {
        this.props.actions.postCurrentPage(this.state.currentPage)
        if (pagesLength <= 1) {
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

    renderAdverts = (posts) => {
        if (posts.length === 0) {
            return <img className="search_adverts_nodata_img" src={nodata}></img>
        } else {
            return (
                posts.map((item, i) => {
                    return (
                        // <Link to={links.details} >
                        <Fragment key={i}>
                            <Advert
                                advertid={item.id}
                                orgName={`${item.name}`}
                                ispda={`${item.pda + ''}`}
                                createDate={`від ${item.registered_at}`}
                                cityPlace={`${item.city}`}
                                fullPrice={`${item.price} $`}
                                about={`${item.owner_data}`}
                                image={`${item.image.url}`}
                            />
                            <div className='line'></div>
                            </Fragment>
                        // </Link>
                    )
                })

            )
        }
    }

    render() {
        const { disPrev, disNext, colorNext, colorPrev, visiblePagination } = this.state;
        const { data } = this.props.data

        let dynamicWidth = 3 * this.numersOfPages.length + "%"
        let paginationPageCounter = this.numersOfPages.map((item, index) => {
            if (this.state.currentPage === item) {
                return <span className="pagination_current" key={index} > {item} </span>
            }
            if (item !== +item) {
                return <span style={{ cursor: 'auto' }} key={index} > {item} </span>
            }
            return <span onClick={this.getCurrentPageNumber} key={index} > {item} </span>
        })

        
        this.renderCountPagination()
        

        return (
            <div className='results_list'>
                {data ? <div className='results_list_header'><span>Всі оголошення </span><span className='results_header_counter'>
                {`(${data.posts.length})`}
                </span></div> : null}

                {data ? this.renderAdverts(data.posts) : <p className="results_preloader">Зачекайте...</p>}

                <div className="pagination_div" style={{ visibility: visiblePagination }}>
                    <button style={{ color: colorPrev }} onClick={this.prevPage} ref='_prevBtn' disabled={disPrev}>{`<< Попередня `} </button>

                    {/* Pagination counting */}
                    <div className="pagination_count" style={{ width: dynamicWidth }}>
                        {paginationPageCounter}
                    </div>
                    <button style={{ color: colorNext }} onClick={this.nextPage} ref='_nextBtn' disabled={disNext}>{`Наступна >>`}</button>
                </div>
            </div>

        )
    }
}

export default connect(
    (state) => ({
        data: state.search.data
    }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(SearchResult);