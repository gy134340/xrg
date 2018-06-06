const inquirer = require('inquirer')
const questions = [
  {
    type: 'input',
    name: 'prefix',
    message: 'Your prefix?',
    default: '',
  },
  {
    type: 'input',
    name: 'action',
    message: 'Your action?'
  }
]
inquirer.prompt(questions).then(answers => {
  let { prefix, action } = answers
  const requestName = `${action.toUpperCase()}_REQUEST`
  const successName = `${action.toUpperCase()}_SUCCESS`
  const failName = `${action.toUpperCase()}_FAIL`
  const request = `${prefix.toLowerCase()}/${requestName.toLowerCase()}`
  const success = `${prefix.toLowerCase()}/${successName.toLowerCase()}`
  const fail = `${prefix.toLowerCase()}/${failName.toLowerCase()}`
  console.log('', )
  console.log('🐞-Action name')
  console.log('', )
  console.log(requestName)
  console.log(successName)
  console.log(failName)
  console.log('', )
  console.log('🐞-Action')
  console.log('', )
  console.log(request)
  console.log(success)
  console.log(fail)
})