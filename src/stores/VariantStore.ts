import { defineStore } from 'pinia'

interface VariantData {
  id: string
  image: string
  color: string
  size: string
  stock: number
  sku: string
  isFavorite: boolean
}

export const useVariantStore = defineStore('variantStore', {
  state: () => ({
    variants: [] as VariantData[],
    loading: true,
  }),
  getters: {
    favorites(): VariantData[] {
      return this.variants.filter((variant) => variant.isFavorite)
    },
    favoritesCount(): any {
      return this.variants.reduce((prev: any, curr) => {
        return curr.isFavorite ? prev + 1 : prev
      }, 0)
    },
    totalCount: (state) => {
      return state.variants.length
    },
  },
  actions: {
    async getVariants() {
      this.loading = true

      const resVariant = await fetch('http://localhost:3000/variants')
      const dataVariant = await resVariant.json()

      this.variants = dataVariant
      this.loading = false
    },
    async addVariant(variant: any) {
      this.variants.push(variant)

      try {
        await fetch('http://localhost:3000/variants', {
          method: 'POST',
          body: JSON.stringify(variant),
          headers: { 'Content-Type': 'application/json' },
        })
      } catch (error) {
        console.log(error)
      }
    },
    async deleteVariant(id: any) {
      this.variants = this.variants.filter((variant) => {
        return variant.id !== id
      })

      try {
        await fetch('http://localhost:3000/variants/' + id, {
          method: 'DELETE',
        })
      } catch (error) {
        console.log(error)
      }
    },
    async favoriteVariant(id: any) {
      const variant = this.variants.find((variant) => variant.id === id)

      if (variant != undefined) {
        variant.isFavorite = !variant.isFavorite
      }

      try {
        await fetch('http://localhost:3000/variants/' + id, {
          method: 'PATCH',
          body: JSON.stringify({ isFavorite: variant?.isFavorite }),
          headers: { 'Content-Type': 'application/json' },
        })
      } catch (error) {
        console.log(error)
      }
    },
  },
})
