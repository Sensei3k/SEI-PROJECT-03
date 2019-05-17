const User = require('../models/User')

function calcDistance(user, match) {
  //haversine formula for distance between two lat, long coordinate pairs

  const R = 6371e3 // earths radius in metres
  const radConst = (Math.PI/180)
  const φ1 = user.latitude*radConst
  const φ2 = match.latitude*radConst
  const Δφ = (match.latitude-user.latitude)*radConst
  const Δλ = (match.longitude-user.longitude)*radConst

  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ/2) * Math.sin(Δλ/2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))

  const distance = R * c / 1000 //d is in km

  return distance

}

function matchRoute(req, res, next) {
  //get all the users from the database
  User.find()
    .then((users) => {
      //change the ID from the url to a string
      //const userId = JSON.stringify(req.params.id)
      const userId = req.params.id
      //initialize variables to store the users matching details
      //let userLocation = ''
      let userGender = ''
      let userInterestedIn = ''
      let userInterests = ''
      let userRadius = ''
      let userCoordinates = []

      //filter out the users that have not entered interests yet
      users = users.filter((user) => {
        if(user.interests) return user
      })

      //find the location, gender of interest, and interests of the user searching for a match
      users.forEach((user) => {

        if(user._id.equals(req.params.id)) {
          //userLocation = user.location
          userGender = user.gender
          userInterestedIn = user.interestedIn
          //create an array of user interests
          userInterests = user.interests.split(', ')
          userCoordinates = user.coordinates
          userRadius = parseInt(user.radius)
        }

      })


      //initialize an array in which to store your matches
      const arrayOfMatches = []

      //loop through all users to find which ones match, and exclude yourself
      users.forEach((match) => {
        //const matchLocation = match.location
        const matchGender = match.gender
        const matchInterestedIn = match.interestedIn
        const matchId = match._id
        const matchInterests = match.interests.split(', ')
        const matchRadius = parseInt(match.radius)
        const similarInterests = []
        //let distanceApart = ''

        //count the number of similar interests
        matchInterests.forEach((interest) => {
          if(userInterests.includes(interest)) {
            similarInterests.push(interest)
          }
        })

        //calculate the distance between the user and the potential match
        const distanceApart = calcDistance(userCoordinates, match.coordinates)
        //console.log(distanceApart)


        // if the user and potential match pass the conditions below they are a match
        if(!matchId.equals(userId) && (userInterestedIn === 'Both' || userInterestedIn === matchGender) && (matchInterestedIn === 'Both' || matchInterestedIn === userGender) && similarInterests.length > 2 && distanceApart < userRadius && distanceApart < matchRadius) {
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
