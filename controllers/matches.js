const User = require('../models/User')


function matchRoute(req, res, next) {
  //get all the users from the database
  User.find()
    .then((users) => {
      //change the ID from the url to a string
      //const userId = JSON.stringify(req.params.id)
      const userId = req.params.id
      //initialize variables to store the users matching details
      let userLocation = ''
      let userGender = ''
      let userInterests = ''

      //find the location of the user searching for a match
      users.forEach((user) => {

        if(user._id.equals(req.params.id)) {
          userLocation = user.location
          userGender = user.gender
          //create an array of user interests
          userInterests = user.interests.split(', ')
        }

      })

      //initialize an array in which to store your matches
      const arrayOfMatches = []

      //loop through all users to find which ones match, and exclude yourself
      users.forEach((match) => {
        const matchLocation = match.location
        const matchGender = match.gender
        const matchId = match._id
        const matchInterests = match.interests.split(', ')
        const similarInterests = []

        //count the number of similar interests
        matchInterests.forEach((interest) => {
          if(userInterests.includes(interest)) {
            similarInterests.push(interest)
          }
        })

        //if IDs dont match and the locations match, push into array
        if(userId !== matchId && userLocation === matchLocation && userGender !== matchGender && similarInterests.length > 2) {
          arrayOfMatches.push(match)
        }

      })
      //return the arrayOfMatches as JSON
      return res.json(arrayOfMatches)
    })
    .catch(next) //catch any errors
}



module.exports = {
  match: matchRoute
}
