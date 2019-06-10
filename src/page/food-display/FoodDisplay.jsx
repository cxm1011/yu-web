import React from 'react';
import {urls, services} from 'api';
import {Carousel} from 'antd';
import './foodDisplay.less'
export default class FoodDisplay extends React.Component {
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
      window.addEventListener('scroll', this.scrollHandle, true);
      // 初始化 移除图片节点
      document.getElementById('first_left_img').classList.remove('left_img1');
      // document.getElementById('first_right_img').classList.remove('right_img1');

      document.getElementById('second_left_img').classList.remove('left_img2');
      // document.getElementById('second_right_img').classList.remove('right_img2');

      document.getElementById('third_left_img').classList.remove('left_img3');
      // document.getElementById('third_right_img').classList.remove('right_img3');

      document.getElementById('fourth_left_img').classList.remove('left_img4');
      // document.getElementById('fourth_right_img').classList.remove('right_img4');

      document.getElementById('fifth_left_img').classList.remove('left_img5');
      // document.getElementById('fifth_right_img').classList.remove('right_img5');

      document.getElementById('sixth_left_img').classList.remove('left_img6');
      // document.getElementById('sixth_right_img').classList.remove('right_img6');

      this.scrollHandle();
    }

    getPersonInfo = (data) => {
      console.log('getPersonInfo', data);
    }

   // 进入可视窗 动画效果开启
    scrollHandle () {
      const img1 = document.getElementById('first');
      const img2 = document.getElementById('second');
      const img3 = document.getElementById('third');
      const img4 = document.getElementById('fourth');
      const img5 = document.getElementById('fifth');
      const img6 = document.getElementById('sixth');
      // first img
      const offset1 = img1.getBoundingClientRect();
      const offsetTop1 = offset1.top;
      const offsetBottom1 = offset1.bottom;
      // second img
      const offset2 = img2.getBoundingClientRect();
      const offsetTop2 = offset2.top;
      const offsetBottom2 = offset2.bottom;
      // third img
      const offset3 = img3.getBoundingClientRect();
      const offsetTop3 = offset3.top;
      const offsetBottom3 = offset3.bottom;
      // fourth img
      const offset4 = img4.getBoundingClientRect();
      const offsetTop4 = offset4.top;
      const offsetBottom4 = offset4.bottom;
      // fifth img
      const offset5 = img5.getBoundingClientRect();
      const offsetTop5 = offset5.top;
      const offsetBottom5 = offset5.bottom;
      // sixth img
      const offset6 = img6.getBoundingClientRect();
      const offsetTop6 = offset6.top;
      const offsetBottom6 = offset6.bottom;

      // 进入first可视区域
      if ((offsetTop1) <= window.innerHeight && (offsetBottom1) >= 0) {
          console.log('1进入可视区域');
          document.getElementById('first_left_img').classList.add('left_img1');
          // document.getElementById('first_right_img').classList.add('right_img1');
      } else {
          console.log('1移出可视区域');
          // do something...
          // document.getElementById('first_left_img').classList.remove('left_img');
          // document.getElementById('first_right_img').classList.remove('right_img');
      }

      // 进入second可视区域
      if ((offsetTop2) <= window.innerHeight && (offsetBottom2) >= 0) {
        document.getElementById('second_left_img').classList.add('left_img2');
        // document.getElementById('second_right_img').classList.add('right_img2');
      } else {
        console.log('2移出可视区域');
        // do something...
        // document.getElementById('second_left_img').classList.remove('left_img');
        // document.getElementById('second_right_img').classList.remove('right_img');
      }

      // 进入third可视区域
      if (offsetTop3 <= window.innerHeight && offsetBottom3 >= 0) {
        console.log('3进入可视区域');
        document.getElementById('third_left_img').classList.add('left_img3');
        // document.getElementById('third_right_img').classList.add('right_img3');
      } else {
        console.log('3移出可视区域');
        // do something...
        // document.getElementById('third_left_img').classList.remove('left_img');
        // document.getElementById('third_right_img').classList.remove('right_img');
      }

      // 进入fourth可视区域
      if (offsetTop4 <= window.innerHeight && offsetBottom4 >= 0) {
        console.log('4进入可视区域');
        document.getElementById('fourth_left_img').classList.add('left_img4');
        // document.getElementById('fourth_right_img').classList.add('right_img4');
      } else {
        console.log('4移出可视区域');
        // document.getElementById('fourth_left_img').classList.remove('left_img');
        // document.getElementById('fourth_right_img').classList.remove('right_img');
      }

      // 进入fifth可视区域
      if (offsetTop5 <= window.innerHeight && offsetBottom5 >= 0) {
        console.log('5进入可视区域');
        document.getElementById('fifth_left_img').classList.add('left_img5');
        // document.getElementById('fifth_right_img').classList.add('right_img5');
      } else {
        console.log('5移出可视区域');
        // document.getElementById('fifth_left_img').classList.remove('left_img');
        // document.getElementById('fifth_right_img').classList.remove('right_img');
      }

      // 进入sixth可视区域
      if (offsetTop6 <= window.innerHeight && offsetBottom6 >= 0) {
        console.log('6进入可视区域');
        document.getElementById('sixth_left_img').classList.add('left_img6');
        // document.getElementById('sixth_right_img').classList.add('right_img6');
      } else {
        console.log('6移出可视区域');
        // document.getElementById('sixth_left_img').classList.remove('left_img');
        // document.getElementById('sixth_right_img').classList.remove('right_img');
      }
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.scrollHandle, true);
    }
  com
  render() {
    return (
      <div className='food_display'>
        <Carousel autoplay>
          <div>
            <div className='title_img1' />
          </div>
          <div>
            <div className='title_img2' />
          </div>
        </Carousel>,
        <div className='food_content'>
          <div className='span_first_name'> 柠檬益菌多</div>
          <div className='row_img' id='first'>
            <div className='left_img1' id='first_left_img'>
              {}
            </div>
            {/* <div className='right_img1' id='first_right_img'>
              {}
            </div> */}
          </div>
          <div className='span_first_name'> 蜂蜜柚子茶</div>
          <div className='row_img' id='second'>
            <div className='left_img2' id='second_left_img'>
              {}
            </div>
            {/* <div className='right_img2' id='second_right_img'>
              {}
            </div> */}
          </div>
          <div className='span_first_name'> 水果茶</div>
          <div className='row_img' id='third'>
            <div className='left_img3' id='third_left_img'>
              {}
            </div>
            {/* <div className='right_img3' id='third_right_img'>
              {}
            </div> */}
          </div>
          <div className='span_first_name'> 霸王榴莲饼</div>
          <div className='row_img' id='fourth'>
            <div className='left_img4' id='fourth_left_img'>
              {}
            </div>
            {/* <div className='right_img4' id='fourth_right_img'>
              {}
            </div> */}
          </div>
          <div className='span_first_name'>霸王榴莲饼 </div>
          <div className='row_img' id='fifth'>
            <div className='left_img5' id='fifth_left_img'>
              {}
            </div>
            {/* <div className='right_img5' id='fifth_right_img'>
              {}
            </div> */}
          </div>
          <div className='span_first_name'>手工榴莲肉 </div>
          <div className='row_img' id='sixth'>
            <div className='left_img6' id='sixth_left_img'>
              {}
            </div>
            {/* <div className='right_img6' id='sixth_right_img'>
              {}
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}
