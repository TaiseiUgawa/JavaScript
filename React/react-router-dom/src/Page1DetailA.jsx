import {useLocation, useHistory} from "react-router-dom";

export const Page1DetailA = () => {
  const { location } = useLocation();
  console.log(location);
  const history = useHistory();
  const onClickBack = () => history.goBack();
  return (
    <div>
      <h1>Page1DetailA</h1>
      <button onClick={onClickBack}>back page</button>
    </div>
  );
};
