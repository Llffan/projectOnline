import { nextTick, onMounted, onBeforeUnmount, watch } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Match company opening pages while keeping selectors and teardown local.
export function usePersonalAnimations(root, dependency) {
  let context
  let disposed = false
  let generation = 0
  const animate = async () => {
    const current = ++generation
    context?.revert()
    await nextTick()
    if (disposed || current !== generation || !root.value) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    context = gsap.context(() => {
      const hero = root.value.querySelector('[data-personal-hero]')
      if (hero) {
        const timeline = gsap.timeline()
        for (const [index, selector] of ['.title', '.subtitle', '.description'].entries()) {
          const element = hero.querySelector(selector)
          if (element) timeline.from(element, { autoAlpha: 0, y: 50, duration: 1, ease: 'power2.out' }, index * 0.3)
        }
      }
      root.value.querySelectorAll('[data-personal-section]').forEach(section => {
        gsap.from(section, {
          autoAlpha: 0, y: 50, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: section, start: 'top 85%', once: true }
        })
      })
    }, root.value)
    ScrollTrigger.refresh()
  }
  onMounted(animate)
  if (dependency) watch(dependency, animate, { flush: 'post' })
  onBeforeUnmount(() => { disposed = true; generation++; context?.revert() })
}
