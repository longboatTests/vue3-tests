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
      <template v-slot:default="props">
        <p class="cookie-text">
          <!-- @slot Use this slot to add the body content to be displayed -->
          <slot name="body-content"></slot>
          <privacy-policy-link class="privacy-link" :locale="locale">
            <!-- @slot Use this slot to add the text for the privacy policy link/button-->
            <slot name="privacy-policy-link-text"></slot>
          </privacy-policy-link>
        </p>
        <ui-button
          class="accept-btn btn--small btn--primary"
          @click="props.accept"
        >
          <!-- @slot Use this slot to add the accept button label -->
          <slot name="accept-btn-text"></slot>
        </ui-button>
        <br />
        <ui-button class="reject-btn btn--text" @click="props.close">
          <!-- @slot Use this slot to add the reject button label -->
          <slot name="reject-btn-text"></slot>
        </ui-button>
      </template>
    </cookie-law>
  </div>
</template>

<script>
import CookieLaw from 'vue-cookie-law';
import Cookies from 'js-cookie';
import UiButtonVue from '../../uibutton/src/Button.vue';
import PrivacyPolicyLinkVue from '../../privacypolicylink/src/PrivacyPolicyLink.vue';

/**
 * Displays the Cookie Policy modal
 * @displayName Cookie Modal
 */
export default {
  name: 'cookie-law-modal',
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
    if (Cookies.get('CNcookies') === 'false') {
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
      Cookies.set('CNcookies', 'false', 0);
      // Get the modal
      var modal = document.getElementById('ux-consent-modal');
      modal.style.display = 'none';
    },
  },
};
</script>

<style lang="scss">
$consent-modal-bg-color: black !default;
$consent-modal-text-color: white !default;
$consent-modal-accept-btn-bg-color: (
  default: #2f802f,
  onhover: darken(#2f802f, 15%),
  onfocus: darken(#2f802f, 10%),
  onactive: darken(#2f802f, 10%),
) !default;
$consent-modal-accept-btn-text-color: (
  default: white,
  onhover: white,
  onfocus: white,
  onactive: white,
) !default;
$consent-modal-decline-btn-text-color: (
  default: #0a97c2,
  onhover: #0a97c2,
  onfocus: #0a97c2,
  onactive: #0a97c2,
) !default;
$consent-modal-privacy-policy-text-color: (
  default: #0a97c2,
  onhover: #0a97c2,
  onfocus: #0a97c2,
  onactive: #0a97c2,
) !default;

#ux-consent-modal {
  position: fixed;
  z-index: 999;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  // height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(75, 75, 75, 0.2);
}

.accept-btn {
  padding: 4px 32px;
  background: map-get($consent-modal-accept-btn-bg-color, default);
  color: map-get($consent-modal-accept-btn-text-color, default);

  &:hover {
    color: map-get($consent-modal-accept-btn-text-color, onhover);
    background: map-get($consent-modal-accept-btn-bg-color, onhover);
  }

  /*margin-right: 20px;*/
}

.reject-btn {
  color: map-get($consent-modal-decline-btn-text-color, default) !important;

  &:hover {
    text-decoration: underline;
  }
}

.Cookie--base {
  background: $consent-modal-bg-color !important;
  color: $consent-modal-text-color !important;
  padding: 20px 16px 10px !important;
}

.Cookie {
  flex-direction: row !important;

  @media screen and (min-width: 1025px) {
    flex-direction: column !important;
  }
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
  color: map-get($consent-modal-privacy-policy-text-color, default) !important;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>
