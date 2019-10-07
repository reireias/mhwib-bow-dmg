const skills = {
  // 攻撃
  attackBoost: [
    { name: 'Lv.1', value: 1, description: '+3' },
    { name: 'Lv.2', value: 2, description: '+6' },
    { name: 'Lv.3', value: 3, description: '+9' },
    { name: 'Lv.4', value: 4, description: '+12, +5%' },
    { name: 'Lv.5', value: 5, description: '+15, +5%' },
    { name: 'Lv.6', value: 6, description: '+18, +5%' },
    { name: 'Lv.7', value: 7, description: '+21, +5%' }
  ],
  // 見切り
  criticalEye: [
    { name: 'Lv.1', value: 1, description: '+5%' },
    { name: 'Lv.2', value: 2, description: '+10%' },
    { name: 'Lv.3', value: 3, description: '+15%' },
    { name: 'Lv.4', value: 4, description: '+20%' },
    { name: 'Lv.5', value: 5, description: '+25%' },
    { name: 'Lv.6', value: 6, description: '+30%' },
    { name: 'Lv.7', value: 7, description: '+40%' }
  ],
  // 弱点特攻
  weaknessExploit: [
    { name: 'Lv.1', value: 1, description: '+10%(傷5%)' },
    { name: 'Lv.2', value: 2, description: '+15%(傷15%)' },
    { name: 'Lv.3', value: 3, description: '+30%(傷20%)' }
  ],
  // 超会心
  criticalBoost: [
    { name: 'Lv.1', value: 1, description: '1.3倍' },
    { name: 'Lv.2', value: 2, description: '1.35倍' },
    { name: 'Lv.3', value: 3, description: '1.4倍' }
  ],
  // 挑戦者
  agitator: [
    { name: 'Lv.1', value: 1, description: '+4, +5%' },
    { name: 'Lv.2', value: 2, description: '+8, +5%' },
    { name: 'Lv.3', value: 3, description: '+12, +5%' },
    { name: 'Lv.4', value: 4, description: '+16, +5%' },
    { name: 'Lv.5', value: 5, description: '+20, +10%' },
    { name: 'Lv.6', value: 6, description: '+24, +15%' },
    { name: 'Lv.7', value: 7, description: '+28, +20%' }
  ],
  // フルチャージ
  peakPerformance: [
    { name: 'Lv.1', value: 1, description: '+5' },
    { name: 'Lv.2', value: 2, description: '+10' },
    { name: 'Lv.3', value: 3, description: '+20' }
  ],
  // 力の解放
  latentPower: [
    { name: 'Lv.1', value: 1, description: '+10%' },
    { name: 'Lv.2', value: 2, description: '+20%' },
    { name: 'Lv.3', value: 3, description: '+30%' },
    { name: 'Lv.4', value: 4, description: '+40%' },
    { name: 'Lv.5', value: 5, description: '+50%' },
    { name: 'Lv.6', value: 6, description: '+50%' },
    { name: 'Lv.7', value: 7, description: '+60%' }
  ],
  // 不屈
  fortify: [
    { name: '1死', value: 1, description: '1.1倍' },
    { name: '2死', value: 2, description: '1.2倍' }
  ],
  // 属性強化
  elementAttack: [
    { name: 'Lv.1', value: 1, description: '+30' },
    { name: 'Lv.2', value: 2, description: '+60' },
    { name: 'Lv.3', value: 3, description: '+100' },
    { name: 'Lv.4', value: 4, description: '1.05倍, +100' },
    { name: 'Lv.5', value: 5, description: '1.1倍, +100' },
    { name: 'Lv.6', value: 6, description: '1.2倍, +100' }
  ],
  // 属性解放
  freeElem: [
    { name: 'Lv.1', value: 1, description: '1/3' },
    { name: 'Lv.2', value: 2, description: '2/3' },
    { name: 'Lv.3', value: 3, description: '100%' }
  ],
  // 会心撃【属性】
  criticalElement: [
    { name: '会心撃【属性】', value: 1, description: '1.35倍' },
    { name: '真・会心撃【属性】', value: 2, description: '1.55倍' }
  ],
  // 属性加速
  elementBoost: [
    { name: '属性加速', value: 1, description: '+60' },
    { name: '真・属性加速', value: 2, description: '+150' }
  ]
}

export default skills
