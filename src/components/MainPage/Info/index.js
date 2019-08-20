import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import left_image from '../../../assets/images/rectangle-16@3x.png'
import '../Info/style.modules.scss';
import '../Info/style.modules.media.scss';
import CreateAdvertBtn from '../../common/CreateAdvertBtn';
import description_img_1 from '../../../assets/images/icon-1@2x.png';
import description_img_2 from '../../../assets/images/icon-2@2x.png';
import { withTranslation } from 'react-i18next';

export class Info extends Component {


    render() {
        const { t } = this.props
        return (

            <div className='grid' >
                <div className="left_img">
                    <img alt="" src={left_image}></img>
                </div>

                <div className="right_create_advert">
                    <h1 className="title">
                        {t('main-page-info-title')}
                    </h1>
                    <p className="subtitle">
                        {t('main-page-info-subtitle')}
                    </p>
                    <CreateAdvertBtn />
                </div>

                <div className="how_it_works">
                    <h1>
                        {t('main-page-info-how-work')}
                    </h1>
                    <p>
                        {t('main-page-info-how-work-sub')}
                    </p>
                    <div className="red_line"></div>
                </div>

                <div className="left_description">
                    <div className="description">
                        <img alt="" src={description_img_1}></img>
                        <div className="text">
                            <h1>
                                {t('main-page-info-description1-title')}
                            </h1>
                            <p>
                                {t('main-page-info-description1-text')}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="right_description">
                    <div className="description">
                        <img alt="" src={description_img_2}></img>
                        <div className="text">
                            <h1>
                            {t('main-page-info-description2-title')}
                            </h1>
                            <p>
                            {t('main-page-info-description2-text')}
                             </p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default withTranslation()(Info);