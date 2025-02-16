<script>
    import { onMount } from 'svelte';
    import { createEventDispatcher } from 'svelte';
  
    let email = '';
    let password = '';
    let errorMessage = '';
    const dispatch = createEventDispatcher();
  
    function handleLogin() {
      if (!email || !password) {
        errorMessage = 'Inserisci email e password';
        return;
      }
      errorMessage = '';
      dispatch('login', { email, password });
    }

    
  </script>
  
  <main class="flex h-screen items-center justify-center bg-gray-900">
    <div class="bg-white p-8 rounded-lg shadow-md w-96">
      <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Login Quiz Game</h2>
      
      {#if errorMessage}
        <p class="text-red-500 text-sm mb-4">{errorMessage}</p>
      {/if}
      
      <input placeholder="email" type="email" bind:value={email} class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      
      <input placeholder="password" type="password" bind:value={password} class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      
      <button on:click={handleLogin} class="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Login</button>
      
      <p class="mt-4 text-sm text-center text-gray-600">Non hai un account? <a href="#" class="text-blue-500 hover:underline">Registrati</a></p>
    </div>
  </main>
  