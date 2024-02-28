import { API } from "@/helpers/api"

export const getUserLikes = async(token: string) => {
  const res = await fetch(API.likes.getUsersLike, {
    headers: {'Content-Type': 'application/json', "Authorization": `bearer ${token}`},
    next: {
      revalidate: 1
    }
  })
  return res.json()
}