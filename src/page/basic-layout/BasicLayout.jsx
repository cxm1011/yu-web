import React from 'react';
import {urls, services} from 'api';
import { Layout, Menu } from 'antd';
import { Switch } from 'react-router-dom';
import './index.less';
const { Header, Content, Footer } = Layout;
export default class BasicLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: {},
      defaultSelectedKeys: []
    }
  }

  componentWillMount() {
    this.getDefaultSelectedKeys();
  }
  componentDidMount() {
    console.log('location.hash', location.hash);
    // mock只能为get请求
    services.get(urls.personalInfo, {}, this.getPersonInfo);
  }

  getDefaultSelectedKeys = () => {
    let hash = location.hash;
    let defaultSelectedKeys = [];
    if (hash.includes('#/')) {
      let keys = hash.substr(2);
      if (keys !== '') {
        defaultSelectedKeys.push(keys);
        this.setState({
          defaultSelectedKeys
        })
      } else {
        defaultSelectedKeys.push('home')
        this.setState({
          defaultSelectedKeys
        })
      }
    }
  }

  getPersonInfo = (data) => {
    console.log('getPersonInfo', data);
  }

  handleOnSelect = (item) => {
    console.log(item)
    const {key} = item;
    location.hash = `#/${key}`;
  }
  render() {
    const {defaultSelectedKeys} = this.state;
    return (
      <Layout className='layout'>
        <Header>
          <div className='logo' />
          <Menu
            theme='dark'
            mode='horizontal'
            onSelect={this.handleOnSelect}
            defaultSelectedKeys={defaultSelectedKeys}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key='home'>首页</Menu.Item>
            <Menu.Item key='branding-display'>走进品牌</Menu.Item>
            <Menu.Item key='food-display'>美食展示</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 2px', height: 'auto' }}>
          <Switch>
            {this.props.children}
          </Switch>
        </Content>
        <Footer className='footer' >张钰餐饮有限公司@2019</Footer>
      </Layout>
    )
  }
}
