// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const dirArray = moviesArray.map((currentMovie) => {
        return currentMovie.director;
    });
    return dirArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    
   //currentMovie.genre.idexOf('Drama')
     const stevenMovie =  moviesArray.filter((currentMovie) => (currentMovie.director == 'Steven Spielberg' ) );
    let dramaMovie = [];
        stevenMovie.forEach((currentMovie) => {
        if(currentMovie.genre.includes('Drama')){
            dramaMovie.push(currentMovie);
        }
     });
        
    if(stevenMovie.length === 0){
        return 0;
    }else {
        return dramaMovie.length;
    }
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    const movieWithScore =  moviesArray.filter((currentMovie) => (currentMovie.score != '' && currentMovie.score != undefined) );

   
  let score =0;
  score =  movieWithScore.reduce((accumulator, movieWithScore) =>{
        
            return accumulator + movieWithScore.score;
        
    
    }, 0);

    if(score != 0 ){
    score = (score / moviesArray.length);
    }
    const result =   Math.round(score*100)/100;
    if(moviesArray.length != 0){
    return score;
    }else{
        return 0;
    }

   

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaWithScore =  moviesArray.filter((currentMovie) => (currentMovie.score != '' && currentMovie.score != undefined && currentMovie.genre.includes('Drama')) );
    let score =0;
    score =  dramaWithScore.reduce((accumulator, dramaWithScore) =>{
          
              return accumulator + dramaWithScore.score;
          
      
      }, 0);


      if(score != 0 ){
        score = (score / dramaWithScore.length);
     
        }
        const  result =   Math.round(score*100)/100;
        if(moviesArray.length != 0){
        return result;
        }else{
            return 0;
        }
    

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    //tosorted

    const arrayPerYear = 
    moviesArray.toSorted((a, b) =>{
        if(a.year === b.year){
            if (a.title.toUpperCase() < b.title.toUpperCase()) {
                return -1;
              }
              if (a.title.toUpperCase() > b.title.toUpperCase()) {
                return 1;
              }
              
        }else{
        return a.year - b.year ;
    }
    } );


    console.log(moviesArray);
    console.log(arrayPerYear);


    return arrayPerYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
