import { Component } from 'react'
import cn from 'classnames'

import Header from 'modules/common/header'
import Footer from 'modules/common/footer'
import Btn from 'modules/common/btn'

// import Dropzone from 'react-dropzone'

import Input from 'modules/_forms/input';
import Textarea from 'modules/_forms/textarea';
import Checkbox from 'modules/_forms/checkbox';

import appCss from 'scss/app.scss'
import cssFlex from 'modules/_layouts/flex'
import css from './style.scss'


// const thumbsContainer = {
//   display: 'flex',
//   flexDirection: 'row',
//   flexWrap: 'wrap',
//   marginTop: 16
// };
// const thumb = {
//   display: 'inline-flex',
//   borderRadius: 2,
//   border: '1px solid #eaeaea',
//   marginBottom: 8,
//   marginRight: 8,
//   width: 100,
//   height: 100,
//   padding: 4,
//   boxSizing: 'border-box'
// };
// const thumbInner = {
//   display: 'flex',
//   minWidth: 0,
//   overflow: 'hidden'
// }
// const img = {
//   display: 'block',
//   width: 'auto',
//   height: '100%'
// };
// class DropzoneWithPreview extends Component {
//   constructor() {
//     super()
//     this.state = {
//       files: []
//     };
//   }
//
//   onDrop(files) {
//     this.setState({
//       files: files.map(file => ({
//         ...file,
//         preview: URL.createObjectURL(file)
//       }))
//     });
//   }
//
//   componentWillUnmount() {
//     // Make sure to revoke the data uris to avoid memory leaks
//     const {files} = this.state;
//     for (let i = files.length; i >= 0; i--) {
//       const file = files[0];
//       URL.revokeObjectURL(file.preview);
//     }
//   }
//
//   render() {
//     const {files} = this.state;
//
//     const thumbs = files.map(file => (
//       <div style={thumb}>
//         <div style={thumbInner}>
//           <img
//             src={file.preview}
//             style={img}
//           />
//         </div>
//       </div>
//     ));
//
//     return (
//       <section>
//         <div className="dropzone">
//           <Dropzone
//             accept="image/*"
//             onDrop={this.onDrop.bind(this)}
//           />
//         </div>
//         <aside style={thumbsContainer}>
//           {thumbs}
//         </aside>
//       </section>
//     );
//   }
// }


class Brief extends Component {
  renderCheckboxList (props) {
    const { title, name, items } = props;

    return (
      <div className={css.bnsBrief__formControl}>
        <label className={css.bnsBrief__formLabel}>
          {title}
        </label>
        {items.map((item) => (
          <Checkbox className={css.bnsBrief__checkbox} isTag>{item.name}</Checkbox>
        ))}
      </div>
    )
  }

  render () {
    return (
      <div>
        <Header />
        <div className={cn(appCss.bnsContainer, css.bnsBrief)}>
          <h1 className={css.bnsBrief__title}>Complete the brief</h1>
          <p className={css.bnsBrief__description}>
            or see our youtube video on why briefing is so important
          </p>

          <div className={css.bnsBrief__form}>
            { this.renderCheckboxList({
              title: 'Where can we help?',
              items: [
                { name: 'UX & Design'},
                { name: 'Usability'},
                { name: 'Analytics'},
                { name: 'UX & Design'},
              ]
            }) }
            <div className={css.bnsBrief__formControl}>
              <label className={css.bnsBrief__formLabel}>
                Tell us about your company in two sentences.
              </label>
              <Textarea placeholder='What you do and how you make money.' />
            </div>
            <div className={css.bnsBrief__formControl}>
              <label className={css.bnsBrief__formLabel}>
                Please share project URL, if any:
              </label>
              <Input
                type='phone'
                placeholder='What you do and how you make money.'
              />
            </div>
            <div className={css.bnsBrief__formControl}>
              <label className={css.bnsBrief__formLabel}>
                What do you want to get as a result of our collaboration? (or upload specs)
              </label>
              <Textarea placeholder='What is there for us to do? Who is going to use it and how will it help your business.' />
            </div>
            <div className={css.bnsBrief__formControl}>
              { this.renderCheckboxList({
                title: 'Which channels are we going to work with? ',
                items: [
                  { name: 'Web'},
                  { name: 'Mobile web'},
                  { name: 'iOS'},
                  { name: 'Android'},
                ]
              }) }
            </div>
            <div className={css.bnsBrief__formControl}>
              <label className={css.bnsBrief__formLabel}>
                How is this project going to affect your business?
              </label>
              <Textarea placeholder='Please tell us about any interconnected business goals' />
            </div>
            <div className={css.bnsBrief__formControl}>
              <label className={css.bnsBrief__formLabel}>
                Who are your main competitors, please include links
              </label>
              <Input placeholder='https://' />
            </div>
            <div className={css.bnsBrief__formControl}>
              { this.renderCheckboxList({
                title: 'When are the deadlines approaching?',
                items: [
                  { name: 'Days'},
                  { name: 'Weeks'},
                  { name: 'Months'},
                ]
              }) }
            </div>
            {
              // <DropzoneWithPreview />  
            }
            <div className={css.bnsBrief__formControl}>
              <label className={css.bnsBrief__formLabel}>
                If any, links to great products you and your team like
              </label>
              <Input placeholder='https://' />
            </div>
            <div className={css.bnsBrief__formControl}>
              <label className={css.bnsBrief__formLabel}>
                Who should we contact regarding this brief?
              </label>
              <Input placeholder='Name' />
              <Input placeholder='E-mail' />
              <Input placeholder='Position' />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Brief;
