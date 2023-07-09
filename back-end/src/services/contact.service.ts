import Contact from '../models/Contact.model';
import sendEmail from '../utils/sendEmail';

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

    if (!emailSent) return { type: 400, message: "Falha ao enviar o e-mail!" };

    const successMessage: string = `Os dados do usuário foram armazenados corretamente e o e-mail foi enviado!:
    Nome: ${name},
    Empresa: ${company},
    Email: ${email},
    Telefone: ${cellPhone}`;

    return { type: 200, message: successMessage };
  } catch (error) {
    console.error('Erro ao armazenar os dados:', error);
    return { type: 500, message: 'Ocorreu um erro ao armazenar os dados'};
  }
};

export default contactService;
