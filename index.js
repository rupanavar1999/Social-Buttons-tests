const Button = (props) => {
  //  Write your code here.
  const { name, css } = props;
  return <button className={css}>{name}</button>;
};

const element = (
  //  Write your code here.
  <div className="bgContainer">
    <div className="mainContainer">
      <h1 className="heading">Social Buttons</h1>
      <div className="buttonContainer">
        <Button name="like" css="like" />
        <Button name="comment" css="comment" />
        <Button name="share" css="share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
