import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="d-flex flex-column align-items-center ">
      <h1>Sorry! This page doesn't exist</h1>
      <h2>
        <Link to="/">Click here</Link> to go back.
      </h2>
    </div>
  );
}
