import baseRouteInterface from './baseRouteInterface'
import baseController from './../controllers/baseController'
import baseEntity from "../entity/baseEntity";
import baseDTO from "../dto/baseDTO";
import baseRepositoryInterface from "../repository/baseRepositoryInterface";
import baseServiceInterface from "../service/baseServiceInterface";


export default abstract class baseRoute<TKey,
    TEntity extends baseEntity<TKey>,
    TDTO extends baseDTO<TKey, TEntity>,
    TRepository extends baseRepositoryInterface<TKey, TEntity>,
    TService extends baseServiceInterface<TKey, TEntity, TDTO, TRepository>,
    TController extends baseController<TKey, TEntity, TDTO, TRepository, TService>>
    implements baseRouteInterface {

    private expressRoute: any;
    public readonly prefix: string;
    public controller: TController;

    protected constructor(controller: TController, prefix: string, router: any) {
        this.expressRoute = router;
        this.prefix = prefix;
        this.controller = controller;
    }

    public setupRoutes(): void {
        this.expressRoute.get('/' + this.prefix, (req: any, res: any) => this.controller.get(req, res));
        this.expressRoute.post('/' + this.prefix, (req: any, res: any) => this.controller.create(req, res));
        this.expressRoute.put('/' + this.prefix, (req: any, res: any) => this.controller.update(req, res));
        this.expressRoute.delete('/' + this.prefix, (req: any, res: any) => this.controller.delete(req, res));
    }
}
