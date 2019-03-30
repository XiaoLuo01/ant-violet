import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {mount} from '@vue/test-utils'
import Carousel from '@/data/carousel/carousel.vue'
import CarouselItem from '@/data/carousel/carousel-item.vue'
import Vue from "vue"
chai.use(sinonChai)

describe('Carousel 组件', () => {
  it('is ok', () => {
    expect(Carousel).to.exist
  })

  it('接受 vCarouselItem, 默认展示第一个', (done) => {
    Vue.component('v-carousel-item', CarouselItem)
    const wrapper = mount(Carousel, {
      propsData: {
        autoPlay: false
      },
      slots: {
        default: `
        <v-carousel-item name="1">
          <div class="box1">1</div>
        </v-carousel-item>
        <v-carousel-item name="2">
          <div class="box2">2</div>
        </v-carousel-item>
        <v-carousel-item name="3">
          <div class="box3">3</div>
        </v-carousel-item>
        `
      }
    })
    setTimeout(() => {
      expect(wrapper.find('.box1').exists()).to.be.true
      done()
    }) 
  })

  it('selected 是几, 选中的就是几', (done) => {
    Vue.component('v-carousel-item', CarouselItem)
    const wrapper = mount(Carousel, {
      sync: false,
      propsData: {
        autoPlay: false,
        selected: '2'
      },
      slots: {
        default: `
        <v-carousel-item name="1">
          <div class="box1">1</div>
        </v-carousel-item>
        <v-carousel-item name="2">
          <div class="box2">2</div>
        </v-carousel-item>
        <v-carousel-item name="3">
          <div class="box3">3</div>
        </v-carousel-item>
        `
      }
    })
    setTimeout(() => {
      expect(wrapper.find('.box2').exists()).to.be.true
      done()
    }) 
  })

  it('点击第二个就展示第二个', (done) => {
    Vue.component('vCarouselItem', CarouselItem)
    const wrapper = mount(Carousel, {
      sync: false,
      propsData: {
        autoPlay: false,
        selected: '1'
      },
      components: {
        'vCarouselItem': CarouselItem
      },
      slots: {
        default: `
        <v-carousel-item name="1">
          <div class="box1">1</div>
        </v-carousel-item>
        <v-carousel-item name="2">
          <div class="box2">2</div>
        </v-carousel-item>
        <v-carousel-item name="3">
          <div class="box3">3</div>
        </v-carousel-item>
        `
      },
      listeners: {
        'update:selected': (x) => {
          expect(x).to.eq('2')
          done()
        }
      }
    })
    setTimeout(() => {
      wrapper.find('[data-index="1"]').trigger('click')
    }, 1500) 
  })

  it('会自动播放', (done) => {
    Vue.component('vCarouselItem', CarouselItem)
    const callback = sinon.fake()
    const wrapper = mount(Carousel, {
      propsData: {
        autoPlay: true,
        autoPlayDelay: 0.02,
        selected: '1'
      },
      slots: {
        default: `
        <v-carousel-item name="1">
          <div class="box1">1</div>
        </v-carousel-item>
        <v-carousel-item name="2">
          <div class="box2">2</div>
        </v-carousel-item>
        <v-carousel-item name="3">
          <div class="box3">3</div>
        </v-carousel-item>
        `
      },
      listeners: {
        'update:selected': callback
      }
    })
    setTimeout(() => {
      expect(callback).to.have.been.called
      expect(callback).to.have.been.calledWith('2')
      done()
    }, 21) 
  })
  
})
