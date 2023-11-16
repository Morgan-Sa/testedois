import { Router } from 'express';
import { TecnologyController } from '../controllers/TecnologyController';
import { UserController } from '../controllers/UserController';
import { checkExistsUserAccount } from '../middlewares/checkExistsUserAccount';

const router = Router();
const user = new UserController();
const tecnology = new TecnologyController();

router.post('/users', user.postUser);

router.get('/tecnologies', checkExistsUserAccount, tecnology.getTecnologies);

router.post('/tecnologies', checkExistsUserAccount, tecnology.postTecnology);

router.put('/tecnologies/:id', checkExistsUserAccount, tecnology.putTecnology);

router.patch('/tecnologies/:id/studied', checkExistsUserAccount, tecnology.patchTecnology);

router.delete('/tecnologies/:id', checkExistsUserAccount, tecnology.deleteTecnology);

export default router;
