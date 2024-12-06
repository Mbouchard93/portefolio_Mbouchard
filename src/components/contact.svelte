<script>
    import HeadingSection from './headingSection.svelte';
    import BtnMedias from './btnMedias.svelte';
  </script>
  
  <HeadingSection textColor="text-blueDark" title="Contact" />
  <div class="container mx-auto px-6 flex flex-col gap-3">
    <h3 class="pt-6 font-heading text-[1.2rem] md:text-[1.75rem]">
      Osez la différence :<br /> Recrutez une développeuse junior
    </h3>
    <p class="font-body font-medium">
      Fidèle et engagé, je suis prêt à m'investir pleinement et durablement. Donnez-moi l'opportunité de vous rencontrer et de vous montrer comment je peux vraiment être une valeur ajoutée à votre équipe.
    </p>
    <div class="flex flex-col items-center md:items-start">
      <div class="w-fit flex gap-6 pt-6 flex-col md:flex-row">
        <BtnMedias text='LinkedIn' icone='/linkedin.svg' link="https://www.linkedin.com/in/mariane-bouchard-bb2269262/" />
        <BtnMedias text='Téléphone' icone='/phone.svg' link="tel:514-249-2378" />
        <BtnMedias text='Email' icone='/email.svg' link="mailto:mariiane.bouchard12@gmail.com" />
      </div>
    </div>
  </div>
  