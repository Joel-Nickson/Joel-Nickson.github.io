<script lang="ts">
  let email: String = null,
    subject: String = null,
    message: String = null,
    emailval = false,
    subjectval = false,
    messageval = false;

  function validatemail(e) {
    email = e.target.value;
    if (
      email &&
      !!email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    )
      emailval = true;
    else emailval = false;

    console.log(emailval, email);
  }

  function validatesubject(e) {
    subject = e.target.value;
    if (subject) subjectval = true;
    else subjectval = false;
    console.log(subjectval, subject);
  }

  function validatetextarea(e) {
    message = e.target.value;
    if (message) messageval = true;
    else messageval = false;
    console.log(messageval, message);
  }
</script>

<header>
  <h2 class="h2 article-title">Contact</h2>
</header>

<section class="mapbox" data-mapbox>
  <figure>
    <iframe
      title="google map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
      width="400"
      height="300"
      loading="lazy"
    />
  </figure>
</section>

<section class="contact-form">
  <h3 class="h3 form-title">Contact Form</h3>

  <form action="#" class="form" data-form>
    <div class="input-wrapper">
      <input
        value={subject}
        on:input={validatesubject}
        type="text"
        name="fullname"
        class="form-input"
        placeholder="Full name"
        required
        data-form-input
      />

      <input
        value={email}
        on:input={validatemail}
        type="email"
        name="email"
        class="form-input"
        placeholder="Email address"
        required
        data-form-input
      />
    </div>

    <textarea
      value={message}
      on:input={validatetextarea}
      name="message"
      class="form-input"
      placeholder="Your Message"
      required
      data-form-input
    />

    {#if emailval && subjectval && messageval}
      <button class="form-btn" type="submit" data-form-btn>
        <ion-icon name="paper-plane" />
        <span>Send Message</span>
      </button>
    {:else}
      <button class="form-btn" type="submit" disabled data-form-btn>
        <ion-icon name="paper-plane" />
        <span>Send Message</span>
      </button>
    {/if}
  </form>
</section>
