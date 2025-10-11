class ScrollHeader {
    constructor() {
      this.header = document.getElementById("header")
      this.scrollThreshold = 100
      this.init()
    }
  
    init() {
      if (this.header) {
        window.addEventListener("scroll", this.handleScroll.bind(this))
      }
    }
  
    handleScroll() {
      const scrollPosition = window.scrollY
  
      if (scrollPosition > this.scrollThreshold) {
        this.header.classList.add("scrolled")
      } else {
        this.header.classList.remove("scrolled")
      }
    }
  }
  
  // Inicializar quando o DOM estiver carregado
  document.addEventListener("DOMContentLoaded", () => {
    new ScrollHeader()
  })
  