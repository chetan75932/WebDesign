let movie = {
     Name:"Jailer",
     Director: 	"Nelson Dilipkumar",
     Producer: "Kalanidhi Maran",
     cast :
     {
        hero : ["Rajnikant"],
        heroine : ["Ramya Krishnan","rni"],
        villan : ["Vinayakan"],
        comedian:["Yogi Babu"]
     },

     date_of_release : "10 August 2023",
     kids:'True'
}




//console.log(movie);
//console.log(movie.cast.heroine[1]);
console.log(movie.cast.hero.length);
console.log(movie.cast.heroine.length);
console.log(movie.cast.villan.length);
console.log(movie.cast.comedian.length);