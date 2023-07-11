export default (WrappedComponent) => props => {
  return(
    <div>
      <WrappedComponent {...props}/>
    </div>
  )
}