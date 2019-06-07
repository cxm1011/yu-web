import React from 'react';
import {urls, services} from 'api';
import {List, Avatar, Icon} from 'antd';
import './newsDisplay.less'

const listData = [];
const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
 );
export default class NewsDisplay extends React.Component {
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


  render() {
    for (let i = 0; i < 23; i++) {
      listData.push({
        href: 'http://ant.design',
        title: `榴莲饼新闻 ${i}|2019-10-10`,
        avatar: 'https://18906152.s21i.faiusr.com/2/ABUIABACGAAg27uR5QUo45n3hQMwsCc4oBo!500x500.jpg',
        description:
          '加盟榴莲饼|是你的不二之选！',
        content:
          '原来，对粥的那份喜欢从牙牙学语就开始了啊！梁实秋这不喜欢喝粥的人也承认某些粥也还是好喝的。他说的是北方的“菜粥”，把粥熬熟，然后加上大把大把的白菜心，俟菜烂再撒上一些盐和麻油，别有风味。其实菜粥并不是北方的“专利”。在我家里，到了冬天，也是常常把这“菜粥”当成早饭。一般那时家里就有了年糕，母亲早上便早早起床，生好炉子，拿了昨天剩下的米饭和新鲜的青菜或者大白菜开始熬粥，再加入几块糯米年糕，撒上些盐，味精。年糕熟的慢，等年糕熟透，这粥便软到了极致。用母亲的话说就是粥的肚肠都熬出来了。这粥里不仅有着菜的清爽还带着糯米的香。滑糯的粥配上软香的年糕，一气就能吃一大碗，吃的是饱又暖。',
      });
    }
    return (
      <div className='news_display'>
        <div className='title_img' />
        <div style={{padding: '30px 30px'}}>
          <List
            itemLayout='vertical'
            size='large'
            pagination={{
              onChange: page => {
                console.log(page);
              },
              pageSize: 3,
            }}
            dataSource={listData}
            footer={
              <div>
                <b>ant design</b> footer part
              </div>
            }
            renderItem={item => (
              <List.Item
                key={item.title}
                actions={[
                  <IconText type='star-o' text='156' />,
                  <IconText type='like-o' text='156' />,
                  <IconText type='message' text='2' />,
                ]}
                extra={
                  <img
                    width={272}
                    alt='logo'
                    src='https://18906152.s21i.faiusr.com/2/ABUIABACGAAg27uR5QUo45n3hQMwsCc4oBo!500x500.jpg'
                  />
                }
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.description}
                />
                {item.content}
              </List.Item>
            )} />
        </div>
      </div>
    )
  }
}
