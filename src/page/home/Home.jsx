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
    //  // 跳转加入我们
    //  this.linkToJoinUs = this.linkToJoinUs.bind(this);
  }

  // 在此处开启定时器开始自动轮播
  componentDidMount() {
    // mock只能为get请求
    services.get(urls.personalInfo, {}, this.getPersonInfo);
    document.documentElement.scrollTop = document.body.scrollTop = 0;
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

  // 跳转到加入我们
   linkToJoinUs = () => {
     console.log('joinUs')
    location.hash = '/join-us';
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
              <div className='title_img1' />
            </div>
            <div>
              <div className='title_img2' />
            </div>
          </Carousel>,
          <div className='six_ponit_title'> 选择我们的六大优势</div>
          <div className='first_line'>
            <div className='span_title_left'>{}</div>
            <div className='circle'>{}</div>
            <div className='span_title_right'>{}</div>
          </div>
          <div className='first_line'>
            <div className='span_title_left'>{}</div>
            <div className='circle1'>1</div>
            <div className='span_title_right'>
              <Card title='深度剖析餐饮市场 | 打造网红水果饼' bordered={false} style={{ width: 500 }}>
                <p>打造网红水果饼,线上适合外卖，线下开店灵活，成熟的经验，整店。输出，包教包会，零风险，无后顾之忧</p>
              </Card>
            </div>
          </div>
          <div className='first_line'>
            <div className='span_title_left'>
              <Card title='严谨的成本分析——利润最大化' bordered={false} style={{ width: 500 }}>
                <p>利润最大化经过大量详实的市场调研,我们发现芝士榴莲饼的市场利润回报率高达200%,那么您还在等什么？</p>
              </Card>
            </div>
            <div className='circle2'>2</div>
            <div className='span_title_right'>{}</div>
          </div>
          <div className='first_line'>
            <div className='span_title_left'>{}</div>
            <div className='circle1'>3</div>
            <div className='span_title_right'>
              <Card title='坚持品质追求 | 纯手工 创新' bordered={false} style={{ width: 500 }}>
                <p>缘来我想对你说一贯坚持高品质，选材注重新鲜、天然、绿色、承诺不添加任何添加剂、纯手工制作最大程度保留食材风味。</p>
              </Card>
            </div>
          </div>
          <div className='first_line'>
            <div className='span_title_left'>
              <Card title='保姆式扶持——0经验开店' bordered={false} style={{ width: 500 }}>
                <p>自门店选址起，公司将全程陪伴每位加盟商，提供全套方案和营销策略，将合作共赢进行到底。</p>
              </Card>
            </div>
            <div className='circle2'>4</div>
            <div className='span_title_right'>{}</div>
          </div>
          <div className='first_line'>
            <div className='span_title_left'>{}</div>
            <div className='circle1'>5</div>
            <div className='span_title_right'>
              <Card title='匠心打造 | 网红小吃' bordered={false} style={{ width: 500 }}>
                <p>制作上采用纯手工制作方式，从原料采购，到精心制作，标准出品，精美包装，每一步都强调精致用心，经得起品位的挑剔和岁月的推敲！</p>
              </Card>
            </div>
          </div>
          <div className='first_line'>
            <div className='span_title_left'>
              <Card title='品牌发展——天道酬勤' bordered={false} style={{ width: 500 }}>
                <p>“缘来我想对你说”致力于为广大消费者呈上适应当前市场需求的爆款网红小吃，让消费者能在忙碌的生活节奏中享受舌尖的律动。</p>
              </Card>
            </div>
            <div className='circle2'>6</div>
            <div className='span_title_right'>{}</div>
          </div>
          <div className='first_line'>
            <div className='circle'>{}</div>
          </div>
          <div className='six_ponit_title'> 九大扶持</div>
          <div className='nine_display'>
            <div className='line_one'>
              <div className='nine_all_one'>
                <div className='nine_img1'>
                  {}
                </div>
                <div className='nine_img_title'>1.平台支持</div>
                <div className='nine_img_title1'>与各大线上平台战略合作</div>
              </div>
              <div className='nine_all_one'>
                <div className='nine_img2'>
                  {}
                </div>
                <div className='nine_img_title'>2.选址评估</div>
                <div className='nine_img_title1'>门店选址案例分析及专业化评估建议</div>
              </div>
              <div className='nine_all_one'>
                <div className='nine_img3'>
                  {}
                </div>
                <div className='nine_img_title'>3.店铺设计</div>
                <div className='nine_img_title1'>公司提供免费装修设计图纸和方案</div>
              </div>
            </div>
            <div className='line_one'>
              <div className='nine_all_one'>
                <div className='nine_img4'>
                  {}
                </div>
                <div className='nine_img_title'>4.系统培训</div>
                <div className='nine_img_title1'>终身免费培训，系统化培训，模块化教学</div>
              </div>
              <div className='nine_all_one'>
                <div className='nine_img5'>
                  {}
                </div>
                <div className='nine_img_title'>5.市场推广</div>
                <div className='nine_img_title1'>终身免费培训，系统化培训，模块化教学</div>
              </div>
              <div className='nine_all_one'>
                <div className='nine_img6'>
                  {}
                </div>
                <div className='nine_img_title'>6.开业扶持</div>
                <div className='nine_img_title1'>托管+代运营的合作模式提供高效且全方位精准</div>
              </div>
            </div>
            <div className='line_one'>
              <div className='nine_all_one'>
                <div className='nine_img8'>
                  {}
                </div>
                <div className='nine_img_title'>7.营运服务</div>
                <div className='nine_img_title1'>利用开业期间的客户聚集效应，
                集中为加盟店定制个性的推广套餐，满足不同
                地区，不同定位的创业者</div>
              </div>
              <div className='nine_all_one'>
                <div className='nine_img7'>
                  {}
                </div>
                <div className='nine_img_title'>8.菜品支持</div>
                <div className='nine_img_title1'>公司统一快递配送，加盟商提前安排好订单、公司会根据订单安排配送</div>
              </div>
              <div className='nine_all_one'>
                <div className='nine_img9'>
                  {}
                </div>
                <div className='nine_img_title'>9.终身合作</div>
                <div className='nine_img_title1'>协议三年一签，品牌终身使用，协议续签，不另收加盟费</div>
              </div>
            </div>
          </div>
          <div className='join_us'>
            <div className='title' />
            <div className='button'>
              <Button type='primary' size='large' onClick={this.linkToJoinUs}>
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
