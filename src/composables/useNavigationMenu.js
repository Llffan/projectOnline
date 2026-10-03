import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import '@/css/common/navigation-accessibility.css'

export function useNavigationMenu(route) {
  const isMenuOpen = ref(false)
  const menuButton = ref(null)
  const navigationRoot = ref(null)
  let previousOverflow

  const releaseScroll = () => {
    if (previousOverflow !== undefined) {
      document.body.style.overflow = previousOverflow
      previousOverflow = undefined
    }
  }
  const closeMenu = () => {
    isMenuOpen.value = false
    navigationRoot.value?.querySelectorAll('.dropdown-menu').forEach(menu => menu.style.removeProperty('display'))
  }
  const toggleMenu = () => { isMenuOpen.value = !isMenuOpen.value }
  const closeMenuOnNavigate = event => {
    if (!event.navigationMenuToggle && event.target.closest('a')) closeMenu()
  }
  const handleKeydown = event => {
    if (event.key !== 'Escape') return
    const wasOpen = isMenuOpen.value
    closeMenu()
    if (wasOpen) menuButton.value?.focus()
  }
  const handleResize = () => {
    if (window.innerWidth > 768) closeMenu()
  }
  watch(isMenuOpen, open => {
    if (open) {
      previousOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
    } else releaseScroll()
  })
  watch(() => route.fullPath, closeMenu)
  onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
    window.addEventListener('resize', handleResize)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleKeydown)
    window.removeEventListener('resize', handleResize)
    releaseScroll()
  })
  return { isMenuOpen, menuButton, navigationRoot, toggleMenu, closeMenu, closeMenuOnNavigate }
}
