
/// Displays a list of skills
export default function SkillList({ list }: SkillListProps) {

  return (
    <>
      <ul className="text-2xl bg-white rounded-lg list-separator mx-5">
        {list.map((skill, index) => {
          return (
            <>
              <li key={index} className="text-black my-2">
                <p className="ml-5">{skill}</p>
              </li>
            </>
          )
        })}
      </ul>
    </>
  )
}

interface SkillListProps {
  list: string[];
}