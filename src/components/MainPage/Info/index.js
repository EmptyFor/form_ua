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
// import globalStyle from '../../../assets/styles/global.styles.scss'

export class Info extends Component {


    render() {
        return (

            <div className='grid' >
                <div className="left_img">
                    <img alt="" src={left_image}></img>
                </div>

                <div className="right_create_advert">
                    <h1 className="title">
                        Шукаєш рішення для продажу власної компанії?
                    </h1>
                    <p className="subtitle">
                        Тоді не варто зволікати, створюй оголошення всього за декілька секунд
                    </p>
                    <CreateAdvertBtn />
                </div>

                <div className="how_it_works">
                    <h1>
                        Як це працює?
                    </h1>
                    <p>
                        Це зовсім просто, розпочни прямо зараз
                    </p>
                    <div className="red_line"></div>
                </div>

                <div className="left_description">
                    <div className="description">
                        <img alt="" src={description_img_1}></img>
                        <div className="text">
                            <h1>
                                Знайди бажане за декілька хвилин
                            </h1>
                            <p>
                                За допомогою параметрів розширеного пошуку ти легко зможеш знайти потрібне оголошення
                                на нашому сайті.
                                Зконтактуйся з власником та отримуй задоволення від успішної покупки без жодних перешкод.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="right_description">
                    <div className="description">
                        <img alt="" src={description_img_2}></img>
                        <div className="text">
                            <h1>
                                Вирішуй всі питання без проблем
                            </h1>
                            <p>
                                Реєструйся на сайті та публікуй свої оголошення
                                про бізнес, Клієнти не змусять себе чекати!
                                Отримуй дзвінки і вибирай найкращі пропозиції з
                                користю для себе. Всього декілька кроків
                                відділяють тебе від бажаного.
                             </p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default connect(
    // (state) => ({}),
    // dispatch => ({
    //                 // actions: bindActionCreators(actions, dispatch)
    //             })
)(Info);