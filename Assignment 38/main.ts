//  Assignment # 38

/*  Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should 
print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your 
function for three different cities, at least one of which is not in the default country.  */

//  function called describe_city() that accepts the name of a city and its country
function describe_city(cityName: string, countryName: string = "Pakistan")
{
    console.log(`${cityName} is in the ${countryName}.`);  //  function should print a simple sentence
}
describe_city("Karachi");  //  Calling function by providing cityName as an argument
describe_city("Lahore");  //  Calling function by providing cityName as an argument
describe_city("Paris", "Farance");  //  Calling function by providing cityName & countryName
