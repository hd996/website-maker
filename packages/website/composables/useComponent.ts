const selectElementText = (element: Element): void => {
  const selection = window.getSelection()
  if (!selection) return

  selection.removeAllRanges()
  const range = document.createRange()
  range.selectNodeContents(element)
  selection.addRange(range)
}

export default function () {
  const isCMS = ref<boolean>(false)

  onMounted(() => {
    isCMS.value = location.pathname === '/cms'
  })

  return {
    isCMS,

    handleElementBlur: (data: Object, attr: string, event: any) => {
      if (!isCMS) return

      data[attr] = event.target.innerHTML
    },

    handleElementFocuse: (event: any) => {
      if (!isCMS) return

      const element = event.target as Element
      if (!element || element.childElementCount > 0) return
      selectElementText(element)
    },
  }
}
