import React from 'react';
import {urls, services} from 'api';
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
          '脉鹿餐饮是以引领餐饮时尚为发展理念的创新型餐饮管理公司，立志于打造中国的创新餐饮品牌，现已经拥有五谷粥稻创意粥、展护味拼饭、爱的便当等创新餐饮品牌。',
          '五谷粥稻创意粥以最具创意的构思，独特的配方、打破传统粥类单一的口味，创新的工艺还原食材本真的健康风味；拥有完善的新品研发中心，中央厨房配送中心，为合作伙伴、全国加盟商提供全方位的无忧保障。',
          '做一碗有创意的粥是我们的品牌理念，我们秉承“诚信、创新、共赢”的合作理念，以成熟的运营管理经验和完善的加盟扶持体系，无微不至的为合作伙伴提供开店支持和帮助。'
        ]
      }
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
    const {brandIntroduce} = this.state;
    console.log('brandIntroduce', brandIntroduce);
    return (
      <div>
        <img src='src/assets/1.jpeg' className='headImage' />
        <div className='videoDiv' >
          <video src='src/assets/1.mp4' autoPlay controls controlsList='nodownload' className='video' style={{height: '400px', width: '600px'}} />
        </div>
        <ContentDisplay content={brandIntroduce} />
      </div>
    )
  }
}
