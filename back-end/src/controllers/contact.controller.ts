import { Request, Response } from 'express';
import contactService from '../services/contact.service';
import { serverErrorMessage } from '../constants/messages';
import HttpCode from '../constants/statusCode';

const contactController = async (req: Request, res: Response) => {
  try {
    const { name, company, email, cellPhone } = req.body;
    const { type, message } = await contactService(name, company, email, cellPhone);

    if (type === HttpCode.UNAUTHORIZED) {
      return res.status(type).json({ message });
    }
    return res.status(type).json({ message });
  } catch (error) {
    console.error(`${serverErrorMessage}:`, error);
    return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({message: serverErrorMessage});
  }
};

export default {
  contactController,
};
