import { Component } from 'react'
import cn from 'classnames'

import Header from 'modules/common/header'
import Footer from 'modules/common/footer'
import Btn from 'modules/common/btn'

import appCss from 'scss/app.scss'
import cssFlex from 'modules/_layouts/flex'
import css from './style.scss'

class Brief extends Component {
  renderCheckboxList (props) {
    const { title, name, items } = props;

    return (
      <div>
        <h2>{title}</h2>
        {items.map((item) => (
          <label>
            <input type='checkbox' />
            <span>{item.name}</span>
          </label>
        ))}
      </div>
    )
  }

  render () {
    return (
      <div>
        <Header />
        <div className={appCss.bnsContainer}>
          Заполните бриф <br />
          Оставьте заявку, либо звоните, мы пообщаемся
          и сами все за вас заполним: +7 495 268-06-61 <br />
          { this.renderCheckboxList({
            title: 'Типы проектов',
            items: [
              { name: 'Система или сервис'},
              { name: 'Мобильное приложение'},
              { name: 'Мобильное приложение'},
              { name: 'Сайт'},
              { name: 'Другое'},
            ]
          }) }
          <br />
          { this.renderCheckboxList({
            title: 'Услуги',
            items: [
              { name: 'Аналитика'},
              { name: 'Дизайн'},
              { name: 'Разработка и интеграция'},
              { name: 'Креатив и стратегия'},
              { name: 'Поддержка'},
            ]
          }) }
          <br />
          { this.renderCheckboxList({
            title: 'Бюджет',
            items: [
              { name: '1-5 млн'},
              { name: '5-10 млн'},
              { name: '10-25 млн'},
              { name: '25-50 млн'},
              { name: 'более 50 млн'},
            ]
          }) }

          Задача <br />
          <textarea>
            описание
          </textarea>

          <br /> <br /> Прикрепить файл <br />

          <br /><br /> Контактные данные <br />
        </div>
      </div>
    )
  }
}

export default Brief;
