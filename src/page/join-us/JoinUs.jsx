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
            <span>加盟条件</span>
            <ul>
              <li>门店要求</li>
              <li>启动资金</li>
              <li>统一管理</li>
              <li>战略定位</li>
            </ul>
          </div>

          <div className='connect_us'>
            <span>联系我们</span>
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
