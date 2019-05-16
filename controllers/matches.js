const User = require('../models/User')

function calcDistance(user, match) {
  //haversine formula for distance between two lat, lon coordinate pairs
  const radConst = (Math.PI/180)
  const φ1 = user.latitude*radConst
  const φ2 = match.latitude*radConst
  const Δφ = (match.latitude-user.latitude)*radConst
  const Δλ = (match.longitude-user.longitude)*radConst

  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ/2) * Math.sin(Δλ/2)
  const r = 6371e3 // earths radius in metres
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
  const distance = r * c / 1000 //d is in km

  return distance
}

function matchRoute(req, res, next) {
  //get all the users from the database
  User.find()
    .then((users) => {
      //store the users ID for reference
      const userId = req.params.id

      //initialize variables to store the users matching details
      let userGender = ''
      let userInterestedIn = ''
      let userRadius = ''
      let userCoordinates = []
      let userAge = ''
      let userMinAge = ''
      let userMaxAge = ''

      //find the location, gender of interest, of the user
      users.forEach((user) => {

        if(user._id.equals(req.params.id)) {
          userGender = user.gender
          userInterestedIn = user.interestedIn

          userCoordinates = user.coordinates
          userRadius = parseInt(user.radius)

          userAge = parseInt(user.age)
          userMinAge = parseInt(user.minAge)
          userMaxAge = parseInt(user.maxAge)
        }

      })

      //initialize an array in which to store your matches
      const arrayOfMatches = []

      //loop through all users to find which ones match, and exclude yourself
      users.forEach((match) => {
        const matchId = match._id
        const matchGender = match.gender
        const matchInterestedIn = match.interestedIn
        //convert text input from React to integers
        const matchRadius = parseInt(match.radius)
        const matchAge = parseInt(match.age)
        const matchMinAge = parseInt(match.minAge)
        const matchMaxAge = parseInt(match.maxAge)

        //calc the distance between the user and the potential match and check...
        //that they meet eachothers radius requirements
        const distanceApart = calcDistance(userCoordinates, match.coordinates)
        const distanceRequirement = distanceApart < userRadius && distanceApart < matchRadius

        //check if the potential match meets users age requirements and vice versa
        const ageRequirement = matchAge < userMaxAge && matchAge > userMinAge && userAge < matchMaxAge && userAge > matchMinAge

        //check if the potential match meets gender preference requirements and vice versa
        const interestRequirement = (userInterestedIn === 'Both' || userInterestedIn === matchGender) && (matchInterestedIn === 'Both' || matchInterestedIn === userGender)


        if(!matchId.equals(userId) && interestRequirement && distanceRequirement && ageRequirement) {
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
