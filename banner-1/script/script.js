var $panel1 = $("#panel1"),
  $panel2 = $("#panel2"),
  $panel3 = $("#panel3"),
  $panel1Text = $("#panel1 h1"),
  $panel2Text = $("#panel2 h2"),
  $info = $("#info"),
  $list = $("li"),
  $orderNow = $("#orderNow");

var tl = new TimelineMax({ delay: 0.5 });

tl.from($panel1, 0.5, { autoAlpha: 0 })
  .from($panel1Text, 0.5, { scale: 0.5, autoAlpha: 0, ease: Back.easeOut })
  .set($panel2, { top: 0 }, "+=2")
  .from($panel2, 0.2, { autoAlpha: 0, scale: 1.5 })
  .from($panel2Text, 0.2, { top: "+=62" }, "+=0.5")
  .to($panel2Text, 0.2, { top: "+=62" }, "+=0.2")
  .set($panel3, { top: 0 })
  .from($info, 0.5, { top: 250 }, "facility")
  .to($panel2, 0.5, { top: -60 }, "facility")
  .staggerFrom($list, 0.3, { autoAlpha: 0, left: 50 }, 0.1, "+=0.2")
  .from($orderNow, 0.5, { scale: 0, autoAlpha: 0, ease: Back.easeOut });

$("#play").click(function () {
  if (tl.progress() != 1) tl.play();
  else tl.restart();
});

$("#pause").click(function () {
  tl.pause();
});

$("#reverse").click(function () {
  tl.reverse();
});

$("#resume").click(function () {
  tl.resume();
});

$("#restart").click(function () {
  tl.restart();
});
