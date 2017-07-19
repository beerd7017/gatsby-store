class SubSectionAPI {

    static getSubSection() {
        var mockApiCall = new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve(
                    {mySubSect: SubSection("Doors", "Standard")},
                    {mySubSect: SubSection("Doors", "Electronic")},
                    {mySubSect: SubSection("Doors", "Sliding")},
                    {mySubSect: SubSection("Clothes", "Small Dog")},
                    {mySubSect: SubSection("Clothes", "Large Dog")},
                    {mySubSect: SubSection("Feeders", "All")},
                    {mySubSect: SubSection("Fountains", "Indoor")},
                    {mySubSect: SubSection("Fountains", "Outdoor")},
                    {mySubSect: SubSection("Harnesses/Leashes", "Standard")},
                    {mySubSect: SubSection("Harnesses/Leashes", "Deluxe")},
                    {mySubSect: SubSection("Harnesses/Leashes", "Sport")},
                    {mySubSect: SubSection("Pet Tech", "All")},
                    {mySubSect: SubSection("Toys", "All")},
                    {mySubSect: SubSection("Training", "All")},
                    {mySubSect: SubSection("Treats", "All")},
                    {mySubSect: SubSection("Waste Management", "All")}
                );
            }, 1000);
        });
        return mockApiCall;
    }
}

export default SubSectionAPI;