
import { Router, Request, Response } from 'express';
import { IuserRepo } from '../Repository/IuserRepo';
import { userRepo } from '../Repository/userRepo';
const router: Router = Router();



router.get('/', async (req: Request, res: Response) => {
    let Repo:IuserRepo=new userRepo();
    try{
    let users = await Repo.findAll()
    res.status(200).send(users);
    }
    catch(err)
    {
       res.status(400).send({error:err.message})
    }
});
router.get('/find_all_users', async (req: Request, res: Response) => {
    let Repo:IuserRepo=new userRepo();
    try{
    let users = await Repo.findallusers(req.query.page,req.query.page_size)
    res.status(200).send(users);
    }
    catch(err)
    {
       res.status(400).send({error:err.message})
    }
});
router.get('/user_count',async (req: Request, res: Response) =>
{
    let Repo:IuserRepo=new userRepo();
    try{
    let users = await Repo.getUserCount()
    res.status(200).send({count:users});
    }
    catch(err)
    {
       res.status(400).send({error:err.message})
    }
});

router.get('/find_by_id',async (req: Request, res: Response) => {
    let Repo:IuserRepo=new userRepo();
    try{
    let users = await Repo.findById(req.query.id)
    debugger
    res.status(200).send(users);
    }
    catch(err)
    {
       res.status(400).send({error:err.message})
    }
});
router.post('/add', async (req: Request, res: Response) => {
    let Repo:IuserRepo=new userRepo();
    try{
    let user = await Repo.addUser(req.body)
    console.log(user)
    res.status(200).send(user);
    }
    catch(err)
    {
       res.status(400).send({error:err.message})
    }
});

router.post('/update',async (req: Request, res: Response) => {
    let Repo:IuserRepo=new userRepo();
    try{
    let user = await Repo.updateUser(req.body)
    console.log(user)
    res.status(200).send(user);
    }
    catch(err)
    {
       res.status(400).send({error:err.message})
    }
});

router.get('/delete',async  (req: Request, res: Response) => {
    let Repo:IuserRepo = new userRepo();
    try{
    let user = await Repo.deleteUser(req.query._id)
    console.log(user)
    res.status(200).send(user);
    }
    catch(err)
    {
       res.status(400).send({error:err.message})
    }
});

// Export the express.Router() instance to be used by server.ts
export const UserController: Router = router;