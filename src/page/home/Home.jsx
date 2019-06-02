import React from 'react';
import {urls, services} from 'api';
import {Card, Carousel, Button, Icon} from 'antd';
import './index.less';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: {},
       /*
            *轮播图片设置
            *   url: 图片路径
            *   to:图片链接去处
            *   styleNow:class类
            */
           imgUrl: [
            {
                url: '//18906152.s21i.faiusr.com/2/ABUIABACGAAglZSG5QUogv2T8wEwgA84vAU.jpg',
                to: '',
                styleNow: 'checkSwiper-new'
            }, {
                url: '//18906152.s21i.faiusr.com/2/ABUIABACGAAgoteM5QUouJ6zjgMwoB84qQc.jpg',
                to: '',
                styleNow: 'checkSwiper-last'
            }
            // ,{
            //     url: '//18906152.s21i.faiusr.com/2/ABUIABACGAAglZSG5QUogv2T8wEwgA84vAU.jpg',
            //     to: '',
            //     styleNow: 'checkSwiper-last'
            // }, {
            //     url: '//18906152.s21i.faiusr.com/2/ABUIABACGAAgoteM5QUouJ6zjgMwoB84qQc.jpg',
            //     to: '',
            //     styleNow: 'checkSwiper-last'
            // }
        ],
        // 切换图片的按钮，下边是1,2,3,4个按钮分别对应的类名
        checkPoint: [
            'newPoint',
            'oldPoint',
            'oldPoint',
            'oldPoint'
        ]
    };
     // 点击按钮切换轮播图片的方法
     this.clickSwiperHandle = this.clickSwiperHandle.bind(this);
  }

  // 在此处开启定时器开始自动轮播
  componentDidMount() {
    // mock只能为get请求
    services.get(urls.personalInfo, {}, this.getPersonInfo);
    let count = 1;
    let sum = this.state.imgUrl.length;
    this.timerId = setInterval(
        () => {
            this.autoSwiper(count);
            count < sum - 1 ? count++ : count = 0;
        },
        6000
    );
  }
    // 轮播方法的内部实现
    autoSwiper(count) {
      let aimImgUrl = this.state.imgUrl;
      let newImgArr = [];
      let aimCheckPoint = this.state.checkPoint;
      let newCheckPoint = [];
      for (let i = 0, len = this.state.imgUrl.length; i < len; i++) {
          if (i !== count) {
              if (i === count + 1) {
                  newImgArr.push(this.checkSwiper(aimImgUrl[i], 'checkSwiper-next'));
              } else {
                  newImgArr.push(this.checkSwiper(aimImgUrl[i], 'checkSwiper-last'));
              }
          } else {
              newImgArr.push(this.checkSwiper(aimImgUrl[count], 'checkSwiper-new'));
          }
      }
      for (let j = 0, len = aimCheckPoint.length; j < len; j++) {
          if (j !== count) {
              newCheckPoint.push('oldPoint');
          } else {
              newCheckPoint.push('newPoint');
          }
      }
      this.setState({
          imgUrl: newImgArr,
          checkPoint: newCheckPoint
      });
  }
   // 切换每张图片state状态的方法
   checkSwiper(aim, classNm) {
    let res = Object.assign({}, aim, {styleNow: classNm});
    return res;
}
// 按钮点击方法内部实现
clickSwiperHandle(count) {
    clearInterval(this.timerId);
    this.autoSwiper(count);
    let sum = this.state.imgUrl.length;
    let num = count + 1 <= sum - 1 ? count + 1 : 0;
    this.timerId = setInterval(
        () => {
            this.autoSwiper(num);
            num < sum - 1 ? num++ : num = 0;
        },
        6000
    );
}

  getPersonInfo = (data) => {
    console.log('getPersonInfo', data);
  }


  // 在此处去除定时器
  componentWillUnmount() {
      clearInterval(this.timerId);
  }

  render() {
    // let lists = this.state.imgUrl;
    // let listItems = lists.map((item, index) =>
    //   <li key={index} className={item.styleNow}>
    //     <a href={item.to}>
    //       <img src={item.url} width='100%' height='450px' />
    //     </a>
    //   </li>
    // );
    // let pointsClass = this.state.checkPoint;
    // let checkPoints = pointsClass.map((item, index) =>
    //   <span key={index} className={item} onClick={(e) => this.clickSwiperHandle(index, e)}>{}</span>
    // );
    return (

      <div id='banner' className='home'>
        <div className='six_ponit'>
          {/* <ul id='swiper'>{listItems}</ul>
          <div className='checkBtn'>
            {checkPoints}
          </div> */}
          <Carousel autoplay>
            <div>
              <div className='title_img1'>1</div>
            </div>
            <div>
              <div className='title_img2'>2</div>
            </div>
            <div>
              <div className='title_img1'>3</div>
            </div>
            <div>
              <div className='title_img2'>4</div>
            </div>
          </Carousel>,
          <div className='six_ponit_title'> 选择我们的六大优势</div>
          <div className='six_ponit_title2'> xx | YY | ZZ</div>
          <div className='first_line'>
            <div className='span_title_left'>{}</div>
            <div className='circle'>{}</div>
            <div className='span_title_right'>{}</div>
          </div>
          <div className='first_line'>
            <div className='span_title_left'>{}</div>
            <div className='circle1'>1</div>
            <div className='span_title_right'>
              <Card title='Card title' bordered={false} style={{ width: 500 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </div>
          </div>
          <div className='first_line'>
            <div className='span_title_left'>
              <Card title='Card title' bordered={false} style={{ width: 500 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </div>
            <div className='circle2'>2</div>
            <div className='span_title_right'>{}</div>
          </div>
          <div className='first_line'>
            <div className='span_title_left'>{}</div>
            <div className='circle1'>3</div>
            <div className='span_title_right'>
              <Card title='Card title' bordered={false} style={{ width: 500 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </div>
          </div>
          <div className='first_line'>
            <div className='span_title_left'>
              <Card title='Card title' bordered={false} style={{ width: 500 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </div>
            <div className='circle2'>4</div>
            <div className='span_title_right'>{}</div>
          </div>
          <div className='first_line'>
            <div className='span_title_left'>{}</div>
            <div className='circle1'>5</div>
            <div className='span_title_right'>
              <Card title='Card title' bordered={false} style={{ width: 500 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </div>
          </div>
          <div className='first_line'>
            <div className='span_title_left'>
              <Card title='Card title' bordered={false} style={{ width: 500 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </div>
            <div className='circle2'>6</div>
            <div className='span_title_right'>{}</div>
          </div>
          <div className='first_line'>
            <div className='circle'>{}</div>
          </div>
          <div className='six_ponit_title'> 九大扶持</div>
          <div className='six_ponit_title2'> xx | YY | ZZ</div>
          <div className='nine_display'>
            <div className='line_one'>
              <div className='nine_all_one'>
                <div className='nine_img'>
                  {}
                </div>
                <div className='nine_img_title'>XXXX</div>
              </div>
              <div className='nine_all_one'>
                <div className='nine_img'>
                  {}
                </div>
                <div className='nine_img_title'>XXXX</div>
              </div>
              <div className='nine_all_one'>
                <div className='nine_img'>
                  {}
                </div>
                <div className='nine_img_title'>XXXX</div>
              </div>
            </div>
            <div className='line_one'>
              <div className='nine_all_one'>
                <div className='nine_img'>
                  {}
                </div>
                <div className='nine_img_title'>XXXX</div>
              </div>
              <div className='nine_all_one'>
                <div className='nine_img'>
                  {}
                </div>
                <div className='nine_img_title'>XXXX</div>
              </div>
              <div className='nine_all_one'>
                <div className='nine_img'>
                  {}
                </div>
                <div className='nine_img_title'>XXXX</div>
              </div>
            </div>
            <div className='line_one'>
              <div className='nine_all_one'>
                <div className='nine_img'>
                  {}
                </div>
                <div className='nine_img_title'>XXXX</div>
              </div>
              <div className='nine_all_one'>
                <div className='nine_img'>
                  {}
                </div>
                <div className='nine_img_title'>XXXX</div>
              </div>
              <div className='nine_all_one'>
                <div className='nine_img'>
                  {}
                </div>
                <div className='nine_img_title'>XXXX</div>
              </div>
            </div>
          </div>
          <div className='join_us'>
            <div className='title'>
              <li style={{height: '32px', paddingLeft: '50px'}}>成熟的经验|整店输出|包教包会</li>
              <li style={{height: '32px', paddingLeft: '50px'}}>XX</li>
            </div>
            <div className='button'>
              <Button type='primary' size='large'>
              加入我们
                <Icon type='mail' />
              </Button>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
