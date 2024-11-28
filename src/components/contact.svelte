<script>
    import HeadingSection from './headingSection.svelte';
    import BtnMedias from './btnMedias.svelte';
</script>


    <HeadingSection textColor="text-blueDark" title="Contact" />
    <div class="container mx-auto px-6 flex flex-col gap-6 ">
        <h3 class="pt-6 font-heading text-[1.25rem] md:text-[2rem]">Le titre</h3>
        <p class="font-body font-medium ">Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée.</p>
        <div class="flex flex-col items-center md:items-start">
            <div class=" w-fit flex gap-6 flex-col md:flex-row">
                <BtnMedias text='LinkedIn' icone='/linkedin.svg' link="https://www.linkedin.com/in/mariane-bouchard-bb2269262/" />
                <BtnMedias text='Téléphone' icone='/phone.svg' link="tel:514-249-2378" />
                <BtnMedias text='Email' icone='/email.svg' link="mailto:mariiane.bouchard12@gmail.com" />
            </div>
        </div>
    </div>

