<script lang="ts">
  import About from "./lib/About.svelte";
  import Blog from "./lib/Blog.svelte";
  import Contact from "./lib/Contact.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import Portfolio from "./lib/Portfolio.svelte";
  import Resume from "./lib/Resume.svelte";
  import Sidebar from "./lib/Sidebar.svelte";
</script>

<main>
  <Sidebar />

  <div class="main-content">
    <Navbar />
    <About />
    <Resume />
    <Portfolio />
    <Blog />
    <Contact />
  </div>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
</style>
