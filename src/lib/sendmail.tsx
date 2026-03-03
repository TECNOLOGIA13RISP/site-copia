import sendMail from '@sendgrid/mail'

export async function sendMailDefault(
  email: string,
  templateId: string,
  values = {}
) {
  sendMail.setApiKey(process.env.API_MAIL_KEY || '')

  const msg = {
    to: email,
    from: process.env.API_MAIL_FROM || '',
    templateId: templateId,
    dynamicTemplateData: values
  }
  return sendMail.send(msg)
  // return sendMail.send(msg, (error: unknown, result: unknown) => {
  //   if (error) {
  //     return error.response.body.errors
  //   } else {
  //     return result
  //   }
  // })
}
