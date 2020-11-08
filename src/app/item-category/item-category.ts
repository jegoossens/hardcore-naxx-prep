export interface ItemCategory {
  name: string,
  items: Item[]
}

export interface Item {
  itemName: string,
  link: string,
  amount: number,
  comment: string
}
