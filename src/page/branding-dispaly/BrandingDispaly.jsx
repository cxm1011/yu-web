import React from 'react';
import {urls, services} from 'api';
export default class BrandingDIspaly extends React.Component {
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
    return (
      <div>
        <span>走进品牌</span>
      </div>
    )
  }
}
