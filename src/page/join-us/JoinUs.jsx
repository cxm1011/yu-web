import React from 'react';
import {urls, services} from 'api';
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
    console.log('12345')
  }

  getPersonInfo = (data) => {
    console.log('getPersonInfo', data);
  }
  render() {
    return (
      <div>
        <img src='src/assets/1.jpeg' className='headImage' />
        <div>
          <span>加盟条件</span>

          <ul>
            <li>门店要求</li>
            <li>启动资金</li>
            <li>统一管理</li>
            <li>战略定位</li>
          </ul>
        </div>

        <div>
          <span>联系我们</span>
          <ul>
            <li>上海招商中心：上海浦东川沙绿地东海岸B座1101</li>
            <li>南通运营中心：南通市开发区通富南路45号东方大厦3楼</li>
            <li>南通培训中心：南通市崇川区五洲城市广场2幢3楼</li>
            <li>咨询电话：400 645 0719</li>
            <li>联系邮箱：tzjz-xw@163.com</li>
          </ul>
        </div>

        <ContentUsForm />

      </div>
    )
  }
}
