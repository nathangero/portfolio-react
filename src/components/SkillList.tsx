
/// Displays a list of skills
export default function SkillList({ list }: SkillListProps) {

  return (
    <>
      <ul className="text-2xl bg-gray-100 rounded-lg list-separator mx-5">
        {list.map((skill, index) => {
          return (
            <>
              <li key={index} className="max-md:text-center text-black my-2">
                <p className="lg:ml-5">{skill}</p>
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