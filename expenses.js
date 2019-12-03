function David() {
    let totals = ([1234.56, 89.42, 9797.10, 88.88, 3.14].reduce((a, b) => a + b));
    totals = totals.toFixed(2);
    console.log(totals)
}


function YASSS() {
    const expenses = [
        1234.56,
        89.42,
        9797.10,
        88.88,
        3.14
    ];

    let price = expenses.filter((number) => {
        return number > 20;
    });
    console.log(price)

    let whatToDiscount = price.filter((number) => {
        return number > 100;
    });
    console.log(whatToDiscount)

    let discountedItems = whatToDiscount.map(x => x * 0.9);
    console.log(discountedItems)
}