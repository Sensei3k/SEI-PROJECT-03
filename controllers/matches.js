const User = require('../models/User')





function matchRoute(req, res, next) {
  //get all the users from the database
  User.find()
    .then((users) => {
      //change the ID from the url to a string
      const userId = JSON.stringify(req.params.id)
      //initialize variables to store the users matching details
      let userLocation = ''
      let userGender = ''
      let userInterests = ''

      //find the location of the user searching for a match
      users.forEach((user) => {
        const userDbId = JSON.stringify(user._id)

        if(userDbId === userId) {
          userLocation = JSON.stringify(user.location)
          userGender = JSON.stringify(user.gender)
          //create an array of user interests
          userInterests = JSON.stringify(user.interests).split(', ' || ' ' || ',')
        }

      })

      console.log(userLocation)
      console.log(userInterests)





      //initialize an array in which to store your matches
      const arrayOfMatches = []

      //loop through all users to find which ones match, and exclude yourself
      users.forEach((match) => {
        const matchLocation = JSON.stringify(match.location)
        const matchGender = JSON.stringify(match.gender)
        const matchId = JSON.stringify(match._id)
        const matchInterests = JSON.stringify(match.interests).split(', ')
        //if IDs dont match and the locations match, push into array
        if(userId !== matchId && userLocation === matchLocation && userGender !== matchGender) {
          arrayOfMatches.push(match)
        }

        console.log(match.username, matchInterests)
      })
      //return the arrayOfMatches as JSON
      return res.json(arrayOfMatches)

    })
    .catch(next) //catch any errors

}





module.exports = {
  match: matchRoute
}
