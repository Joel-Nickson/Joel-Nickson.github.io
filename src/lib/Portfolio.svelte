<script>
  import { portfolio_content, portfolio_category } from "./stores";
  let currCategory = "all";
  const selectCategory = (e) =>
    (currCategory = e.target.innerText.toLowerCase());
  const categorySet = new Set(portfolio_category);
</script>

<header>
  <h2 class="h2 article-title">Portfolio</h2>
</header>

<section class="projects">
  <ul class="filter-list">
    {#each portfolio_category as item}
      <li class="filter-item">
        <button
          on:click={selectCategory}
          class={currCategory === item ? "active" : ""}
          data-filter-btn>{item}</button
        >
      </li>
    {/each}
  </ul>
  <ul class="project-list">
    {#each portfolio_content as item}
      <li
        class="project-item  {currCategory === 'other' &&
        !categorySet.has(item.datacategory)
          ? 'active'
          : item.datacategory === currCategory || currCategory === 'all'
            ? 'active'
            : ''}"
        data-filter-item
        data-category={item.datacategory}
      >
        <a href={item.target !== "" ? item.target : "#"}>
          <figure class="project-img">
            <div class="project-item-icon-box">
              <ion-icon name="eye-outline" />
            </div>

            <img src={item.src} alt={item.alt} loading="lazy" />
          </figure>

          <h3 class="project-title">{item.alt}</h3>

          <p class="project-category">{item.datacategory}</p>
        </a>
      </li>
    {/each}
  </ul>
</section>
