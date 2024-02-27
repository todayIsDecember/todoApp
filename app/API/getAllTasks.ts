import { API } from "@/helpers/api"

export const getAllTasks = async() => {
  const res = await fetch(API.task.getAll, {
    headers: {'Content-Type': 'application/json'},
    next: {
      revalidate: 10
    }
  })
  return res.json()
}