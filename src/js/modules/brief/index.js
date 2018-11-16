import { Component } from 'react'
import { connect } from 'react-redux'
import cn from 'classnames'

import { FormattedMessage as I18N } from 'react-intl'
import { scrollIt } from 'lib/scrollIt'
import { isArray, isObject } from 'lodash'

import Header from 'modules/common/header'
import Footer from 'modules/common/footer'
import Btn from 'modules/common/btn'

import FilesIcon from './img/files.svg'
import PdfIcon from './img/pdfIcon.svg'
import DocIcon from './img/docIcon.svg'
import ExcelIcon from './img/excelIcon.svg'
import DefaultDocIcon from './img/defaultDocIcon.svg'
import DeleteIcon from './img/deleteIcon.svg'

import {
  FormControl,
  FormFieldControl,
  FormErrorsControl
} from 'modules/_forms/common';

import Dropzone from 'react-dropzone'
import Input from 'modules/_forms/input';
import Textarea from 'modules/_forms/textarea';
import Tags from 'modules/_forms/tags';
import InputList from 'modules/_forms/inputList';
import RadioList from 'modules/_forms/radioList';

import { schema } from './metaInfo';

import appCss from 'scss/app.scss'
import cssFlex from 'modules/_layouts/flex'
import css from './style.scss'

import * as actions from './actions'

class DropzoneFullscreen extends Component {
  constructor() {
    super()

    this.state = {
      dropzoneActive: false
    }
  }

  onDrop = (files) => {
    const { value, onChange } = this.props;

    this.setState({ dropzoneActive: false });

    const _files = files.map(file => {
      file.preview = URL.createObjectURL(file);
      return file;
    })

    onChange([
      ...value,
      ..._files
    ])
  }

  onDragEnter = () => {
    this.setState({ dropzoneActive: true });
  }

  onDragLeave = () => {
    this.setState({ dropzoneActive: false });
  }

  render () {
    const { children } = this.props;
    const { dropzoneActive } = this.state;

    const overlayStyle = {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      padding: '5em 0',
      background: 'rgba(255, 255, 255, 0.98)',
      textAlign: 'center',
      zIndex: 100500,
      fontSize: '20px',
      color: '#000'
    };

    return (
      <Dropzone
        disableClick
        style={{ position: "relative" }}
        onDrop={this.onDrop}
        onDragEnter={this.onDragEnter}
        onDragLeave={this.onDragLeave}
        ref={this.props.refLink}
      >
        { dropzoneActive && (
          <div style={overlayStyle}>
            <FilesIcon />
            <div style={{marginTop: '1em'}}>
              <I18N id='brief.uploadFiles' />
            </div>
          </div>
        )}
        {children}
      </Dropzone>
    )
  }
}

class FilesPreview extends Component {
  onDelete (indexToRemove) {
    const { value, onChange } = this.props;

    const _files = value.filter((file, index) => {
      return index !== indexToRemove;
    })

    onChange(_files)
  }

  render () {
    const { value } = this.props;

    const thumbs = value.map((file, index) => {
      const { name } = file;

      let Icon = DefaultDocIcon;
      // if (name.indexOf('.doc') > 0) {
      //   Icon = DocIcon
      // } else if (name.indexOf('.xls') > 0) {
      //   Icon = ExcelIcon
      // } else if (name.indexOf('.pdf') > 0) {
      //   Icon = PdfIcon
      // }

      return (
        <div className={css.docPreviewRow}>
          <Icon className={css.docPreviewRow__icon} />
          <div className={css.docPreviewRow__name}>
          {name}
          </div>
          <div className={css.docPreviewRow__action} onClick={() => this.onDelete(index)}>
            <DeleteIcon />
          </div>
        </div>
      )
    });

    return (
      <div>
        {thumbs}
      </div>
    )
  }
}

class Brief extends Component {
  onBriefSubmit = (value) => {
    const { submitBrief } = this.props;

    let formData = new FormData();
    const keys = Object.keys(value);

    keys.forEach(function(key) {
      if (isArray(value[key])) {
        const field = value[key];

        for(var i = 0; i < field.length; i++){
          formData.append(key, field[i]);
        }
      } else if (isObject(value[key])) {
        const keys2 = Object.keys(value[key]);

        keys2.forEach(function(key2) {
          formData.append(`${key}[${key2}]`, value[key][key2]);
        })
      } else {
        formData.append(key, value[key]);
      }
    });

    submitBrief && submitBrief(formData)
  }

  onSbmt = () => {
    setTimeout(()=>{
      if (typeof window !== 'undefined' && document.querySelector('.errorField')) {
        scrollIt(
          document.querySelector('.errorField'), 600, 'easeOutQuad'
        )
      }
    }, 150)
  }

