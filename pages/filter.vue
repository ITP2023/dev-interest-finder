<template>
<section class="w-screen h-screen bg-gray-100">
  <div class="w-full">
    <form
      action="/api/calculate"
      method="post"
      class="w-10/12 mx-auto bg-white rounded-md shadow-md">
      <div class="p-4">
        <input
          class="rounded-lg border-2 border-gray-100 mx-auto text-center w-full text-xl p-2"
          placeholder="Enter your username..."
          type="text"
        />
      </div>
      <div class="flex flex-col p-4">
        <label class="p-2" v-for="lang, i in LANGUAGES" :key="i" :for="lang.language+i">
          <input
            :id="lang.language+i"
            type="checkbox"
            :key="i"
            :name="lang.language"
            :value="lang.language"
          />
          {{ lang.displayName }}
        </label>
      </div>
    </form>
  </div>
  <div>
    <p class="text-3xl text-center w-full my-8">Results</p>
    <div class="w-11/12 mx-auto bg-white p-4">
      <p>Respo 1</p>
    </div>
  </div>
</section>
</template>

<script setup lang="ts">

interface RepoLang {
  language: string;
  displayName: string;
};

const LANGUAGES: RepoLang[] = [
  {
    language: "javascript",
    displayName: "JavaScript"
  },
  {
    language: "python",
    displayName: "Python"
  },
  {
    language: "rust",
    displayName: "Rust"
  }
];

</script>