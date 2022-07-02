<script lang="ts">
  import { isActiveData } from "./lib/stores";

  import About from "./lib/About.svelte";
  import Blog from "./lib/Blog.svelte";
  import Contact from "./lib/Contact.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import Portfolio from "./lib/Portfolio.svelte";
  import Resume from "./lib/Resume.svelte";
  import Sidebar from "./lib/Sidebar.svelte";

  // isActiveData.subscribe((data) => {
  //   console.log(data);
  // });
</script>

<main>
  <Sidebar />

  <div class="main-content">
    <Navbar />
    <article class="about {$isActiveData.about}" data-page="about">
      <About />
    </article>
    <article class="resume {$isActiveData.resume}" data-page="resume">
      <Resume />
    </article>
    <article class="portfolio {$isActiveData.portfolio}" data-page="portfolio">
      <Portfolio />
    </article>
    <article class="blog {$isActiveData.blog}" data-page="blog">
      <Blog />
    </article>
    <article class="contact {$isActiveData.contact}" data-page="contact">
      <Contact />
    </article>
  </div>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
</style>
