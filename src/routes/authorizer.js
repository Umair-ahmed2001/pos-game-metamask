import { Route } from "react-router-dom";

class Router {
    user;
    publicRoutes = [];
    privateRoutes = [];

    constructor(user, routes) {
        this.user = user;
        this.publicRoutes = routes.publicRoutes;
        this.privateRoutes = routes.privateRoutes;
    }

    getPublicRoutes() {
        return this.publicRoutes.map(({ path, component, exact }) => {
            return <Route key={path} path={path} component={component} exact={exact} />
        })
    }
    
   getPrivateRoutes() {
        return this.privateRoutes.map(({ path, component, exact }) => {
            return (
                !!this.user && <Route key={path} path={path} component={component} exact={exact} />
            )
        })
   }

   getRoutes() {
        return [...this.getPublicRoutes(), ...this.getPrivateRoutes()]
   }

}

export default Router;