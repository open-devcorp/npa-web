<template>
  <div class="min-h-screen bg-gray-100">
    <nav class="bg-white shadow-md p-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold">NPA Web</h1>
        <div class="space-x-4">
          <router-link to="/" class="text-blue-600 hover:text-blue-800">Home</router-link>
          <router-link to="/about" class="text-blue-600 hover:text-blue-800">About</router-link>
        </div>
      </div>
    </nav>
    
    <main class="container mx-auto py-8 px-4">
      <h1 class="text-4xl font-bold text-center mb-8">Bienvenido a NPA Web</h1>
      <div class="text-center">
        <p class="text-lg mb-6">Esta es la página principal del proyecto NPA Web.</p>
        <router-link 
          to="/about" 
          class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Ir a About
        </router-link>
      </div>
    </main>
  </div>
</template>

<script setup>
// Este es un componente básico de Home
</script>

<style scoped>
/* Estilos específicos del componente Home */
</style>
