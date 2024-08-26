function dogYears(planetName,dogAgeSeconds){
    const planets = {
        earth : 1.0,
        mercury: 0.2408467,
        venus: 0.61519726,
        mars: 1.8808158,
        jupiter: 11.862615,
        saturn: 29.447498,
        uranus:  84.016846,
        neptune: 164.79132,
    };
   const numberOfSecondsInAYearOnEarth = 31557600;
   const ageInEarthYears = dogAgeSeconds / numberOfSecondsInAYearOnEarth;
   const ageOfDogInEarthYears = ageInEarthYears / planets[planetName.toLowerCase()];
   const ageInDogYears  = ageOfDogInEarthYears * 7 ;
   const result = ageInDogYears.toFixed(2);
   return parseFloat(result);
}