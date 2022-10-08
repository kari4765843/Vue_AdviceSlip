<script setup>
  import { ref } from 'vue'
  import { useAdvice } from '../composables/useAdvice'

  const { advices, search } = useAdvice()

  const searchItem = ref('')
</script>

<template>
  <div>
    <input
      v-model="searchItem"
      type="text"
      placeholder="Search for an advice"
      class="mt-16 w-full rounded-full py-4 text-center text-lg text-green-800"
      @change="search(searchItem)"
    />
    <div v-for="(advice, index) in advices" :key="index" class="grid grid-cols-3 gap-14 pt-8">
      <p>
        {{ advice.advice }}
      </p>
    </div>
  </div>
</template>
