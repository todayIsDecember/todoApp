import { ILikes } from "./like.interface"

export interface ITask {
	"task_id": number
	"title": string
	"user_id": number
	"created": string
	"category": string
	"private": boolean
	"status": boolean
	"users": {
		"user_name": string
		"avatar": string
	}
	likes: ILikes[]
}