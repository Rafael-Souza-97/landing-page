import { Request, Response, NextFunction } from 'express';

const contactValidation = (req: Request, res: Response, next: NextFunction) => {
  const { name, company, email, cellPhone } = req.body;

  if (!name || !company || !email || !cellPhone) {
    return res.status(400).json({
      message: 'All fields must be filled',
    });
  }

  if (name.length < 4) {
    return res.status(400).json({
      message: 'Invalid name. Name should have at least 4 characters.',
    });
  }

  if (company.length < 3) {
    return res.status(400).json({
      message: 'Invalid company name. Company name should have at least 3 characters.',
    });
  }

  if (cellPhone.length !== 11) {
    return res.status(400).json({
      message: 'Invalid cell phone number. Cell phone number should have 11 digits.',
    });
  }

  return next();
};

export default contactValidation;
