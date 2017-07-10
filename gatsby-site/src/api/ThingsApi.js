class ThingsApi{
    static getThings(){
        var mockApiCall = new Promise((resolve, reject) => {
            setTimeout(function() {
                resolve([{name: "Thing 1"}, {name: "Thing 2"}, {name: "Thing 3"}, {name: "Thing 4"}]);
            }, 1000);
        });
        return mockApiCall;
    }
}

export default ThingsApi;