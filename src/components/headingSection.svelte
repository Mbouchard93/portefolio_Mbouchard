<script>
    export let textColor = 'text-blueDark '; 
    export let title;
  </script>
  
  <header class="w-full py-4 border-y border-y-accent">
    <div class="container mx-auto px-6">   
      <h2 class={`text-[1.75rem] m:text-[2rem] italic lg:text-[2.5rem] font-heading uppercase ${textColor}`}>
        {title}
      </h2>
    </div>
  </header>
  