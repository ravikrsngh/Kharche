const LogRecord = (props) => {
  return (
      <div className="log_record_container">
        <div className="log_icon"><img src={props.img} /></div>
        <div className="log_details">
          <h5>{props.title}</h5>
          <p>{props.subTitle}</p>
        </div>
        <div className="logprice"><p>- Rs. {props.value}</p></div>
      </div>
  )
}

export default LogRecord;
