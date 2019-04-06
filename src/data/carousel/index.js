import Carousel from './carousel.vue'
import CarouselItem from './carousel-item.vue'

Carousel.install = Vue => {
  Vue.component(Carousel.name, Carousel)
  Vue.component(CarouselItem.name, CarouselItem)
}

export default Carousel