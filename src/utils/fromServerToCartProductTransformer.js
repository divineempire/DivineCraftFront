export default function (product) {
  const { id, countable, type, category, name, ...productDisplayData } = product

  return {
    id,
    countable,
    productType: type,
    category,
    name,
    amount: 1,
    productDisplayData
  }
}
