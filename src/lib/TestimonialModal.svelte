<script lang="ts">
  import { modalContent } from "./stores";

  function toggleModal() {
    modalContent.update((content) => {
      content.isActive = !content.isActive;
      return content;
    });
  }
</script>

<div
  class="modal-container {$modalContent.isActive ? 'active' : ''}"
  data-modal-container
>
  <div
    on:click={toggleModal}
    class="overlay {$modalContent.isActive ? 'active' : ''}"
    data-overlay
  />

  <section class="testimonials-modal">
    <button on:click={toggleModal} class="modal-close-btn" data-modal-close-btn>
      <ion-icon name="close-outline" />
    </button>

    <div class="modal-img-wrapper">
      <figure class="modal-avatar-box">
        <img
          src={$modalContent.src}
          alt={$modalContent.alt}
          width="80"
          data-modal-img
        />
      </figure>
      <img src="images/icon-quote.svg" alt="quote icon" />
    </div>

    <div class="modal-content">
      <h4 class="h3 modal-title" data-modal-title>{$modalContent.alt}</h4>
      <time datetime="2021-06-14">14 June, 2021</time>
      <div data-modal-text>
        <p>
          {$modalContent.text}
        </p>
      </div>
    </div>
  </section>
</div>
