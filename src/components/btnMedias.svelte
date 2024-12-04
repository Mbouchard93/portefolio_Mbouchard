<script>
    export let text;
    export let icone;
    export let link; 
    export let className;
</script>
<a
  href={link}
  class=" {className} border border-blueDark min-w-[12.375rem] inline-flex py-[0.6rem] px-[1.875rem] items-center justify-center gap-[0.625rem] rounded-[0.625rem]
bg-accent text-blueDark shadow-btnMedias transition-transform duration-150 ease-in-out hover:shadow-btnMediasHover hover:translate-y-1 hover:underline"
  target="_blank"
  rel="noopener noreferrer"
>
  <span class="font-heading ">{text}</span>
  <img src={icone} alt={'icône de ' + text} class="w-6 h-6" />
</a>
