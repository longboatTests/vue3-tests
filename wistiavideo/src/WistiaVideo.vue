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
$video-icon-bgcolor: white !default;
$video-icon-bgcolor-onhover: #bd4411 !default;
$video-icon-color: white !default;
$video-icon-color-onhover: #bd4411 !default;
$video-overlay-bgcolor-onhover: #bd4411 !default;
$video-strip-color: #bd4411 !default;
$video-strip-height: 16px !default;
$video-box-shadow: -1px 1px 9px 2px #bd45101f !default;
$video-info-bgcolor: white !default;
$video-info-box-shadow: -1px 1px 9px 2px #bd45101f !default;
.video {
  display: flex;
  flex-direction: column;

  &__play-alink {
    display: block;
  }

  &__thumbnail-wrapper {
    border-bottom: $video-strip-height $video-strip-color solid;
    box-shadow: $video-box-shadow;
    // background-color: #eee;

    &:hover {
      .video__play-animator {
        width: 100%;
        height: 100%;
      }

      i {
        background: $video-icon-color;
      }

      .video__play-link-wrapper {
        background: $video-icon-bgcolor-onhover;
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
    background: $video-icon-bgcolor;
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
    background: $video-overlay-bgcolor-onhover;
    opacity: 0.5;
    width: 0%;
    height: 0%;
    transition: all 0.3s ease;
  }

  &__info {
    border-radius: 12px;
    background-color: $video-info-bgcolor;
    position: relative;
    transition: all 0.3s ease;
    top: -10px;
    padding: 20px 30px;
    box-shadow: $video-info-box-shadow;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  i {
    background: $video-icon-color-onhover;
    transition: all 0.3s ease;
  }
}

@media screen and (min-width: 1000px) {
  .video {
    flex-direction: row;

    &__thumbnail-wrapper {
      width: 55%;
      position: relative;
      right: -5px;
      border-bottom-width: calc($video-strip-height/2);
    }

    &__info {
      width: 45%;
      top: 0;
      left: -5px;
    }
  }
}
</style>
