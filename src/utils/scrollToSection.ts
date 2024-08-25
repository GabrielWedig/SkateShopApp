export const scrollToSection = (name: string) => {
  const section = document.getElementById(name)

  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}
