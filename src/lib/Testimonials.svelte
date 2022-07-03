<script>
  import { testimonials, modalContent } from "./stores";

  function toggleModal() {
    modalContent.update((content) => {
      content.src = this.querySelector("[data-testimonials-avatar]").src;
      content.alt = this.querySelector("[data-testimonials-avatar]").alt;
      content.text = this.querySelector("[data-testimonials-text]").innerText;
      content.isActive = !content.isActive;
      return content;
    });
  }
</script>

<section class="testimonials">
  <h3 class="h3 testimonials-title">Testimonials</h3>

  <ul class="testimonials-list has-scrollbar">
    {#each testimonials as item}
      <li class="testimonials-item">
        <div on:click={toggleModal} class="content-card" data-testimonials-item>
          <figure class="testimonials-avatar-box">
            <img
              src={item.src}
              alt={item.alt}
              width="60"
              data-testimonials-avatar
            />
          </figure>

          <h4 class="h4 testimonials-item-title" data-testimonials-title>
            {item.alt}
          </h4>

          <div class="testimonials-text" data-testimonials-text>
            <p>
              {item.testimonial}
            </p>
          </div>
        </div>
      </li>
    {/each}
  </ul>
</section>
