export interface Recipe {
  name?: string,
  id?: number,
  usecase?: string,
  taste_type?: {
    sweet: number,
    sour: number,
    salty: number,
    bitter: number,
    umami: number
  }
}

export interface User {
  name: string,
  password: string,
  email: string,
  post_recipe_ids: Array<number>
  favorite_recipe_ids: Array<number>
}

export interface Props {
  user: User,
  recipes: Array<Recipe>,
  isLogin: boolean
}
