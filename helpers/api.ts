export const API = {
  auth: {
    login: `${process.env.NEXT_PUBLIC_DOMAIN}/api/auth/login`,
    register: `${process.env.NEXT_PUBLIC_DOMAIN}/api/auth/register`
  },
  task: {
    getAll: `${process.env.NEXT_PUBLIC_DOMAIN}/api/task/getAll`,
    create: `${process.env.NEXT_PUBLIC_DOMAIN}/api/task/create`,
    changePrivate: `${process.env.NEXT_PUBLIC_DOMAIN}/api/task/changePrivate`,
    changeStatus: `${process.env.NEXT_PUBLIC_DOMAIN}/api/task/changeStatus`
  },
  files: {
    uploadImage: `${process.env.NEXT_PUBLIC_DOMAIN}/api/files/upload`,
    getImage: `${process.env.NEXT_PUBLIC_DOMAIN}/`,
  },
  users: {
    getUserInfo: `${process.env.NEXT_PUBLIC_DOMAIN}/api/users/getInfo`,
    getCount: `${process.env.NEXT_PUBLIC_DOMAIN}/api/users/count`
  },
  likes: {
    addLike: `${process.env.NEXT_PUBLIC_DOMAIN}/api/likes/add`,
    getUsersLike: `${process.env.NEXT_PUBLIC_DOMAIN}/api/likes`
  }
}