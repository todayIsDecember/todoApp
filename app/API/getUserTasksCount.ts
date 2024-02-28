import { API } from "@/helpers/api"

export const getUserTasksCount = async(token: string ) => {
  const res = await fetch(API.users.getCount, {
    headers: {'Content-Type': 'application/json', 'Authorization': `bearer ${token}`}
  })
  return res.json()
}