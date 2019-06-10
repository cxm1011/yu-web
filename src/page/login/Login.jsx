import React, { Component } from 'react'
import './login.less'
import { Form, Icon, Input, Button, message } from 'antd'


const FormItem = Form.Item;
class Login extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='login'>
        <Form>
          <FormItem>
            {
              getFieldDecorator('userName', {
                rules: [
                  {
                    required: true,
                    message: '请填写用户名！'
                  }
                ]
              })(
                <Input prefix={
                  <Icon type='user' style={{color: 'rgba(0,0,0,.25)'}} />
                } placeholder='userName' />
              )
            }
          </FormItem>
          <FormItem>
            {
              getFieldDecorator('password', {
                rules: [{required: true, message: '请填写密码！'}]
              })(
                <Input prefix={
                  <Icon type='lock' style={{color: 'rgba(0,0,0,.25)'}} />} placeholder='password' />
              )
            }
          </FormItem>
          <FormItem style={{padding: '0 auto !improtant'}}>
            <Button type='primary' htmlType='submit' onClick={this.login} style={{width: '100%'}}>登录</Button>
          </FormItem>
        </Form>
      </div>
    )
  }

  login = (e) => {
    e.preventDefault();
    console.log('dd', e)
    this.props.form.validateFields((err, values) => {
    if (!err) {
    if (values.userName === 'zhang_yu' && values.password === 'zhang_yu') {
      sessionStorage.setItem('isLogin', '1');
      location.hash = `#/message-board`;
      message.success('登陆成功！', 3);
    } else {
      message.error('用户名密码不对！')
    }
   } else {
        console.log(err);
      }
    })
  }
}

export default Form.create()(Login);
