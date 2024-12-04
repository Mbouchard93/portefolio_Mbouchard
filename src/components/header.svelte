<script>
    export let sections;
    let isMenuOpen = false;

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
    };
</script>

<header aria-label="Main Navigation" class="bg-blueLight rounded-t-[3.125rem] mt-2">
    <nav>
        <div class="container mx-auto px-6 py-3 flex justify-between items-center">
            <div class="text-[2rem] lg:text-[4rem] uppercase font-logo text-black">mb</div>
            <ul class="hidden md:flex space-x-4">
                {#each sections as { id, name }}
                    <li>
                        <a href={`#${id}`} class="text-blueDark font-heading hover:underline">{name}</a>
                    </li>
                {/each}
            </ul>
            <div class="md:hidden">
                <button on:click={toggleMenu} class="text-black focus:outline-none" aria-label="Ouvrir le menu">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>
    </nav>
</header>

{#if isMenuOpen}
    <button class="fixed inset-0 bg-black bg-opacity-50 z-40" on:click={toggleMenu} aria-label="Close menu overlay"></button>
    <aside class="fixed inset-y-0 left-0 bg-white w-64 shadow-md z-50" aria-label="Mobile Navigation">
        <div class="px-6 py-4">
            <button on:click={toggleMenu} class="mb-4 text-black focus:outline-none" aria-label="Close menu">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
            <ul>
                {#each sections as { id, name }}
                    <li>
                        <a href={`#${id}`} class="block mb-2 text-black font-heading hover:text-blueDark" on:click={toggleMenu}>{name}</a>
                    </li>
                {/each}
            </ul>
        </div>
    </aside>
{/if}
