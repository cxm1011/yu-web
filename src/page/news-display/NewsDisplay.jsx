import React from 'react';
import {urls, services} from 'api';
import {List, Avatar, Icon, Carousel} from 'antd';
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
      document.documentElement.scrollTop = document.body.scrollTop = 0;
 }

    getPersonInfo = (data) => {
      console.log('getPersonInfo', data);
    }


  render() {
      listData.push({
        href: 'https://baijiahao.baidu.com/s?id=1635327191047929915&wfr=spider&for=pc',
        title: `爆款网红榴莲饼`,
        index: 1,
        avatar: 'https://18906152.s21i.faiusr.com/2/ABUIABACGAAg27uR5QUo45n3hQMwsCc4oBo!500x500.jpg',
        description:
          '网红芝士榴莲饼，榴莲爱好者的福音，用气味和甜蜜俘虏你！',
        content:
          '最近听说芝士榴莲饼突然火遍大江南北，这个新晋网红小吃似乎不像原来一些的美食一阵风刮过就没有了，反而拥有很多死忠粉。虽然芝士和榴莲本身就是两种争议很大的食材，但结合出来的小吃带着它浓郁的香味还是俘获了不少人的心。大家纷纷走上街头哀求小哥给我的那份多加一点榴莲，多加！既然这样，何必去排超长的队伍，我这就教你在家做称心如意的芝士榴莲饼！',
      });
      listData.push({
        href: 'https://baijiahao.baidu.com/s?id=1620513949126444861&wfr=spider&for=pc',
        title: `芝士榴莲饼再度来袭！`,
        index: 4,
        avatar: 'https://18906152.s21i.faiusr.com/2/ABUIABACGAAg27uR5QUo45n3hQMwsCc4oBo!500x500.jpg',
        description:
          '网红小吃再度来袭，芝士榴莲饼一块35元，顾客：这次不是跟风了！',
        content:
          '导语：“网红小吃再度来袭，芝士榴莲饼一块35元，顾客：这次不是跟风了！“ 说到网红小吃，大家可能想到的都是中看不中吃的一些受到人们吹捧的小吃，这种网红小吃一般都是味道不怎么样，但是在一段时间内却被很多人夸奖，从而导致大量的消费者去购买。所以网红小吃现在给大家的印象都是很差的。但是今天，小编要给大家介绍一个网红小吃，这个小吃却受到了大家的一致好评',
      });
      listData.push({
        href: 'http://www.sohu.com/a/231768824_99988178',
        title: `榴莲市场潜力巨大`,
        index: 7,
        avatar: 'https://18906152.s21i.faiusr.com/2/ABUIABACGAAg27uR5QUo45n3hQMwsCc4oBo!500x500.jpg',
        description:
          '中国榴莲市场远未饱和，或将成为下一个"全民水果"！ ',
        content:
          '一款产品想要成为爆款，就要具备“成瘾性”，而水果中，榴莲恰恰就具有这一特质。如今榴莲在中国市场越来越受欢迎，但这还远远不够。据调查，14亿中国人中，品尝过榴莲的人还不足1%。因此，榴莲在国内的市场潜力不可预估。泰国榴莲上市，价格上涨却供不应求榴莲主要产地为泰国、马来西亚，在泰国有长柄榴莲、金枕榴莲、差尼榴莲等，主要种植于东部的尖竹汶、罗勇以及达叻府，上市时间集中在5、6月份。',
      });

    return (
      <div className='news_display'>
        <Carousel autoplay>
          <div>
            <div className='title_img1' />
          </div>
          <div>
            <div className='title_img2' />
          </div>
        </Carousel>,
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
                    height={200}
                    alt='logo'
                    src={`http://120.27.68.176:8080/image/food${item.index}.jpg`}
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
