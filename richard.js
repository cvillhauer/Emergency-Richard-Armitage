let richardArray = [];
richardArray.push("https://s-media-cache-ak0.pinimg.com/originals/a9/08/13/a9081398fd6ac9cee3d3c5b900f55d78.jpg");
richardArray.push("http://68.media.tumblr.com/tumblr_ma1flewOUz1rug3xvo1_1280.jpg");
richardArray.push("https://i.redd.it/ow3g0hotnb8y.jpg");
richardArray.push("https://s-media-cache-ak0.pinimg.com/736x/50/76/84/507684aa8e3b3c565c08c5afbcea24a7.jpg");
richardArray.push("https://meandrichard.files.wordpress.com/2012/01/ns4-214.jpg");
richardArray.push("https://gratianads90.files.wordpress.com/2014/08/northsouthepi3-172-richardarmitage-asjohnthornton_aub2814ranet-sized-brt.jpg");
richardArray.push("https://i1.wp.com/www.frockflicks.com/wp-content/uploads/2016/07/RichardArmitage-2005NorthSouth5.jpg");
richardArray.push("https://knightleyemma.files.wordpress.com/2013/01/ra-bw.jpg");
richardArray.push("https://meandrichard.files.wordpress.com/2012/01/ns4-214.jpg");
richardArray.push("https://s-media-cache-ak0.pinimg.com/736x/97/d8/c8/97d8c8fbfd01bced2a05ef661b69b92b.jpg");
richardArray.push("https://s-media-cache-ak0.pinimg.com/564x/cf/fb/17/cffb1778434a619438b1049635c95fd4.jpg");
richardArray.push("https://meandrichard.files.wordpress.com/2012/10/ns4-208.jpg");
richardArray.push("http://cdn.pcwallart.com/images/richard-armitage-thorin-makeup-wallpaper-1.jpg");
richardArray.push("http://68.media.tumblr.com/6349384bf7aa1e7d81be97f3cf47fb5d/tumblr_mwo338vJJA1rgoke8o1_1280.png");
richardArray.push("http://cdn.pcwallart.com/images/the-hobbit-the-desolation-of-smaug-wallpaper-thorin-wallpaper-3.jpg");
richardArray.push("https://meandrichard.files.wordpress.com/2013/07/rh107_020.jpg");
richardArray.push("http://stuffpoint.com/world-sexiest-people/image/7616-world-sexiest-people-richard-armitage-in-robin-hood.jpg");
richardArray.push("http://25.media.tumblr.com/ad64b19099bddb5f584cb64c752e5c2d/tumblr_mibessNt5T1rmd80qo2_1280.jpg");
richardArray.push("https://i0.wp.com/www.frockflicks.com/wp-content/uploads/2016/07/RichardArmitage-2009robinhood-shirtless.jpg");
richardArray.push("https://thearmitageeffect.files.wordpress.com/2013/06/robertascroft-31.jpg");
richardArray.push("https://heirsofdurin.files.wordpress.com/2012/04/tumblr_ndk38dduzw1sml467o1_1280.jpg");
richardArray.push("http://4.bp.blogspot.com/-49pjaPFIj4E/Uqee6SkP4bI/AAAAAAAAccc/1uzi2nru6ec/s1600/proxy+(64).jpg");
richardArray.push("https://s-media-cache-ak0.pinimg.com/564x/54/2b/ec/542bec8054cdedc85a463c97263f3f2b.jpg");
richardArray.push("https://meandrichard.files.wordpress.com/2012/07/29-thorin-ewipad-july2012.jpg");
richardArray.push("https://rafrenzy.files.wordpress.com/2015/01/richard-armitage-with-the-key.jpg");
richardArray.push("http://24.media.tumblr.com/a84bf7e1b76cce7ffa6646c02c756d86/tumblr_mg9ehyTo321qejlzto1_1280.jpg");
//richardArray.push("");

//let iterator = 0;

function generateImage(){
  let randomIndex = Math.floor(Math.random() * richardArray.length);
  console.log("Image #" + randomIndex + " was generated.");
  $("#richard").html("<img src='" + richardArray[randomIndex] + "' alt='Richard Armitage' style='max-height: 750px;' />");
  //console.log("Image #" + iterator + " was generated.");
  //$("#richard").html("<img src='" + richardArray[iterator] + "' alt='Richard Armitage' style='max-height: 750px;' />");
  //iterator = iterator + 1;
}
