<script>
  import { profile, sideBarInfo } from "./stores";
  let isMobileMenu = "deactive";
</script>

<aside class="sidebar {isMobileMenu}" data-sidebar>
  <div class="sidebar-info">
    <figure class="avatar-box">
      <img src="images/my-avatar2.png" alt={profile.name} width="80" />
    </figure>

    <div class="info-content">
      <h1 class="name" title={profile.name}>{profile.name}</h1>

      <p class="title">{profile.role}</p>
    </div>

    <button
      on:click={() => {
        isMobileMenu == "active"
          ? (isMobileMenu = "")
          : (isMobileMenu = "active");
      }}
      class="info_more-btn"
      data-sidebar-btn
    >
      <span>Show Contacts</span>

      <ion-icon name="chevron-down" />
    </button>
  </div>

  <div class="sidebar-info_more">
    <div class="separator" />

    <ul class="contacts-list">
      {#each sideBarInfo.profile as item}
        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name={item.icon} />
          </div>

          <div class="contact-info">
            <p class="contact-title">{item.name}</p>
            <p class="contact-link">{item.value}</p>
          </div>
        </li>
      {/each}
    </ul>

    <div class="separator" />

    <ul class="social-list">
      {#each sideBarInfo.social as item}
        <li class="social-item">
          <a href={item.value} class="social-link" target="_blank">
            <ion-icon name={item.icon} />
          </a>
        </li>
      {/each}
    </ul>
  </div>
</aside>
