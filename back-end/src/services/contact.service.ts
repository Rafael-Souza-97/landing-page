import HttpCode from '../constants/statusCode';
import Contact from '../models/Contact.model';
import sendEmail from '../utils/sendEmail';
import { serverErrorMessage , emailSendErrorMessage } from '../constants/messages';

const contactService = async (name: string, company: string, email: string, cellPhone: string) => {
  try {
    const contactData = {
      name,
      company,
      email,
      cellPhone,
    };

    await Contact.create(contactData);

    const emailSent = sendEmail(email, name);

    if (!emailSent) return { type: HttpCode.BAD_REQUEST, message: emailSendErrorMessage };

    const successMessage: string = `Os dados do usuário foram armazenados corretamente e o e-mail foi enviado!:
    Nome: ${name},
    Empresa: ${company},
    Email: ${email},
    Telefone: ${cellPhone}`;

    return { type: HttpCode.OK, message: successMessage };
  } catch (error) {
    console.error(`${serverErrorMessage}:`, error);
    return { type: HttpCode.INTERNAL_SERVER_ERROR, message: serverErrorMessage};
  }
};

export default contactService;
