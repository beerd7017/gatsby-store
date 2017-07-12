class CatalogApi {

    static getCatalog() {
        var mockApiCall = new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve([{name: "Doors", totalProducts:"11" }, {name: "Clothes", totalProducts:"8"}, {name: "Feeders", totalProducts:"12"}, {name: "Fountains", totalProducts:"8"}, {name: "Harnesses/Leashes", totalProducts:"12"}, {name: "Pet Tech", totalProducts:"15"}, {name: "Toys", totalProducts:"23"}, {name: "Training", totalProducts:"13"}, {name: "Treats", totalProducts:"7"}, {name: "Waste Management", totalProducts:"14"}]);
            }, 1000);
        });
        return mockApiCall;
    }
}

export default CatalogApi;