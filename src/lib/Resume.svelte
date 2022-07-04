<script lang="ts">
  import { each } from "svelte/internal";

  import {
    education,
    experiences,
    skills,
    selectSkills,
    profile,
  } from "./stores";

  let skill = selectSkills.sort((a, b) => {
    return parseInt(b.level) - parseInt(a.level);
  });
</script>

<header>
  <h2 class="h2 article-title">Resume</h2>
</header>

<section class="timeline">
  <div class="title-wrapper">
    <div class="icon-box">
      <ion-icon name="book-outline" />
    </div>

    <h3 class="h3">Education</h3>
  </div>

  <ol class="timeline-list">
    {#each education as item}
      <li class="timeline-item">
        <h4 class="h4 timeline-item-title">{item.name}</h4>

        <span>{item.start} — {item.end}</span>

        <p class="timeline-text">
          {item.description}
        </p>
      </li>
    {/each}
  </ol>
</section>

<section class="timeline">
  <div class="title-wrapper">
    <div class="icon-box">
      <ion-icon name="book-outline" />
    </div>

    <h3 class="h3">Experience</h3>
  </div>

  <ol class="timeline-list">
    {#each experiences as item}
      <li class="timeline-item">
        <h4 class="h4 timeline-item-title">{item.name}, {item.role}</h4>

        <span>{item.start} — {item.end}</span>

        <p class="timeline-text">
          {#each item.description as desc}
            {desc} <br />
          {/each}
        </p>
      </li>
    {/each}
  </ol>
</section>

<section class="skill">
  <h3 class="h3 skills-title">My skills</h3>

  <ul class="skills-list content-card">
    {#each skill as item}
      <li class="skills-item">
        <div class="title-wrapper">
          <h5 class="h5">{item.name}</h5>
          <data value={item.value}>{item.value}%</data>
        </div>

        <div class="skill-progress-bg">
          <div class="skill-progress-fill" style="width: {item.value}%;" />
        </div>
      </li>
    {/each}
  </ul>
</section>
