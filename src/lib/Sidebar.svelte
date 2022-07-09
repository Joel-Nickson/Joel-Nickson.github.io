<script>
  import { profile } from "./stores";
  let mobilenowithoutspace = profile.mobile
    .replaceAll("-", "")
    .replaceAll(" ", "")
    .replace(")", "")
    .replace("(", "");
  let isMobileMenu = "active";
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
      <li class="contact-item">
        <div class="icon-box">
          <ion-icon name="mail-outline" />
        </div>

        <div class="contact-info">
          <p class="contact-title">Email</p>

          <a href="mailto:{profile.email}" class="contact-link"
            >{profile.email}</a
          >
        </div>
      </li>

      <li class="contact-item">
        <div class="icon-box">
          <ion-icon name="phone-portrait-outline" />
        </div>

        <div class="contact-info">
          <p class="contact-title">Phone</p>

          <a href="tel:{mobilenowithoutspace}" class="contact-link"
            >{profile.mobile}</a
          >
        </div>
      </li>

      <li class="contact-item">
        <div class="icon-box">
          <ion-icon name="calendar-outline" />
        </div>

        <div class="contact-info">
          <p class="contact-title">Birthday</p>

          <time datetime="2000-09-29">Sep 29, 2000</time>
        </div>
      </li>

      <li class="contact-item">
        <div class="icon-box">
          <ion-icon name="location-outline" />
        </div>

        <div class="contact-info">
          <p class="contact-title">Location</p>

          <address>{profile.location}</address>
        </div>
      </li>
    </ul>

    <div class="separator" />

    <ul class="social-list">
      <li class="social-item">
        <a href={profile.github} class="social-link">
          <ion-icon name="logo-github" />
        </a>
      </li>

      <li class="social-item">
        <a href={profile.twitter} class="social-link">
          <ion-icon name="logo-twitter" />
        </a>
      </li>

      <li class="social-item">
        <a href={profile.linkedin} class="social-link">
          <ion-icon name="logo-linkedin" />
        </a>
      </li>
    </ul>
  </div>
</aside>
