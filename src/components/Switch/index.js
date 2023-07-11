import React, { useEffect, useState, useRef, useMemo } from 'react';

const Switch = props => {
  const getDom = () => {
    let list = []
    for (let i = 0; i < 16; i++) {
      list.push({ active: false })
    }
    return list
  };
  const { callback, type } = props;
  const [dom, setDom] = useState(getDom);
  const setAnimate = useRef(null);
  const setCallback = useRef(null);

  const shuffle = (n) => {
    //生成m张牌
    let arr = new Array(n);
    for (var i = 0; i < n; i++) {
      arr[i] = i;
    }
    //每次抽出一张牌，放在另一堆。因为要在数组里抽出元素，把后面的所有元素向前拉一位，所以很耗时。
    var newArr = []
    for (let i = n; i > 0; i--) {
      var length = Math.floor(Math.random() * i);
      newArr.push(arr[length]);
      arr.splice(length, 1);
    }
    return newArr;
  };

  const classNames = useMemo(() => ({
    animate: `animate-${type}`, //type决定进入还是离场的样式
    active: `active-${type}`
  }), [type]);

  useEffect(() => {
    let order = shuffle(16) //组件加载后 创建1-16的乱序数组
    let newDom = [...dom];
    let i = -1;
    let aniTimeout = () => {
      i++;
      if (i >= order.length) return;
      newDom[order[i]].active = true;
      setDom([...newDom])
    }
    setAnimate.current = setInterval(aniTimeout, 17);
    setCallback.current = setTimeout(() => {
      callback && callback(false)
    }, 1000);

    return () => {
      clearInterval(setAnimate.current)
      clearTimeout(setCallback.current)
    }
  }, []);


  return <div className={classNames.animate}>
    {dom.map((i, k) => <span key={k} className={i.active ? classNames.active : ''}></span>)}
  </div>
};

export default Switch;