import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as editActions from '../../../store/actions/edit';
import * as searchActions from '../../../store/actions/details';
import Button from '../../common/Button';
import './style.modules.scss';
import './style.modules.media.scss';
import { withTranslation } from 'react-i18next';

export class FormFooter extends Component {

    state = {
        test: false
    }

    setFormData = (name, code, price, legal_form, kved_code, kved_name, extra_kved_name, tax_form, licenses, city, region, registered_at, pda, have_activity, no_debt, capital, owner_data, tel, image) => {

        let data = new FormData()

        let post = {
            name,
            code,
            price,
            kved_code,
            kved_name,
            extra_kved_name,
            city,
            region,
            registered_at,
            pda,
            have_activity,
            no_debt,
            capital,
            owner_data,
            tel,
        }
        image !== '' ? post.image = image : void 0
        legal_form !== this.props.data.post.legal_form ? post.legal_form = legal_form : void 0
        tax_form !== this.props.data.post.tax_form ? post.tax_form = tax_form : void 0
        licenses !== this.props.data.post.license ? post.licenses = licenses : void 0

        for (let key in post) {
            // Array.isArray(post[key]) ? data.set(`post[${key}]`, JSON.stringify(post[key]))  : data.set(`post[${key}]`, post[key])

            Array.isArray(post[key]) ? post[key].map((item, index) => data.append(`post[${key}][]`, item)) : data.set(`post[${key}]`, post[key])

        }
        this.props.editActions.sendEditData(this.props.data.post.id, data)
        this.props.searchActions.getAdvertDetails('clear')
    }

    handleClick = () => {
        if (this.props.data !== undefined) {
            const { name, code, price, image, legal_form, kved_code, kved_name, extra_kved_name, tax_form, licenses, city, region, registered_at, pda, have_activity, no_debt, capital, owner_data, tel } = this.props

            this.setState(prevState => ({ test: !prevState.test }))

            name.length > 0 &&
                code.toString().length === 8 &&
                price.toString().length > 0 &&
                legal_form.length > 0 &&
                kved_name.length > 0 &&
                extra_kved_name.length <= 10 &&
                tax_form.length > 0 &&
                licenses.length <= 5 &&
                city.length > 0 &&
                region.length > 0 &&
                registered_at.length === 10 &&
                pda.toString().length > 0 &&
                owner_data.length > 0 &&
                tel[0].length === 24 ?
                this.setFormData(name, +code, +price, legal_form, kved_code, kved_name, extra_kved_name, tax_form, licenses, city, region, registered_at, pda, have_activity, no_debt, capital, owner_data, tel, image)
                : alert(this.props.t('create-advert-footer-alert'))
        }
    }

    clearAllFields = () => {
        this.props.actions.clearAllInfo(true)
    }

    render() {
        const { t } = this.props
        return (
            <div className="form_footer" >
                {/* <Button className="clear_btn grey_btn" text={t('create-advert-footer-clear-btn')} onClick={this.clearAllFields} /> */}
                <Button className="publish_btn" text={t('create-advert-footer-edit-btn')} onClick={this.handleClick} />
            </div>
        );
    }
}

export default withTranslation()(connect(
    (state) => ({
        name: state.edit.name,
        code: state.edit.code,
        price: state.edit.price,
        image: state.edit.image,
        legal_form: state.edit.legal_form,
        kved_code: state.edit.kved_code,
        kved_name: state.edit.kved_name,
        extra_kved_name: state.edit.extra_kved_name,
        tax_form: state.edit.tax_form,
        licenses: state.edit.license,
        city: state.edit.city,
        region: state.edit.region,
        registered_at: state.edit.registered_at,
        pda: state.edit.pda,
        have_activity: state.edit.have_activity,
        no_debt: state.edit.no_debt,
        capital: state.edit.capital,
        owner_data: state.edit.owner_data,
        tel: state.edit.tel,
        clear: state.edit.clear
    }),
    dispatch => ({
        editActions: bindActionCreators(editActions, dispatch),
        searchActions: bindActionCreators(searchActions, dispatch)
    })
)(FormFooter));