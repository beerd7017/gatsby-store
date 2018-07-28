class ProductApi {

    static getProduct() {
        return new Promise((resolve) => {
            setTimeout(function () {
                resolve([{
                    name: "Martin Guitar",
                    sku: "PWW00-15417",
                    price: "$1084.99",
                    image: "http://placehold.it/500x500",
                    description: "Super awesome tone."
                },
                    {
                        name: "Blue Ridge",
                        sku: "PWW00-13705",
                        price: "$469.99",
                        image: "http://placehold.it/500x500",
                        description: "Spruce sides and back."
                    },
                    {
                        name: "Recording King",
                        sku: "PWW00-14074",
                        price: "$599.99",
                        image: "http://placehold.it/500x500",
                        description: "Natural finish."
                    },
                    {
                        name: "Taylor",
                        sku: "DDOG-INOUT",
                        price: "$824.99",
                        image: "http://placehold.it/500x500",
                        description: "Taylor made."
                    }
                ]);
            }, 1000);
        });
    }
}

export default ProductApi;