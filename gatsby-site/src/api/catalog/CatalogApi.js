class CatalogApi {

    static getCatalog() {
        var mockApiCall = new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve([{
                    name: "Doors",
                    totalProducts: "11",
                    subSections: ["Standard", "Electronic", "Sliding"]
                }, {
                    name: "Clothes",
                    totalProducts: "8",
                    subSections: ["Small Dog", "Large Dog"]
                }, {
                    name: "Feeders",
                    totalProducts: "12",
                    subSections: ["All"]
                }, {
                    name: "Fountains",
                    totalProducts: "8",
                    subSections: ["Indoor", "Outdoor"]
                }, {
                    name: "Harnesses/Leashes",
                    totalProducts: "12",
                    subSections: ["Standard", "Deluxe", "Sport"]
                }, {
                    name: "Pet Tech",
                    totalProducts: "15",
                    subSections: ["All"]
                }, {
                    name: "Toys",
                    totalProducts: "23",
                    subSections: ["All"]
                }, {
                    name: "Training",
                    totalProducts: "13",
                    subSections: ["All"]
                }, {
                    name: "Treats",
                    totalProducts: "7",
                    subSections: ["All"]
                }, {
                    name: "Waste Management",
                    totalProducts: "14",
                    subSections: ["All"]
                }
                ]);
            }, 1000);
        });
        return mockApiCall;
    }
}

export default CatalogApi;