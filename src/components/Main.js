require('normalize.css/normalize.css');
require('styles/App.css');
require('styles/main.css');

import React from 'react';

//获取图片相关数据
let imageDatas = require('../data/imageDatas.json');

//利用自执行函数将图片名信息转成图片URl路径信息
imageDatas = (function genImageURL(imageDataArr) {
  for (let i = 0, j = imageDataArr.length; i < j; i++) {
    var singleImageData = imageDataArr[i];

    singleImageData.imageURL = require('../images/' + singleImageData.fileName);
    imageDataArr[i] = singleImageData;
  }
  return imageDataArr;
})(imageDatas);


class AppComponent extends React.Component {
  render() {
    //return (
    //  <div className="index">
    //    {
    //      imageDatas.map(function (imageData) {
    //        return <img key={imageData.imageURL} src={imageData.imageURL} alt=""/>
    //      })
    //    }
    //    <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
    //  </div>
    //);
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
