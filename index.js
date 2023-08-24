const Notification = (props) => {
  const { className, bgText } = props;
  return <div className={className}>{bgText}</div>;
};

const element = (
  <div className="cont">
    <div className="content-container">
      <h1 className="head">Notifications</h1>;
      <Notification bgText="Information Message" className="information" />
      <Notification bgText="Success Message" className="success" />
      <Notification bgText="Warning Message" className="warning" />
      <Notification bgText="Error Message" className="Error" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
