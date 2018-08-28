export default interface baseRouteInterface {
    readonly prefix: string;

    setupRoutes(): void;
}