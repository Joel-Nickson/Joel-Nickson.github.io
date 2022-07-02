<script>
  import { isActiveData } from "./stores";
  let currlink = "About";
  let navlink = ["About", "Resume", "Portfolio", "Blog", "Contact"];
  function change_page(e) {
    isActiveData.update((isactive) => {
      isactive[currlink.toLowerCase()] = "deactive";
      isactive[e.target.innerText.toLowerCase()] = "active";
      return isactive;
    });
    currlink = e.target.textContent;
  }
  //   const print = (e) => console.log();
</script>

<nav class="navbar">
  <ul class="navbar-list">
    {#each navlink as item}
      {#if item !== currlink}
        <li class="navbar-item">
          <button on:click={change_page} class="navbar-link" data-nav-link>
            {item}
          </button>
        </li>
      {:else}
        <li class="navbar-item">
          <button class="navbar-link active" data-nav-link>{item}</button>
        </li>
      {/if}
    {/each}
  </ul>
</nav>
