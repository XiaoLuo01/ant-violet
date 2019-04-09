import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import validator from '@/validator.js'
chai.use(sinonChai)

describe('validator', () => {
  it('存在', () => {
    expect(validator).to.exist
  })

  it('required true 报错', () => {
    let data = {
      email: ''
    }
    let rules = [
      {key: 'email', required: true}
    ]
    
    let errors = validator(data, rules)
    expect(errors.email.required).to.eq('必填')
  })

  it('required true 通过', () => {
    let data = {
      email: 0
    }
    let rules = [
      {key: 'email', required: true}
    ]
    
    let errors = validator(data, rules)
    expect(errors.email).to.not.exist
  })

  it('pattern 报错', () => {
    let data = {
      email: '@qq.com'
    }
    let rules = [
      {key: 'email', pattern: /^.+@.+$/}
    ]
    
    let errors = validator(data, rules)
    expect(errors.email.pattern).to.eq('格式不正确')
  })

  it('pattern 通过', () => {
    let data = {
      email: '12@qq.com'
    }
    let rules = [
      {key: 'email', pattern: /^.+@.+$/}
    ]
    
    let errors = validator(data, rules)
    expect(errors.email).to.not.exist
  })

  it('pattern email 报错', () => {
    let data = {
      email: '@qq.com'
    }
    let rules = [
      {key: 'email', pattern: 'email'}
    ]
    
    let errors = validator(data, rules)
    expect(errors.email.pattern).to.eq('格式不正确')
  })

  it('pattern email 通过', () => {
    let data = {
      email: '12@qq.com'
    }
    let rules = [
      {key: 'email', pattern: 'email'}
    ]
    
    let errors = validator(data, rules)
    expect(errors.email).to.not.exist
  })

  it('required & pattern', () => {
    let data = {
      email: ''
    }
    let rules = [
      {key: 'email', pattern: 'email', required: true}
    ]
    
    let errors = validator(data, rules)
    expect(errors.email.required).to.exist
    expect(errors.email.pattern).to.not.exist
  })

  it('pattern & minLength', () => {
    let data = {
      email: ''
    }
    let rules = [
      {key: 'email', pattern: 'email', minLength: 6}
    ]
    
    let errors = validator(data, rules)
    expect(errors.email.minLength).to.exist
    expect(errors.email.pattern).to.exist
  })

  it('pattern & maxLength', () => {
    let data = {
      email: '123123123123'
    }
    let rules = [
      {key: 'email', pattern: 'email', maxLength: 10}
    ]
    
    let errors = validator(data, rules)
    expect(errors.email.maxLength).to.exist
  })

  it('many keys', () => {
    let data = {
      email: '123123123123'
    }
    let rules = [
      {key: 'email', required: true, minLength: 6, maxLength: 10, hasNumber: true, hasLowerCaseAndUpperCase: true, hasDot: true, hasUnderscore: true}
    ]

    let fn = () => {
      validator(data, rules)
    } 
    expect(fn).to.throw('不存在的校验器: hasNumber')
    expect(errors.email.required).to.exist
    expect(errors.email.minLength).to.not.exist
    expect(errors.email.maxLength).to.exist
  })

  it('test 2', () => {
    let data = {
      email: 'aaassdfffgasgfdsg'
    }
    validator.hasNumber = (value) => {
      if (!/\d/.test(value)) {
        return '必须含有数字'
      }
    }
    let rules = [
      {key: 'email', required: true, minLength: 6, maxLength: 10, hasNumber: true, hasLowerCaseAndUpperCase: true, hasDot: true, hasUnderscore: true}
    ]

    let fn = () => {
      errors = validator(data, rules)
    } 
    expect(fn).to.not.throw()
    expect(errors.email.hasNumber).to.eq('必须含有数字')
  })

})
