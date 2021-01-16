import categoriesMeta from '@/constants/categoriesMeta'

export function categoriesMetaProvider (category) {
  if (!category && !categoriesMeta.category) {
    console.error('No category in categories meta! ', category)

    return
  }

  return categoriesMeta[category]
}
