function imageSequence(config) {
    //上は関数の定義、変数
    let playhead = {frame: 0},
        ctx = gsap.utils.toArray(config.canvas)[0].getContext("2d"),
        onUpdate = config.onUpdate,
        images,
        //連番の配置とかコピペで
        updateImage = function() {
          ctx.canvas.width = images[0].width;
          ctx.canvas.height = images[0].height;
  
          ctx.drawImage(images[Math.round(playhead.frame)], 0, 0);
          onUpdate && onUpdate.call(this);
        };
      images = config.urls.map((url, i) => {
        let img = new Image();
        img.src = url;
        i || (img.onload = updateImage);
        return img;
      });

      
      return gsap.to(playhead, {
        frame: images.length - 1,
        ease: "none",
        //変数の呼び出し
        onUpdate: updateImage,
        scrollTrigger: config.scrollTrigger
      });
  }
  
  const imageUrls = [];
  for (let i = 0; i <= 23; i++) {
    imageUrls.push(`img/illust_ae${i.toString().padStart(2, '0')}.png`);
  }
  
  imageSequence({
    urls: imageUrls,
    canvas: "#image-sequence",
    scrollTrigger: {
      start: 0,
      end: "max",
      scrub: true
    }
  });
  