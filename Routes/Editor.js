import express from 'express';
import { updateEditor ,createEditor,getEditor} from '../Controller/EditorCont.js';

const router = express.Router();
router.post('/Editor', createEditor);
router.put('/Editor/:id', updateEditor);
router.get('/Editor/:id',getEditor);

export default router;