import React, { Component } from 'react';
import { connect } from 'react-redux';
import { message, Input } from 'antd';
import copy from "copy-to-clipboard";
import {getSelectedSession} from '../state/session';
import {getSettingsObj} from '../state/setting';
import request from '../utils/request';

class CustomHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lookUrl: ''
    }
    // console.log('--props-', props)
  }
  // copy url
  copyCurlToClipboard = () => {
    try {
      var curl = this.getCurl();
      copy(curl);
      message.success('copy curl成功');
    } catch (err) {
      message.error('copy curl失败');
    }
  }
  getCurl = () => {
    const lookUrl = this.state.lookUrl;
    const {lookApi, session} = this.props;
    let variables;
    try {
      variables = JSON.parse(session.variables);
    } catch (e) {};
    const data = {
      query: session.query.replace(/#.*\n/g, ''),
      variables,
      operationName: session.operationName,
    };
    const dataStr = JSON.stringify(data);
    
    const headers = {
      'Content-Type': 'application/json',
      'x-appid': '',
      'x-token': ''
    }
    const headersString = Object.keys(headers)
      .map(key => {
        const value = headers[key]
        return `-H '${key}: ${value}'`
      })
      .join(' ')
    return `curl '${lookApi}${lookUrl}' ${headersString} --data-binary '${dataStr}' --compressed`;
  }
  // copy query
  copyQueryToClipboard = () => {
    try {
      var query = this.getQuery();
      copy(query);
      message.success('copy jsonBody成功');
    } catch (err) {
      message.error('copy jsonBody失败');
    }
  }
  getQuery = () => {
    const {session} = this.props;
    const data = {
      query: session.query.replace(/#.*\n/g, '').replace(/\n\s*/g, '')
    };
    const dataStr = JSON.stringify(data);
    return dataStr;
  }
  componentDidMount() {
    request({
      url: `/dsp-graphql/template/url`,
      method: 'get'
    }).then(({code, msg, data}) => {
      if(code === '000000') {
        this.setState({
          lookUrl: data
        })
      }else{
        message.warning(msg);
      }
    })
  }
  render() {
    return this.props.session.isSettingsTab ? null : (
      <div className='custom-box'>
        <div
          className={['sc-cvbbAY', this.props.settings['editor.theme'] == 'light' ? 'hPDYPQ': 'kOflzg'].join(' ')}
        >
          <button
            className={['sc-eHgmQL', this.props.settings['editor.theme'] == 'light' ? 'loHTNh': 'dvmgwq'].join(' ')}
            onClick={this.props.onPrettify}
          >Prettify</button>
          <div className="sc-brqgnP kOowTR">
            <Input
              className={['sc-jWBwVP', this.props.settings['editor.theme'] == 'light' ? 'kmUnhu': 'cljqcK'].join(' ')}
              disabled={true}
              value={this.state.lookUrl ? this.props.lookApi+this.state.lookUrl : this.props.lookApi}
            />
          </div>
          <button
            className={['sc-eHgmQL', this.props.settings['editor.theme'] == 'light' ? 'loHTNh': 'dvmgwq'].join(' ')}
            onClick={this.copyCurlToClipboard}
          >Copy CURL</button>
          <button
            className={['sc-eHgmQL', this.props.settings['editor.theme'] == 'light' ? 'loHTNh': 'dvmgwq'].join(' ')}
            onClick={this.copyQueryToClipboard}
          >Copy jsonBody</button>
        </div>  
      </div>
    )
  }
}

// redux中的state到页面的props的转换
const mapStateToProps = state => {
  return {
    selectedWorkspace: state.selectedWorkspace,
    session: getSelectedSession(state),
    settings: getSettingsObj(state),
  }
};
// 将dispatch放到props中
const mapDispatchToProps = dispatch => ({
  onPrettify: () => dispatch({
    type: 'PRETTIFY_QUERY'
  })
})
export default connect(mapStateToProps, mapDispatchToProps)(CustomHeader);