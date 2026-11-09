// Profit and Wonder: load the YouTube player only after a click (see /privacy.html#video).
document.addEventListener("click", function (event) {
  var link = event.target.closest && event.target.closest("a[data-yt]");
  if (!link || event.ctrlKey || event.metaKey || event.shiftKey || event.button !== 0) return;
  event.preventDefault();
  var frame = document.createElement("iframe");
  // A page opened as /v/<slug>/?t=N (a chapter link from search) starts the video at N seconds.
  var start = /^d+$/.test(new URLSearchParams(location.search).get("t") || "") ? "&start=" + new URLSearchParams(location.search).get("t") : "";
  frame.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(link.dataset.yt) + "?autoplay=1&rel=0" + start;
  frame.title = link.dataset.title || "YouTube video";
  frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  frame.allowFullscreen = true;
  frame.referrerPolicy = "strict-origin-when-cross-origin";
  link.replaceWith(frame);
  frame.focus();
});
