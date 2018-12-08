import { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const normilizeAttr = {
  align: "center",
  valign: "top",
  border: "0",
  cellpadding: "0",
  cellspacing: "0",
}
const bgStyle = {
  'border-collapse': 'collapse',
  margin: '0px',
  padding: '0px',
  'background-color': 'rgb(245,245,245)',
  height: '100vh',
  width: '100%'
}
const normilizeStyle = {
  margin: '0px',
  padding: '40px 0px',
  'border-top': '0px',
  height: '100%',
  width: '100%'
}
const tableStyle = {
  'background-color': 'rgb(255,255,255)',
  'border-radius': '8px',
  border: '1px solid rgb(232,232,232)',
  overflow: 'hidden',
  width: '540px',
  'font-family': 'Avenir Next, Roboto, Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif'
}
const rowStyle = {
  color: '#161620',
  margin: '0px',
  'text-align': 'left'
}
const trRowStyle = {
  color: '#161620',
  'font-size': '20px',
  'line-height': '1.4',
  margin: '0px',
  'text-align': 'left'
}
const tdRowStyle = {
  padding: '0px 40px 16px',
  'font-size': '20px',
  'line-height': '1.4'
}
const accentStyle = {
  background: '#FCBC1D',
  padding: '0px 5px',
  'border-radius': '4px'
}
const titleStyle = {
  'font-size': '22px',
  'font-weight': '600'
}

class EmailOffer extends Component {
  renderFonts () {
    return (
      <style type="text/css"> 
        {`
           @media screen { 
            @import url("https://fast.fonts.net/t/1.css?apiType=css&projectid=0dc14cbd-5ce0-4267-a5cb-1f0e7d20ee48");

            @font-face{
              font-family:"Avenir Next W01 Thin";
              src:url("https://bebelka.com/fonts/42c793cf-df5a-4e07-bf3e-37de54df02b6.eot?#iefix");
              src:url("https://bebelka.com/fonts/42c793cf-df5a-4e07-bf3e-37de54df02b6.eot?#iefix") format("eot"),url("https://bebelka.com/fonts/64779e28-a3b8-4364-949c-771372a0a327.woff2") format("woff2"),url("https://bebelka.com/fonts/c6c8e4be-17eb-4475-bbfc-bb485ffde766.woff") format("woff"),url("https://bebelka.com/fonts/87a872d0-5af3-4231-a77c-37f41ec74662.ttf") format("truetype");
            }
            @font-face{
              font-family:"Avenir Next W01 Light";
              src:url("https://bebelka.com/fonts/0ecef829-586e-426d-a633-4c8a8c926769.eot?#iefix");
              src:url("https://bebelka.com/fonts/0ecef829-586e-426d-a633-4c8a8c926769.eot?#iefix") format("eot"),url("https://bebelka.com/fonts/49c5f3e1-5867-4b1d-a843-2d07fa60d85d.woff2") format("woff2"),url("https://bebelka.com/fonts/f401df6f-54eb-406c-b46a-90b9451c598d.woff") format("woff"),url("https://bebelka.com/fonts/276fe25e-e430-4376-b33c-705dd77b3dba.ttf") format("truetype");
            }
            @font-face{
              font-family:"AvenirNextLTW01-Regular";
              src:url("https://bebelka.com/fonts/e9167238-3b3f-4813-a04a-a384394eed42.eot?#iefix");
              src:url("https://bebelka.com/fonts/e9167238-3b3f-4813-a04a-a384394eed42.eot?#iefix") format("eot"),url("https://bebelka.com/fonts/2cd55546-ec00-4af9-aeca-4a3cd186da53.woff2") format("woff2"),url("https://bebelka.com/fonts/1e9892c0-6927-4412-9874-1b82801ba47a.woff") format("woff"),url("https://bebelka.com/fonts/46cf1067-688d-4aab-b0f7-bd942af6efd8.ttf") format("truetype");
            }
            @font-face{
              font-family:"AvenirNextLTW01-Medium";
              src:url("https://bebelka.com/fonts/1a7c9181-cd24-4943-a9d9-d033189524e0.eot?#iefix");
              src:url("https://bebelka.com/fonts/1a7c9181-cd24-4943-a9d9-d033189524e0.eot?#iefix") format("eot"),url("https://bebelka.com/fonts/627fbb5a-3bae-4cd9-b617-2f923e29d55e.woff2") format("woff2"),url("https://bebelka.com/fonts/f26faddb-86cc-4477-a253-1e1287684336.woff") format("woff"),url("https://bebelka.com/fonts/63a74598-733c-4d0c-bd91-b01bffcd6e69.ttf") format("truetype");
            }
            @font-face{
              font-family:"Avenir Next LT W01 Bold";
              src:url("https://bebelka.com/fonts/dccb10af-07a2-404c-bfc7-7750e2716bc1.eot?#iefix");
              src:url("https://bebelka.com/fonts/dccb10af-07a2-404c-bfc7-7750e2716bc1.eot?#iefix") format("eot"),url("https://bebelka.com/fonts/14c73713-e4df-4dba-933b-057feeac8dd1.woff2") format("woff2"),url("https://bebelka.com/fonts/b8e906a1-f5e8-4bf1-8e80-82c646ca4d5f.woff") format("woff"),url("https://bebelka.com/fonts/890bd988-5306-43ff-bd4b-922bc5ebdeb4.ttf") format("truetype");
            }
            @font-face{
              font-family:"AvenirNextLTW01-Heavy";
              src:url("https://bebelka.com/fonts/3418f6be-70a5-4c26-af1d-c09a8642ca20.eot?#iefix");
              src:url("https://bebelka.com/fonts/3418f6be-70a5-4c26-af1d-c09a8642ca20.eot?#iefix") format("eot"),url("https://bebelka.com/fonts/5c57b2e2-f641-421e-a95f-65fcb47e409a.woff2") format("woff2"),url("https://bebelka.com/fonts/181c847e-cdbc-43d5-ae14-03a81c8953b4.woff") format("woff"),url("https://bebelka.com/fonts/045d1654-97f2-4ff0-9d24-21ba9dfee219.ttf") format("truetype");
            }
            @font-face{
              font-family:"Rage Italic W01";
              src:url("https://bebelka.com/fonts/da1464f4-1a39-4322-898c-c092aca16ebb.eot?#iefix");
              src:url("https://bebelka.com/fonts/da1464f4-1a39-4322-898c-c092aca16ebb.eot?#iefix") format("eot"),url("https://bebelka.com/fonts/61ad694c-30ec-421c-a08b-d8e714ec83b7.woff2") format("woff2"),url("https://bebelka.com/fonts/545ef4b0-79ac-49bd-9582-55e682e61cf9.woff") format("woff"),url("https://bebelka.com/fonts/48007d38-01d4-4101-a599-a95460b3ec12.ttf") format("truetype");
            }
          }
        `}
      </style>
    )
  }

  renderList () {
    var data = [{
      label: '1.',
      text: 'Set an itarative product development process;'
    },{
      label: '2.',
      text: 'Сheck risky hypotheses fast;'
    },{
      label: '3.',
      text: 'Pilot to market innovation solutions;'
    },{
      label: '4.',
      text: 'Continuously integrate user feedback.'
    }]

    return (
      <tr style={trRowStyle}>
        <td style={tdRowStyle}>
          {data.map(el => (
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style={{ padding: '4px 0 ' }}>
              <tr>
                <td style={{ width: '24px', 'vertical-align': 'top', 'font-size': '20px', 'line-height': '1.4' }}>
                  {el.label}
                </td>
                <td style={{ 'font-size': '20px', 'line-height': '1.4'}}>
                  {el.text}
                </td>
              </tr>
            </table>
          ))}
        </td>
      </tr>
    )
  }

  renderDays () {
    var data = [{
      label: 'Mon.',
      text: 'We present last week’s sprint to your business and plan a new one.'
    },{
      label: 'Tue.',
      text: 'Our designers do task-specfic research and brainstorm for possible solutions.'
    },{
      label: 'Wed.',
      text: 'We sketch our ideas and send them for your evaluation.'
    },{
      label: 'Thu.',
      text: 'The most promising sketch goes into final production.'
    },{
      label: 'Fri.',
      text: 'A prototype and a straightforward presentation are camera ready.'
    }]

    return (
      <tr style={trRowStyle}>
        <td style={tdRowStyle}>
          {data.map(el => (
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style={{ padding: '16px 0' }}>
              <tr>
                <td style={{ width: '100px', ...titleStyle }}>
                  {el.label}
                </td>
                <td style={{'font-size': '20px', 'line-height': '1.4'}}>
                  {el.text}
                </td>
              </tr>
            </table>
          ))}
        </td>
      </tr>
    )
  }

  renderButton (label) {
    return (
      <tr style={trRowStyle}>
        <td style={tdRowStyle}>
          <a href='https://bebelka.com' style={{ textDecoration: 'none', color: '#161620' }}>
            <table border="0" cellpadding="0" cellspacing="0" style={{
              background: '#FCBC1D',
              borderRadius: '5px',
              margin: '16px 0',
              padding: '12px',
              textAlign: 'center',
              width: '100%'
            }}>
              <tr>
                <td style={{
                  fontSize: '22px',
                  fontWeight: '600'}}
                >
                  {label}
                </td>
              </tr>
            </table>
          </a>
        </td>
      </tr>
    )
  }

  renderFooter () {
    return (
      <tr>
        <td>
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tbody>
              <tr style={trRowStyle}>
                <td style={tdRowStyle}></td>
              </tr>
              <tr style={{
                color: '#161620',
                'text-align': 'center'
              }}>
                <td style={{...tdRowStyle, ...{
                  'font-size': '12px',
                  'line-height': '1.4',
                }}}>
                  <b>© 2018 Belka & Strelka</b>. All rights reserved. <br />
                  3651 Regal Pl., Los Angeles, CA 90068 <br />
                  Made with <img src="https://bebelka.com/email/hammer.png" style={{ height: '12px' }}/>  in California and Helsinki.
                </td>
              </tr>
              <tr style={trRowStyle}>
                <td style={tdRowStyle}></td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    )
  }

  renderHeader () {
    return (
      <tr style={rowStyle}>
        <td>
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tbody>
              <tr>
                <td style={{
                  width: '100%',
                  height: '210px',
                  'padding': '0px 40px',
                  'background': 'url("https://bebelka.com/email/header_bg.png")',
                  'background-repeat': 'no-repeat',
                  'background-size': 'cover',
                  'vertical-align': 'bottom'
                }}>
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style={{ marginTop: '-56px' }}>
                    <tbody>
                      <tr style={rowStyle}>
                        <td style={{

                          width: '72px',
                          'padding-right': '24px',
                          overflow: 'hidden'
                        }}>
                          <img src="https://bebelka.com/email/becolorlogo.png" style={{ height: '86px' }}/>
                        </td>
                        <td style={{
                          'line-height': '1.14',
                          'font-size': '32px',
                        }}>
                          <span style={accentStyle}><b>User Centered</b></span>  <br />
                          <span style={accentStyle}><b>Design</b> as a Service</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    )
  }

  render () {
    return (
      <center>
        { this.renderFonts() }
        <table {...normilizeAttr} style={bgStyle}>
          <tbody>
            <tr>
              <td {...normilizeAttr} style={normilizeStyle}>
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style={tableStyle}>
                  <tbody>

                    {this.renderHeader()}

                    <tr style={trRowStyle}>
                      <td style={tdRowStyle}></td>
                    </tr>

                    <tr style={trRowStyle}>
                      <td style={tdRowStyle}></td>
                    </tr>

                    <tr style={trRowStyle}>
                      <td style={tdRowStyle}>
                        <b style={titleStyle}>Most companies have no expertise or right talent to:</b>
                      </td>
                    </tr>

                    {this.renderList()}

                    {this.renderButton('Boost your expertise today')}

                    <tr style={trRowStyle}>
                      <td style={tdRowStyle}></td>
                    </tr>

                    <tr style={trRowStyle}>
                      <td style={tdRowStyle}>
                        <b style={titleStyle}>We offer sprints with set deliverables </b>
                      </td>
                    </tr>

                    <tr style={trRowStyle}>
                      <td style={tdRowStyle}>
                        Our team constantly initiates a dialog with stakeholders to make sure a tailord solution is ready on time.
                      </td>
                    </tr>

                    {this.renderDays()}

                    {this.renderButton('Plan first sprint now ')}

                    {this.renderFooter()}
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    )
  }
}

export default EmailOffer
