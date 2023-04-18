import { gsap } from 'gsap';

export const globalTransition = {
  name: 'global',
  mode: 'out-in',
  onBeforeEnter(el) {
    gsap.set(el, { opacity: 0 });
  },
  onEnter(el, done) {
    gsap.to(el, { opacity: 1, duration: 0.4, onComplete: done });
  },
  onAfterEnter(el) {},
  onEnterCancelled(el) {},
  onBeforeLeave(el) {},
  onLeave(el, done) {
    gsap.to(el, { opacity: 0, duration: 0.4, onComplete: done });
  },
  onAfterLeave(el) {},
  onLeaveCancelled(el) {},
};
