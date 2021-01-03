const DEFAULT_ICON = 'chained-points'
const DEFAULT_TITLE = 'Категория'

export default () => ({
  currentCategory: '',
  categoriesMeta: {
    currency: {
      icon: 'bank-cards',
      title: 'Валюта'
    },
    anarchy: {
      icon: 'eye',
      title: 'Anarchy'
    },
    skyblock: {
      icon: 'double-gears',
      title: 'SkyBlock'
    },
    misc: {
      icon: DEFAULT_ICON,
      title: DEFAULT_TITLE
    },
    best: {
      icon: 'cup',
      title: 'Лучшее'
    }
  }
})
