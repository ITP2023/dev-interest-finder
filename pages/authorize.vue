<template>
  <section class="absolute w-screen h-screen bg-gray-100">
    <form @submit.prevent="" class="mx-auto mt-32 p-4 bg-white rounded-lg shadow-lg w-1/2">
      <input
        class="rounded-xl border-2 border-gray-300 p-2"
        type="email" 
        placeholder="Enter your email..."
      />
      <div class="flex flex-row mt-4 items-center justify-evenly">
        <span class="w-20 h-[0.1em] bg-gray-400"></span>
        <p class="px-4 text-center">OR</p>
        <span class="w-20 h-[0.1em] bg-gray-400"></span>
      </div>
      <a
        :href="OAUTH_URL"
        class="px-4 py-2 bg-black text-white rounded-md"
      >
        Sign In with Github
      </a>
    </form>
  </section>
</template>

<script setup lang="ts">

const config = useRuntimeConfig();

const OAUTH_URL = `https://github.com/login/oauth/authorize?client_id=${config.public.githubClientID}`
function openGithubAuth() {

}
</script>