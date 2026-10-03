import { onBeforeUnmount, onMounted, ref } from 'vue'

export function useCountUp(items, duration = 2000) {
  const trigger = ref(null)
  const values = ref(items.value.map(item => item.initialValue))
  let observer
  let frame

  onMounted(() => {
    const entries = items.value
    const finish = () => { values.value = entries.map(item => item.finalValue) }
    if (entries.every(item => item.initialValue === item.finalValue) ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches || !trigger.value) {
      finish()
      return
    }
    observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      const started = performance.now()
      const tick = now => {
        const progress = Math.min((now - started) / duration, 1)
        values.value = entries.map(item => Math.floor(item.initialValue + (item.finalValue - item.initialValue) * progress))
        if (progress < 1) frame = requestAnimationFrame(tick)
        else finish()
      }
      frame = requestAnimationFrame(tick)
    })
    observer.observe(trigger.value)
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
    if (frame !== undefined) cancelAnimationFrame(frame)
  })
  return { trigger, values }
}
