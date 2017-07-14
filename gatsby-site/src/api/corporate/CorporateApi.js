class CorporateApi {

    static getAbout() {
        var mockApiCall = new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve([{
                    quotation: "Our legacy can be that of an organization that gives back to future associates, to pet welfare, and the community for decades to come. We are passing on a foundation that will last.",
                    speaker: "-Randy Boyd, Owner and founder of Radio Systems Corporation"
                }]);
            }, 1000);
        });
        return mockApiCall;
    }


    static getAddress() {
        var mockApiCall = new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve([{
                    addressee: "Radio Systems Corporation",
                    addrLine1: "10427 PetSafe Way",
                    addrLine2: "",
                    city: "Knoxville",
                    state: "TN",
                    country: "United States"
                }]);
            }, 1000);
        });
        return mockApiCall;
    }


    static getPhone() {
        var mockApiCall = new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve([{
                    phone: "+420 777 555 333"
                }]);
            }, 1000);
        });
        return mockApiCall;

    }

    static getEmail() {
        var mockApiCall = new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve([{
                    emailAddress: "info@rsccorp.radiosys.com"
                }]);
            }, 1000);
        });
        return mockApiCall;
    }
}

export default CorporateApi;