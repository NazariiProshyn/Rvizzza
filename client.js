class Client {
    getData(endpoint) {
        switch(endpoint){
            case 'main':
                return Promise.all(
                    [fetch(`https://my-json-server.typicode.com/NazariyProshyn/test-json/promo`).then(response => response.json()),
                    fetch(`https://my-json-server.typicode.com/NazariyProshyn/test-json/recommend`).then(response => response.json())]
                ).then((values) => {return {"promo":values[0],"recommend":values[1]}})   
            default:
                return fetch(`https://my-json-server.typicode.com/NazariyProshyn/test-json/${endpoint}`)
                    .then(response => response.json());
                }
    }
}

export default Client;
