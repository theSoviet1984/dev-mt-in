angular.module('socialApp').service('mainService', function($http){



 //put profile in db//
 this.saveProfile = function(newProfile){
   return $http({
     method: 'POST',
     data: newProfile,
     url: "/api/profiles"
   })
 }
//retreive profile from database//
this.getProfile = function(_id){
  return $http({
    method: 'GET',
    url: "/api/profiles/recent"
  })
}

this.updateProfile = function(newProfile){
  return $http({
    method: 'PUT',
    url: "/api/profiles"+ newProfile
  })
}

this.getFriends= function(){
  return $http({
    method: 'GET',
    url: "/api/friends"
  })

}
this.deleteFriends=function(){
  return $http({
    method: 'DELETE',
    url: "/api/friends"
  })
}
this.getAvatars = function(){
  return avatars;
}


var friends = [
   {
     fullName:"Warren Buffet",
     tagline: "Money is Power",
     imageUrl: "../images/Warren_Buffett_KU_Visit.jpg",
     shortBio: "In 1962, Buffett became a millionaire because of his partnerships, which in January 1962 had an excess of $7,178,500, of which over $1,025,000 belonged to Buffett. He merged these partnerships into one. Buffett invested in and eventually took control of a textile manufacturing firm, Berkshire Hathaway."},
{
    fullName: "Jack Dempsey",
    tagline: "Be Passionate",
    imageUrl: "../images/220px-Jack_dempsey.jpg",
    shortBio: "William Harrison Dempsey (June 24, 1895 – May 31, 1983), also known as Kid Blackie and the Manassa Mauler, was an American professional boxer who became a cultural icon of the 1920s.[1] Dempsey held the World Heavyweight Championship from 1919 to 1926, and his aggressive style and exceptional punching power made him one of the most popular boxers in history.[2][3] "},
{
  fullName: "Jerad Amundsen",
  tagline: "You are what you create",
  imageUrl: "../images/animeWarrior.jpg",
  shortBio: "Lorem ipsum dolor sit amet, amet litora proin mi, pede curae consectetuer tincidunt et. Erat nec quam, tincidunt mattis vivamus, auctor dapibus. Dictumst massa suscipit et aliquam massa malesuada, cras voluptatem lectus est, nec odio ligula."
}
 ]

 var avatars = [
   {
     name: "Elaine",
     img: "../images/elaine_avatar.jpg"
   },
   {
     name: "George",
     img: "../images/george_avatar.jpeg"
   },
   {
     name: "Newman",
     img: "../images/newman_avatar.jpeg"
   },
   {
     name: "Jerry",
     img: "../images/jerry_avatar.jpeg"
   }
 ]
//after backend setup//
  // this.createProfile = function(){
  //   return $http({
  //     method:'POST',
  //     data: profile,
  //     url: '/api/profile'
  //   }).then(function(response){
//   return response.data;
// })
  // }
})
