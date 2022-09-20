import CryptoJS from "crypto-js";

// 加解密
const key = CryptoJS.enc.Utf8.parse("1234567890000000"); // 16位
const iv = CryptoJS.enc.Utf8.parse("1234567890000000");
export const AES = {
  //aes加密
  encrypt(word) {
    let encrypted = "";
    if (typeof word == "string") {
      const srcs = CryptoJS.enc.Utf8.parse(word);
      encrypted = CryptoJS.AES.encrypt(srcs, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });
    } else if (typeof word == "object") {
      // 对象格式的转成json字符串
      const data = JSON.stringify(word);
      const srcs = CryptoJS.enc.Utf8.parse(data);
      encrypted = CryptoJS.AES.encrypt(srcs, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });
    }
    return encrypted.ciphertext.toString();
  },
  // aes解密
  decrypt(word) {
    const encryptedHexStr = CryptoJS.enc.Hex.parse(word);
    const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
    const decrypt = CryptoJS.AES.decrypt(srcs, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
  }
};


// 获取单个地址参数
export const getQueryVariable = (variable, isDecrypt) => {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] === variable) { return pair[1]; }
  }
  return (false);
}

// 获取所有地址参数
export const getQueryVariables = (isDecrypt) => {
  let url = '';
  var result = new Object();
  if(isDecrypt) {
    url = AES.decrypt(window.location.search.substring(1));
  }else{
    url = window.location.search.substring(1); // 获取url中"?"符后的字串
  }
  var strs = url.split("&");
  for(var i = 0; i < strs.length; i ++) {
    const key = strs[i].split("=")[0];
    const val = decodeURI(strs[i].split("=")[1]);
    if(val === '' || val === 'null' || val === 'undefined') {
      result[key] = '';
    }else{
      result[key] = val;
    }
  }
  return result;
}