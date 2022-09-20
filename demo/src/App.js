import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Playground } from 'graphql-playground-react2';
import { message, Button, Modal } from 'antd';
import request from './utils/request';
import CustomHeader from './components/custom-header';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoad: false,
      query: '',
      desc: '', // 说明
    }
  }
  onNotesShow = () => {
    Modal.info({
      title: '接口说明',
      closable: true,
      maskClosable: true,
      okText: '关闭',
      width: '70%',
      className: 'notes-modal',
      content: (
        <div className='modal-notes'>
          <pre className='code-desc'>{this.state.desc}</pre>
        </div>
      )
    });
  }
  componentDidMount() {
    const {serviceId, toSetQuery} = this.props;
    request({
      url: `/dsp-graphql/template/${serviceId}`,
      method: 'get'
    }).then(({code, msg, data}) => {
      if(code === '000000') {
        const isSplit = data.indexOf('@@@@');
        let _data = '';
        let desc = '';
        if(isSplit != -1) {
          const arr = data.split('@@@@');
          desc = arr[0];
          _data = arr[1];
        }else{
          _data = data;
        }
        this.setState({
          query: _data,
          desc
        })
        toSetQuery(_data);
      }else{
        message.warning(msg);
      }
    })
    this.setState({
      isLoad: true
    })
  }
  render() {
    return (
      <>
        <Playground
          endpoint={this.props.endpoint}
          headers={this.props.headers}
        />
        <div className='custom-wrap'>
          <div className='custom-header-bg'></div>
          <div className='custom-tabs'>
            <div
              className={['custom-tab-item', this.state.isLoad ? '': 'custom-tab-item-init'].join(' ')}
            >
              {
                this.state.isLoad ? null : (
                  <div className="sc-cmthru bfVYLy custom-tab">
                    <div className="sc-hMFtBS gtvAeD">NEW TAB</div>
                  </div>
                )
              }
            </div>
            <div className='custom-btn'>
              <Button
                className='notes-btn' 
                type="primary"
                onClick={this.onNotesShow}
              >接口说明</Button>
            </div>
          </div>
          <div className='custom-header'>
            <CustomHeader
              lookApi={this.props.lookApi}
            />
          </div>
        </div>
      </>
    )
  }
}

// 将dispatch放到props中
const mapDispatchToProps = dispatch => ({
  toSetQuery: (query) => dispatch({
    type: 'EDIT_QUERY',
    payload: {
      query
    }
  })
})
export default connect(null, mapDispatchToProps)(App);