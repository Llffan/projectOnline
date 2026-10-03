import { onBeforeUnmount, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export function useSectionMotion(root, setup) {
  let context
  onMounted(() => {
    if (!root.value || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    gsap.registerPlugin(ScrollTrigger)
    context = gsap.context(() => setup(root.value), root.value)
  })
  onBeforeUnmount(() => context?.revert())
}
