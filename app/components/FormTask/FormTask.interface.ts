export enum category {
  Sport = 'Sport',
  Study = 'Study',
  Habbits = 'Habbits'
}

export interface IFormTask {
  "title": string,
  "private": boolean,
  "category":category
}