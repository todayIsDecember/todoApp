import { API } from "@/helpers/api"

export const getUserInfo = async(token: string ) => {
  const res = await fetch(API.users.getUserInfo, {
    headers: {'Content-Type': 'application/json', 'Authorization': `bearer ${token}`}
  })
  return res.json()
}