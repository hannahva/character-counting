//need a way to calculate tax (multiplication) - function
//telus is BC and SK, need to calculate against dif keys in salesTaxRate object
//add together numbers in sales arrays for totalSales values
//calculate tax on that total to get totalTaxes values
//calling Telus needs to be separated by province key, for different tax rates
//output one Telus object with totalSales and totalTaxes as keys
//output one Bombardier object with totalSales and totalTaxes as keys - must access as
//values the results of calculating total tax and sales
//results should output as object?



var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};


var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


function calculateSalesTax(salesData, taxRates) {
   var companyResultBlock = {};

   for(var i = 0; i < companySalesData.length; i++){
    var company = companySalesData[i];
    if( !== undefined)
    companyResultBlock[company["name"]] = {
      totalSales: calculateTotalSales(company["sales"]),
      totalTaxes: calculateTotalTaxes(company["province"], company["sales"])

   }
   }
console.log(companyResultBlock);

}

function calculateTotalSales(sales) {
  return sales.reduce((a, b) => a + b, 0);
}

function calculateTotalTaxes(province, salesData){
  return calculateTotalSales(salesData) * salesTaxRates[province];
}


var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
