import { useEffect, useState, useRef } from 'react';
import { connect } from 'dva';
import Switch from '@/components/Switch';
import IkunGame from './components/IkunGame';

const Home = props => {
  const { dispatch, gameState } = props;
  const [switchin, setSwitchin] = useState(true);
  const ikunGame = useRef(null);

  // 页面切换动画控制
  const switchOut = (n) => {
    setSwitchin(n)
  }

  useEffect(() => {

  }, [])

  return <div className="page">
    <IkunGame />
    {switchin ? <Switch type="enter" callback={switchOut.bind(this)} /> : ''}
  </div>
}

export default connect(({ home }) => ({
  gameState: home.gameState
}))(Home);