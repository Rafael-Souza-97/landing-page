import { Request, Response, NextFunction } from 'express';
import HttpCode from '../constants/statusCode';
import {
  invalidCellPhoneNumberMessage,
  invalidCompanyNameMessage,
  invalidNameMessage,
  requiredFieldsMessage
} from '../constants/messages';

const contactValidation = (req: Request, res: Response, next: NextFunction) => {
  const { name, company, email, cellPhone } = req.body;

  if (!name || !company || !email || !cellPhone) {
    return res.status(HttpCode.BAD_REQUEST).json({
      message: requiredFieldsMessage,
    });
  }

  if (name.length < 4) {
    return res.status(HttpCode.BAD_REQUEST).json({
      message: invalidNameMessage,
    });
  }

  if (company.length < 3) {
    return res.status(HttpCode.BAD_REQUEST).json({
      message: invalidCompanyNameMessage,
    });
  }

  if (cellPhone.length !== 11) {
    return res.status(HttpCode.BAD_REQUEST).json({
      message: invalidCellPhoneNumberMessage,
    });
  }

  return next();
};

export default contactValidation;
