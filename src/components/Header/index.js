import React from 'react';
import isPhone from '@/utils/isPhone';
// import Mobile from './mobile'
import Wrapped from './Wrapped'
import Pc from './PC'

// const NewComponent = isPhone ? Wrapped(Mobile) : Wrapped(Pc)
const NewComponent = isPhone ? Wrapped(Pc) : Wrapped(Pc)

export default (props) => {
  const _props = {...props}
  return(
    <header>
      <NewComponent {..._props}/>
    </header>
  )
}