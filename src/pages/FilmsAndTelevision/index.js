import { useState, useEffect } from 'react';
import Switch from '@/components/Switch';

const FilmsAndTelevision = props => {
	const [switchin, setSwitchin] = useState(true);

	// 页面切换动画控制
  const switchOut = (n) => {
		setSwitchin(n)
  }

	return <div className="page">
		{switchin ? <Switch type="enter" callback={switchOut.bind(this)} /> : ''}
	</div>
}

export default FilmsAndTelevision;