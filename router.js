
class Router {
    getCurrentState() {
        let viewName = '';
        let endpointName = '';
        let hash = window.location.hash.split('#')
        let double_hash = []
        if (hash[1]){
            double_hash = hash[1].split('/')}
        if (double_hash.length == 1){
            switch(hash[1]){
            case 'catalog':
                viewName = 'catalogPage';
                endpointName = 'product';
                break;
            
            case 'order':

                viewName = 'orderPage';
                endpointName = 'product';
                break;
            
            case'cart':
                viewName = 'cartPage';
                endpointName = 'product';
                break;
            
            default:
                viewName = 'mainPage';
                endpointName = 'main';
                window.location.hash = '';
                break;
            }
        }
        else if (double_hash.length == 2){
            switch(double_hash[0]){
            case "catalog":
                viewName = 'productPage';
                endpointName = 'product';
                break;
            
            case "promo":
                viewName = 'promoPage';
                endpointName = 'promo';
                break;
            case "section":
                viewName = 'categoryPage';
                endpointName = 'product';
                break;
            
            default:
                viewName = 'mainPage';
                endpointName = 'main';
                window.location.hash = '';
                break;
            }

        }
        else{
                viewName = 'mainPage';
                endpointName = 'main';
                window.location.hash = '';

        }

        return {
            viewName,
            endpointName
        };
    }
}

export default Router;
