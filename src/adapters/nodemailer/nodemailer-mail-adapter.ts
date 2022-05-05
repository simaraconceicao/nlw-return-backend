import { MailAdapter, SendMailData } from '../mail-adapter'
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "78e3f4714349de",
    pass: "9b2133cb0f3735"
  }
})

export class NodeMailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body}: SendMailData) {
    await transport.sendMail({
    from: 'Equipe <equip@equip.com>',
    to: 'Simara <contato@simaraconceicao.com>',
    subject,
    html: body
  })
  }
}