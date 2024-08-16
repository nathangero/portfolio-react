import { NavLink } from "react-router-dom";

export default function Error() {

  return (
    <>
      <div className="relative bg-slate-700 bg-cover bg-center bg-no-repeat w-auto">
        <div className="relative container mx-auto px-4 py-10 flex flex-col items-center justify-center h-screen text-center text-white">
          <h2 className="text-4xl">It seems you got lost!</h2>
          <br />
          <NavLink to={"/"} className="rounded bg-blue-500 text-4xl p-3">I'll take you back home!</NavLink >
        </div>
      </div >
    </>
  )
}