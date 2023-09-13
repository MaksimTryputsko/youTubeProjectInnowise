const attribute = 'data-theme'
const attributeDark = 'dark'
const buttonToggleTheme = document.getElementById('toggleTheme')

const toggleTheme = () => {
  buttonToggleTheme.addEventListener('click', () => {
    if (document.documentElement.hasAttribute(attribute)) {
      document.documentElement.removeAttribute(attribute)
    } else {
      document.documentElement.setAttribute(attribute, attributeDark)
    }
  })
}
toggleTheme()
