const nodemailer = require('nodemailer')

// https://myaccount.google.com/lesssecureapps
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'noreply.bebelka@gmail.com',
    pass: 'qwerty12345='
  }
})

const send = ({ email, name, text, attachments }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`

  const message = {
    from,
    to: 'dmitrsl10@gmail.com',
    subject: `New brief`,
    text,
    attachments,
    replyTo: from
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}

module.exports = send
