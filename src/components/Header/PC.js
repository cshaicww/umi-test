import React, { useState, useEffect, useRef } from 'react'

/**
 * @name 导航栏组件
 */

function PollyTime(t) {
	let _t = +t < 10 ? `0${t}` : t
	return _t
}
function TimeNow() {
	const time = new Date()
	return `${PollyTime(time.getHours())}:${PollyTime(time.getMinutes())}:${PollyTime(time.getSeconds())}`
}

const Header = props => {
	const { isRoute, history } = props;
	const [nav, setNav] = useState([
		{ indent: true, text: '首页', herf: '/home' },
		{ indent: false, text: '影视', herf: '/filmsAndTelevision' },
	]);
	const [now, setNow] = useState(0);
	const [time, setTime] = useState(TimeNow);
	const setHistory = useRef(null);

	const timeRe = () => {
		setTime(TimeNow())
	}

	const handleIndex = (index) => {
		let newNav = nav;
		newNav.forEach(t => t.indent = false)
		newNav[index].indent = true;
		setNav([...newNav]);
		setNow(index);
	}

	const toLink = (n, event) => {
		const index = nav.indexOf(n)
		if (index === now) return;
		handleIndex(index)
		isRoute(true);
		setHistory.current = setTimeout(() => {
			history.push(nav[index].herf)
		}, 1000)
	}

	useEffect(() => {
		// 组件渲染前 判断当前location为第几个，为第几个导航添加active样式
		let paths = []
		nav.map((i) => paths.push(i.herf.toString()))
		let path = history.location.pathname.toString();
		let index = paths.indexOf(path) > -1 ? paths.indexOf(path) : 1;
		handleIndex(index)

		setInterval(timeRe, 1000)
	}, [])

	return (
		<div className="app-center">
			<div className="nav">
				<span>logo</span>
				{nav.map((nav, i) => (<a key={i}
					className={nav.indent ? 'nav-index' : ''}
					onClick={() => toLink(nav)}>
					{nav.text}
				</a>))}
			</div>
			<div className="times">
				<time>{time}</time>
			</div>
		</div>
	)

}

export default Header;