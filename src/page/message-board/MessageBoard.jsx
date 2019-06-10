import React from 'react';
import ReactDOM from 'react-dom'
import {urls, services} from 'api';
import {Table, Input, Button, Icon} from 'antd';
import Highlighter from 'react-highlight-words';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import './message.less'

export default class MessageBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: {},
      searchText: '',
    }
  }
  componentDidMount() {
      // mock只能为get请求
      services.get(urls.personalInfo, {}, this.getPersonInfo);
      document.documentElement.scrollTop = document.body.scrollTop = 0;
      const tableCon = ReactDOM.findDOMNode(this.refs['tables'])// 利用reactdom.finddomnode()来获取真实DOM节点
      const table = tableCon.querySelector('table')
      table.setAttribute('id', 'table-to-xls')// 为table设置id属性
 }

  getPersonInfo = (data) => {
      console.log('getPersonInfo', data);
    }

    getColumnSearchProps = dataIndex => ({
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            ref={node => {
              this.searchInput = node;
            }}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type='primary'
            onClick={() => this.handleSearch(selectedKeys, confirm)}
            icon='search'
            size='small'
            style={{ width: 90, marginRight: 8 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size='small' style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      filterIcon: filtered => (
        <Icon type='search' style={{ color: filtered ? '#1890ff' : undefined }} />
      ),
      onFilter: (value, record) =>
        record[dataIndex]
          .toString()
          .toLowerCase()
          .includes(value.toLowerCase()),
      onFilterDropdownVisibleChange: visible => {
        if (visible) {
          setTimeout(() => this.searchInput.select());
        }
      },
      render: text => (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ),
    });

    handleSearch = (selectedKeys, confirm) => {
      confirm();
      this.setState({ searchText: selectedKeys[0] });
    };

    handleReset = clearFilters => {
      clearFilters();
      this.setState({ searchText: '' });
    };

  render() {
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        width: '10%',
        ...this.getColumnSearchProps('name'),
      },
      {
        title: '电话',
        dataIndex: 'phoneNum',
        key: 'phoneNum',
        width: '10%',
        ...this.getColumnSearchProps('phoneNum'),
      },
      {
        title: '邮箱',
        dataIndex: 'email',
        width: '10%',
        key: 'email',
        ...this.getColumnSearchProps('email'),
      },
      {
        title: '留言',
        dataIndex: 'content',
        key: 'content',
        ...this.getColumnSearchProps('content'),
      },
    ];
    const data = [
      {
        key: '1',
        name: 'John Brown',
        phoneNum: 15012345678,
        email: '1229284424@qq.com',
        content: '开始的 v 送到门口 v 什么 v 说'
      },
      {
        key: '2',
        name: 'Joe Black',
        phoneNum: 15112345678,
        email: '1229284424@qq.com',
        content: '开始的 v 送到门口 v 什么 v 说'
      },
      {
        key: '3',
        name: 'Jim Green',
        phoneNum: 15212345678,
        email: '1229284424@qq.com',
        content: '开始的 v 送到门口 v 什么 v 说'
      },
      {
        key: '4',
        name: 'Jim Red',
        phoneNum: 15312345678,
        email: '1229284424@qq.com',
        content: '原来，对粥的那份喜欢从牙牙学语就开始了啊！梁实秋这不喜欢喝粥的人也承认某些粥也还是好喝的。他说的是北方的“菜粥”，把粥熬熟，然后加上大把大把的白菜心，俟菜烂再撒上一些盐和麻油，别有风味。其实菜粥并不是北方的“专利”。在我家里，到了冬天，也是常常把这“菜粥”当成早饭。一般那时家里就有了年糕，母亲早上便早早起床，生好炉子，拿了昨天剩下的米饭和新鲜的青菜或者大白菜开始熬粥，再加入几块糯米年糕，撒上些盐，味精。年糕熟的慢，等年糕熟透，这粥便软到了极致。用母亲的话说就是粥的肚肠都熬出来了。这粥里不仅有着菜的清爽还带着糯米的香。滑糯的粥配上软香的年糕，一气就能吃一大碗，吃的是饱又暖。'
      },
    ];
    return (
      <div className='message'>
        <div className='h1Css'>
          <h1 >留言管理</h1>
        </div>
        <div className='title'>
          <ReactHTMLTableToExcel
            className='downloadButton'
            table='table-to-xls'
            filename='钱包信息'
            sheet='钱包信息'
            buttonText='导出' />
        </div>
        <Table columns={columns} dataSource={data} ref='tables' />;
      </div>
    )
  }
}
