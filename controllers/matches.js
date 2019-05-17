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
      //initialize variables to store the users matching details
      const {
        _id: userId,
        gender: userGender,
        interestedIn: userInterestedIn,
        radius: userRadius,
        coordinates: userCoordinates,
        age: userAge,
        minAge: userMinAge,
        maxAge: userMaxAge
      } = req.currentUser

      //loop through all users to find which ones match, and exclude yourself
      const arrayOfMatches = users.filter((match) => {
        const {
          _id: matchId,
          gender: matchGender,
          interestedIn: matchInterestedIn,
          radius: matchRadius,
          coordinates: matchCoordinates,
          age: matchAge,
          minAge: matchMinAge,
          maxAge: matchMaxAge
        } = match

        //calc the distance between the user and the potential match and check...
        //that they meet eachothers radius requirements
        const distanceApart = calcDistance(userCoordinates, matchCoordinates)
        const distanceRequirement = distanceApart < userRadius && distanceApart < matchRadius
        console.log(userCoordinates, 'user coordinates', matchCoordinates, 'match coordinates')
        console.log(distanceRequirement, 'distance req')

        //check if the potential match meets users age requirements and vice versa
        const ageRequirement = matchAge < userMaxAge && matchAge > userMinAge && userAge < matchMaxAge && userAge > matchMinAge
        console.log(ageRequirement, 'age req')
        console.log(userAge, 'user age', matchAge, 'match age')
        console.log(userMinAge, 'user min age', userMaxAge, 'user max age', matchMinAge, 'match min age', matchMaxAge, 'match max age')

        //check if the potential match meets gender preference requirements and vice versa
        const interestRequirement = (userInterestedIn === 'Both' || userInterestedIn === matchGender) && (matchInterestedIn === 'Both' || matchInterestedIn === userGender)
        console.log(interestRequirement, 'interest req')


        return (!matchId.equals(userId) && interestRequirement && distanceRequirement && ageRequirement)

      })
      //return the arrayOfMatches as JSON
      return res.json(arrayOfMatches)
    })
    .catch(next) //catch any errors
}

module.exports = {
  match: matchRoute
}
