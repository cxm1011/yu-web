import React from 'react';
import {urls, services} from 'api';
import {Carousel} from 'antd';
import './index.less';
import {ContentUsForm} from 'components';
export default class JoinUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: {}
    }
  }

  componentDidMount() {
    // mock只能为get请求
    services.get(urls.personalInfo, {}, this.getPersonInfo);
    this.forceUpdate();
    document.documentElement.scrollTop = document.body.scrollTop = 0;
    console.log('12345')
  }

  getPersonInfo = (data) => {
    console.log('getPersonInfo', data);
  }
  render() {
    return (
      <div className='join_us'>
        <Carousel autoplay>
          <div>
            <div className='title_img1' />
          </div>
          <div>
            <div className='title_img2' />
          </div>
        </Carousel>,
        <div className='content'>
          <div className='join_condition'>
            <span className='span_first_name'>加盟条件</span>
            <ul>
              <li>1.门店要求</li>
              <div style={{border: '1px solid #000'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有适合的经营场地，门店面积在15-30平方米</div>
              <li>2.启动资金</li>
              <div style={{border: '1px solid #000'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有足够的启动资金，没有犯罪及破产记录和“缘来我想对你说”品牌没有利益冲突。</div>
              <li>3.统一管理</li>
              <div style={{border: '1px solid #000'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;能够严格执行公司管理标准，接受总部指导管理和监督</div>
              <li>4.品牌意识</li>
              <div style={{border: '1px solid #000'}}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;认可“缘来我想对你说”的品牌文化，能自觉维护公司和加盟连锁品牌形象，对加盟餐饮开业后营业额以及获利状况抱有客观的评估和期望。</div>
            </ul>
          </div>

          <div className='connect_us'>
            <span className='span_first_name'>联系我们</span>
            <ul>
              <li>上海招商中心：上海浦东川沙绿地东海岸B座1101</li>
              <li>江苏南通崇川区中南新世纪广场35号楼1525室</li>
              <li>联系邮箱：704675010@qq.com</li>
            </ul>
          </div>
          <ContentUsForm />
        </div>
      </div>
    )
  }
}
