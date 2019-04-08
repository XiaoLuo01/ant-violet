export default function validator(data, rules) {
  let errors = {}
  rules.forEach(rule => {
    let value = data[rule.key]

    if (rule.required) {
      let error = validator.required(value)
      if (error) {
        ensureObject(error, rule.key)
        errors[rule.key].required = error
        return
      }
    }

    if (rule.pattern) {
      let error = validator.pattern(value, rule.pattern)
      if (error) {
        ensureObject(error, rule.key)
        errors[rule.key].pattern = error
        return
      }
    }

    if (rule.minLength) {
      let error = validator.pattern(value, rule.minLength)
      if (error) {
        ensureObject(error, rule.key)
        errors[rule.key].minLength = error
        return
      }
    }

    if (rule.maxLength) {
      let error = validator.pattern(value, rule.maxLength)
      if (error) {
        ensureObject(error, rule.key)
        errors[rule.key].maxLength = error
        return
      }
    }

  })

  return errors
}

validator.required = (value) => {
  if(!value && value !== 0) {
    return '必填'
  }
}

validator.pattern = (value, pattern) => {
  if (pattern === 'email') {
    pattern = /^.+@.+$/
  }
  if (pattern.test(value) === false) {
    return '格式不正确'
  }
}

validator.minLength =  (value, minLength) => {
  if (value.length < minLength) {
    return '太短'
  }
}

validator.maxLength =  (value, maxLength) => {
  if (value.length > maxLength) {
    return '太长'
  }
}

function ensureObject(obj, key) {
  if (typeof obj[key] !== 'object') {
    obj[key] = {}
  }
}