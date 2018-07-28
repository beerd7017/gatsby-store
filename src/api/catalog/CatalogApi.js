class CatalogApi {

    static getCatalog() {
        return new Promise((resolve) => {
            setTimeout(function () {
                resolve([{
                    name: "Guitars",
                    sectionId: 1,
                    totalProducts: "3",
                    subSections: ["Acoustic", "Electric"]
                }, {
                    name: "Mandolins",
                    sectionId: 2,
                    totalProducts: "4",
                    subSections: ["A Style", "F Style", "B Style"]
                }, {
                    name: "Banjos",
                    sectionId: 3,
                    totalProducts: "5",
                    subSections: ["Standard" , "Tenor"]
                }, {
                    name: "Basses",
                    sectionId: 4,
                    totalProducts: "8",
                    subSections: ["Acoustic", "Electric"]
                }, {
                    name: "Accessories",
                    sectionId: 5,
                    totalProducts: "12",
                    subSections: ["Straps", "Stands", "Maintenance"]
                }
                ]);
            }, 1000);
        });
    }
}

export default CatalogApi;