import { nextTick, onBeforeUnmount, onMounted } from 'vue'
import gsap from 'gsap'

export function useHeroCarousel(carousel, root) {
  let context
  let animation
  let disposed = false
  let start

  const play = async index => {
    await nextTick()
    if (disposed || !root.value) return
    const slide = root.value.querySelectorAll('.carousel-slide')[index]
    if (!slide) return
    animation?.kill()
    const elements = slide.querySelectorAll('.animated-element')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(elements, { clearProps: 'opacity,transform' })
      return
    }
    context?.add(() => {
      animation = gsap.fromTo(elements, { opacity: 0, y: 36 }, {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power4.out'
      })
    })
  }

  const point = event => event.changedTouches?.[0] ?? event
  const handleStart = event => {
    const position = point(event)
    start = { x: position.clientX, y: position.clientY }
  }
  const handleEnd = event => {
    if (!start) return
    const position = point(event)
    const dx = position.clientX - start.x
    const dy = Math.abs(position.clientY - start.y)
    start = undefined
    if (Math.abs(dx) <= 50 || dy >= 100) return
    if (dx > 0) carousel.value?.prev()
    else carousel.value?.next()
  }

  onMounted(() => {
    context = gsap.context(() => {}, root.value)
    play(0)
  })
  onBeforeUnmount(() => {
    disposed = true
    start = undefined
    context?.revert()
  })
  return { handleSlideChange: play, handleStart, handleEnd }
}
