<template>
  <div id="ux-consent-modal">
    <cookie-law
      storageName="CNcookies"
      storageType="cookies"
      position="top"
      transitionName="slideFromTop"
      v-on:accept="accepted()"
      v-on:close="rejected()"
    >
      <div slot-scope="props">
        <p class="cookie-text">
          <!-- @slot Use this slot to add the body content to be displayed -->
          <slot name="body-content"></slot>
          <privacy-policy-link class="privacy-link" :locale="locale">
            <!-- @slot Use this slot to add the text for the privacy policy link/button-->
            <slot name="privacy-policy-link-text"></slot>
          </privacy-policy-link>
        </p>
        <ui-button
          class="accept-btn ux-btn--small ux-btn--tertiary"
          @click="props.accept"
        >
          <!-- @slot Use this slot to add the accept button label -->
          <slot name="accept-btn-text"></slot>
        </ui-button>
        <br />
        <ui-button class="reject-btn ux-btn--small" @click="props.close">
          <!-- @slot Use this slot to add the reject button label -->
          <slot name="reject-btn-text"></slot>
        </ui-button>
      </div>
    </cookie-law>
  </div>
</template>

<script>
import CookieLaw from 'vue-cookie-law';
import UiButtonVue from '~/uibutton/src/Button.vue';
import PrivacyPolicyLinkVue from '~/privacypolicylink/src/PrivacyPolicyLink.vue';

/**
 * Displays the Cookie Policy modal
 * @displayName Cookie Modal
 */
export default {
  components: {
    CookieLaw,
    'ui-button': UiButtonVue,
    'privacy-policy-link': PrivacyPolicyLinkVue,
  },
  props: {
    /**
     * locale for privacy policy link
     */
    locale: {
      type: String,
      required: true,
    },
  },
  mounted() {
    if (this.$cookies.get('CNcookies') === 'false') {
      document.getElementById('ux-consent-modal').style.display = 'none';
    }
  },
  methods: {
    accepted() {
      // Get the modal
      var modal = document.getElementById('ux-consent-modal');
      modal.style.display = 'none';
      /**
       * Triggers when user accepts cookies
       */
      this.$emit('consentAccepted', true);
    },
    rejected() {
      this.$cookies.set('CNcookies', 'false', 0);
      // Get the modal
      var modal = document.getElementById('ux-consent-modal');
      modal.style.display = 'none';
    },
  },
};
</script>

<style lang="scss">
/* The Modal (background) */
#ux-consent-modal {
  position: fixed;
  z-index: 999;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(75, 75, 75, 0.2);
}

.reject-btn {
  color: #1caae7;

  &:hover {
    //color: #2f802f;
    text-decoration: underline;
  }
}

.Cookie--base {
  background: black;
  color: white;
  padding: 20px 16px 10px;
}

.Cookie > * {
  margin: auto;
  text-align: center;
}

.cookie-text {
  text-align: center;
  margin: 0;
  font-size: 16px;
  margin-bottom: 5px;
}

.privacy-link {
  color: #1caae7;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>
