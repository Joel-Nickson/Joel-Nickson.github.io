<script lang="ts">
  import {
    education,
    experiences,
    projects,
    skills,
    selectSkills,
    projectsComingSoon,
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
          Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit
          atque corrupti, quos dolores et quas molestias exceptur.
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
        <h4 class="h4 timeline-item-title">{item.name}</h4>

        <span>{item.start} — {item.end}</span>

        <p class="timeline-text">
          Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit
          atque corrupti, quos dolores et quas molestias exceptur.
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

    <h3 class="h3">Projects</h3>
  </div>

  <ol class="timeline-list">
    {#each projects as item}
      <li class="timeline-item">
        <h4 class="h4 timeline-item-title">{item.company}</h4>

        <span>{item.start} — {item.end}</span>

        <p class="timeline-text">
          {item.description}
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
