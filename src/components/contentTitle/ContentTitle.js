const ContentTitle = (props) => {
  if(props.tag === 'h3') {
    return ( 
      <h3 className={props.className}>{props.title}</h3>
    )
  } else {
    return (
      <h2 className={props.className}>{props.title}</h2>
    )
  }
}
 
export default ContentTitle;