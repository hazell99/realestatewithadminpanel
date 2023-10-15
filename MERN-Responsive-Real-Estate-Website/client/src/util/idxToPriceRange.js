export const arrPriceRanges = [
    "4000000-10000000",
    "10000000-50000,000",
    "50000000-200000,000",
    "200000000-500000000",
    "500000000-1000000000"
]

export const priceRangeToIndex = (priceRange) => {
   const index = arrPriceRanges.findIndex(priceRg => priceRg === priceRange)

   return index
}