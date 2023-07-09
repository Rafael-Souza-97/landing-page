import { Request, Response } from 'express';
import contactService from '../services/contact.service';

const contactController = async (req: Request, res: Response) => {
  try {
    const { name, company, email, cellPhone } = req.body;
    const { type, message } = await contactService(name, company, email, cellPhone);

    if (type === 401) {
      return res.status(type).json({ message });
    }
    return res.status(type).json({ message });
  } catch (error) {
    console.error('Error storing data:', error);
    return res.status(500).json({message: 'An error occurred while storing data'});
  }
};

export default {
  contactController,
};
