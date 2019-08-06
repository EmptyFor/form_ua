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



const pageStep = 5;
let pagesLength;
class SearchResult extends Component {

    state = {
        visiblePagination: 'visibility',
        currentPage: 1,
        disPrev: true,
        disNext: false,
        colorNext: '#1ccee9',
        colorPrev: '#aeaeae',

    }

    componentDidMount = () => {
        this.props.actions.postCurrentPage(this.state.currentPage)
    }

    // Set and calculate count of pages on pagination

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
        this.props.actions.postCurrentPage(this.state.currentPage)
    }

    nextPage = () => {
        if (this.state.currentPage === pagesLength - 1) {
            this.setState({ disNext: true, colorNext: '#aeaeae' })
        }
        this.setState({ currentPage: this.state.currentPage + 1, colorPrev: '#1ccee9', disPrev: false });
        this.props.actions.postCurrentPage(this.state.currentPage)
    }

    prevPage = () => {
        if (this.state.currentPage === 1 + 1) {
            this.setState({ disPrev: true, colorPrev: '#aeaeae' })
        }
        this.setState({ currentPage: this.state.currentPage - 1, disNext: false, colorNext: '#1ccee9' });
        this.props.actions.postCurrentPage(this.state.currentPage)
    }


    //RENDER ALL CONTENT ON PAGE
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
    //RENDER ALL CONTENT ON PAGE


    render() {
        const { disPrev, disNext, colorNext, colorPrev, visiblePagination, currentPage } = this.state;
        const { data } = this.props.data
        let paginationPageCounter, dynamicWidth;

        console.log(currentPage)

        if (data) {
            let numersOfPages = [];

            pagesLength = Math.ceil(data.total / pageStep)

            if (pagesLength >= 1) {
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

        return (
            <Fragment>
                {!data ? <p className="results_preloader">Зачекайте...</p> : <div className='results_list'>

                    {data ? <div className='results_list_header'><span>Всі оголошення </span><span className='results_header_counter'>
                        {`(${data.total})`}
                    </span></div> : null}

                    {this.renderAdverts(data.posts)}

                    <div className="pagination_div" style={{ visibility: visiblePagination }}>
                        <button style={{ color: colorPrev }} onClick={this.prevPage} ref='_prevBtn' disabled={disPrev}>{`<< Попередня `} </button>

                        {/* Pagination counting */}
                        <div className="pagination_count" style={{ width: dynamicWidth }}>
                            {paginationPageCounter}
                        </div>
                        <button style={{ color: colorNext }} onClick={this.nextPage} ref='_nextBtn' disabled={disNext}>{`Наступна >>`}</button>
                    </div>
                </div>

                }
            </Fragment>
        )
    }

}

export default connect(
    (state) => ({
        legal_form: state.search.legal_form,
        data:state.search.data
    }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(SearchResult);
