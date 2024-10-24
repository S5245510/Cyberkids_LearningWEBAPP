/*
 * Star Wars opening crawl from 1977
 */

StarWars = (function() {
  
  /* 
   * Constructor
   */
  function StarWars(args) {
    // Context wrapper
    this.el = $(args.el);
    
    // Audio to play the opening crawl
    this.audio = this.el.find('audio').get(0);
    
    // Start the animation
    this.start = this.el.find('.start');
    
    // The animation wrapper
    this.animation = this.el.find('.animation');
    
    // Remove animation and shows the start screen
    this.reset();

    // Start the animation on click
    this.start.on('click', $.proxy(this.startAnimation, this));
  }
  
  StarWars.prototype.startAnimation = function() {
    this.start.hide();
    this.audio.play();
    this.el.append(this.animation);
    
    // Force a reflow to ensure the logo animation starts
    this.el.find('.logo')[0].offsetHeight;
    
    // Set timeout to redirect after 23 seconds
    setTimeout(this.redirectToChapterList, 28000);
  };
  
  StarWars.prototype.redirectToChapterList = function() {
    window.location.href = 'MissionStart.html';
  };
  
  StarWars.prototype.reset = function() {
    this.start.show();
    this.cloned = this.animation.clone(true);
    this.animation.remove();
    this.animation = this.cloned;
  };

  return StarWars;
})();

$(document).ready(function() {
  const intro = new StarWars({
    el : '.starwars'
  });
});