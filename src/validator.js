class Validator {
  static add(name, fn) {
    Validator.prototype[name]= fn
  }

  constructor () {}
  
  validator(data, rules) {
    let errors = {}
    rules.forEach(rule => {
      let value = data[rule.key]
  
      if (rule.required) {
        let error = this.required(value)
        if (error) {
          ensureObject(error, rule.key)
          errors[rule.key].required = error
          return
        }
      }
  
      let validators = Object.keys(rule).filter(key => key !== 'key' || key !== 'required')
  
      // 遍历 validators , 并逐一调用对应的函数
      validators.forEach(validatorKey => {
        // key is minLength / maxLength / hasNumber
        if (this[validatorKey]) {
          let error =  this[validatorKey](value, rule[validatorKey])
          if (error) {
            ensureObject(error, rule.key)
            errors[rule.key][validatorKey] = error
          } else {
            throw `不存在的校验器: ${validatorKey}`
          }
        }
      })
  
    })
  
    return errors
  }
  required(value) {
    if(!value && value !== 0) {
      return '必填'
    }
  }
  pattern(value, pattern) {
    if (pattern === 'email') {
      pattern = /^.+@.+$/
    }
    if (pattern.test(value) === false) {
      return '格式不正确'
    }
  }
  minLength(value, minLength) {
    if (value.length < minLength) {
      return '太短'
    }
  }
  maxLength(value, maxLength) {
    if (value.length > maxLength) {
      return '太长'
    }
  }
}

// export default function validator(data, rules) {
//   let errors = {}
//   rules.forEach(rule => {
//     let value = data[rule.key]

//     if (rule.required) {
//       let error = validator.required(value)
//       if (error) {
//         ensureObject(error, rule.key)
//         errors[rule.key].required = error
//         return
//       }
//     }

//     let validators = Object.keys(rule).filter(key => key !== 'key' || key !== 'required')

//     // 遍历 validators , 并逐一调用对应的函数
//     validators.forEach(validatorKey => {
//       // key is minLength / maxLength / hasNumber
//       if (validator[validatorKey]) {
//         let error =  validator[validatorKey](value, rule[validatorKey])
//         if (error) {
//           ensureObject(error, rule.key)
//           errors[rule.key][validatorKey] = error
//         } else {
//           throw `不存在的校验器: ${validatorKey}`
//         }
//       }
      
//     })

//   })

//   return errors
// }

// validator.required = (value) => {
//   if(!value && value !== 0) {
//     return '必填'
//   }
// }

// validator.pattern = (value, pattern) => {
//   if (pattern === 'email') {
//     pattern = /^.+@.+$/
//   }
//   if (pattern.test(value) === false) {
//     return '格式不正确'
//   }
// }

// validator.minLength =  (value, minLength) => {
//   if (value.length < minLength) {
//     return '太短'
//   }
// }

// validator.maxLength =  (value, maxLength) => {
//   if (value.length > maxLength) {
//     return '太长'
//   }
// }

function ensureObject(obj, key) {
  if (typeof obj[key] !== 'object') {
    obj[key] = {}
  }
}

export default Validator