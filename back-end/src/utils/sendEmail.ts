const nodemailer = require('nodemailer');
import { CopyHTML, CopyText } from './Copy';

const sendEmail = (email: string, name: string): boolean => {
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "1d9eb843d0feee",
      pass: "496e1668e0a842"
    }
  });

  const message = {
    from: "noreplay@influencehub.com",
    to: email,
    subject: "Potencialize suas campanhas de marketing com a InfluenceHub",
    text: CopyText(name),
    html: CopyHTML(name),
  };

  transport.sendMail(message, function (err: any) {
    if (err) return false;
  })
  return true;
}

export default sendEmail;
