<script>
  import { services } from "./stores";
</script>

<section class="service">
  <h3 class="h3 service-title">What i'm doing</h3>

  <ul class="service-list">
    {#each services as item}
      <li class="service-item">
        <div class="service-icon-box">
          <img src={item.src} alt={item.alt} width="40" />
        </div>

        <div class="service-content-box">
          <h4 class="h4 service-item-title">{item.title}</h4>

          <p class="service-item-text">
            {item.desc}
          </p>
        </div>
      </li>
    {/each}
  </ul>
</section>
