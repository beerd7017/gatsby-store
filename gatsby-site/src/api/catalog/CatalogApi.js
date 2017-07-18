class CatalogApi {

    static getCatalog() {
        var mockApiCall = new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve([{
                    name: "Doors",
                    totalProducts: "11",
                    childArray: [{
                        subcatagory: [{key: "1", name: "Small Dog", url: "/"}]
                    },
                        {
                            subcatagory: [{key: "1", name: "Big Dog", url: "/"}]
                        }]
                }, {
                    name: "Clothes",
                    totalProducts: "8",
                    childArray: [{
                        subcatagory: [{key: "2", name: "Small Dog", url: "/"}]
                    },
                        {
                            subcatagory: [{key: "2", name: "Big Dog", url: "/"}]
                        }]
                },
                    {
                        name: "Feeders",
                        totalProducts: "12",
                        childArray: [{
                            subcatagory: [{key: "3", name: "Small Dog", url: "/"}]
                        },
                            {
                                subcatagory: [{key: "3", name: "Big Dog", url: "/"}]
                            }]
                    },
                    {
                        name: "Fountains",
                        totalProducts: "8",
                        childArray: [{
                            subcatagory: [{key: "4", name: "Small Dog", url: "/"}]
                        },
                            {
                                subcatagory: [{key: "4", name: "Big Dog", url: "/"}]
                            }]
                    },
                    {
                        name: "Harnesses/Leashes",
                        totalProducts: "12",
                        childArray: [{
                            subcatagory: [{key: "5", name: "Small Dog", url: "/"}]
                        },
                            {
                                subcatagory: [{key: "5", name: "Big Dog", url: "/"}]
                            }]
                    },
                    {
                        name: "Pet Tech",
                        totalProducts: "15",
                        childArray: [{
                            subcatagory: [{key: "6", name: "Small Dog", url: "/"}]
                        },
                            {
                                subcatagory: [{key: "6", name: "Big Dog", url: "/"}]
                            }]
                    },
                    {
                        name: "Toys",
                        totalProducts: "23",
                        childArray: [{
                            subcatagory: [{key: "7", name: "Small Dog", url: "/"}]
                        },
                            {
                                subcatagory: [{key: "7", name: "Big Dog", url: "/"}]
                            }]
                    },
                    {
                        name: "Training",
                        totalProducts: "13",
                        childArray: [{
                            subcatagory: [{key: "8", name: "Small Dog", url: "/"}]
                        },
                            {
                                subcatagory: [{key: "8", name: "Big Dog", url: "/"}]
                            }]
                    },
                    {
                        name: "Treats",
                        totalProducts: "7",
                        childArray: [{
                            subcatagory: [{key: "9", name: "Small Dog", url: "/"}]
                        },
                            {
                                subcatagory: [{key: "9", name: "Big Dog", url: "/"}]
                            }]
                    },
                    {
                        name: "Waste Management",
                        totalProducts: "14",
                        childArray: [{
                            subcatagory: [{key: "10", name: "Small Dog", url: "/"}]
                        },
                            {
                                subcatagory: [{key: "10", name: "Big Dog", url: "/"}]
                            }]
                    }
                ]);
            }, 1000);
        });
        return mockApiCall;
    }
}

export default CatalogApi;