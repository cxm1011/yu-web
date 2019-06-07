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
    console.log('this.props.children', location.hash)
    const keyIs = defaultSelectedKeys[0];
    return (
      <Layout className='layout' style={{minHeight: '100%'}}>
        {
          keyIs === 'message-board' ? null
          : <Header className='header'>
            <div className='logo'>
              <img src='src/assets/logo.jpeg' width='130px' height='130px' />
            </div>
            <Menu
              theme='dark'
              mode='horizontal'
              onSelect={this.handleOnSelect}
              defaultSelectedKeys={defaultSelectedKeys}
              className='menu'
            >
              <Menu.Item key='home'>首页</Menu.Item>
              <Menu.Item key='enter-brand'>走进品牌</Menu.Item>
              <Menu.Item key='food-display'>美食展示</Menu.Item>
              <Menu.Item key='news-display'>资讯中心</Menu.Item>
              <Menu.Item key='join-us'>加入我们</Menu.Item>
            </Menu>
            <div className='header-phone'>
              <span>加盟热线: 021-8888 8888</span>
            </div>
          </Header>
        }
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
