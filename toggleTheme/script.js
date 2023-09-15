const attribute = 'data-theme'
const attributeDark = 'dark'
const attributeLight = 'light'
const buttonToggleTheme = document.getElementById('toggleTheme')

const toggleTheme = () => {
  const attributeFromLocalStorage = localStorage.getItem(attribute)
  if (!attributeFromLocalStorage) {
    document.documentElement.setAttribute(attribute, attributeLight)
  } else {
    document.documentElement.setAttribute(attribute, attributeFromLocalStorage)
  }

  buttonToggleTheme.addEventListener('click', () => {
    if (document.documentElement.getAttribute(attribute) === attributeLight) {
      document.documentElement.setAttribute(attribute, attributeDark)
      localStorage.setItem(attribute, attributeDark)
    } else {
      document.documentElement.setAttribute(attribute, attributeLight)
      localStorage.setItem(attribute, attributeLight)
    }
  })
}
toggleTheme()
