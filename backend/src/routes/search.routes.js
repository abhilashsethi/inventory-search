import { Router } from 'express';
import { searchInventory } from '../controllers/search.controller.js';

const router = Router();

router.get('/search', searchInventory);

export default router;
