export let colors = {
  lavender: "#7986CB",
  sage: "#33B679",
  grape: "#8E24AA",
  flamingo: "#E67C73",
  banana: "#F6BF26",
  tangerine: "#F4511E",
  peacock: "#039BE5",
  graphite: "#616161",
  blueberry: "#3F51B5",
  basil: "#0B8043",
  tomato: "#D50000",
  cocoa: "#795548",
  pumpkin: "#EF6C00",
};

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
  "Art Time",
];

export enum Day {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}

export interface Repeat {
  type: "never" | "weekly" | "monthly" | "yearly";
  data: any;
}
