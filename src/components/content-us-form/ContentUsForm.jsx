import React from 'react';
import {urls, services} from 'api';
import {
  Form,
  Input,
  Button,
} from 'antd';
const { TextArea } = Input;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
class ContentUsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: {}
    }
  }
  componentDidMount() {
    // mock只能为get请求
    services.get(urls.personalInfo, {}, this.getPersonInfo);
  }

  getPersonInfo = (data) => {
    console.log('getPersonInfo', data);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{width: '50%'}}>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label='姓名'>
            {getFieldDecorator('name', {
              rules: [
                {
                  required: true,
                  message: '请输入您的姓名!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label='手机'>
            {getFieldDecorator('phone', {
              rules: [
                {
                  required: true,
                  message: '请输入您的手机号!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label='邮箱'>
            {getFieldDecorator('email', {
              rules: [
                {
                  required: true,
                  message: '请输入您的邮箱!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label='内容'>
            {getFieldDecorator('content', {
              rules: [
                {
                  required: true,
                  message: '请输入内容',
                },
              ],
            })(<TextArea rows={4} />)}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type='primary' htmlType='submit'>
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
const WrappedContentUsForm = Form.create({ name: 'register' })(ContentUsForm);

export default WrappedContentUsForm;
