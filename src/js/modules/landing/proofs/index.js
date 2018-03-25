import React, { Component } from 'react'
import { FormattedHTMLMessage as I18N } from 'react-intl'

import Link from 'next/link'

import cn from 'classnames';
import cssFlex from 'modules/_layouts/flex';

import css from './proofs.style.scss';

const proofList = [{
  title: 'proofs.expertise.title',
  message: 'proofs.expertise.message',
  proofs: [
    {
      title: 'proofs.expertise.proof1.title',
      description: 'proofs.expertise.proof1.description',
    }, {
      title: 'proofs.expertise.proof2.title',
      description: 'proofs.expertise.proof2.description',
    }, {
      title: 'proofs.expertise.proof3.title',
      description: 'proofs.expertise.proof3.description',
    },
  ]
}, {
  title: 'proofs.process.title',
  message: 'proofs.process.message',
  proofs: [
    {
      title: 'proofs.process.proof1.title',
      description: 'proofs.process.proof1.description',
    }, {
      title: 'proofs.process.proof2.title',
      description: 'proofs.process.proof2.description',
    }, {
      title: 'proofs.process.proof3.title',
      description: 'proofs.process.proof3.description',
    },
  ]
}, {
  title: 'proofs.price.title',
  message: 'proofs.price.message',
  proofs: [
    {
      title: 'proofs.price.proof1.title',
      description: 'proofs.price.proof1.description',
    }, {
      title: 'proofs.price.proof2.title',
      description: 'proofs.price.proof2.description',
    }, {
      title: 'proofs.price.proof3.title',
      description: 'proofs.price.proof3.description',
    },
  ]
}]

class Proofs extends Component {
  render () {
    return (
      <div className={cn(css.proofs)}>
        <h2 className={cn(css.proofs__title)}>
          <I18N id={'proofs.title'} />
        </h2>
      {proofList.map((proofItem, index) => {
        return (
          <div key={`proofItem${index}`} className={cn(css.proofs__item)}>
            <div className={css.proof}>
              <div className={cn(css.proof__header, css['proof'+(index+1)])}>
                <div className={cssFlex.flexHorizontal}>
                  <div className={cssFlex.flexSpacer}>
                    0{index + 1}<span className={css.proof__count}>/ 03</span>
                  </div>
                  <div>
                    <I18N id={proofItem.title} />
                  </div>
                </div>
                <div className={cn(css.proof__message)}>
                  <I18N id={proofItem.message} />
                </div>
              </div>
              <div className={cn(css.proof__content)}>
                <div className={cn(css.proof__termList)}>
                  {proofItem.proofs.map((proof, i) => {
                    return (
                      <div key={`proof${i}`} className={cn(css.proof__term, cssFlex.flexHorizontal)}>
                        <div className={cn(css.proof__termTitle)}>
                          <I18N id={proof.title} />
                        </div>
                        <div className={cn(css.proof__termDescr, cssFlex.flexSpacer)}>
                          <I18N id={proof.description} />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
      </div>
    )
  }
}

export default Proofs;
