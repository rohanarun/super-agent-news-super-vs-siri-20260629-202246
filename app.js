(function(){
  if(!window.gsap) return;
  gsap.from('.hero h1', {y: 40, opacity: 0, duration: 1, ease: 'power3.out'});
  gsap.from('.hero-sub', {y: 20, opacity: 0, duration: 1, delay: 0.2});
})();