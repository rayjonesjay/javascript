// const nutritionDB = {
//     tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
//     vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
//     oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
//     onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
//     garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
//     paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
//     sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
//     orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
// }


function filterEntries(obj,callback){
    const newObj = {} // initialize an empty object to store our result
    // get the key and value pairs from the object using Object.entries
    for(const [k,v] of Object.entries(obj)){
        if(callback([k,v])){
            newObj[k]=v
        }
    }
    return newObj
}
function mapEntries(arr,callback){
    const newObj = {};
    for(const [k,v] of Object.entries(arr)){
        const [nk, nv] = callback([k,v])
        newObj[nk] = nv
    }
    return newObj
}

function reduceEntries(arr,callback,acc){
    for(const [k,v] of Object.entries(arr)){
        acc = callback(acc,[k,v])
    }
    return acc
}

function totalCalories(cart){
    return reduceEntries(cart, (acc, [item,grams]) => {
        if (nutritionDB[item]) {
            const caloriesPer100g = nutritionDB[item].calories
            const totalCaloriesForItem = (caloriesPer100g/100) * grams;
            return Number((acc + totalCaloriesForItem)).toFixed(1);
        }
        return acc.toFixed(1);
    },0);
}

function lowCarbs(cart) {
    return filterEntries(cart, ([item, grams]) => {
        if (nutritionDB[item]) {
            const carbsPer100g = nutritionDB[item].carbs;
            const totalCarbsForItem = (carbsPer100g / 100) * grams;
            return totalCarbsForItem < 50;
        }
        return false;
    });
}

function cartTotal(cart) {
    return mapEntries(cart, ([item, grams]) => {
        if (nutritionDB[item]) {
            const nutrition = nutritionDB[item];
            return [item, {
                calories: ((nutrition.calories / 100) * grams).toFixed(1),
                protein: ((nutrition.protein / 100) * grams).toFixed(1),
                carbs: ((nutrition.carbs / 100) * grams).toFixed(1),
                sugar: ((nutrition.sugar / 100) * grams).toFixed(1),
                fiber: ((nutrition.fiber / 100) * grams).toFixed(1),
                fat: ((nutrition.fat / 100) * grams).toFixed(1),
            }];
        }
        return [item, null];
    });
}

const groceriesCart = { orange: 500, oil: 20, sugar: 480 }

console.log('Total calories:')
console.log(totalCalories(groceriesCart))
console.log('Items with low carbs:')
console.log(lowCarbs(groceriesCart))
console.log('Total cart nutritional facts:')
console.log(cartTotal(groceriesCart))
