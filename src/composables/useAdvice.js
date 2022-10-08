import { ref } from 'vue'
import axios from 'axios'
import confetti from 'https://cdn.skypack.dev/canvas-confetti'

const advices = ref([{}])

const api = axios.create({
  baseURL: 'https://api.adviceslip.com/advice',
})

const getRandomAdvice = async () => {
  const response = await api.get()
  if (response.status == 200) {
    advices.value = [response.data.slip]
  }
}
export const useAdvice = () => {
  getRandomAdvice()
  const search = async (searchItem) => {
    const response = await api.get(`search/${searchItem}`)
    confetti({ particleCount: 300, spread: 1000, origin: { y: 1 } })

    if (response.status == 200) {
      advices.value = response.data.slips
    }
  }
  return { advices, search }
}
