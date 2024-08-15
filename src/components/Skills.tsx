import { frontend, backend, misc } from "../assets/skills.json";
import SkillList from "./SkillList";

export default function Skills() {


  return (
    <>
      <section className="pt-3">
        <div className="text-center">
          <h3 className="underline text-2xl">Skills</h3>
        </div>

        <br />

        <div className="flex flex-wrap">
          <div className="sm:w-1/3 w-full">
            <h4>Frontend:</h4>
            <SkillList list={frontend} />
          </div>

          <div className="sm:w-1/3 w-full">
            <h4>Backend:</h4>
            <SkillList list={backend} />
          </div>

          <div className="sm:w-1/3 w-full">
            <h4>Misc:</h4>
            <SkillList list={misc} />
          </div>
        </div>
      </section>

    </>
  )
}