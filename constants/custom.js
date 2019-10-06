const attack = [
  { name: 'Lv.1', slot: 3, value: 5 },
  { name: 'Lv.2', slot: 5, value: 10 },
  { name: 'Lv.3', slot: 7, value: 15 }
]
const affinity = [
  { name: 'Lv.1', slot: 2, value: 10 },
  { name: 'Lv.2', slot: 4, value: 15 },
  { name: 'Lv.3', slot: 6, value: 20 }
]
const element = [
  { name: 'Lv.1', slot: 1, value: 30 },
  { name: 'Lv.2', slot: 3, value: 60 },
  { name: 'Lv.3', slot: 5, value: 90 },
  { name: 'Lv.4', slot: 7, value: 120 }
]

const customs = {
  10: {
    attack,
    affinity,
    element
  },
  11: {
    attack: attack.slice(0, 2),
    affinity: affinity.slice(0, 2),
    element: element.slice(0, 3)
  },
  12: {
    attack: attack.slice(0, 1),
    affinity: affinity.slice(0, 2),
    element: element.slice(0, 2)
  }
}

export default customs
