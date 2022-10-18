<template>
  <div v-if="videoThumbnail">
    <!-- Main -->
    <div class="video">
      <div class="video__thumbnail-wrapper">
        <span
          :class="
            'wistia_embed wistia_async_' +
            videoID +
            ' popover=true popoverContent=link'
          "
          style="position: relative"
        >
          <a href="#" class="video__play-alink">
            <img
              ref="img_src"
              :src="videoThumbnail"
              class="video__thumbnail"
              alt=""
            />
            <span class="video__play-animator"></span>
            <span class="video__play-link-wrapper">
              <slot name="icon" />
              <!--<i class="fas fa-play-circle video__play-icon"></i> -->
            </span>
          </a>
        </span>
      </div>
      <div class="video__info">
        <slot name="info" />
      </div>
    </div>
  </div>
</template>

<script>
/**
 * Wistia Video component
 * @displayName Wistia Video
 */
export default {
  data() {
    return {
      videoThumbnail: '',
    };
  },
  props: {
    /**
     * The wistia video id
     */
    videoID: {
      type: String,
      required: true,
    },
  },

  created() {
    this.getWistiaThumbnail(this.videoID).then((thumbnailUrl) => {
      this.videoThumbnail = thumbnailUrl;
    });
  },

  methods: {
    getWistiaThumbnail: async function (wistiaID) {
      let url =
        'https://fast.wistia.net/oembed?url=http://home.wistia.com/medias/' +
        wistiaID +
        '?embedType=async&videoWidth=640';

      const res = await fetch(url);
      const data = await res.json();

      let thumbnail_url = data.thumbnail_url + '&' + 'image_resize=' + 640;
      return thumbnail_url;
    },
  },
};
</script>

<style lang="scss">
$ux-video-icon-bg-color-default: white !default;
$ux-video-icon-bg-color-onhover: #bd4411 !default;
$ux-video-icon-color-default: #bd4411 !default;
$ux-video-icon-color-onhover: white !default;
$ux-video-overlay-bg-color-onhover: #bd4411 !default;
$ux-video-strip-color: #bd4411 !default;
$ux-video-strip-height: 16px !default;
$ux-video-box-shadow: -1px 1px 9px 2px #bd45101f !default;
$ux-video-info-bg-color: white !default;
$ux-video-info-border-radius: 12px !default;
$ux-video-info-box-shadow: -1px 1px 9px 2px #bd45101f !default;
.video {
  display: flex;
  flex-direction: column;

  &__play-alink {
    display: block;
  }

  &__thumbnail-wrapper {
    border-bottom: var(--ux-video-strip-height, $ux-video-strip-height)
      var(--ux-video-strip-color, $ux-video-strip-color) solid;
    box-shadow: var(--ux-video-box-shadow, $ux-video-box-shadow);
    // background-color: #eee;

    i {
      background: var(
        --ux-video-icon-color-default,
        $ux-video-icon-color-default
      );
      transition: all 0.3s ease;
    }

    &:hover {
      .video__play-animator {
        width: 100%;
        height: 100%;
      }

      i {
        background: var(
          --ux-video-icon-color-onhover,
          $ux-video-icon-color-onhover
        );
      }

      .video__play-link-wrapper {
        background: var(
          --ux-video-icon-bg-color-onhover,
          $ux-video-icon-bg-color-onhover
        );
      }
    }
  }

  &__thumbnail {
    vertical-align: middle;
    width: 100%;
  }

  &__play-link-wrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    // border: solid 3px white;
    background: var(--ux-video-icon-bg-color, $ux-video-icon-bg-color-default);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 0.3s ease;
  }

  &__play-animator {
    position: absolute;
    top: 50%;
    left: 50%;
    bottom: 50%;
    transform: translate(-50%, -50%);
    background: var(
      --ux-video-overlay-bg-color-onhover,
      $ux-video-overlay-bg-color-onhover
    );
    opacity: 0.5;
    width: 0%;
    height: 0%;
    transition: all 0.3s ease;
  }

  &__info {
    border-radius: var(
      --ux-video-info-border-radius,
      $ux-video-info-border-radius
    );
    background-color: var(--ux-video-info-bg-color, $ux-video-info-bg-color);
    position: relative;
    transition: all 0.3s ease;
    top: -10px;
    padding: 20px 30px;
    box-shadow: var(--ux-video-info-box-shadow, $ux-video-info-box-shadow);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}

@media screen and (min-width: 1000px) {
  .video {
    flex-direction: row;

    &__thumbnail-wrapper {
      width: 55%;
      position: relative;
      right: -5px;
      border-bottom-width: calc(
        var(--ux-video-strip-height, $ux-video-strip-height) / 2
      );
    }

    &__info {
      width: 45%;
      top: 0;
      left: -5px;
    }
  }
}
</style>
