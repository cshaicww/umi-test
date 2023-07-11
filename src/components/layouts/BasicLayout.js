import { useState } from 'react';
import Switch from '../Switch';
import Header from '../Header';


const BasicLayout = props => {
  const { children, history } = props;
  const [isRouter, setIsRouter] = useState(false);

  const clearAnimate = (n) => {
    //  删除router跳转动画的组件
    setIsRouter(n)
  }

  const isRoute = () => {
    // 添加router跳转动画的组件
    setIsRouter(true)
  }

  return <div className="main">
    <Header history={history} isRoute={isRoute} />
    <div>{children}</div>
    {isRouter ? <Switch type='leave' callback={clearAnimate.bind(this)} /> : ''}
  </div>
}

export default BasicLayout;