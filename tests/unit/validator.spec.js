import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Validator from '@/validator.js'
chai.use(sinonChai)

describe('Validator', () => {
  it('存在', () => {
    expect(Validator).to.exist
  })

  it('required true 报错', () => {
    let data = {
      email: ''
    }
    let rules = [
      {key: 'email', required: true}
    ]
    
    let validator = new Validator()
    let errors = validator.validator(data, rules)
    expect(errors.email.required).to.eq('必填')
  })

  it('required true 通过', () => {
    let data = {
      email: 0
    }
    let rules = [
      {key: 'email', required: true}
    ]
    
    let validator = new Validator()
    let errors = validator.validator(data, rules)
    expect(errors.email).to.not.exist
  })

  it('pattern 报错', () => {
    let data = {
      email: '@qq.com'
    }
    let rules = [
      {key: 'email', pattern: /^.+@.+$/}
    ]
    
    let validator = new Validator()
    let errors = validator.validator(data, rules)
    expect(errors.email.pattern).to.eq('格式不正确')
  })

  it('pattern 通过', () => {
    let data = {
      email: '12@qq.com'
    }
    let rules = [
      {key: 'email', pattern: /^.+@.+$/}
    ]
    
    let validator = new Validator()
    let errors = validator.validator(data, rules)
    expect(errors.email).to.not.exist
  })

  it('pattern email 报错', () => {
    let data = {
      email: '@qq.com'
    }
    let rules = [
      {key: 'email', pattern: 'email'}
    ]
    
    let validator = new Validator()
    let errors = validator.validator(data, rules)
    expect(errors.email.pattern).to.eq('格式不正确')
  })

  it('pattern email 通过', () => {
    let data = {
      email: '12@qq.com'
    }
    let rules = [
      {key: 'email', pattern: 'email'}
    ]
    
    let validator = new Validator()
    let errors = validator.validator(data, rules)
    expect(errors.email).to.not.exist
  })

  it('required & pattern', () => {
    let data = {
      email: ''
    }
    let rules = [
      {key: 'email', pattern: 'email', required: true}
    ]
    
    let validator = new Validator()
    let errors = validator.validator(data, rules)
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
    
    let validator = new Validator()
    let errors = validator.validator(data, rules)
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
    
    let validator = new Validator()
    let errors = validator.validator(data, rules)
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
      let validator = new Validator()
      errors = validator.validator(data, rules)
    } 
    expect(fn).to.throw('不存在的校验器: hasNumber')
    expect(errors.email.required).to.exist
    expect(errors.email.minLength).to.not.exist
    expect(errors.email.maxLength).to.exist
  })

  it('自定义测试规则 hasNumber', () => {
    let data = {
      email: 'aaassdfffgasgfdsg'
    }
    let validator = new Validator()
    validator.hasNumber = (value) => {
      if (!/\d/.test(value)) {
        return '必须含有数字'
      }
    }
    let rules = [
      {key: 'email', required: true, minLength: 6, maxLength: 10, hasNumber: true, hasLowerCaseAndUpperCase: true, hasDot: true, hasUnderscore: true}
    ]

    let fn = () => {
      errors = validator.validator(data, rules)
    } 
    expect(fn).to.not.throw()
    expect(errors.email.hasNumber).to.eq('必须含有数字')
  })

  it('两个 validator 互相不影响', () => {
    let data = {
      email: 'aaassdfffgasgfdsg'
    }
    let validator1 = new Validator()
    let validator2 = new Validator()
    validator1.hasNumber = (value) => {
      if (!/\d/.test(value)) {
        return '必须含有数字'
      }
    }
    let rules = [
      {key: 'email', required: true, hasNumber: true}
    ]
    let errors
    expect(() => {
      validator1.validator(data, rules)
    }).to.not.throw()
    expect(() => {
      validator2.validator(data, rules)
    }).to.throw()
  })

  it('可以全局添加新的规则', () => {
    let data = {
      email: 'aaassdfffgasgfdsg'
    }
    let validator1 = new Validator()
    let validator2 = new Validator()
    validator1.add('hasNumber', (value) => {
      if (!/\d/.test(value)) {
        return '必须含有数字'
      }
    })
    let rules = [
      {key: 'email', required: true, hasNumber: true}
    ]
    let errors
    expect(() => {
      validator1.validator(data, rules)
    }).to.not.throw()
    expect(() => {
      validator2.validator(data, rules)
    }).to.not.throw()
  })

})
