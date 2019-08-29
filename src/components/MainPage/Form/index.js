import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actions from '../../../store/actions/search';
import '../Form/style.modules.scss';
import '../Form/style.modules.media.scss';
import { Button } from '../../common/Button';
import { Select } from '../../common/Select';
import { Input } from '../../common/Input';
import { CheckBox } from '../../common/CheckBox';
import links from '../../../config/links';
import { images } from '../../../assets/images/images';
import background from '../../../assets/images/baground@2x.png';
import { withTranslation } from 'react-i18next';

export class Form extends Component {

    state = {
        legal_form: '',
        kved_code: '',
        kved_name: '',
        city: '',
        region: '',
        tax_form: '',
        price_from: '',
        price_to: '',
        pda: false,
        mobile: false
    }

    componentDidMount() {
        window.addEventListener('resize', this.resize.bind(this))
        this.resize()
    }

    resize = () => {
        this.setState({ mobile: window.innerWidth <= 580 })
    }

    setSearchData = (e) => {
        let name = e.target.getAttribute('name')
        let value = e.target.getAttribute('value') || e.target.value
        value === undefined ? value = "" : void 0

        name === 'price_from' || name === 'price_to' ? value = value.replace(/\D/g, '') : void 0
        name === 'pda' ? value = e.target.checked : void 0
        if (name === 'location') {
            value === undefined ? value = "" : void 0
            value = value.split(',')
            this.setState({ region: value[0], city: value[1] })
        }

        else if (name === 'kved_name' && value !== undefined) {
            this.setState({
                kved_code: value.replace(' ', 'splitPoint').split('splitPoint')[0],
                kved_name: value.replace(' ', 'splitPoint').split('splitPoint')[1]
            })
        }

        else {
            this.setState({
                [name]: value
            })
        }
    }

    sendSearchData = () => {
        const { legal_form, kved_code, kved_name, city, region, tax_form, price_from, price_to, pda } = this.state

        if (legal_form ||
            kved_name ||
            city ||
            region ||
            tax_form ||
            price_from !== '' ||
            price_to !== ''
        ) {
            this.props.actions.setMainPageFormInfo(legal_form, kved_code, kved_name, city, region, tax_form, price_from, price_to, pda)
            localStorage.setItem('formData', {

            })
            this.searchLink = 'active'
        }
    }

    sendSearchArgs = () => {
        const { legal_form, kved_code, kved_name, city, region, tax_form, price_from, price_to, pda, extra_kved_name, license, have_activity, no_debt } = this.state
        let search_args = []
        let by_price = [price_from, price_to]

        price_from === false || price_from === '' ? by_price[0] = 0 : by_price[0] = price_from
        price_to === false || price_to === '' ? by_price[1] = 99999999999999999 : by_price[1] = price_to
        search_args.push(`?min=${by_price[0]}`)
        search_args.push(`max=${by_price[1]}`)

        legal_form !== undefined ? legal_form.length > 0 ? search_args.push(`by_legalform=${legal_form}`) : void 0 : void 0

        kved_name !== undefined ? kved_name.length > 0 ? search_args.push(`st_by_kved_name=${kved_name}`) : void 0 : void 0

        city !== undefined ? city.length > 0 ? search_args.push(`st_by_city=${city}`) : void 0 : void 0

        tax_form !== undefined ? tax_form.length > 0 ? search_args.push(`by_taxform=${tax_form}`) : void 0 : void 0

        pda !== undefined ? pda === true ? search_args.push(`pda_true=${pda}`) : void 0 : void 0

        license !== undefined ? license.length > 0 ? search_args.push(`st_license=${license}`) : void 0 : void 0

        have_activity !== undefined ? have_activity === true ? search_args.push(`have_activity_true=${have_activity}`) : void 0 : void 0

        no_debt !== undefined ? no_debt === true ? search_args.push(`no_debt_true=${no_debt}`) : void 0 : void 0

        search_args = search_args.join('&')

        this.props.actions.setSearchArgs(search_args)
    }

    render() {
        const { t } = this.props;
        console.log("ZALUPA",t('taxForm', {returnObjects: true }))
        this.sendSearchData()
        return (

            <div className='wrapp' >
                <div className={this.state.mobile && "mobile_bg"}>
                    {this.state.mobile && <img src={background} className="mobile_bg_photo"></img>}
                    <h1>{t('main-page-form-title')}</h1>
                    <p className="form_subtitle" >{t('main-page-form-subtitle')}</p>
                </div>

                <div className='search_form grid'>

                    <Select
                        type="common"
                        width='auto'
                        itemList={t('legalForm', { returnObjects: true })}
                        placeholder={t('legal-form-select-placeholder')}
                        icon={images.house} id='mp_form_select_1'
                        name="legal_form"
                        getData={this.setSearchData}
                    />
                    <Select
                        type="search"
                        searchType="kved"
                        width='auto'
                        searchHolder={t('search-select-placeholder')}
                        placeholder={t('kved-name-select-placeholder')}
                        icon={images.portfolio}
                        id='mp_form_select_2'
                        name="kved_name"
                        getData={this.setSearchData}
                    />
                    <Select
                        type="search"
                        searchType="location"
                        width='auto'
                        searchHolder={t('search-select-placeholder')}
                        placeholder={t('location-select-placeholder')}
                        icon={images.mapPoint}
                        id='mp_form_select_3'
                        name="location"
                        getData={this.setSearchData}
                    />
                    <Select
                        type="common"
                        itemList={t('taxForm', { returnObjects: true })}
                        width='auto'
                        placeholder={t('tax-form-select-placeholder')}
                        icon={images.lable}
                        id='mp_form_select_4'
                        name="tax_form"
                        getData={this.setSearchData}
                    />

                    <p className="price">{t('price')}</p>
                    <Fragment>
                        <Input
                            getData={this.setSearchData}
                            name="registrationDate"
                            type="money"
                            placeholder={`${t('from')} (₴)`}
                            width="100%"
                            className='price_from'
                            name="price_from"
                            clear={this.props.clear}
                        />
                        <Input
                            getData={this.setSearchData}
                            name="registrationDate"
                            type="money"
                            placeholder='до (₴)'
                            width="100%"
                            className='price_to'
                            name="price_to"
                            clear={this.props.clear}
                        />
                    </Fragment>
                    <div className="is_PDV_payer">
                        <CheckBox
                            getData={this.setSearchData}
                            name="pda"
                            id='pda'
                            text={t('advert-details-ispda-confirm')}
                            clear={this.props.clear}
                        />
                    </div>

                    <Link to={links.search} className='common_btn_link'>
                        <Button className='extendet_search grey_btn'
                            text={t('extended-serach-btn')} />
                    </Link>


                    <Link to={this.searchLink === 'active' ? links.search : "#"} className='common_btn_link'>
                        <Button
                            className='find'
                            text={t('search')}
                            onClick={this.sendSearchArgs}
                        />
                    </Link>
                </div>
            </div >

        );
    }
}

export default withTranslation()(connect(
    (state) => ({
        legal_form: state.search.legal_form,
        kved_name: state.search.kved_name,
        city: state.search.city,
        region: state.search.region,
        tax_form: state.search.tax_form,
        price_from: state.search.price_from,
        price_to: state.search.price_to,
        pda: state.search.pda
    }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(Form));