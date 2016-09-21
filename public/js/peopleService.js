angular.module('socialApp').service('peopleService', function($http){


this.getPeople =function(){
  return people;
}
var people =[

{
  fullName: "Frank Lloyd Wright",
tagline: "I build stuff",
imageUrl: "../images/frank_wright.jpeg",
shortBio: "Lorem ipsum dolor sit amet, amet litora proin mi, pede curae consectetuer tincidunt et. Erat nec quam, tincidunt mattis vivamus, auctor dapibus. Dictumst massa suscipit et aliquam massa malesuada, cras voluptatem lectus est, nec odio ligula."
},
{
  fullName: "George SteinBrenner",
  tagline: "George...",
  imageUrl: "../images/george_steinbrenner.jpg",
  shortBio: "Lorem ipsum dolor sit amet, amet litora proin mi, pede curae consectetuer tincidunt et. Erat nec quam, tincidunt mattis vivamus, auctor dapibus. Dictumst massa suscipit et aliquam massa malesuada, cras voluptatem lectus est, nec odio ligula."
},
{
fullName: "Marisa Tomei",
tagline: "I love funny, Quirky, Bald Men",
imageUrl: "../images/marisa_tomei.jpeg",
shortBio: "Lorem ipsum dolor sit amet, amet litora proin mi, pede curae consectetuer tincidunt et. Erat nec quam, tincidunt mattis vivamus, auctor dapibus. Dictumst massa suscipit et aliquam massa malesuada, cras voluptatem lectus est, nec odio ligula."
},
{
  fullName: "Soup Nazi",
  tagline: "No More Soup For You",
  imageUrl: "../images/soup-nazi",
  shortBio: "Lorem ipsum dolor sit amet, amet litora proin mi, pede curae consectetuer tincidunt et. Erat nec quam, tincidunt mattis vivamus, auctor dapibus. Dictumst massa suscipit et aliquam massa malesuada, cras voluptatem lectus est, nec odio ligula."
}
]



})
