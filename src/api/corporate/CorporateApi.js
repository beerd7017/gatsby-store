class CorporateApi {

    static getAbout() {
        return new Promise((resolve) => {
            setTimeout(function () {
                resolve([{
                    quotation: "Static site generators are the bees knees, for sure.",
                    speaker: "-Dennis Stepp, Software Engineer"
                }]);
            }, 1000);
        });
    }


    static getAddress() {
        return new Promise((resolve) => {
            setTimeout(function () {
                resolve([{
                    addressee: "Gatsby-Store",
                    addrLine1: "123 Test Ave",
                    addrLine2: "Suite 123",
                    city: "Knoxville",
                    state: "TN",
                    country: "United States"
                }]);
            }, 1000);
        });
    }


    static getContact() {
        return new Promise((resolve) => {
            setTimeout(function () {
                resolve([{
                    phone: "+555 555 555 555",
                    emailAddress: "info@gatsby-store.com"
                }]);
            }, 1000);
        });

    }

    static getEmail() {
        return new Promise((resolve) => {
            setTimeout(function () {
                resolve([{}]);
            }, 1000);
        });
    }
}

export default CorporateApi;