import baseEntity from "../entity/baseEntity";

export default interface baseRepositoryInterface<TKey, TEntity extends baseEntity<TKey>> {
    get(): Array<TEntity>;

    // get(id:TKey):void;
    create(entity: TEntity): TEntity;

    update(entity: TEntity): TEntity;

    delete(id: TKey): boolean;
}