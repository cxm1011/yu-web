import React from 'react';
import {urls, services} from 'api';
import {Carousel} from 'antd';
import './index.less';
import {ContentDisplay} from 'components';

export default class EnterBrand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: {},
      brandIntroduce: {
        title: '品牌介绍',
        subTitle: '匠心独具|创意无限',
        contentList: [
          '创始人Mr.Zorro第一次品尝到芝士水果饼是在马拉西亚的一家五星级酒店。 ',
          '现烤的芝士榴莲饼，进店必点菜品，以前对榴莲“臭味”极度敏感的他，尝一口后，竟然停不下来。国内有很多人跟创始人一样，因为榴莲独特的“臭味”进而对榴莲敬而远之，为改变大家对榴莲的偏见， Mr.Zorro创立的缘来我想对你说“品牌芝士榴莲饼诞生了”。',
          '手工制作+现场烤制+空白市场。缘来我想对你说，就是这样一个品牌。店内产品覆盖年龄范围宽泛，爱众群众广，覆盖季节饱满。'
        ]
      }
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
    const {brandIntroduce} = this.state;
    console.log('brandIntroduce', brandIntroduce);
    return (
      <div style={{paddingTop: '100px'}}>
        <Carousel autoplay>
          <div>
            <div className='title_img1' />
          </div>
          <div>
            <div className='title_img2' />
          </div>
        </Carousel>,
        <div className='videoDiv' >
          <video src='http://120.27.68.176:8080/image/display.mp4' controls controlsList='nodownload' className='video' style={{height: '400px', width: '600px'}} />
        </div>
        <ContentDisplay content={brandIntroduce} />
      </div>
    )
  }
}
