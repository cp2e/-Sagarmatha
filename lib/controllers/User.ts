
import { Router, Request, Response } from 'express';
const router: Router = Router();


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
export const UserController: Router = router;