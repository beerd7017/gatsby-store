class ProductApi {

    static getProducts() {
        var mockApiCall = new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve([{
                    name: "Drinkwell\u00A9 Sedona Pet Fountain",
                    sku: "PWW00-15417",
                    price: "$84.99",
                    image: "http://placehold.it/500x500",
                    description: "Stylish clear bowl. 100oz. filtered water."
                },
                    {
                        name: "Drinkwell\u00A9 360 Multi-Pet Stainless Steel Fountain",
                        sku: "PWW00-13705",
                        price: "$69.99",
                        image: "http://placehold.it/500x500",
                        description: "5 adjustable stream. 1 gal. filtered water."
                    },
                    {
                        name: "Drinkwell\u00A9 Everflow Indoor/Outdoor Fountain",
                        sku: "PWW00-14074",
                        price: "$99.99",
                        image: "http://placehold.it/500x500",
                        description: "Hose hookup auto refills. 1.5 gal filtered water."
                    },
                    {
                        name: "Drinkwell\u00A9 Outdoor Pet Dog Fountain",
                        sku: "DDOG-INOUT",
                        price: "",
                        image: "http://placehold.it/500x500",
                        description: "Durable bowl reduces spills. 3.5 gal. filtered water."
                    }
                ]);
            }, 1000);
        });
        return mockApiCall;
    }
}

export default ProductApi;