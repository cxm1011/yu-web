export default {
  mobilePhone: {
    pattern: /^1[3456789]\d{9}$/,
    message: '请输入正确的手机号格式!'
  },
  email: {
    pattern: /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/,
    message: '请输入正确的邮箱格式!'
  },
  name: {
    pattern: /^[\u4e00-\u9fa5a-z]+$/gi,
    message: '请输入中文或者英文!'
  }
}
