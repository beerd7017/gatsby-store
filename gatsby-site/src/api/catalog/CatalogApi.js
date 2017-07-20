class CatalogApi {

    static getCatalog() {
        var mockApiCall = new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve([{
                    name: "Doors",
                    sectionId: 1,
                    totalProducts: "11",
                    subSections: ["Standard", "Electronic", "Sliding"]
                }, {
                    name: "Clothes",
                    sectionId: 2,
                    totalProducts: "8",
                    subSections: ["Small Dog", "Large Dog"]
                }, {
                    name: "Feeders",
                    sectionId: 3,
                    totalProducts: "12",
                    subSections: ["All"]
                }, {
                    name: "Fountains",
                    sectionId: 4,
                    totalProducts: "8",
                    subSections: ["Indoor", "Outdoor"]
                }, {
                    name: "Harnesses/Leashes",
                    sectionId: 5,
                    totalProducts: "12",
                    subSections: ["Standard", "Deluxe", "Sport"]
                }, {
                    name: "Pet Tech",
                    sectionId: 6,
                    totalProducts: "15",
                    subSections: ["All"]
                }, {
                    name: "Toys",
                    sectionId: 7,
                    totalProducts: "23",
                    subSections: ["All"]
                }, {
                    name: "Training",
                    sectionId: 8,
                    totalProducts: "13",
                    subSections: ["All"]
                }, {
                    name: "Treats",
                    sectionId: 9,
                    totalProducts: "7",
                    subSections: ["All"]
                }, {
                    name: "Waste Management",
                    sectionId: 10,
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