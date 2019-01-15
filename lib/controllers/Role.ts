
import { Router, Request, Response } from 'express';
import { IroleRepo } from '../Repository/IroleRepo';
import { roleRepo } from '../Repository/roleRepo';
const router: Router = Router();

router.get('/find_all_roles', async (req: Request, res: Response) => {
    let Repo:IroleRepo=new roleRepo();
    try{
    let roles = await Repo.findallroles(req.query.page,req.query.page_size)
    res.status(200).send(roles);
    }
    catch(err)
    {
       res.status(400).send({error:err.message})
    }
});

router.post('/add_user_role', async (req: Request, res: Response) => {
    let Repo:IroleRepo=new roleRepo();
    try{
    let roles = await Repo.addUserrole(req.query._id,req.body)
    res.status(200).send(roles);
    }
    catch(err)
    {
       res.status(400).send({error:err.message})
    }
});

router.post('/delete_user_role', async (req: Request, res: Response) => {
    let Repo:IroleRepo=new roleRepo();
    try{
    let roles = await Repo.deleteUserrole(req.body)
    res.status(200).send(roles);
    }
    catch(err)
    {
       res.status(400).send({error:err.message})
    }
});

router.post('/update_user_role', async (req: Request, res: Response) => {
    let Repo:IroleRepo=new roleRepo();
    try{
    let roles = await Repo.updateUserrole(req.body)
    res.status(200).send(roles);
    }
    catch(err)
    {
       res.status(400).send({error:err.message})
    }
});
router.get('/', (req: Request, res: Response) => {

    res.send('findall');
});
router.get('/find_by_id/:id', (req: Request, res: Response) => {

    res.send('/find_by_id/:id');
});
router.post('/add', (req: Request, res: Response) => {

    res.send('/add');
});

router.post('/update', (req: Request, res: Response) => {

    res.send('/update');
});

router.get('/delete', (req: Request, res: Response) => {

    res.send('/delete');
});

// Export the express.Router() instance to be used by server.ts
export const RoleController: Router = router;