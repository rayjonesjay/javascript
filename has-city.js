function hasCity(country,arr){
    return function(city){
        for(let i = 0 ; i < arr.length; i++){
            let c  = arr[i];
            if (city === c){
                return `${city} is a city from ${country}`
            }
        }
        return `${city} is not a city from ${country}`
    }
}