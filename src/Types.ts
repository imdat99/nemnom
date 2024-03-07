import type { MenuType } from './Enums'

export interface MealItem {
    name: {
        en: string
        vi: string
    }
    subInfo: string
    options: ItemOption[]
    description: string
    price: string
}
export interface ItemOption {
    name: string
    price: string
}
export interface DrinkItem {
    name: {
        en: string
        vi: string
    }
    subInfo: string
    options: ItemOption[]
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
    description: string
}
export interface MenuMeal {
    type: MenuType
    items: SubMenu[]
    name: string
    subInfo: string
    price: string
}
export interface Menu {
    name: string
    type: MenuType
    items: MenuMeal[]
}
