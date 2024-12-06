<script>
    import '../app.css';
    import Header from '../components/header.svelte'
    import About from  '../components/about.svelte'
    import Skill from '../components/skill.svelte'
    import Project from '../components/project.svelte'
    import Contact from '../components/contact.svelte'
    import Footer from '../components/footer.svelte'


    const sections = [
        { id: "about", name: "À propos" },
        { id: "project", name: "Projet" },
        { id: "contact", name: "Contact" }
    ];
</script>

<Header {sections}/>
 <section class="bg-blueLight py-6 rounded-b-[3.125rem] ">
     <div class="container mx-auto px-6 grid grid-cols-2">
         <h1 class=" z-10 text-left text-4xl font-heading uppercase text-black text-[1.5625rem]  md:text-[5.25rem] leading-tight">développeur front-end passionné par le design UX</h1>
         <figure class="h-[18.75rem] w-[11.0625rem] md:w-[22.5625rem] md:h-[39.375rem] bg-white border border-black  rounded-lg overflow-hidden place-self-end justify-self-end"> 
            <img src="/profil_picture_mb.svg" alt="aaaaa" class="w-full h-auto object-cover" />
         </figure>
        </div> 
</section>
<main>
    <section id="about" class="bg-blueDark text-white py-10">
        <About />
    </section>
    <section class="bg-blueLight text-blueDark py-10 rounded-t-[3.125rem]">
        <Skill/>
    </section>
    <section id="project" class="bg-blueDark text-white py-10 z-10 relative rounded ">
        <Project />
    </section>

    <section id="contact" class="bg-blueLight text-blueDark py-12 rounded-t-[3.125rem] ">
        <Contact />
    </section>
</main>
<Footer {sections}/>
