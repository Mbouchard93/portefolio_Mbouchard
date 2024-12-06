<script>
    import HeadingSection from './headingSection.svelte';
</script>
  
<HeadingSection textColor="text-white" title="À propos" />
<div class="container mx-auto px-6 flex flex-col gap-6">
    <p class="pt-6">
      Passionnée par l'innovation et la programmation, je me démarque par mon sens de la logique et ma capacité à apprendre rapidement. Très motivée, j'aime me plonger dans des projets complexes, chercher des solutions créatives, et toujours dépasser les attentes. L’expérience utilisateur est essentielle : un site peut être techniquement performant, mais sans une architecture intuitive et une ergonomie soignée, il perd de sa valeur.
    </p>
    <ul class="flex  flex-wrap  justify-between  gap-4">
      <li class="flex gap-6">
        <figure>
          <img src="/atome.svg" alt="un atome" class="w-full h-auto" />
        </figure>
        <p class="md:max-w-[15.4375rem]">
          Je m'adapte rapidement aux nouveaux frameworks et environnements, en intégrant efficacement les technologies pour répondre aux besoins spécifiques des projets.
        </p>
      </li>
      <li class="flex gap-6">
        <figure>
          <img src="/ux.png" alt="Interface UX" class="w-full h-auto" />
        </figure>
        <p class="md:max-w-[15.4375rem]">
          Je conçois des interfaces intuitives centrées sur l'utilisateur, alliant esthétique et accessibilité pour créer des expériences fluides et engageantes.
        </p>
      </li>
      <li class="flex gap-6">
        <figure>
          <img src="/accesibilite.png" alt="accessibilité et SEO" class="w-full h-auto" />
        </figure>
        <p class="md:max-w-[15.4375rem]">
          Je maîtrise les bonnes pratiques en accessibilité et SEO, en optimisant le code et les performances pour garantir des sites web accessibles, rapides et bien référencés.
        </p>
      </li>
    </ul>
</div>
  