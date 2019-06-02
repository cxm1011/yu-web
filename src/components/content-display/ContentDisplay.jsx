import React from 'react';
import './index.less';

export default class ContentDisplay extends React.Component {
  showCotent = (contentList) => {
    return contentList.map((value, index) => {
      return <div key={index}>
        <span style={{fontSize: '32px'}}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span>{value}</span>
      </div>
    })
  }
  render() {
    const {content} = this.props;
    const {title, subTitle, contentList} = content || {};
    return (
      <div className='contentDisplay'>
        <div className='title'>{title}</div>
        <div className='subTitle'>{subTitle}</div>
        <div className='contentList'>{this.showCotent(contentList)}</div>
      </div>
    )
  }
}
