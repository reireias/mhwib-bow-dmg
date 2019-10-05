const monsters = [
  {
    name: 'アンジャナフ',
    parts: [
      {
        name: '鼻',
        cut: 80,
        blunt: 75,
        ammo: 90,
        fire: 0,
        water: 30,
        thunder: 15,
        ice: 20,
        dragon: 10
      },
      {
        name: '頭',
        cut: 70,
        blunt: 70,
        ammo: 65,
        fire: 0,
        water: 25,
        thunder: 10,
        ice: 15,
        dragon: 5
      },
      {
        name: '首',
        cut: 30,
        blunt: 30,
        ammo: 10,
        fire: 0,
        water: 20,
        thunder: 5,
        ice: 15,
        dragon: 5
      },
      {
        name: '翼',
        cut: 80,
        blunt: 45,
        ammo: 90,
        fire: 0,
        water: 30,
        thunder: 15,
        ice: 20,
        dragon: 10
      },
      {
        name: '胴',
        cut: 30,
        blunt: 30,
        ammo: 45,
        fire: 0,
        water: 15,
        thunder: 5,
        ice: 10,
        dragon: 0
      },
      {
        name: '脚',
        cut: 30,
        blunt: 30,
        ammo: 10,
        fire: 0,
        water: 15,
        thunder: 5,
        ice: 10,
        dragon: 0
      },
      {
        name: '脚(破壊後)',
        cut: 45,
        blunt: 45,
        ammo: 50,
        fire: 0,
        water: 15,
        thunder: 5,
        ice: 10,
        dragon: 0
      },
      {
        name: '尻尾',
        cut: 60,
        blunt: 60,
        ammo: 75,
        fire: 0,
        water: 20,
        thunder: 10,
        ice: 15,
        dragon: 5
      }
    ]
  },
  {
    name: 'イビルジョー',
    parts: [
      {
        name: '頭',
        cut: 60,
        blunt: 70,
        ammo: 60,
        fire: 10,
        water: 10,
        thunder: 15,
        ice: 5,
        dragon: 15
      },
      {
        name: '頭(怒り)',
        cut: 45,
        blunt: 50,
        ammo: 45,
        fire: 15,
        water: 15,
        thunder: 20,
        ice: 10,
        dragon: 20
      },
      {
        name: '首・背',
        cut: 25,
        blunt: 25,
        ammo: 25,
        fire: 5,
        water: 5,
        thunder: 20,
        ice: 5,
        dragon: 20
      },
      {
        name: '首・背(怒り)',
        cut: 22,
        blunt: 22,
        ammo: 20,
        fire: 10,
        water: 10,
        thunder: 25,
        ice: 10,
        dragon: 25
      },
      {
        name: '胸',
        cut: 37,
        blunt: 37,
        ammo: 35,
        fire: 15,
        water: 15,
        thunder: 20,
        ice: 10,
        dragon: 20
      },
      {
        name: '胸(怒り)',
        cut: 75,
        blunt: 75,
        ammo: 70,
        fire: 20,
        water: 20,
        thunder: 25,
        ice: 15,
        dragon: 25
      },
      {
        name: '腰',
        cut: 30,
        blunt: 30,
        ammo: 30,
        fire: 5,
        water: 5,
        thunder: 20,
        ice: 5,
        dragon: 20
      },
      {
        name: '腰(怒り)',
        cut: 25,
        blunt: 25,
        ammo: 25,
        fire: 10,
        water: 10,
        thunder: 25,
        ice: 10,
        dragon: 25
      },
      {
        name: '前脚',
        cut: 30,
        blunt: 30,
        ammo: 30,
        fire: 10,
        water: 10,
        thunder: 15,
        ice: 5,
        dragon: 15
      },
      {
        name: '前脚(怒り)',
        cut: 25,
        blunt: 25,
        ammo: 25,
        fire: 15,
        water: 15,
        thunder: 20,
        ice: 10,
        dragon: 20
      },
      {
        name: '後脚',
        cut: 45,
        blunt: 38,
        ammo: 35,
        fire: 5,
        water: 5,
        thunder: 10,
        ice: 5,
        dragon: 10
      },
      {
        name: '後脚(怒り)',
        cut: 24,
        blunt: 25,
        ammo: 25,
        fire: 10,
        water: 10,
        thunder: 15,
        ice: 10,
        dragon: 15
      },
      {
        name: '尻尾',
        cut: 40,
        blunt: 35,
        ammo: 25,
        fire: 5,
        water: 5,
        thunder: 20,
        ice: 5,
        dragon: 20
      },
      {
        name: '尻尾(怒り)',
        cut: 25,
        blunt: 24,
        ammo: 20,
        fire: 10,
        water: 10,
        thunder: 25,
        ice: 10,
        dragon: 25
      }
    ]
  },
  {
    name: 'イャンガルルガ',
    parts: [
      {
        name: '頭',
        cut: 65,
        blunt: 60,
        ammo: 50,
        fire: 0,
        water: 20,
        thunder: 0,
        ice: 10,
        dragon: 5
      },
      {
        name: '首',
        cut: 42,
        blunt: 42,
        ammo: 25,
        fire: 0,
        water: 15,
        thunder: 0,
        ice: 10,
        dragon: 5
      },
      {
        name: '腹',
        cut: 29,
        blunt: 25,
        ammo: 35,
        fire: 15,
        water: 20,
        thunder: 10,
        ice: 15,
        dragon: 10
      },
      {
        name: '背',
        cut: 15,
        blunt: 15,
        ammo: 10,
        fire: 5,
        water: 50,
        thunder: 10,
        ice: 20,
        dragon: 30
      },
      {
        name: '翼',
        cut: 32,
        blunt: 45,
        ammo: 20,
        fire: 0,
        water: 15,
        thunder: 0,
        ice: 10,
        dragon: 5
      },
      {
        name: '脚',
        cut: 32,
        blunt: 32,
        ammo: 10,
        fire: 0,
        water: 10,
        thunder: 5,
        ice: 10,
        dragon: 5
      },
      {
        name: '尾下',
        cut: 50,
        blunt: 30,
        ammo: 15,
        fire: 5,
        water: 15,
        thunder: 0,
        ice: 10,
        dragon: 5
      }
    ]
  },
  {
    name: 'ヴァルハザク',
    parts: [
      {
        name: '頭',
        cut: 50,
        blunt: 40,
        ammo: 50,
        fire: 25,
        water: 5,
        thunder: 10,
        ice: 15,
        dragon: 0
      },
      {
        name: '頭(破壊後)',
        cut: 70,
        blunt: 80,
        ammo: 60,
        fire: 25,
        water: 5,
        thunder: 10,
        ice: 15,
        dragon: 25
      },
      {
        name: '首',
        cut: 45,
        blunt: 40,
        ammo: 30,
        fire: 15,
        water: 5,
        thunder: 10,
        ice: 10,
        dragon: 15
      },
      {
        name: '胸',
        cut: 50,
        blunt: 45,
        ammo: 45,
        fire: 15,
        water: 5,
        thunder: 10,
        ice: 15,
        dragon: 15
      },
      {
        name: '腹',
        cut: 50,
        blunt: 40,
        ammo: 45,
        fire: 20,
        water: 5,
        thunder: 10,
        ice: 15,
        dragon: 0
      },
      {
        name: '腹(破壊後)',
        cut: 60,
        blunt: 70,
        ammo: 40,
        fire: 25,
        water: 5,
        thunder: 10,
        ice: 15,
        dragon: 25
      },
      {
        name: '翼',
        cut: 24,
        blunt: 23,
        ammo: 30,
        fire: 15,
        water: 5,
        thunder: 10,
        ice: 10,
        dragon: 15
      },
      {
        name: '背中',
        cut: 45,
        blunt: 35,
        ammo: 35,
        fire: 20,
        water: 5,
        thunder: 10,
        ice: 15,
        dragon: 0
      },
      {
        name: '背中(破壊後)',
        cut: 55,
        blunt: 65,
        ammo: 40,
        fire: 25,
        water: 5,
        thunder: 10,
        ice: 15,
        dragon: 25
      },
      {
        name: '前脚',
        cut: 45,
        blunt: 40,
        ammo: 35,
        fire: 20,
        water: 0,
        thunder: 5,
        ice: 10,
        dragon: 5
      },
      {
        name: '前脚(破壊後)',
        cut: 55,
        blunt: 50,
        ammo: 45,
        fire: 20,
        water: 0,
        thunder: 5,
        ice: 10,
        dragon: 20
      },
      {
        name: '後脚',
        cut: 25,
        blunt: 25,
        ammo: 20,
        fire: 5,
        water: 0,
        thunder: 0,
        ice: 0,
        dragon: 5
      },
      {
        name: '尻尾',
        cut: 35,
        blunt: 30,
        ammo: 30,
        fire: 20,
        water: 5,
        thunder: 10,
        ice: 15,
        dragon: 0
      },
      {
        name: '尾先',
        cut: 60,
        blunt: 30,
        ammo: 50,
        fire: 20,
        water: 5,
        thunder: 10,
        ice: 15,
        dragon: 0
      }
    ]
  },
  {
    name: 'ヴォルガノス',
    parts: [
      {
        name: '頭',
        cut: 15,
        blunt: 20,
        ammo: 15,
        fire: 50,
        water: 15,
        thunder: 0,
        ice: 0,
        dragon: 5
      },
      {
        name: '頭(破壊後)',
        cut: 35,
        blunt: 40,
        ammo: 35,
        fire: 5,
        water: 35,
        thunder: 15,
        ice: 15,
        dragon: 5
      },
      {
        name: '首',
        cut: 15,
        blunt: 15,
        ammo: 15,
        fire: 10,
        water: 10,
        thunder: 0,
        ice: 0,
        dragon: 5
      },
      {
        name: '胴',
        cut: 35,
        blunt: 35,
        ammo: 35,
        fire: 10,
        water: 10,
        thunder: 0,
        ice: 0,
        dragon: 5
      },
      {
        name: '背中',
        cut: 20,
        blunt: 20,
        ammo: 20,
        fire: 10,
        water: 15,
        thunder: 0,
        ice: 0,
        dragon: 5
      },
      {
        name: '背中(破壊後)',
        cut: 35,
        blunt: 35,
        ammo: 35,
        fire: 5,
        water: 30,
        thunder: 20,
        ice: 20,
        dragon: 5
      },
      {
        name: 'ヒレ',
        cut: 30,
        blunt: 30,
        ammo: 30,
        fire: 10,
        water: 10,
        thunder: 0,
        ice: 0,
        dragon: 5
      },
      {
        name: '脚',
        cut: 15,
        blunt: 15,
        ammo: 15,
        fire: 10,
        water: 5,
        thunder: 0,
        ice: 0,
        dragon: 5
      },
      {
        name: '脚(破壊後)',
        cut: 30,
        blunt: 30,
        ammo: 30,
        fire: 5,
        water: 25,
        thunder: 5,
        ice: 5,
        dragon: 5
      },
      {
        name: '尻尾',
        cut: 20,
        blunt: 15,
        ammo: 20,
        fire: 10,
        water: 10,
        thunder: 0,
        ice: 0,
        dragon: 5
      },
      {
        name: '尻尾(破壊後)',
        cut: 35,
        blunt: 30,
        ammo: 35,
        fire: 5,
        water: 30,
        thunder: 15,
        ice: 15,
        dragon: 5
      }
    ]
  },
  {
    name: 'ウラガンキン',
    parts: [
      {
        name: '頭',
        cut: 70,
        blunt: 80,
        ammo: 50,
        fire: 0,
        water: 20,
        thunder: 15,
        ice: 15,
        dragon: 20
      },
      {
        name: '顎',
        cut: 19,
        blunt: 20,
        ammo: 10,
        fire: 0,
        water: 40,
        thunder: 5,
        ice: 20,
        dragon: 30
      },
      {
        name: '顎(破壊後)',
        cut: 55,
        blunt: 60,
        ammo: 40,
        fire: 0,
        water: 20,
        thunder: 5,
        ice: 15,
        dragon: 20
      },
      {
        name: '首上・背',
        cut: 22,
        blunt: 24,
        ammo: 10,
        fire: 0,
        water: 15,
        thunder: 0,
        ice: 10,
        dragon: 15
      },
      {
        name: '首下',
        cut: 25,
        blunt: 30,
        ammo: 25,
        fire: 0,
        water: 20,
        thunder: 0,
        ice: 10,
        dragon: 15
      },
      {
        name: '腹',
        cut: 50,
        blunt: 45,
        ammo: 45,
        fire: 0,
        water: 30,
        thunder: 5,
        ice: 15,
        dragon: 30
      },
      {
        name: '前脚',
        cut: 25,
        blunt: 30,
        ammo: 20,
        fire: 0,
        water: 15,
        thunder: 0,
        ice: 10,
        dragon: 15
      },
      {
        name: '後脚',
        cut: 45,
        blunt: 40,
        ammo: 20,
        fire: 0,
        water: 15,
        thunder: 0,
        ice: 10,
        dragon: 15
      },
      {
        name: '尻尾',
        cut: 25,
        blunt: 25,
        ammo: 15,
        fire: 0,
        water: 15,
        thunder: 0,
        ice: 10,
        dragon: 15
      }
    ]
  },
  {
    name: 'オドガロン',
    parts: [
      {
        name: '頭',
        cut: 70,
        blunt: 75,
        ammo: 65,
        fire: 10,
        water: 15,
        thunder: 20,
        ice: 30,
        dragon: 0
      },
      {
        name: '首',
        cut: 40,
        blunt: 45,
        ammo: 35,
        fire: 0,
        water: 5,
        thunder: 10,
        ice: 20,
        dragon: 0
      },
      {
        name: '胴・背',
        cut: 30,
        blunt: 30,
        ammo: 25,
        fire: 0,
        water: 0,
        thunder: 5,
        ice: 15,
        dragon: 0
      },
      {
        name: '前脚',
        cut: 55,
        blunt: 50,
        ammo: 45,
        fire: 5,
        water: 10,
        thunder: 15,
        ice: 25,
        dragon: 0
      },
      {
        name: '後脚',
        cut: 45,
        blunt: 40,
        ammo: 35,
        fire: 5,
        water: 10,
        thunder: 15,
        ice: 25,
        dragon: 0
      },
      {
        name: '尻尾',
        cut: 45,
        blunt: 40,
        ammo: 35,
        fire: 5,
        water: 5,
        thunder: 10,
        ice: 20,
        dragon: 0
      }
    ]
  },
  {
    name: 'キリン',
    parts: [
      {
        name: '頭',
        cut: 55,
        blunt: 55,
        ammo: 45,
        fire: 25,
        water: 20,
        thunder: 0,
        ice: 20,
        dragon: 5
      },
      {
        name: '上半身',
        cut: 31,
        blunt: 31,
        ammo: 22,
        fire: 20,
        water: 15,
        thunder: 0,
        ice: 15,
        dragon: 5
      },
      {
        name: '上半身(帯電)',
        cut: 20,
        blunt: 20,
        ammo: 10,
        fire: 15,
        water: 10,
        thunder: 0,
        ice: 10,
        dragon: 5
      },
      {
        name: '下半身',
        cut: 29,
        blunt: 29,
        ammo: 20,
        fire: 20,
        water: 15,
        thunder: 0,
        ice: 15,
        dragon: 5
      },
      {
        name: '下半身(帯電)',
        cut: 20,
        blunt: 20,
        ammo: 10,
        fire: 15,
        water: 10,
        thunder: 0,
        ice: 10,
        dragon: 5
      }
    ]
  },
  {
    name: 'クシャルダオラ',
    parts: [
      {
        name: '頭',
        cut: 55,
        blunt: 50,
        ammo: 45,
        fire: 10,
        water: 5,
        thunder: 20,
        ice: 0,
        dragon: 10
      },
      {
        name: '首',
        cut: 40,
        blunt: 35,
        ammo: 25,
        fire: 10,
        water: 5,
        thunder: 15,
        ice: 0,
        dragon: 5
      },
      {
        name: '翼',
        cut: 20,
        blunt: 15,
        ammo: 20,
        fire: 10,
        water: 5,
        thunder: 20,
        ice: 0,
        dragon: 15
      },
      {
        name: '背中',
        cut: 20,
        blunt: 25,
        ammo: 30,
        fire: 10,
        water: 5,
        thunder: 15,
        ice: 0,
        dragon: 10
      },
      {
        name: '腹',
        cut: 35,
        blunt: 50,
        ammo: 25,
        fire: 10,
        water: 5,
        thunder: 15,
        ice: 0,
        dragon: 10
      },
      {
        name: '前脚',
        cut: 45,
        blunt: 50,
        ammo: 30,
        fire: 10,
        water: 5,
        thunder: 20,
        ice: 0,
        dragon: 10
      },
      {
        name: '後脚',
        cut: 30,
        blunt: 30,
        ammo: 25,
        fire: 10,
        water: 5,
        thunder: 15,
        ice: 0,
        dragon: 5
      },
      {
        name: '尻尾',
        cut: 35,
        blunt: 30,
        ammo: 55,
        fire: 10,
        water: 5,
        thunder: 20,
        ice: 0,
        dragon: 15
      }
    ]
  },
  {
    name: 'クルルヤック',
    parts: [
      {
        name: '頭',
        cut: 85,
        blunt: 85,
        ammo: 75,
        fire: 15,
        water: 20,
        thunder: 15,
        ice: 15,
        dragon: 15
      },
      {
        name: '前脚',
        cut: 65,
        blunt: 70,
        ammo: 55,
        fire: 15,
        water: 20,
        thunder: 15,
        ice: 15,
        dragon: 15
      },
      {
        name: '胴',
        cut: 45,
        blunt: 45,
        ammo: 40,
        fire: 15,
        water: 20,
        thunder: 15,
        ice: 15,
        dragon: 15
      },
      {
        name: '尻尾',
        cut: 55,
        blunt: 50,
        ammo: 35,
        fire: 15,
        water: 20,
        thunder: 15,
        ice: 15,
        dragon: 15
      }
    ]
  },
  {
    name: 'ジュラトドス',
    parts: [
      {
        name: '頭',
        cut: 63,
        blunt: 63,
        ammo: 63,
        fire: 5,
        water: 0,
        thunder: 10,
        ice: 5,
        dragon: 5
      },
      {
        name: '頭(破壊後)',
        cut: 50,
        blunt: 50,
        ammo: 40,
        fire: 0,
        water: 25,
        thunder: 0,
        ice: 5,
        dragon: 5
      },
      {
        name: '首',
        cut: 43,
        blunt: 43,
        ammo: 43,
        fire: 5,
        water: 0,
        thunder: 10,
        ice: 5,
        dragon: 5
      },
      {
        name: '胴',
        cut: 35,
        blunt: 35,
        ammo: 35,
        fire: 10,
        water: 0,
        thunder: 25,
        ice: 5,
        dragon: 5
      },
      {
        name: '胴(破壊後)',
        cut: 30,
        blunt: 30,
        ammo: 25,
        fire: 0,
        water: 25,
        thunder: 0,
        ice: 5,
        dragon: 5
      },
      {
        name: '背中',
        cut: 25,
        blunt: 25,
        ammo: 25,
        fire: 5,
        water: 0,
        thunder: 15,
        ice: 5,
        dragon: 5
      },
      {
        name: 'ヒレ',
        cut: 25,
        blunt: 25,
        ammo: 25,
        fire: 10,
        water: 0,
        thunder: 20,
        ice: 5,
        dragon: 5
      },
      {
        name: '脚',
        cut: 30,
        blunt: 30,
        ammo: 25,
        fire: 15,
        water: 0,
        thunder: 30,
        ice: 5,
        dragon: 5
      },
      {
        name: '脚(破壊後)',
        cut: 35,
        blunt: 35,
        ammo: 30,
        fire: 0,
        water: 25,
        thunder: 0,
        ice: 5,
        dragon: 5
      },
      {
        name: '尻尾',
        cut: 55,
        blunt: 50,
        ammo: 45,
        fire: 5,
        water: 0,
        thunder: 10,
        ice: 5,
        dragon: 5
      },
      {
        name: '尻尾(破壊後)',
        cut: 50,
        blunt: 50,
        ammo: 40,
        fire: 0,
        water: 25,
        thunder: 0,
        ice: 5,
        dragon: 5
      }
    ]
  },
  {
    name: 'ジンオウガ',
    parts: [
      {
        name: '頭',
        cut: 65,
        blunt: 65,
        ammo: 70,
        fire: 10,
        water: 10,
        thunder: 0,
        ice: 15,
        dragon: 5
      },
      {
        name: '頭(破壊後)',
        cut: 65,
        blunt: 65,
        ammo: 70,
        fire: 10,
        water: 10,
        thunder: 0,
        ice: 15,
        dragon: 10
      },
      {
        name: '胴',
        cut: 25,
        blunt: 25,
        ammo: 30,
        fire: 5,
        water: 5,
        thunder: 0,
        ice: 5,
        dragon: 5
      },
      {
        name: '胴(破壊後)',
        cut: 30,
        blunt: 30,
        ammo: 35,
        fire: 5,
        water: 10,
        thunder: 0,
        ice: 10,
        dragon: 5
      },
      {
        name: '背',
        cut: 45,
        blunt: 40,
        ammo: 35,
        fire: 10,
        water: 20,
        thunder: 0,
        ice: 25,
        dragon: 5
      },
      {
        name: '背(破壊後)',
        cut: 70,
        blunt: 65,
        ammo: 55,
        fire: 15,
        water: 25,
        thunder: 0,
        ice: 30,
        dragon: 5
      },
      {
        name: '前脚',
        cut: 25,
        blunt: 30,
        ammo: 30,
        fire: 5,
        water: 5,
        thunder: 0,
        ice: 10,
        dragon: 5
      },
      {
        name: '前脚(破壊後)',
        cut: 43,
        blunt: 46,
        ammo: 30,
        fire: 5,
        water: 5,
        thunder: 0,
        ice: 15,
        dragon: 5
      },
      {
        name: '後脚',
        cut: 45,
        blunt: 45,
        ammo: 35,
        fire: 5,
        water: 5,
        thunder: 0,
        ice: 10,
        dragon: 5
      },
      {
        name: '後脚(破壊後)',
        cut: 50,
        blunt: 50,
        ammo: 40,
        fire: 10,
        water: 10,
        thunder: 0,
        ice: 15,
        dragon: 5
      },
      {
        name: '脚根元',
        cut: 44,
        blunt: 44,
        ammo: 30,
        fire: 5,
        water: 5,
        thunder: 0,
        ice: 10,
        dragon: 5
      },
      {
        name: '脚根元(破壊後)',
        cut: 45,
        blunt: 45,
        ammo: 35,
        fire: 10,
        water: 10,
        thunder: 0,
        ice: 15,
        dragon: 5
      },
      {
        name: '尻尾',
        cut: 30,
        blunt: 25,
        ammo: 25,
        fire: 5,
        water: 5,
        thunder: 0,
        ice: 5,
        dragon: 5
      },
      {
        name: '尻尾(破壊後)',
        cut: 30,
        blunt: 25,
        ammo: 25,
        fire: 5,
        water: 10,
        thunder: 0,
        ice: 5,
        dragon: 5
      },
      {
        name: '尾先',
        cut: 21,
        blunt: 19,
        ammo: 10,
        fire: 10,
        water: 15,
        thunder: 0,
        ice: 20,
        dragon: 5
      }
    ]
  },
  {
    name: 'ゼノ・ジーヴァ',
    parts: [
      {
        name: '頭',
        cut: 70,
        blunt: 70,
        ammo: 55,
        fire: 20,
        water: 10,
        thunder: 10,
        ice: 10,
        dragon: 20
      },
      {
        name: '頭(破壊後)',
        cut: 80,
        blunt: 100,
        ammo: 60,
        fire: 15,
        water: 30,
        thunder: 30,
        ice: 30,
        dragon: 15
      },
      {
        name: '首',
        cut: 30,
        blunt: 30,
        ammo: 25,
        fire: 15,
        water: 10,
        thunder: 10,
        ice: 10,
        dragon: 15
      },
      {
        name: '首(破壊後)',
        cut: 50,
        blunt: 50,
        ammo: 30,
        fire: 15,
        water: 30,
        thunder: 30,
        ice: 30,
        dragon: 15
      },
      {
        name: '翼',
        cut: 50,
        blunt: 50,
        ammo: 30,
        fire: 15,
        water: 10,
        thunder: 10,
        ice: 10,
        dragon: 15
      },
      {
        name: '翼(破壊後)',
        cut: 100,
        blunt: 80,
        ammo: 50,
        fire: 15,
        water: 30,
        thunder: 30,
        ice: 30,
        dragon: 15
      },
      {
        name: '胸',
        cut: 60,
        blunt: 60,
        ammo: 30,
        fire: 20,
        water: 10,
        thunder: 10,
        ice: 10,
        dragon: 20
      },
      {
        name: '胸(破壊後)',
        cut: 100,
        blunt: 80,
        ammo: 70,
        fire: 15,
        water: 30,
        thunder: 30,
        ice: 30,
        dragon: 15
      },
      {
        name: '胴',
        cut: 25,
        blunt: 25,
        ammo: 25,
        fire: 15,
        water: 10,
        thunder: 10,
        ice: 10,
        dragon: 15
      },
      {
        name: '胴(破壊後)',
        cut: 60,
        blunt: 60,
        ammo: 40,
        fire: 15,
        water: 30,
        thunder: 30,
        ice: 30,
        dragon: 15
      },
      {
        name: '前脚',
        cut: 50,
        blunt: 50,
        ammo: 45,
        fire: 20,
        water: 10,
        thunder: 10,
        ice: 10,
        dragon: 20
      },
      {
        name: '前脚(破壊後)',
        cut: 70,
        blunt: 90,
        ammo: 60,
        fire: 15,
        water: 30,
        thunder: 30,
        ice: 30,
        dragon: 15
      },
      {
        name: '後脚',
        cut: 22,
        blunt: 22,
        ammo: 15,
        fire: 10,
        water: 5,
        thunder: 5,
        ice: 5,
        dragon: 10
      },
      {
        name: '後脚(破壊後)',
        cut: 50,
        blunt: 50,
        ammo: 40,
        fire: 10,
        water: 20,
        thunder: 20,
        ice: 20,
        dragon: 10
      },
      {
        name: '尻尾',
        cut: 25,
        blunt: 25,
        ammo: 15,
        fire: 10,
        water: 5,
        thunder: 5,
        ice: 5,
        dragon: 10
      },
      {
        name: '尻尾(破壊後)',
        cut: 50,
        blunt: 50,
        ammo: 30,
        fire: 10,
        water: 20,
        thunder: 20,
        ice: 20,
        dragon: 10
      },
      {
        name: '尾先',
        cut: 70,
        blunt: 70,
        ammo: 45,
        fire: 20,
        water: 10,
        thunder: 10,
        ice: 10,
        dragon: 20
      },
      {
        name: '尾先(破壊後)',
        cut: 90,
        blunt: 90,
        ammo: 60,
        fire: 15,
        water: 30,
        thunder: 30,
        ice: 30,
        dragon: 15
      }
    ]
  },
  {
    name: 'ゾラ・マグダラオス',
    parts: [
      {
        name: '頭',
        cut: 40,
        blunt: 40,
        ammo: 40,
        fire: 0,
        water: 20,
        thunder: 10,
        ice: 15,
        dragon: 20
      },
      {
        name: '胴',
        cut: 30,
        blunt: 30,
        ammo: 25,
        fire: 0,
        water: 10,
        thunder: 5,
        ice: 5,
        dragon: 10
      },
      {
        name: '胸',
        cut: 50,
        blunt: 50,
        ammo: 30,
        fire: 0,
        water: 25,
        thunder: 10,
        ice: 20,
        dragon: 25
      },
      {
        name: '胸(破壊後)',
        cut: 80,
        blunt: 80,
        ammo: 80,
        fire: 0,
        water: 30,
        thunder: 15,
        ice: 25,
        dragon: 30
      },
      {
        name: '前脚',
        cut: 30,
        blunt: 30,
        ammo: 25,
        fire: 0,
        water: 10,
        thunder: 5,
        ice: 5,
        dragon: 10
      },
      {
        name: '後脚',
        cut: 25,
        blunt: 25,
        ammo: 20,
        fire: 0,
        water: 10,
        thunder: 5,
        ice: 5,
        dragon: 10
      },
      {
        name: '尻尾',
        cut: 25,
        blunt: 25,
        ammo: 20,
        fire: 0,
        water: 10,
        thunder: 5,
        ice: 5,
        dragon: 10
      },
      {
        name: '排熱器官',
        cut: 95,
        blunt: 95,
        ammo: 90,
        fire: 0,
        water: 20,
        thunder: 0,
        ice: 15,
        dragon: 20
      },
      {
        name: '外殻',
        cut: 1,
        blunt: 1,
        ammo: 1,
        fire: 0,
        water: 0,
        thunder: 0,
        ice: 0,
        dragon: 0
      },
      {
        name: '外殻（未発達）',
        cut: 60,
        blunt: 60,
        ammo: 50,
        fire: 0,
        water: 20,
        thunder: 10,
        ice: 15,
        dragon: 20
      }
    ]
  },
  {
    name: 'ツィツィヤック',
    parts: [
      {
        name: '触覚',
        cut: 75,
        blunt: 65,
        ammo: 70,
        fire: 15,
        water: 15,
        thunder: 20,
        ice: 20,
        dragon: 15
      },
      {
        name: '頭',
        cut: 65,
        blunt: 55,
        ammo: 55,
        fire: 15,
        water: 15,
        thunder: 20,
        ice: 20,
        dragon: 15
      },
      {
        name: '前脚',
        cut: 45,
        blunt: 60,
        ammo: 35,
        fire: 15,
        water: 15,
        thunder: 20,
        ice: 20,
        dragon: 15
      },
      {
        name: '胴',
        cut: 45,
        blunt: 60,
        ammo: 35,
        fire: 15,
        water: 15,
        thunder: 20,
        ice: 20,
        dragon: 15
      },
      {
        name: '尻尾',
        cut: 40,
        blunt: 40,
        ammo: 35,
        fire: 15,
        water: 15,
        thunder: 20,
        ice: 20,
        dragon: 15
      }
    ]
  },
  {
    name: 'ディアブロス',
    parts: [
      {
        name: '角',
        cut: 21,
        blunt: 42,
        ammo: 20,
        fire: 0,
        water: 20,
        thunder: 10,
        ice: 25,
        dragon: 20
      },
      {
        name: '頭',
        cut: 45,
        blunt: 63,
        ammo: 40,
        fire: 0,
        water: 25,
        thunder: 10,
        ice: 30,
        dragon: 25
      },
      {
        name: '首',
        cut: 40,
        blunt: 40,
        ammo: 25,
        fire: 0,
        water: 15,
        thunder: 5,
        ice: 20,
        dragon: 15
      },
      {
        name: '翼',
        cut: 40,
        blunt: 30,
        ammo: 60,
        fire: 0,
        water: 25,
        thunder: 10,
        ice: 30,
        dragon: 25
      },
      {
        name: '背',
        cut: 24,
        blunt: 42,
        ammo: 35,
        fire: 0,
        water: 20,
        thunder: 10,
        ice: 25,
        dragon: 20
      },
      {
        name: '腹',
        cut: 73,
        blunt: 78,
        ammo: 40,
        fire: 0,
        water: 30,
        thunder: 10,
        ice: 35,
        dragon: 30
      },
      {
        name: '脚',
        cut: 35,
        blunt: 35,
        ammo: 35,
        fire: 0,
        water: 10,
        thunder: 5,
        ice: 15,
        dragon: 10
      },
      {
        name: '尻尾',
        cut: 50,
        blunt: 24,
        ammo: 45,
        fire: 0,
        water: 20,
        thunder: 10,
        ice: 15,
        dragon: 20
      },
      {
        name: '尾先',
        cut: 23,
        blunt: 33,
        ammo: 10,
        fire: 0,
        water: 20,
        thunder: 10,
        ice: 25,
        dragon: 20
      }
    ]
  },
  {
    name: 'ディアブロス亜種',
    parts: [
      {
        name: '角',
        cut: 19,
        blunt: 37,
        ammo: 15,
        fire: 0,
        water: 20,
        thunder: 10,
        ice: 25,
        dragon: 0
      },
      {
        name: '頭',
        cut: 43,
        blunt: 55,
        ammo: 30,
        fire: 0,
        water: 25,
        thunder: 10,
        ice: 30,
        dragon: 0
      },
      {
        name: '首',
        cut: 40,
        blunt: 40,
        ammo: 25,
        fire: 0,
        water: 15,
        thunder: 5,
        ice: 20,
        dragon: 0
      },
      {
        name: '翼',
        cut: 40,
        blunt: 30,
        ammo: 60,
        fire: 0,
        water: 25,
        thunder: 10,
        ice: 30,
        dragon: 0
      },
      {
        name: '背',
        cut: 24,
        blunt: 42,
        ammo: 30,
        fire: 0,
        water: 20,
        thunder: 10,
        ice: 25,
        dragon: 0
      },
      {
        name: '腹',
        cut: 63,
        blunt: 68,
        ammo: 35,
        fire: 0,
        water: 30,
        thunder: 10,
        ice: 35,
        dragon: 0
      },
      {
        name: '脚',
        cut: 35,
        blunt: 35,
        ammo: 35,
        fire: 0,
        water: 10,
        thunder: 5,
        ice: 15,
        dragon: 0
      },
      {
        name: '尻尾',
        cut: 45,
        blunt: 24,
        ammo: 45,
        fire: 0,
        water: 20,
        thunder: 10,
        ice: 15,
        dragon: 0
      },
      {
        name: '尾先',
        cut: 20,
        blunt: 24,
        ammo: 10,
        fire: 0,
        water: 20,
        thunder: 10,
        ice: 25,
        dragon: 0
      }
    ]
  },
  {
    name: 'テオ・テスカトル',
    parts: [
      {
        name: '頭',
        cut: 55,
        blunt: 60,
        ammo: 50,
        fire: 0,
        water: 30,
        thunder: 10,
        ice: 25,
        dragon: 10
      },
      {
        name: '首',
        cut: 33,
        blunt: 38,
        ammo: 33,
        fire: 0,
        water: 20,
        thunder: 5,
        ice: 15,
        dragon: 5
      },
      {
        name: '翼',
        cut: 40,
        blunt: 35,
        ammo: 30,
        fire: 0,
        water: 25,
        thunder: 10,
        ice: 20,
        dragon: 10
      },
      {
        name: '腹・背',
        cut: 20,
        blunt: 20,
        ammo: 20,
        fire: 0,
        water: 15,
        thunder: 0,
        ice: 10,
        dragon: 0
      },
      {
        name: '前脚',
        cut: 38,
        blunt: 38,
        ammo: 33,
        fire: 0,
        water: 20,
        thunder: 5,
        ice: 15,
        dragon: 5
      },
      {
        name: '後脚',
        cut: 30,
        blunt: 25,
        ammo: 20,
        fire: 0,
        water: 15,
        thunder: 5,
        ice: 10,
        dragon: 5
      },
      {
        name: '尻尾',
        cut: 38,
        blunt: 33,
        ammo: 28,
        fire: 0,
        water: 20,
        thunder: 5,
        ice: 15,
        dragon: 5
      }
    ]
  },
  {
    name: 'ドスギルオス',
    parts: [
      {
        name: '頭',
        cut: 80,
        blunt: 85,
        ammo: 75,
        fire: 15,
        water: 30,
        thunder: 0,
        ice: 20,
        dragon: 10
      },
      {
        name: '首',
        cut: 40,
        blunt: 45,
        ammo: 35,
        fire: 5,
        water: 20,
        thunder: 0,
        ice: 10,
        dragon: 5
      },
      {
        name: '胴',
        cut: 35,
        blunt: 35,
        ammo: 30,
        fire: 0,
        water: 15,
        thunder: 0,
        ice: 5,
        dragon: 0
      },
      {
        name: '背中',
        cut: 35,
        blunt: 35,
        ammo: 30,
        fire: 0,
        water: 15,
        thunder: 0,
        ice: 5,
        dragon: 0
      },
      {
        name: '前脚',
        cut: 55,
        blunt: 50,
        ammo: 45,
        fire: 10,
        water: 25,
        thunder: 0,
        ice: 15,
        dragon: 5
      },
      {
        name: '後脚',
        cut: 40,
        blunt: 40,
        ammo: 35,
        fire: 0,
        water: 15,
        thunder: 0,
        ice: 5,
        dragon: 0
      },
      {
        name: '尻尾',
        cut: 50,
        blunt: 45,
        ammo: 40,
        fire: 5,
        water: 20,
        thunder: 0,
        ice: 10,
        dragon: 5
      }
    ]
  },
  {
    name: 'ドスジャグラス',
    parts: [
      {
        name: '頭',
        cut: 80,
        blunt: 85,
        ammo: 75,
        fire: 30,
        water: 0,
        thunder: 20,
        ice: 15,
        dragon: 10
      },
      {
        name: '首',
        cut: 65,
        blunt: 70,
        ammo: 60,
        fire: 20,
        water: 0,
        thunder: 10,
        ice: 5,
        dragon: 5
      },
      {
        name: '胴',
        cut: 50,
        blunt: 45,
        ammo: 40,
        fire: 20,
        water: 0,
        thunder: 10,
        ice: 5,
        dragon: 0
      },
      {
        name: '腹膨張',
        cut: 90,
        blunt: 95,
        ammo: 85,
        fire: 30,
        water: 0,
        thunder: 20,
        ice: 15,
        dragon: 10
      },
      {
        name: '背中',
        cut: 45,
        blunt: 40,
        ammo: 35,
        fire: 15,
        water: 0,
        thunder: 5,
        ice: 5,
        dragon: 0
      },
      {
        name: '前脚',
        cut: 65,
        blunt: 60,
        ammo: 55,
        fire: 25,
        water: 0,
        thunder: 15,
        ice: 10,
        dragon: 5
      },
      {
        name: '後脚',
        cut: 45,
        blunt: 40,
        ammo: 35,
        fire: 15,
        water: 0,
        thunder: 5,
        ice: 0,
        dragon: 0
      },
      {
        name: '尻尾',
        cut: 45,
        blunt: 45,
        ammo: 40,
        fire: 15,
        water: 0,
        thunder: 5,
        ice: 0,
        dragon: 0
      }
    ]
  },
  {
    name: 'ドドガマル',
    parts: [
      {
        name: '頭',
        cut: 35,
        blunt: 35,
        ammo: 25,
        fire: 0,
        water: 20,
        thunder: 30,
        ice: 20,
        dragon: 10
      },
      {
        name: '頭(破壊後)',
        cut: 75,
        blunt: 75,
        ammo: 65,
        fire: 0,
        water: 20,
        thunder: 30,
        ice: 20,
        dragon: 10
      },
      {
        name: '首',
        cut: 30,
        blunt: 30,
        ammo: 20,
        fire: 0,
        water: 10,
        thunder: 25,
        ice: 10,
        dragon: 5
      },
      {
        name: '首(破壊後)',
        cut: 65,
        blunt: 65,
        ammo: 55,
        fire: 0,
        water: 10,
        thunder: 25,
        ice: 10,
        dragon: 5
      },
      {
        name: '胴',
        cut: 45,
        blunt: 45,
        ammo: 40,
        fire: 0,
        water: 5,
        thunder: 10,
        ice: 5,
        dragon: 5
      },
      {
        name: '背中',
        cut: 45,
        blunt: 45,
        ammo: 40,
        fire: 0,
        water: 5,
        thunder: 10,
        ice: 5,
        dragon: 5
      },
      {
        name: '前脚',
        cut: 45,
        blunt: 45,
        ammo: 40,
        fire: 0,
        water: 5,
        thunder: 10,
        ice: 5,
        dragon: 5
      },
      {
        name: '後脚',
        cut: 45,
        blunt: 45,
        ammo: 40,
        fire: 0,
        water: 5,
        thunder: 10,
        ice: 5,
        dragon: 5
      },
      {
        name: '尻尾',
        cut: 60,
        blunt: 60,
        ammo: 50,
        fire: 0,
        water: 10,
        thunder: 15,
        ice: 10,
        dragon: 5
      }
    ]
  },
  {
    name: 'トビカガチ',
    parts: [
      {
        name: '頭',
        cut: 60,
        blunt: 60,
        ammo: 50,
        fire: 10,
        water: 20,
        thunder: 0,
        ice: 10,
        dragon: 5
      },
      {
        name: '首',
        cut: 60,
        blunt: 60,
        ammo: 50,
        fire: 10,
        water: 20,
        thunder: 0,
        ice: 10,
        dragon: 5
      },
      {
        name: '胴',
        cut: 45,
        blunt: 45,
        ammo: 35,
        fire: 5,
        water: 15,
        thunder: 0,
        ice: 5,
        dragon: 0
      },
      {
        name: '背中',
        cut: 45,
        blunt: 45,
        ammo: 60,
        fire: 5,
        water: 15,
        thunder: 0,
        ice: 5,
        dragon: 0
      },
      {
        name: '前脚',
        cut: 35,
        blunt: 35,
        ammo: 15,
        fire: 5,
        water: 15,
        thunder: 0,
        ice: 5,
        dragon: 0
      },
      {
        name: '後脚',
        cut: 30,
        blunt: 30,
        ammo: 10,
        fire: 5,
        water: 15,
        thunder: 0,
        ice: 5,
        dragon: 0
      },
      {
        name: '尻尾',
        cut: 80,
        blunt: 80,
        ammo: 70,
        fire: 20,
        water: 30,
        thunder: 0,
        ice: 20,
        dragon: 15
      }
    ]
  },
  {
    name: 'ナナ・テスカトリ',
    parts: [
      {
        name: '頭',
        cut: 40,
        blunt: 60,
        ammo: 45,
        fire: 0,
        water: 7,
        thunder: 7,
        ice: 30,
        dragon: 25
      },
      {
        name: '首',
        cut: 33,
        blunt: 38,
        ammo: 33,
        fire: 0,
        water: 3,
        thunder: 3,
        ice: 20,
        dragon: 15
      },
      {
        name: '翼',
        cut: 55,
        blunt: 35,
        ammo: 40,
        fire: 0,
        water: 7,
        thunder: 7,
        ice: 25,
        dragon: 20
      },
      {
        name: '腹・背',
        cut: 20,
        blunt: 20,
        ammo: 20,
        fire: 0,
        water: 0,
        thunder: 0,
        ice: 15,
        dragon: 10
      },
      {
        name: '前脚',
        cut: 25,
        blunt: 30,
        ammo: 20,
        fire: 0,
        water: 3,
        thunder: 3,
        ice: 15,
        dragon: 10
      },
      {
        name: '後脚',
        cut: 30,
        blunt: 25,
        ammo: 20,
        fire: 0,
        water: 3,
        thunder: 3,
        ice: 15,
        dragon: 10
      },
      {
        name: '尻尾',
        cut: 45,
        blunt: 38,
        ammo: 55,
        fire: 0,
        water: 3,
        thunder: 3,
        ice: 20,
        dragon: 15
      }
    ]
  },
  {
    name: 'ネルギガンテ',
    parts: [
      {
        name: '角',
        cut: 20,
        blunt: 25,
        ammo: 35,
        fire: 5,
        water: 15,
        thunder: 20,
        ice: 0,
        dragon: 10
      },
      {
        name: '角(破壊後)',
        cut: 35,
        blunt: 40,
        ammo: 45,
        fire: 5,
        water: 15,
        thunder: 20,
        ice: 0,
        dragon: 5
      },
      {
        name: '頭',
        cut: 457520,
        blunt: 609025,
        ammo: 407015,
        fire: 5,
        water: 10,
        thunder: 151520,
        ice: 15,
        dragon: 5510
      },
      {
        name: '翼',
        cut: 405528,
        blunt: 304525,
        ammo: 304525,
        fire: 10,
        water: 5,
        thunder: 101015,
        ice: 5,
        dragon: 101520
      },
      {
        name: '背中',
        cut: 30,
        blunt: 35,
        ammo: 30,
        fire: 0,
        water: 0,
        thunder: 10,
        ice: 5,
        dragon: 5
      },
      {
        name: '腹',
        cut: 35,
        blunt: 30,
        ammo: 35,
        fire: 0,
        water: 0,
        thunder: 10,
        ice: 5,
        dragon: 5
      },
      {
        name: '前脚',
        cut: 507010,
        blunt: 456015,
        ammo: 405510,
        fire: 5,
        water: 5,
        thunder: 151520,
        ice: 0,
        dragon: 5510
      },
      {
        name: '後脚',
        cut: 35,
        blunt: 30,
        ammo: 35,
        fire: 0,
        water: 0,
        thunder: 10,
        ice: 5,
        dragon: 5
      },
      {
        name: '尻尾',
        cut: 60,
        blunt: 45,
        ammo: 25,
        fire: 10,
        water: 5,
        thunder: 10,
        ice: 5,
        dragon: 5
      },
      {
        name: '尾先',
        cut: 456525,
        blunt: 355520,
        ammo: 254010,
        fire: 15,
        water: 5,
        thunder: 151520,
        ice: 5,
        dragon: 101015
      }
    ]
  },
  {
    name: 'パオウルムー',
    parts: [
      {
        name: '頭',
        cut: 55,
        blunt: 55,
        ammo: 45,
        fire: 25,
        water: 0,
        thunder: 15,
        ice: 10,
        dragon: 10
      },
      {
        name: '首',
        cut: 40,
        blunt: 40,
        ammo: 30,
        fire: 20,
        water: 0,
        thunder: 15,
        ice: 10,
        dragon: 10
      },
      {
        name: '顎袋',
        cut: 75,
        blunt: 75,
        ammo: 60,
        fire: 25,
        water: 0,
        thunder: 15,
        ice: 10,
        dragon: 10
      },
      {
        name: '翼',
        cut: 35,
        blunt: 35,
        ammo: 45,
        fire: 15,
        water: 0,
        thunder: 10,
        ice: 5,
        dragon: 5
      },
      {
        name: '胴',
        cut: 46,
        blunt: 46,
        ammo: 42,
        fire: 15,
        water: 0,
        thunder: 10,
        ice: 5,
        dragon: 5
      },
      {
        name: '脚',
        cut: 40,
        blunt: 35,
        ammo: 25,
        fire: 15,
        water: 0,
        thunder: 10,
        ice: 5,
        dragon: 5
      },
      {
        name: '尻尾',
        cut: 25,
        blunt: 25,
        ammo: 15,
        fire: 20,
        water: 0,
        thunder: 15,
        ice: 10,
        dragon: 10
      }
    ]
  },
  {
    name: 'バゼルギウス',
    parts: [
      {
        name: '頭',
        cut: 80,
        blunt: 85,
        ammo: 60,
        fire: 0,
        water: 15,
        thunder: 25,
        ice: 20,
        dragon: 20
      },
      {
        name: '翼',
        cut: 25,
        blunt: 25,
        ammo: 65,
        fire: 0,
        water: 5,
        thunder: 15,
        ice: 10,
        dragon: 10
      },
      {
        name: '背中',
        cut: 30,
        blunt: 30,
        ammo: 25,
        fire: 0,
        water: 5,
        thunder: 15,
        ice: 10,
        dragon: 10
      },
      {
        name: '腹',
        cut: 45,
        blunt: 45,
        ammo: 35,
        fire: 0,
        water: 5,
        thunder: 15,
        ice: 10,
        dragon: 10
      },
      {
        name: '脚',
        cut: 36,
        blunt: 34,
        ammo: 30,
        fire: 0,
        water: 5,
        thunder: 15,
        ice: 10,
        dragon: 10
      },
      {
        name: '尻尾',
        cut: 75,
        blunt: 70,
        ammo: 55,
        fire: 0,
        water: 10,
        thunder: 20,
        ice: 15,
        dragon: 15
      }
    ]
  },
  {
    name: 'プケプケ',
    parts: [
      {
        name: '頭・舌',
        cut: 75,
        blunt: 80,
        ammo: 70,
        fire: 15,
        water: 0,
        thunder: 30,
        ice: 20,
        dragon: 10
      },
      {
        name: '首',
        cut: 40,
        blunt: 35,
        ammo: 30,
        fire: 5,
        water: 0,
        thunder: 20,
        ice: 10,
        dragon: 5
      },
      {
        name: '胴',
        cut: 35,
        blunt: 35,
        ammo: 30,
        fire: 0,
        water: 0,
        thunder: 15,
        ice: 5,
        dragon: 5
      },
      {
        name: '翼',
        cut: 50,
        blunt: 45,
        ammo: 40,
        fire: 10,
        water: 0,
        thunder: 25,
        ice: 15,
        dragon: 5
      },
      {
        name: '脚',
        cut: 45,
        blunt: 45,
        ammo: 40,
        fire: 0,
        water: 0,
        thunder: 15,
        ice: 5,
        dragon: 0
      },
      {
        name: '尻尾',
        cut: 55,
        blunt: 50,
        ammo: 45,
        fire: 10,
        water: 0,
        thunder: 25,
        ice: 15,
        dragon: 5
      }
    ]
  },
  {
    name: 'ベヒーモス',
    parts: [
      {
        name: '角',
        cut: 20,
        blunt: 30,
        ammo: 5,
        fire: 15,
        water: 50,
        thunder: 35,
        ice: 40,
        dragon: 85
      },
      {
        name: '角(破壊後)',
        cut: 10,
        blunt: 15,
        ammo: 5,
        fire: 5,
        water: 10,
        thunder: 5,
        ice: 5,
        dragon: 25
      },
      {
        name: '頭',
        cut: 60,
        blunt: 55,
        ammo: 50,
        fire: 0,
        water: 25,
        thunder: 10,
        ice: 10,
        dragon: 5
      },
      {
        name: '上半身',
        cut: 15,
        blunt: 22,
        ammo: 8,
        fire: 0,
        water: 5,
        thunder: 5,
        ice: 5,
        dragon: 0
      },
      {
        name: '腹・腰',
        cut: 22,
        blunt: 15,
        ammo: 5,
        fire: 0,
        water: 0,
        thunder: 0,
        ice: 0,
        dragon: 0
      },
      {
        name: '上腕',
        cut: 50,
        blunt: 40,
        ammo: 15,
        fire: 5,
        water: 10,
        thunder: 5,
        ice: 5,
        dragon: 15
      },
      {
        name: '前脚',
        cut: 50,
        blunt: 40,
        ammo: 45,
        fire: 5,
        water: 10,
        thunder: 5,
        ice: 5,
        dragon: 15
      },
      {
        name: '後脚',
        cut: 30,
        blunt: 55,
        ammo: 10,
        fire: 0,
        water: 10,
        thunder: 10,
        ice: 25,
        dragon: 5
      },
      {
        name: '尻尾',
        cut: 45,
        blunt: 25,
        ammo: 15,
        fire: 25,
        water: 5,
        thunder: 15,
        ice: 5,
        dragon: 5
      },
      {
        name: '尻先',
        cut: 50,
        blunt: 25,
        ammo: 35,
        fire: 25,
        water: 20,
        thunder: 20,
        ice: 20,
        dragon: 10
      }
    ]
  },
  {
    name: 'ボルボロス',
    parts: [
      {
        name: '頭',
        cut: 22,
        blunt: 25,
        ammo: 10,
        fire: 20,
        water: 0,
        thunder: 0,
        ice: 15,
        dragon: 10
      },
      {
        name: '頭(破壊後)',
        cut: 20,
        blunt: 24,
        ammo: 9,
        fire: 0,
        water: 80,
        thunder: 0,
        ice: 15,
        dragon: 10
      },
      {
        name: '胴',
        cut: 46,
        blunt: 46,
        ammo: 50,
        fire: 20,
        water: 0,
        thunder: 0,
        ice: 10,
        dragon: 5
      },
      {
        name: '胴(破壊後)',
        cut: 24,
        blunt: 24,
        ammo: 20,
        fire: 0,
        water: 80,
        thunder: 0,
        ice: 15,
        dragon: 10
      },
      {
        name: '前脚',
        cut: 80,
        blunt: 85,
        ammo: 75,
        fire: 30,
        water: 0,
        thunder: 0,
        ice: 10,
        dragon: 5
      },
      {
        name: '前脚(破壊後)',
        cut: 35,
        blunt: 38,
        ammo: 30,
        fire: 0,
        water: 80,
        thunder: 0,
        ice: 15,
        dragon: 10
      },
      {
        name: '後脚',
        cut: 40,
        blunt: 35,
        ammo: 25,
        fire: 20,
        water: 0,
        thunder: 0,
        ice: 10,
        dragon: 5
      },
      {
        name: '後脚(破壊後)',
        cut: 24,
        blunt: 24,
        ammo: 20,
        fire: 0,
        water: 80,
        thunder: 0,
        ice: 15,
        dragon: 10
      },
      {
        name: '尻尾',
        cut: 55,
        blunt: 50,
        ammo: 40,
        fire: 25,
        water: 0,
        thunder: 0,
        ice: 15,
        dragon: 10
      },
      {
        name: '尻尾(破壊後)',
        cut: 25,
        blunt: 25,
        ammo: 22,
        fire: 0,
        water: 80,
        thunder: 0,
        ice: 15,
        dragon: 10
      }
    ]
  },
  {
    name: 'マム・タロト',
    parts: [
      {
        name: '頭',
        cut: 25,
        blunt: 30,
        ammo: 10,
        fire: 5,
        water: 10,
        thunder: 25,
        ice: 0,
        dragon: 5
      },
      {
        name: '頭(破壊後)',
        cut: 60,
        blunt: 75,
        ammo: 30,
        fire: 25,
        water: 30,
        thunder: 50,
        ice: 0,
        dragon: 25
      },
      {
        name: '胸',
        cut: 50,
        blunt: 45,
        ammo: 45,
        fire: 0,
        water: 20,
        thunder: 0,
        ice: 40,
        dragon: 25
      },
      {
        name: '前脚',
        cut: 25,
        blunt: 30,
        ammo: 10,
        fire: 5,
        water: 10,
        thunder: 25,
        ice: 0,
        dragon: 5
      }
    ]
  },
  {
    name: 'ラージャン',
    parts: [
      {
        name: '頭',
        cut: 60,
        blunt: 60,
        ammo: 60,
        fire: 5,
        water: 5,
        thunder: 0,
        ice: 30,
        dragon: 0
      },
      {
        name: '胴体',
        cut: 45,
        blunt: 50,
        ammo: 45,
        fire: 0,
        water: 5,
        thunder: 0,
        ice: 15,
        dragon: 0
      },
      {
        name: '前脚',
        cut: 45,
        blunt: 40,
        ammo: 40,
        fire: 0,
        water: 5,
        thunder: 0,
        ice: 15,
        dragon: 0
      },
      {
        name: '前脚(破壊後)',
        cut: 10,
        blunt: 10,
        ammo: 10,
        fire: 0,
        water: 5,
        thunder: 0,
        ice: 15,
        dragon: 0
      },
      {
        name: '後脚',
        cut: 45,
        blunt: 40,
        ammo: 40,
        fire: 0,
        water: 5,
        thunder: 0,
        ice: 15,
        dragon: 0
      },
      {
        name: '後脚(破壊後)',
        cut: 55,
        blunt: 48,
        ammo: 48,
        fire: 0,
        water: 5,
        thunder: 0,
        ice: 15,
        dragon: 0
      },
      {
        name: '尻尾',
        cut: 50,
        blunt: 40,
        ammo: 30,
        fire: 0,
        water: 5,
        thunder: 0,
        ice: 15,
        dragon: 0
      },
      {
        name: '尻尾(破壊後)',
        cut: 55,
        blunt: 45,
        ammo: 30,
        fire: 0,
        water: 5,
        thunder: 0,
        ice: 15,
        dragon: 0
      }
    ]
  },
  {
    name: 'ラドバルキン',
    parts: [
      {
        name: '頭',
        cut: 80,
        blunt: 90,
        ammo: 50,
        fire: 20,
        water: 20,
        thunder: 20,
        ice: 20,
        dragon: 30
      },
      {
        name: '頭の骨',
        cut: 24,
        blunt: 25,
        ammo: 15,
        fire: 0,
        water: 0,
        thunder: 0,
        ice: 0,
        dragon: 0
      },
      {
        name: '首',
        cut: 30,
        blunt: 30,
        ammo: 25,
        fire: 10,
        water: 10,
        thunder: 10,
        ice: 15,
        dragon: 20
      },
      {
        name: '胴',
        cut: 45,
        blunt: 50,
        ammo: 30,
        fire: 10,
        water: 10,
        thunder: 10,
        ice: 15,
        dragon: 20
      },
      {
        name: '脚',
        cut: 55,
        blunt: 45,
        ammo: 40,
        fire: 10,
        water: 10,
        thunder: 10,
        ice: 10,
        dragon: 15
      },
      {
        name: '胴と脚の骨',
        cut: 20,
        blunt: 25,
        ammo: 15,
        fire: 0,
        water: 0,
        thunder: 0,
        ice: 0,
        dragon: 0
      },
      {
        name: '尻尾',
        cut: 45,
        blunt: 30,
        ammo: 30,
        fire: 15,
        water: 15,
        thunder: 15,
        ice: 15,
        dragon: 15
      }
    ]
  },
  {
    name: 'リオレイア',
    parts: [
      {
        name: '頭',
        cut: 70,
        blunt: 75,
        ammo: 65,
        fire: 0,
        water: 15,
        thunder: 20,
        ice: 15,
        dragon: 30
      },
      {
        name: '首',
        cut: 40,
        blunt: 45,
        ammo: 35,
        fire: 0,
        water: 0,
        thunder: 5,
        ice: 0,
        dragon: 15
      },
      {
        name: '胴・背',
        cut: 35,
        blunt: 30,
        ammo: 25,
        fire: 0,
        water: 5,
        thunder: 10,
        ice: 5,
        dragon: 20
      },
      {
        name: '翼',
        cut: 55,
        blunt: 50,
        ammo: 45,
        fire: 0,
        water: 10,
        thunder: 15,
        ice: 10,
        dragon: 25
      },
      {
        name: '脚',
        cut: 40,
        blunt: 40,
        ammo: 35,
        fire: 0,
        water: 0,
        thunder: 5,
        ice: 0,
        dragon: 15
      },
      {
        name: '尻尾',
        cut: 45,
        blunt: 40,
        ammo: 35,
        fire: 0,
        water: 5,
        thunder: 10,
        ice: 5,
        dragon: 20
      }
    ]
  },
  {
    name: 'リオレイア亜種',
    parts: [
      {
        name: '頭',
        cut: 60,
        blunt: 65,
        ammo: 55,
        fire: 0,
        water: 15,
        thunder: 20,
        ice: 15,
        dragon: 30
      },
      {
        name: '首',
        cut: 30,
        blunt: 35,
        ammo: 25,
        fire: 0,
        water: 0,
        thunder: 5,
        ice: 0,
        dragon: 15
      },
      {
        name: '胴・背',
        cut: 22,
        blunt: 22,
        ammo: 20,
        fire: 0,
        water: 5,
        thunder: 10,
        ice: 5,
        dragon: 20
      },
      {
        name: '翼',
        cut: 50,
        blunt: 45,
        ammo: 40,
        fire: 0,
        water: 10,
        thunder: 15,
        ice: 10,
        dragon: 25
      },
      {
        name: '脚',
        cut: 40,
        blunt: 40,
        ammo: 35,
        fire: 0,
        water: 0,
        thunder: 5,
        ice: 0,
        dragon: 15
      },
      {
        name: '尻尾',
        cut: 20,
        blunt: 25,
        ammo: 20,
        fire: 0,
        water: 5,
        thunder: 10,
        ice: 5,
        dragon: 20
      },
      {
        name: '尾先',
        cut: 50,
        blunt: 45,
        ammo: 40,
        fire: 0,
        water: 5,
        thunder: 10,
        ice: 5,
        dragon: 20
      }
    ]
  },
  {
    name: 'リオレウス',
    parts: [
      {
        name: '頭',
        cut: 65,
        blunt: 70,
        ammo: 60,
        fire: 0,
        water: 15,
        thunder: 20,
        ice: 15,
        dragon: 30
      },
      {
        name: '首',
        cut: 35,
        blunt: 40,
        ammo: 30,
        fire: 0,
        water: 5,
        thunder: 10,
        ice: 5,
        dragon: 20
      },
      {
        name: '胴・背',
        cut: 25,
        blunt: 25,
        ammo: 20,
        fire: 0,
        water: 5,
        thunder: 10,
        ice: 5,
        dragon: 20
      },
      {
        name: '翼',
        cut: 50,
        blunt: 45,
        ammo: 40,
        fire: 0,
        water: 10,
        thunder: 15,
        ice: 10,
        dragon: 25
      },
      {
        name: '脚',
        cut: 35,
        blunt: 35,
        ammo: 30,
        fire: 0,
        water: 0,
        thunder: 5,
        ice: 0,
        dragon: 15
      },
      {
        name: '尻尾',
        cut: 45,
        blunt: 40,
        ammo: 35,
        fire: 0,
        water: 5,
        thunder: 10,
        ice: 5,
        dragon: 20
      }
    ]
  },
  {
    name: 'リオレウス亜種',
    parts: [
      {
        name: '頭',
        cut: 60,
        blunt: 65,
        ammo: 55,
        fire: 0,
        water: 15,
        thunder: 15,
        ice: 20,
        dragon: 30
      },
      {
        name: '首',
        cut: 30,
        blunt: 35,
        ammo: 25,
        fire: 0,
        water: 5,
        thunder: 5,
        ice: 10,
        dragon: 20
      },
      {
        name: '胴・背',
        cut: 22,
        blunt: 22,
        ammo: 20,
        fire: 0,
        water: 5,
        thunder: 5,
        ice: 10,
        dragon: 20
      },
      {
        name: '翼',
        cut: 50,
        blunt: 45,
        ammo: 40,
        fire: 0,
        water: 10,
        thunder: 10,
        ice: 15,
        dragon: 25
      },
      {
        name: '脚',
        cut: 35,
        blunt: 35,
        ammo: 30,
        fire: 0,
        water: 0,
        thunder: 0,
        ice: 5,
        dragon: 15
      },
      {
        name: '尻尾',
        cut: 25,
        blunt: 25,
        ammo: 20,
        fire: 0,
        water: 5,
        thunder: 5,
        ice: 10,
        dragon: 20
      },
      {
        name: '尾先',
        cut: 55,
        blunt: 50,
        ammo: 45,
        fire: 0,
        water: 10,
        thunder: 10,
        ice: 15,
        dragon: 25
      }
    ]
  },
  {
    name: 'レイギエナ',
    parts: [
      {
        name: '頭',
        cut: 65,
        blunt: 70,
        ammo: 60,
        fire: 20,
        water: 15,
        thunder: 25,
        ice: 0,
        dragon: 10
      },
      {
        name: '首',
        cut: 35,
        blunt: 40,
        ammo: 30,
        fire: 10,
        water: 5,
        thunder: 15,
        ice: 0,
        dragon: 5
      },
      {
        name: '胴・背',
        cut: 25,
        blunt: 25,
        ammo: 20,
        fire: 10,
        water: 5,
        thunder: 15,
        ice: 0,
        dragon: 5
      },
      {
        name: '翼',
        cut: 50,
        blunt: 45,
        ammo: 40,
        fire: 15,
        water: 10,
        thunder: 20,
        ice: 0,
        dragon: 5
      },
      {
        name: '脚',
        cut: 35,
        blunt: 35,
        ammo: 30,
        fire: 5,
        water: 0,
        thunder: 10,
        ice: 0,
        dragon: 0
      },
      {
        name: '尻尾',
        cut: 45,
        blunt: 40,
        ammo: 35,
        fire: 10,
        water: 5,
        thunder: 15,
        ice: 0,
        dragon: 5
      }
    ]
  },
  {
    name: 'レーシェン',
    parts: [
      {
        name: '頭',
        cut: 65,
        blunt: 65,
        ammo: 50,
        fire: 25,
        water: 0,
        thunder: 15,
        ice: 10,
        dragon: 15
      },
      {
        name: '胴',
        cut: 45,
        blunt: 45,
        ammo: 25,
        fire: 20,
        water: 0,
        thunder: 10,
        ice: 5,
        dragon: 10
      },
      {
        name: '腕',
        cut: 45,
        blunt: 45,
        ammo: 30,
        fire: 20,
        water: 0,
        thunder: 10,
        ice: 5,
        dragon: 10
      },
      {
        name: '脚',
        cut: 45,
        blunt: 45,
        ammo: 30,
        fire: 20,
        water: 0,
        thunder: 10,
        ice: 5,
        dragon: 10
      }
    ]
  },
  {
    name: 'エンシェント・レーシェン',
    parts: [
      {
        name: '頭',
        cut: 65,
        blunt: 65,
        ammo: 50,
        fire: 25,
        water: 0,
        thunder: 15,
        ice: 10,
        dragon: 15
      },
      {
        name: '胴',
        cut: 45,
        blunt: 45,
        ammo: 25,
        fire: 20,
        water: 0,
        thunder: 10,
        ice: 5,
        dragon: 10
      },
      {
        name: '腕',
        cut: 45,
        blunt: 45,
        ammo: 30,
        fire: 20,
        water: 0,
        thunder: 10,
        ice: 5,
        dragon: 10
      },
      {
        name: '脚',
        cut: 45,
        blunt: 45,
        ammo: 30,
        fire: 20,
        water: 0,
        thunder: 10,
        ice: 5,
        dragon: 10
      }
    ]
  }
]

export default monsters
