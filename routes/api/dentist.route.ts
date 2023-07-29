import express from 'express';
import { getDentistById, getDentists, getSessionById } from '../../controllers/dentist.controller';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Dentists
 *   description: Get all dentists
 * /api/dentists:
 *   get:
 *     summary: Get all dentists
 *     tags: [Dentists]
 *     responses:
 *       200:
 *         description: List of all dentists
 *       500:
 *         description: Some server error
 *
 */
router.get('api/dentists', getDentists);
router.get('api/dentist/:id', getDentistById);
router.get('api/sessions/:id', getSessionById);

export default router;
