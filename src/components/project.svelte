<script>
    import HeadingSection from "./headingSection.svelte";
    import { projects } from "$lib/data/projects";
    import BtnMedias from "./btnMedias.svelte";
  
    let isOpen = false;
    let currentIndex = 0;
  
    function toggleIsOpen(index = 0) {
      isOpen = !isOpen;
      currentIndex = index;
      if (isOpen) {
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
      }
    }
  
    function showNext() {
      if (currentIndex < projects.length - 1) {
        currentIndex++;
      }
    }
  
    function showPrevious() {
      if (currentIndex > 0) {
        currentIndex--;
      }
    }
  </script>
  
  <HeadingSection textColor="text-white" title="Projet" />
  <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
    {#each projects as {name, tags, img, course, dateProject, imgs, desct, skils}, index}
      <div class={`relative ${index % 2 === 0 ? "self-start" : "self-end"}`}>
        <figure>
          <img
            class="filter brightness-[.50] saturate-150 w-full"
            src={img}
            alt={`Image du projet ${name}`}
          />
          <div class="absolute inset-0 rounded-[.75rem]">
            <div class="flex flex-col h-full justify-end p-6">
              <button
                on:click={() => toggleIsOpen(index)}
                class="border-2 border-blueLight w-fit p-2 rounded-full"
                aria-expanded={isOpen}>
                <img src="/projects/arrow-projects.svg" alt="Ouvrir détails">
              </button>
              <h3 class="text-white font-heading uppercase font-bold text-[2rem] lg:text-[3.2rem]">
                {name}
              </h3>
              <p class="bg-blueLight w-fit p-3 text-blueDark rounded-[1rem] font-body">
                {tags}
              </p>
            </div>
          </div>
        </figure>
      </div>
    {/each}
  
    {#if isOpen}
      <div
        class="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center"
        aria-modal="true"
        role="dialog">
        <div class="bg-blueLight text-black p-10 rounded-[1.25rem] w-[95dvw] max-w-[65rem] flex flex-col gap-6">
          <div class="flex justify-between">
            <h4 class="text-[1.25rem] lg:text-[1.75rem] font-semibold font-heading uppercase">{projects[currentIndex].name}</h4>
            <button
              on:click={toggleIsOpen}
              aria-label="fermer la fenêtre">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 18L18 6M6 6L18 18" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
          <div class="font-body font-medium">
            <p>Nom du cours : {projects[currentIndex].course}</p>
            <p>Date du projet : {projects[currentIndex].dateProject}</p>
          </div>
          <div class="flex gap-4">
            {#each projects[currentIndex].imgs as img}
              <img class="h-[150px]" src={img} alt="">
            {/each}
          </div>
          <p class="font-body"><strong>Description du projet :</strong> {projects[currentIndex].desct}</p>
          <div class="flex flex-wrap gap-4">
            {#each projects[currentIndex].skills as skill}
              <p class="font-body self-start border rounded-[0.312rem] border-blueDark font-semibold w-[9.2rem] py-[0.4rem] text-center">{skill}</p>
            {/each}
          </div>
          <BtnMedias className='w-fit' link={projects[currentIndex].linkProject} icone="/projects/arrow-btn.svg" text="Consulter le projet" />
          <div class="flex justify-between">
            <button
              on:click={showPrevious}
              disabled={currentIndex === 0}
              class="disabled:opacity-50">
              <img src="/arrow-left.svg" alt="" aria-hidden="true">
            </button>
            <button
              on:click={showNext}
              disabled={currentIndex === projects.length - 1}
              class="disabled:opacity-50">
              <img src="/arrow-right.svg" alt="" aria-hidden="true">
            </button>
          </div>
        </div>
      </div>
    {/if}
  </div>
  