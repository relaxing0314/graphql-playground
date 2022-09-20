import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from 'graphql-playground-react2';
import {getQueryVariables} from './utils/util';
import reportWebVitals from './reportWebVitals';
import App from './App';

import './index.css';

// 获取地址栏所有参数
const queryData = getQueryVariables(true);
sessionStorage.setItem('graphql-url-data', JSON.stringify(queryData));
const {baseUrl, serviceId, tenant, token, lookUrl} = queryData;
const endpointUrl = baseUrl ? `${baseUrl}/dsp-graphql/graphql` : '/dsp-graphql/graphql';

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App
        endpoint={endpointUrl}
        headers={{
          'x-service-id': serviceId,
          'x-tenant-id': tenant,
          'token': token
        }}
        lookApi={lookUrl}
        {...queryData}
      />
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root'),
)


reportWebVitals();
