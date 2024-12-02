gsap.registerPlugin(ScrollTrigger);

let staticImage = document.querySelector(".static-image");
let animatedGif = document.querySelector(".animated-gif");

ScrollTrigger.create({
  trigger: ".container",
  start: "center center",
  end: "bottom center",
  //スタートとエンドのマーカーを表示
   markers: "true",
  
  //トリガーの中に入ったらどう動くかdurationは速度、一秒は1
  onEnter: () => {
    gsap.to(staticImage, { opacity: 0, duration: 0 });
//キャッシュに関するコード、位置が動いちゃう、コピペ
    animatedGif.src = `img/23N3055_トラヴィス京_crying.gif?${Date.now()}`;
//gifのopasityも同時に静止画と01で交代
    gsap.to(animatedGif, { opacity: 1, duration: 0 });
  },
//またスクロールすると戻る
  onLeaveBack: () => {
    gsap.to(staticImage, { opacity: 1, duration: 0 });
    gsap.to(animatedGif, { opacity: 0, duration: 0 });
  },
});

