import type { MenuType } from './Enums'

export interface MealItem {
  name: {
    en: string
    vi: string
  }
  subInfo: string
  description: string
  price: string
}
export interface DrinkItem {
  name: string
  description: string
  price: {
    glass: string
    carafe: string
    bottle: string
  }
}
export interface SubMenu {
  name: string
  price: string
  type: MenuType
  items: Array<MealItem | DrinkItem>
}
export interface MenuMeal {
  type: MenuType
  items: SubMenu[]
}
export interface Menu {
  name: string
  type: MenuType
  items: MenuMeal[]
}
