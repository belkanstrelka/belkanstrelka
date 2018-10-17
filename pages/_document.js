import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps };
  }

  renderFontLoader () {
    return (
      <style>
        {`
          @import url("//fast.fonts.net/t/1.css?apiType=css&projectid=0dc14cbd-5ce0-4267-a5cb-1f0e7d20ee48");

          @font-face{
            font-family:"Avenir Next W01 Thin";
            src:url("./../src/fonts/42c793cf-df5a-4e07-bf3e-37de54df02b6.eot?#iefix");
            src:url("./../src/fonts/42c793cf-df5a-4e07-bf3e-37de54df02b6.eot?#iefix") format("eot"),url("./../src/fonts/64779e28-a3b8-4364-949c-771372a0a327.woff2") format("woff2"),url("./../src/fonts/c6c8e4be-17eb-4475-bbfc-bb485ffde766.woff") format("woff"),url("./../src/fonts/87a872d0-5af3-4231-a77c-37f41ec74662.ttf") format("truetype");
          }
          @font-face{
            font-family:"Avenir Next W01 Light";
            src:url("./../src/fonts/0ecef829-586e-426d-a633-4c8a8c926769.eot?#iefix");
            src:url("./../src/fonts/0ecef829-586e-426d-a633-4c8a8c926769.eot?#iefix") format("eot"),url("./../src/fonts/49c5f3e1-5867-4b1d-a843-2d07fa60d85d.woff2") format("woff2"),url("./../src/fonts/f401df6f-54eb-406c-b46a-90b9451c598d.woff") format("woff"),url("./../src/fonts/276fe25e-e430-4376-b33c-705dd77b3dba.ttf") format("truetype");
          }
          @font-face{
            font-family:"AvenirNextLTW01-Regular";
            src:url("./../src/fonts/e9167238-3b3f-4813-a04a-a384394eed42.eot?#iefix");
            src:url("./../src/fonts/e9167238-3b3f-4813-a04a-a384394eed42.eot?#iefix") format("eot"),url("./../src/fonts/2cd55546-ec00-4af9-aeca-4a3cd186da53.woff2") format("woff2"),url("./../src/fonts/1e9892c0-6927-4412-9874-1b82801ba47a.woff") format("woff"),url("./../src/fonts/46cf1067-688d-4aab-b0f7-bd942af6efd8.ttf") format("truetype");
          }
          @font-face{
            font-family:"AvenirNextLTW01-Medium";
            src:url("./../src/fonts/1a7c9181-cd24-4943-a9d9-d033189524e0.eot?#iefix");
            src:url("./../src/fonts/1a7c9181-cd24-4943-a9d9-d033189524e0.eot?#iefix") format("eot"),url("./../src/fonts/627fbb5a-3bae-4cd9-b617-2f923e29d55e.woff2") format("woff2"),url("./../src/fonts/f26faddb-86cc-4477-a253-1e1287684336.woff") format("woff"),url("./../src/fonts/63a74598-733c-4d0c-bd91-b01bffcd6e69.ttf") format("truetype");
          }
          @font-face{
            font-family:"Avenir Next LT W01 Bold";
            src:url("./../src/fonts/dccb10af-07a2-404c-bfc7-7750e2716bc1.eot?#iefix");
            src:url("./../src/fonts/dccb10af-07a2-404c-bfc7-7750e2716bc1.eot?#iefix") format("eot"),url("./../src/fonts/14c73713-e4df-4dba-933b-057feeac8dd1.woff2") format("woff2"),url("./../src/fonts/b8e906a1-f5e8-4bf1-8e80-82c646ca4d5f.woff") format("woff"),url("./../src/fonts/890bd988-5306-43ff-bd4b-922bc5ebdeb4.ttf") format("truetype");
          }
          @font-face{
            font-family:"AvenirNextLTW01-Heavy";
            src:url("./../src/fonts/3418f6be-70a5-4c26-af1d-c09a8642ca20.eot?#iefix");
            src:url("./../src/fonts/3418f6be-70a5-4c26-af1d-c09a8642ca20.eot?#iefix") format("eot"),url("./../src/fonts/5c57b2e2-f641-421e-a95f-65fcb47e409a.woff2") format("woff2"),url("./../src/fonts/181c847e-cdbc-43d5-ae14-03a81c8953b4.woff") format("woff"),url("./../src/fonts/045d1654-97f2-4ff0-9d24-21ba9dfee219.ttf") format("truetype");
          }
          @font-face{
            font-family:"Rage Italic W01";
            src:url("./../src/fonts/da1464f4-1a39-4322-898c-c092aca16ebb.eot?#iefix");
            src:url("./../src/fonts/da1464f4-1a39-4322-898c-c092aca16ebb.eot?#iefix") format("eot"),url("./../src/fonts/61ad694c-30ec-421c-a08b-d8e714ec83b7.woff2") format("woff2"),url("./../src/fonts/545ef4b0-79ac-49bd-9582-55e682e61cf9.woff") format("woff"),url("./../src/fonts/48007d38-01d4-4101-a599-a95460b3ec12.ttf") format("truetype");
          }

          body {
            font-family: Avenir Next;
          }
        `}
      </style>
    )
  }

  render () {
    return (
      <html lang='en'>
        <Head>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          {this.renderFontLoader()}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
