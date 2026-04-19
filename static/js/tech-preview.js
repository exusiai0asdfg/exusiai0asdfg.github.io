(function () {
  var root = document.documentElement;
  if (!root) return;

  root.classList.add("tech-preview-enabled");

  function shouldSkipInit() {
    return window.location.pathname === "/about/" && document.referrer.indexOf(window.location.origin) === 0;
  }

  function shouldUseStaticHomeBackground() {
    if (window.location.pathname !== "/") return false;

    try {
      var coarseNoHover = window.matchMedia && window.matchMedia("(hover: none) and (pointer: coarse)").matches;
      var mobileUA = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent || "");
      var uaDataMobile = window.navigator.userAgentData && window.navigator.userAgentData.mobile === true;
      var narrowScreen = Math.min(window.innerWidth || 0, screen.width || 0) > 0 && Math.min(window.innerWidth || 0, screen.width || 0) < 900;
      if (mobileUA || uaDataMobile || (coarseNoHover && narrowScreen)) return true;
    } catch (e) {
      return false;
    }

    return false;
  }

  function buildOverlay() {
    if (document.getElementById("tech-hud-overlay")) return;

    var overlay = document.createElement("div");
    overlay.id = "tech-hud-overlay";
    overlay.setAttribute("aria-hidden", "true");
    overlay.innerHTML = [
      '<div class="tech-layer tech-gradient"></div>',
      '<div class="tech-layer tech-grid"></div>',
      '<div class="tech-layer tech-scan"></div>',
      '<div class="tech-layer tech-pointer"></div>',
      '<i class="tech-corner corner-tl"></i>',
      '<i class="tech-corner corner-tr"></i>',
      '<i class="tech-corner corner-bl"></i>',
      '<i class="tech-corner corner-br"></i>'
    ].join("");

    document.body.appendChild(overlay);
  }

  function setupReadingProgress() {
    var articleRoot = document.querySelector(".article-content") || document.querySelector("article");
    if (!articleRoot) return;

    if (!document.getElementById("tech-reading-progress")) {
      var bar = document.createElement("div");
      bar.id = "tech-reading-progress";
      bar.setAttribute("aria-hidden", "true");
      document.body.appendChild(bar);
    }

    var ticking = false;
    function updateProgress() {
      var scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
      var scrollMax = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      var ratio = Math.min(1, Math.max(0, scrollTop / scrollMax));
      root.style.setProperty("--tech-read-progress", (ratio * 100).toFixed(2) + "%");
      ticking = false;
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateProgress);
    }

    updateProgress();
    document.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
  }

  function setupHomeIntro() {
    if (window.location.pathname !== "/") return;
    if (!root.classList.contains("tech-home-first")) return;

    root.classList.add("tech-home-intro");
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        root.classList.add("tech-home-intro-ready");
      });
    });
  }

  function setupHomeBackground() {
    if (window.location.pathname !== "/") return;
    if (document.getElementById("tech-home-bg")) return;

    if (shouldUseStaticHomeBackground()) {
      root.classList.add("tech-home-bg-static");
      root.classList.remove("tech-home-bg-dynamic");
      return;
    }

    var layer = document.createElement("div");
    layer.id = "tech-home-bg";
    layer.setAttribute("aria-hidden", "true");
    layer.innerHTML = [
      '<video class="home-bg-video" muted autoplay loop playsinline preload="metadata">',
      '  <source src="/videos/home-bg.webm" type="video/webm">',
      '  <source src="/videos/home-bg.mp4" type="video/mp4">',
      '</video>',
      '<div class="home-bg-layer home-bg-wave"></div>',
      '<div class="home-bg-layer home-bg-noise"></div>',
      '<div class="home-bg-layer home-bg-vignette"></div>'
    ].join("");

    document.body.appendChild(layer);

    var video = layer.querySelector(".home-bg-video");
    if (!video) return;

    var marked = false;

    function markVideoEnabled() {
      if (marked) return;
      marked = true;
      root.classList.add("tech-home-bg-video-enabled");
    }

    function markVideoFailed() {
      if (marked) return;
      root.classList.remove("tech-home-bg-dynamic");
      root.classList.add("tech-home-bg-static");
    }

    video.addEventListener("loadeddata", markVideoEnabled, { once: true });
    video.addEventListener("canplay", markVideoEnabled, { once: true });
    video.addEventListener("error", markVideoFailed, { once: true });

    if (typeof video.play === "function") {
      var maybePlay = video.play();
      if (maybePlay && typeof maybePlay.then === "function") {
        maybePlay
          .then(markVideoEnabled)
          .catch(function () {
            markVideoFailed();
          });
      }
    }
  }

  function setupPointerGlow() {
    if (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) return;

    var ticking = false;
    document.addEventListener("mousemove", function (event) {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        root.style.setProperty("--tech-mx", event.clientX + "px");
        root.style.setProperty("--tech-my", event.clientY + "px");
        ticking = false;
      });
    });
  }

  function setupReveal() {
    var selector = ".article-link--card, .article-card, .hover-card";
    var nodes = document.querySelectorAll(selector);
    if (!nodes.length) return;

    nodes.forEach(function (node) {
      node.classList.add("tech-reveal");
    });

    if (!window.IntersectionObserver) {
      nodes.forEach(function (node) {
        node.classList.add("tech-reveal-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("tech-reveal-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.14 });

    nodes.forEach(function (node) {
      observer.observe(node);
    });
  }

  function setupCardTilt() {
    if (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    var selector = ".article-link--card, .article-card, .hover-card";
    var cards = document.querySelectorAll(selector);
    if (!cards.length) return;

    cards.forEach(function (card) {
      card.classList.add("tech-tilt-card");

      card.addEventListener("mousemove", function (event) {
        var rect = card.getBoundingClientRect();
        var px = (event.clientX - rect.left) / rect.width;
        var py = (event.clientY - rect.top) / rect.height;
        var rotateY = (px - 0.5) * 12;
        var rotateX = (0.5 - py) * 9;
        var lift = 1 + Math.min(0.04, Math.abs(px - 0.5) * 0.03 + Math.abs(py - 0.5) * 0.02);

        card.style.setProperty("--tech-tilt-x", rotateX.toFixed(2) + "deg");
        card.style.setProperty("--tech-tilt-y", rotateY.toFixed(2) + "deg");
        card.style.setProperty("--tech-tilt-scale", lift.toFixed(3));
      });

      card.addEventListener("mouseleave", function () {
        card.style.setProperty("--tech-tilt-x", "0deg");
        card.style.setProperty("--tech-tilt-y", "0deg");
        card.style.setProperty("--tech-tilt-scale", "1");
      });
    });
  }

  function setupPageTransition() {
    if (!document.getElementById("tech-page-transition")) {
      var overlay = document.createElement("div");
      overlay.id = "tech-page-transition";
      overlay.setAttribute("aria-hidden", "true");
      document.body.appendChild(overlay);
    }

    window.addEventListener("pageshow", function () {
      root.classList.remove("tech-page-leaving");
    });

    document.addEventListener("click", function (event) {
      var link = event.target && event.target.closest ? event.target.closest("a[href]") : null;
      if (!link) return;
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (link.target && link.target.toLowerCase() === "_blank") return;
      if (link.hasAttribute("download")) return;
      if (link.getAttribute("data-no-transition") === "1") return;

      var href = link.getAttribute("href");
      if (!href) return;
      if (href.indexOf("#") === 0) return;
      if (/^(mailto:|tel:|javascript:)/i.test(href)) return;

      var url;
      try {
        url = new URL(href, window.location.href);
      } catch (e) {
        return;
      }

      if (url.origin !== window.location.origin) return;
      if (url.href === window.location.href) return;

      event.preventDefault();
      root.classList.add("tech-page-leaving");
      var pageOverlay = document.getElementById("tech-page-transition");
      if (pageOverlay) {
        pageOverlay.classList.add("tech-page-transition--active");
      }
      window.setTimeout(function () {
        window.location.href = url.href;
      }, 170);
    });
  }

  function init() {
    if (shouldSkipInit()) return;
    setupPageTransition();
    buildOverlay();
    setupHomeIntro();
    setupPointerGlow();
    setupReveal();
    setupCardTilt();
    setupReadingProgress();
    setupHomeBackground();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();