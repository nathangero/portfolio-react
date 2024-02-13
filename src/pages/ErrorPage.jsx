import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <h1>Sorry! This page doesn't exist</h1>
      <h2>
        <Link to={"/"}>Click here</Link> to go back.
      </h2>
    </div>
  );
}
