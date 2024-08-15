import { frontend, backend, misc } from "../assets/skills.json";
import SkillList from "./SkillList";

export default function Skills() {


  return (
    <>
      <div className="pt-3">

        <div className="flex flex-wrap">
          <div className="sm:w-1/3 w-full max-md:mb-3">
            <h4 className="text-2xl text-center">Frontend</h4>
            <SkillList list={frontend} />
          </div>

          <div className="sm:w-1/3 w-full max-md:mb-3">
            <h4 className="text-2xl text-center">Backend</h4>
            <SkillList list={backend} />
          </div>

          <div className="sm:w-1/3 w-full max-md:mb-3">
            <h4 className="text-2xl text-center">Misc</h4>
            <SkillList list={misc} />
          </div>
        </div>
      </div>

    </>
  )
}