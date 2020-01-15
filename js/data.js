

let returnData = () => {
    let data = {
        Name: "Clark Center for Comprehensive Medicine",
        Address: "29514 Ford Rd. Garden City, Michigan 48135",
        Telephone: "(734)3671205",
        services: [
            {
                id: 1,
                Title: "Arthritis",
                Description: "Diabetes is a disease"
            },
            {
                id: 2,
                Title: "Atrial Fibrilation",
                Description: "Diabetes is a disease"
            },
            {
                id: 3,
                Title: "Bronchitis",
                Description: "Diabetes is a disease"
            }
        ]
    };

    return data;
}

console.log(returnData());