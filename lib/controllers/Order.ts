
import { Router, Request, Response } from 'express';
import { IorderRepo } from '../Repository/IorderRepo';
import { orderRepo } from '../Repository/orderRepo';

const router: Router = Router();




router.get('/find_all_orders', async (req: Request, res: Response) => {
    let Repo:IorderRepo=new orderRepo();
    try{
    let orders = await Repo.findallorders(req.query.page,req.query.page_size,req.query.userId)
    res.status(200).send(orders);
    }
    catch(err)
    {
       res.status(400).send({error:err.message})
    }
});

router.post('/add_user_order', async (req: Request, res: Response) => {
    let Repo:IorderRepo=new orderRepo();
    try{
    let orders = await Repo.addUserOrder(req.query._id,req.body)
    res.status(200).send(orders);
    }
    catch(err)
    {
       res.status(400).send({error:err.message})
    }
});

router.get('/delete_user_order', async (req: Request, res: Response) => {
    let Repo:IorderRepo=new orderRepo();
    try{
    let orders = await Repo.deleteUserOrder(req.query._id,req.query.userId)
    res.status(200).send(orders);
    }
    catch(err)
    {
       res.status(400).send({error:err.message})
    }
});

router.post('/update_user_order', async (req: Request, res: Response) => {
    let Repo:IorderRepo=new orderRepo();
    try{
    let orders = await Repo.updateUserOrder(req.body)
    res.status(200).send(orders);
    }
    catch(err)
    {
       res.status(400).send({error:err.message})
    }
});

router.get('/order_count',async (req: Request, res: Response) =>
{
    let Repo:IorderRepo=new orderRepo();
    try{
    let users = await Repo.getOrderCount(req.query.page,req.query.page_size,req.query.userId)
    res.status(200).send({count:users});
    }
    catch(err)
    {
       res.status(400).send({error:err.message})
    }
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




// Export the express.Router() instance to be used by server.ts
export const OrderController: Router = router;