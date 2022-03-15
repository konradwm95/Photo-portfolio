const hamburgerMenu = document.querySelector(".hamburger-menu")

const dropdownMenu = document.querySelector(".drop-down-menu")
const filtersSection = document.querySelector(".filters")
const filtersBtn = document.querySelector(".filters .filters-btn")
const menu = document.querySelector("nav.menu")
const menuUl = document.querySelector(".drop-down-menu .categories")
const menuAdress = document.querySelector(".drop-down-menu .adress")

const photosContainer = document.querySelector("main .photos-container")

const filters = [...document.querySelectorAll(".filters li")]

const photographies = [
  {
    category: "england",
    name: "Lorem ipsum dolor sit amet",
    url: "london_1.jpg"
  },
  {
    category: "england",
    name: "Lorem ipsum dolor sit amet",
    url: "london_2.jpg"
  },
  {
    category: "england",
    name: "Lorem ipsum dolor sit amet",
    url: "london_3.jpg"
  },
  {
    category: "montenegro",
    name: "Lorem ipsum dolor sit amet",
    url: "montenegro_1.jpg"
  },
  {
    category: "montenegro",
    name: "Lorem ipsum dolor sit amet",
    url: "montenegro_2.jpg"
  },
  {
    category: "montenegro",
    name: "Lorem ipsum dolor sit amet",
    url: "montenegro_3.jpg"
  },
  {
    category: "greece",
    name: "Lorem ipsum dolor sit amet",
    url: "greece_1.jpg"
  },
  {
    category: "greece",
    name: "Lorem ipsum dolor sit amet",
    url: "greece_2.jpg"
  },
  {
    category: "greece",
    name: "Lorem ipsum dolor sit amet",
    url: "greece_3.jpg"
  },
  {
    category: "austria",
    name: "Lorem ipsum dolor sit amet",
    url: "austria_1.jpg"
  },
  {
    category: "austria",
    name: "Lorem ipsum dolor sit amet",
    url: "austria_2.jpg"
  },
  {
    category: "austria",
    name: "Lorem ipsum dolor sit amet",
    url: "austria_3.jpg"
  }
]

addPhotoItems(photographies, photosContainer)
const scrollElements = [...document.querySelectorAll(".anim-on-scroll")]
handleScrollAnimation(scrollElements)

function createPhotoItem(photo) {
  const fragment = document.createDocumentFragment()

  const div = document.createElement("div")
  const img = document.createElement("img")
  img.src = `../images/${photo.url}`
  div.appendChild(img)
  fragment.appendChild(div)

  const title = document.createElement("p")
  title.innerText = photo.name
  fragment.appendChild(title)

  return fragment
}

function filterPhotographies(filterName, photographiesArray) {
  return photographiesArray.filter(photography => {
    return photography.category === filterName
  })
}

function addPhotoItems(photographiesArray, elem) {
  elem.innerHTML = ""
  photographiesArray.map(photography => {
    const item = document.createElement("div")

    item.classList.add("anim-on-scroll")
    item.style.opacity = 0
    item.style.transform = "translateY(15vh)"

    const content = createPhotoItem(photography)
    item.appendChild(content)
    elem.appendChild(item)
  })
}

function elementInView(el) {
  const elementTop = el.getBoundingClientRect().top

  return (
    elementTop <= (window.innerHeight || document.documentElement.clientHeight)
  )
}

function displayScrollElement(element) {
  element.classList.add("scrolled")
}

function hideScrollElement(element) {
  element.classList.remove("scrolled")
}

function handleScrollAnimation(scrollElems) {
  scrollElems.forEach(el => {
    if (elementInView(el, 100)) {
      displayScrollElement(el)
    } else {
      hideScrollElement(el)
    }
  })
}

filtersBtn.addEventListener("click", () => {
  filters.forEach(filter => filter.classList.toggle("hidden"))
})

filters.forEach(filterBtn => {
  filterBtn.addEventListener("click", e => {
    filters.forEach(filterBtn => {
      filterBtn.classList.remove("choosen")
    })
    e.target.classList.add("choosen")
  })
})

filters.forEach(filterBtn => {
  filterBtn.addEventListener("click", () => {
    console.log("whey")
    const filterName = filterBtn.getAttribute("data-filter")

    if (filterName === "all") {
      addPhotoItems(photographies, photosContainer)
      const scrollElements = [...document.querySelectorAll(".anim-on-scroll")]
      handleScrollAnimation(scrollElements)
      return
    }
    const filteredPhotographies = filterPhotographies(filterName, photographies)
    addPhotoItems(filteredPhotographies, photosContainer)
    const scrollElements = [...document.querySelectorAll(".anim-on-scroll")]
    handleScrollAnimation(scrollElements)
  })
})

hamburgerMenu.addEventListener("click", () => {
  dropdownMenu.classList.toggle("menu-hidden")
  filtersSection.classList.toggle("under-menu")
  menu.classList.toggle("menu-open")
  menuUl.classList.toggle("menu-categories-hidden")
  menuAdress.classList.toggle("menu-adress-hidden")
})

window.addEventListener("scroll", () => {
  const scrollElements = [...document.querySelectorAll(".anim-on-scroll")]
  handleScrollAnimation(scrollElements)
})
