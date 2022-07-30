import { Link, useHistory } from "react-router-dom";
export const Page1 = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);
  const history = useHistory();

  const onClickOpenDetailA = () => {
    history.push("page1/detailA");
  };

  return (
    <div>
      <h1>Page1</h1>
      <Link to={{ pathname: "page1/detailA", state: arr }}>
        DetailA of Page1
      </Link>
      <br />
      <Link to="page1/detailB">DetailB of Page1</Link>
      <br />
      <button onClick={onClickOpenDetailA}>DetailA of Page1</button>
    </div>
  );
};
