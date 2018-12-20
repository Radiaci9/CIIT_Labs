import axios from "axios"
import C from "../constants"

export const fetchUser = data => ({type: C.FETCH_USER, payload: data})
export const fetchUserFollowers = data => ({type: C.FETCH_USER_FOLLOWERS, payload: data})
export const fetchUserRepositories = data => ({type: C.FETCH_USER_REPOSITORIES, payload: data})
export const fetchUserOrgs = data => ({type: C.FETCH_USER_ORGS, payload: data})
export const fetchUserFailed = () => ({type: C.FETCH_USER_FAILED})

export const getUser = user => dispatch => (
  axios.get(`https://api.github.com/users/${user}`)
        .then(response =>
            dispatch(fetchUser(response.data))
        )
        .catch(err => {
          console.log(err)
          dispatch(fetchUserFailed())
        })
)

export const getUserFollowers = user => dispatch => (
  axios.get(`https://api.github.com/users/${user}/followers`)
        .then(response =>
            dispatch(fetchUserFollowers(response.data))
        )
        .catch(err => {
          console.log(err)
          dispatch(fetchUserFailed())
        })
)

export const getUserRepositories = user => dispatch => (
  axios.get(`https://api.github.com/users/${user}/repos`)
        .then(response =>
            dispatch(fetchUserRepositories(response.data))
        )
        .catch(err => {
          console.log(err)
          dispatch(fetchUserFailed())
        })
)

export const getUserOrgs = user => dispatch => (
  axios.get(`https://api.github.com/users/${user}/orgs`)
        .then(response =>
            dispatch(fetchUserOrgs(response.data))
        )
        .catch(err => {
          console.log(err)
          dispatch(fetchUserFailed())
        })
)
