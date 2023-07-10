import { Router } from 'express';
import contactValidation from '../middlewares/contact.validation';
import contactController from '../controllers/contact.controller';

const router = Router();

router.post('/contact', contactValidation, contactController.contactController);

module.exports = router;
