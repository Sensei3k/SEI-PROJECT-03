const User = require('../models/User')





function matchRoute(req, res, next) {
  //get all the users from the database
  User.find()
    .then((users) => {
      //change the ID from the url to a string
      const userId = JSON.stringify(req.params.id)

      let userLocation = ''

      //find the location of the user searching for a match
      users.forEach((user) => {
        const userDbId = JSON.stringify(user._id)
        if(userDbId === userId) {
          userLocation = JSON.stringify(user.location)
        }
      })
      console.log(userLocation)
      //initialize an array in which to store your matches
      const arrayOfMatches = []

      //loop through all users to find which ones match, and exclude yourself
      users.forEach((match) => {
        const matchLocation = JSON.stringify(match.location)
        const matchId = JSON.stringify(match._id)
        //if IDs dont match and the locations match, push into array
        if(userId !== matchId && userLocation === matchLocation) {
          arrayOfMatches.push(match)
        }

      })

      //return the arrayOfMatches as JSON
      return res.json(arrayOfMatches)

    })
    .catch(next) //catch any errors

  //
  //
  //
  //
  //
  //   return res.json(users)
  // }) //send as JSON
  // .then((users) => {
  //   //users.forEach(user => console.log(user._id))
  //
  //
  //   return res.json(users)
  //
  // })

}





module.exports = {
  match: matchRoute
}
