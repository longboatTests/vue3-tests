export let resizeOverlay = function (elementID) {
  resize();

  function resize() {
    let element = document.getElementById(elementID);
    if (element !== null) {
      element.style.height = window.innerHeight + 'px';
    }
  }

  window.addEventListener(
    'resize',
    function () {
      resize();
    },
    true
  );
};

export let wistiaCookieTracking = function (consent) {
  window._wq = window._wq || [];
  window._wq.push(function (W) {
    W.consent(consent);
    //console.log("Wistia: In privacy mode?", !W.consent()); // returns true or false
  });
};

let playAnimation = function (idElement, elementSelector) {
  let waitTimeInSecs = 15;
  setTimeout(function () {
    var element = document.getElementById(idElement);
    element.classList.remove(elementSelector);
  }, waitTimeInSecs * 60);
};

export let configurePageAnimation = function (elementId, animeClassName) {
  // if (isPageAnimationEnabled && screen.width > 1000) {
  // disable page animation in screens 1000px and above
  let element = document.getElementById(elementId);
  element.classList.add(animeClassName);
  playAnimation(elementId, animeClassName);
  // }
};

export let removeScript = function (scriptId) {
  console.log('removing script');
  let elem = document.getElementById(scriptId);
  return elem.parentNode.removeChild(elem);
};

export let addScript = function (_src, id, callback = () => {}) {
  let script = document.createElement('script');
  script.src = _src;
  script.id = id;
  script.async = true;
  document.body.appendChild(script);
  script.addEventListener('load', function () {
    console.log('script loaded :)');
    callback();
  });
};

export let setPageTitle = (title) => {
  document.title = title;
};

/***
 * CONSENT
 */

export const consent = {
  status: false,
  setStatus(_status) {
    this.status = _status;
  },
};