  render () {
    return (
      <div>
        <Header header={(<I18N id='brief.title' />)} />
        <FormControl schema={schema} onFormSubmit={this.onBriefSubmit}>
          <FormFieldControl
            schema={schema}
            model='.files'
            refLink={(dropz) => { this.dropzoneRef = dropz }}
            component={DropzoneFullscreen}
          >
            <div className={cn(appCss.bnsContainer)}>
              <div className={cn(css.bnsBrief)}>
                <h1 className={css.bnsBrief__title}>
                  <I18N id='brief.title' />
                </h1>
                {
                  // <p className={css.bnsBrief__description}>
                  //   <I18N id='brief.description' />
                  // </p>
                }

                <div className={css.bnsBrief__form}>
                  <div className={css.bnsBrief__formControl}>
                    <label className={css.bnsBrief__formLabel}>
                      <I18N id='brief.fieldset.projectType.label' />
                    </label>
                    <FormFieldControl
                      className={css.bnsBrief__checkbox}
                      schema={schema}
                      model='.projectType'
                      source={[
                        { name: 'brief.fieldset.projectType.items.design', value: 'design' },
                        { name: 'brief.fieldset.projectType.items.usability', value: 'usability' },
                        { name: 'brief.fieldset.projectType.items.analytics', value: 'analytics' },
                        { name: 'brief.fieldset.projectType.items.consulting', value: 'consulting' },
                      ]}
                      component={Tags}
                    />
                  </div>
                  <div className={css.bnsBrief__formControl}>
                    <label className={css.bnsBrief__formLabel}>
                      <I18N id='brief.fieldset.company.about.label' />
                    </label>
                    <FormFieldControl
                      className={css.bnsBrief__formField}
                      schema={schema}
                      model='.companyAbout'
                      component={Textarea}
                    />
                  </div>
                  <div className={css.bnsBrief__formControl}>
                    <label className={css.bnsBrief__formLabel}>
                      <I18N
                        id='brief.fieldset.task.label'
                        values={{
                          linkUpload: (
                            <span className={css.bnsBrief__link} onClick={()=>{ this.dropzoneRef.open(); }}>
                              <I18N id='brief.linkUpload' />
                            </span>
                          )
                        }}
                      />
                    </label>
                    <FormFieldControl
                      className={css.bnsBrief__formField}
                      schema={schema}
                      model='.task'
                      component={Textarea}
                    />
                    <FormFieldControl
                      className={css.bnsBrief__formField}
                      schema={schema}
                      model='.files'
                      component={FilesPreview}
                    />
                  </div>
                  <div className={css.bnsBrief__formControl}>
                    <label className={css.bnsBrief__formLabel}>
                      <I18N id='brief.fieldset.company.url.label' />
                    </label>
                    <FormFieldControl
                      className={css.bnsBrief__formField}
                      schema={schema}
                      model='.companyUrl'
                      component={Input}
                    />
                  </div>
                  <div className={css.bnsBrief__formControl}>
                    <label className={css.bnsBrief__formLabel}>
                      <I18N id='brief.fieldset.channels.label' />
                    </label>
                    <FormFieldControl
                      className={css.bnsBrief__checkbox}
                      schema={schema}
                      model='.channels'
                      source={[
                        { name: 'brief.fieldset.channels.items.web', value: 'web' },
                        { name: 'brief.fieldset.channels.items.mobile', value: 'mobile' },
                        { name: 'brief.fieldset.channels.items.ios', value: 'ios' },
                        { name: 'brief.fieldset.channels.items.android', value: 'android' },
                      ]}
                      component={Tags}
                    />
                  </div>
                  <div className={css.bnsBrief__formControl}>
                    <label className={css.bnsBrief__formLabel}>
                      <I18N id='brief.fieldset.goals.label' />
                    </label>
                    <FormFieldControl
                      className={css.bnsBrief__formField}
                      schema={schema}
                      model='.goals'
                      component={Textarea}
                    />
                  </div>
                  <div className={css.bnsBrief__formControl}>
                    <label className={css.bnsBrief__formLabel}>
                      <I18N id='brief.fieldset.competitors.label' />
                    </label>
                    <FormFieldControl
                      className={css.bnsBrief__formField}
                      schema={schema}
                      model='.competitors'
                      component={InputList}
                    />
                  </div>
                  <div className={css.bnsBrief__formControl}>
                    <label className={css.bnsBrief__formLabel}>
                      <I18N id='brief.fieldset.deadline.label' />
                    </label>
                    <FormFieldControl
                      className={css.bnsBrief__checkbox}
                      schema={schema}
                      model='.deadline'
                      source={[
                        { name: 'brief.fieldset.deadline.items.days', value: 'days' },
                        { name: 'brief.fieldset.deadline.items.weeks', value: 'weeks' },
                        { name: 'brief.fieldset.deadline.items.months', value: 'months' },
                      ]}
                      component={RadioList}
                    />
                  </div>
                  <div className={css.bnsBrief__formControl}>
                    <label className={css.bnsBrief__formLabel}>
                      <I18N id='brief.fieldset.likes.label' />
                    </label>
                    <FormFieldControl
                      className={css.bnsBrief__formField}
                      schema={schema}
                      model='.likes'
                      component={InputList}
                    />
                  </div>
                  <div className={css.bnsBrief__formControl}>
                    <label className={css.bnsBrief__formLabel}>
                      <I18N id='brief.fieldset.contact.label' />
                    </label>
                    <FormFieldControl
                      className={css.bnsBrief__formField}
                      schema={schema}
                      model='.contactName'
                      component={Input}
                    />
                    <FormFieldControl
                      className={css.bnsBrief__formField}
                      schema={schema}
                      model='.contactCompany'
                      component={Input}
                    />
                    <FormFieldControl
                      className={css.bnsBrief__formField}
                      schema={schema}
                      type={'email'}
                      model='.contactEmail'
                      component={Input}
                    />
                    <FormFieldControl
                      className={css.bnsBrief__formField}
                      schema={schema}
                      type={'phone'}
                      model='.contactPhone'
                      component={Input}
                    />
                  </div>
                  <div className={css.bnsBrief__action}>
                    <Btn type={'submit'} className={css.bnsBrief__actionBtn} onClick={this.onSbmt}>
                      <I18N id={'brief.submitBtn'} />
                    </Btn>
                    <div className={css.bnsBrief__actionDescription}>
                      <I18N id={'brief.submitLbl'} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FormFieldControl>
        </FormControl>
      </div>
    )
  }
}

export default connect(() => ({}), {
  submitBrief: actions.submitBrief
})(Brief)
