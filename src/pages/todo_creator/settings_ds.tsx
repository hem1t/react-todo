

export let colors = {
  "lavender": "#7986CB",
  "sage": "#33B679",
  "grape": "#8E24AA",
  "flamingo": "#E67C73",
  "banana": "#F6BF26",
  "tangerine": "#F4511E",
  "peacock": "#039BE5",
  "graphite": "#616161",
  "blueberry": "#3F51B5",
  "basil": "#0B8043",
  "tomato": "#D50000",
  "cocoa": "#795548",
  "pumpkin": "#EF6C00"
}

export let questions = [
  "What's up?",
  "Anything specific?",
  "What featuring?",
  "Speak your, Mind",
  "Make something!",
  "Get toilet paper",
  "Go shopping",
  "Make Coffee",
  "Find Recipe",
  "Art Time"
]

export enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday  
}

export interface MonthDate {
  date: number
}

export interface Repeat {
  type: {
    name: 'weekly',
    day: Day[]
  } | {
    name: 'monthly',
    date: MonthDate[]
  } | {
    name: 'yearly',
    date: Date[]
  } | {
    name: 'never'
  }, 
}