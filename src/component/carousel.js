//dev分支3
import React, { Component } from 'react';
import '../css/carousel.css';
const Image_DATA = [
  {
    src: require('../images/bg-img02.jpg'),
    alt: 'images-1'
  },
  {
    src: require('../images/bg-img03.jpg'),
    alt: 'images-2'
  },
  {
    src: require('../images/bg-img04.jpg'),
    alt: 'images-3'
  }
];

/**
 * SliderItem 展示图片轮播的没想内容
 * item(有src和alt属性)
 * count(轮播项总数目，计算每个轮播项的宽度)
 */
class SliderItem extends Component {
  render() {
    let { count, item } = this.props;
    let width = 100 / count + '%';
    return (
      <li className="slider-item" style={{width: width}}>
        <img src={item.src} alt={item.alt}/>
      </li>
    );
  }
}

/**
 * count(轮播项目总数)
 * nowLocal(当前的轮播项)
 * turn(点击dot回调函数)
 */
class SliderDots extends Component {
  handleDotClick(i) {
    var option = i - this.props.nowLocal;
    this.props.turn(option);
  }

  render() {
    let dotNodes = [];
    let { count, nowLocal } = this.props;
    for(let i = 0; i < count; i++) {
      dotNodes[i] = (
        <span
          key={'dot' + i}
          className={"slider-dot" + (i === nowLocal?" slider-dot-slect":"")}
          onClick={() => this.handleDotClick(i)}>
        </span>
      );
    }
    return (
      <div className="slider-dots-wrap">
        {dotNodes}
      </div>
    );
  }
}
/**
 * 只需要一个turn函数做出回调
 */
class SliderArrows extends Component {
  handleArrowClick(option){
    this.props.turn(option);
  }

  render() {
    return (
      <div className="slider-arrows-wrap">
        <span
          className="slider-arrow slider-arrow-left"
          onClick={this.handleArrowClick.bind(this,-1)}>
          &lt;
        </span>
        <span
          className="slider-arrow slider-arrow-right"
          onClick={this.handleArrowClick.bind(this,1)}>
          &gt;
          </span>
      </div>
    );
  }
}

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nowLocal: 0
    };
    this.turn = this.turn.bind(this);
    this.goPlay = this.goPlay.bind(this);
    this.pausePlay = this.pausePlay.bind(this);
  }

  //向前向后多少
  turn(n) {
    var _n = this.state.nowLocal + n;
    if(_n < 0) {
      _n = _n + this.props.items.length;
    }
    if(_n >= this.props.items.length) {
      _n = _n - this.props.items.length;
    }
    this.setState({nowLocal: _n});
  }

  //开始自动轮播
  goPlay() {
    if(this.props.autoplay) {
      this.autoPlayFlag = setInterval(() => {
        this.turn(1);
      },this.props.delay*1000);
    }
  }

  //暂停自动轮播
  pausePlay() {
    clearInterval(this.autoPlayFlag);
  }

  componentDidMount() {
    this.goPlay();
  }
  render() {
    let count = this.props.items.length;
    let itemNodes = this.props.items.map((item, idx) => {
      return <SliderItem item={item} count={count} key={'item'+idx}/>
    });
    let arrowsNode = <SliderArrows turn={this.turn}/>
    let dotsNode = <SliderDots turn={this.turn} count={count} nowLocal={this.state.nowLocal}/> 
    return (
      <div
        className="slider"
        onMouseOver={this.props.pause?this.pausePlay:null}
        onMouseOut={this.props.pause?this.goPlay:null}>
          <ul style={{
            left:-100 * this.state.nowLocal + "%",
            transitionDuration: this.props.speed + "s",
            width: this.props.items.length * 100 + "%"
          }}>
            {itemNodes}
          </ul>
          {this.props.arrows?arrowsNode:null}
          {this.props.dots?dotsNode:null}
        </div>
    );
  }
}

/**
 * item 轮播的图片
 * speed 图片切换速度时间
 * delay 图片主流时间
 * pause 自动轮播时鼠标方放上去是否暂停
 * atuoplay 是否自动轮播
 * dots 是否需要图片索引
 * arrows 是否配置前后箭头
 */
class Carousel extends Component {
  render() {
    return (
      <Slider
        items={Image_DATA}
        speed={1.2}
        delay={2.1}
        pause={true}
        autoplay={true}
        dots={true}
        arrows={true}
      />
    )
  }
}

Slider.defaultProps = {
  speed: 1,
  delay: 2,
  pause: true,
  autoplay: true,
  dots: true,
  arrows: true,
  items: [],
};
Slider.autoPlayFlag = null;

export default Carousel;