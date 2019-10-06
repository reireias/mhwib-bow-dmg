const bows = [
  {
    name: '万雷弓【羽々矢】',
    attack: 264,
    affinity: 15,
    element: {
      type: 'thunder',
      value: 330
    },
    coating: {
      crossRange: true,
      power: true
    },
    rare: 10,
    parts: true
  },
  {
    name: 'ミスト＝グレイシア',
    attack: 276,
    affinity: 0,
    element: {
      type: 'ice',
      value: 450
    },
    coating: {
      crossRange: true,
      power: true
    },
    rare: 11,
    parts: false
  },
  {
    name: '龍封じの古弓Ⅱ',
    attack: 264,
    affinity: 0,
    element: {
      type: 'dragon',
      value: 480
    },
    coating: {
      crossRange: true,
      power: false
    },
    rare: 12,
    parts: true
  }
]

export const coatings = [
  { name: '強撃ビン', value: 1.35 },
  { name: '接撃ビン', value: 1.2 }
]

export default bows
