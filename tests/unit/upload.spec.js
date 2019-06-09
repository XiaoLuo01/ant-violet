import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {mount} from '@vue/test-utils'
import Upload from '@/form/upload/upload.vue'
import http from '@/http'
chai.use(sinonChai)

describe('Upload 组件', () => {
  it('is ok', () => {
    expect(Upload).to.exist
  })

  it('可以上传一个文件.', (done) => {
    let stub = sinon.stub(http, 'post').callsFake(() => {
      setTimeout(() => {
        Options.success('{"id": "123123"}')
        expect(wrapper.find('use').exists()).to.eq(false)
        // done()
      }, 100)
    })

    const wrapper = mount(Upload, {
      propsData: {
        name: 'file',
        action: '/upload',
        method: 'post',
        parseResponse: (res)=>{
          let obj = JSON.parse(res)
          return `/preview/${obj.id}`
        },
        fileList: []
      },
      slots: {
        default: `<button id="x">click me</button>`
      },
      listeners: {
        'update:fileList': () => {
          wrapper.setProps({fileList})
        },
        'uploaded': () => {
          expect(wrapper.find('use').exists()).to.eq(false)
          expect(wrapper.props().fileList[0].url).to.eq('/preview/123123')
          stub.restore()
          done()
        }
      }
    })
    wrapper.find('#x').trigger('click')
    let inputWrapper = wrapper.find('input[type="file"]')
    let input = inputWrapper.element
    let file1 = new File(['xxxx'], 'xxx.png')

    const data = new DataTransfer()
    data.items.add(file1)
    input.files = data.files

    let use = wrapper.find('use').element
    expect(use.getAttribute('xlink:href')).to.eq('#v-loading')
  })

})
