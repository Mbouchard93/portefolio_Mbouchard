<script>
    import HeadingSection from './HeadingSection.svelte';
    import { skills } from '$lib/data/skills';

    let filter = '';

    function setFilter(category) {
        filter = filter === category ? '' : category;
    }


    function filteredSkills() {
        return skills.filter(skill => !filter || skill.category === filter);
    }


</script>

<HeadingSection textColor="text-blueDark" title="Compétences" />
<div class="container mx-auto p-6 flex flex-col gap-6">
    <ul class="flex gap-6">
        <li>
            <button
                on:click={() => setFilter('design')}
                class={`py-[0.5rem] font-semibold font-body w-[10rem] lg:text-[1.25rem] md:w-[12.18rem] uppercase rounded-[0.625rem] ${filter === 'design' ? 'bg-blueDark text-blueLight' : 'border border-blueDark'}`}>
                Design UX/UI
            </button>
        </li>
        <li>
            <button
                on:click={() => setFilter('development')}
                class={`py-[0.5rem] font-semibold font-body w-[10rem] lg:text-[1.25rem]  md:w-[12.18rem] uppercase rounded-[0.625rem] ${filter === 'development' ? 'bg-blueDark text-blueLight' : 'border border-blueDark'}`}>
                Développement
            </button>
        </li>
    </ul>
    <section aria-label="Liste des compétences">
        <div class="grid grid-cols-4 md:grid-cols-4 gap-5">
            {#each filteredSkills() as skill}
                <div class="flex flex-col items-start text-center gap-1" role="listitem">
                    <img src={skill.icon} alt={`Icône${skill.name}`} class="w-12 h-12" />
                    <p class="hidden md:block text-sm font-medium text-[1.05rem] font-body">{skill.name}</p>
                </div>
            {/each}
        </div>
    </section>
</div>
