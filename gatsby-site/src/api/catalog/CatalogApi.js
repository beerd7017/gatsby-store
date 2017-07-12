class CatalogApi {

    static getCatalog() {
        var mockApiCall = new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve([{name: "Doors"}, {name: "Clothes"}, {name: "Feeders"}, {name: "Fountains"}, {name: "Harnesses/Leashes"}, {name: "Pet Tech"}, {name: "Toys"}, {name: "Training"}, {name: "Treats"}, {name: "Waste Management"}]);
            }, 1000);
        });
        return mockApiCall;
    }
}

export default CatalogApi;