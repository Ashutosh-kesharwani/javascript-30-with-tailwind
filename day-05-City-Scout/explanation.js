
// const cityApiUrl = "https://raw.githubusercontent.com/nshntarora/Indian-Cities-JSON/master/cities.json";

// const cities =[];
// const inputElem =document.querySelector('main input');
// // console.log(inputElem);



// fetch(cityApiUrl)
//     .then(response=>response.json())
//     .then(data=>cities.push(...data))  // console.log("INSIDE then:", cities); // here ))  

//     /*
//     //console.log("OUTSIDE:", cities); 
//     here if we print cities array outside the fetch as it is async so and hmara ye wla console sync hai to ye phle hi chal jayga issi wjah se blank value de rha hai && if fetch ke andar dhekhe to wha update ho rhi hai value | but vo der me dhikhegi yyhim reason hai  [  // console.log("INSIDE then:", cities); // here]yha dhekhenge to value dhikh jaygi .

//     */

// function handleSearch(wordToMatch){
//     const typedValue= wordToMatch.target.value.toLowerCase();
//     // console.log(typedValue);

//     // console.log(cities);

//     const matched=  cities.filter(placeObj=>{
//         //  console.log(placeObj.state);
//         return(
//            placeObj.name.toLowerCase().includes(typedValue) ||
//            placeObj.state.toLowerCase().includes(typedValue)
//         )
         
//     })
//     // Testing purpose
//     // console.clear();
//     // matched.forEach((elem)=> console.log(elem))
    

//     // here change event is used when ham type kar rahe hai tab uske baad jab ham uss ele input se bahr cursor le jaye tab start hota hai ye 
//     inputElem.addEventListener('change',displayValues(matched))

//     // ye use as if ham chahte hai ki type karte karte bhi chale
//     inputElem.addEventListener('keyup',displayValues(matched)) 
// }

// function displayValues(matched){
    
// }