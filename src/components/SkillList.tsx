
/// Displays a list of skills
export default function SkillList({ list }: SkillListProps) {

  return (
    <>
      <ul className="text-2xl bg-white rounded-lg">
        {list.map((skill, index) => {
          return (
            <>
              <li key={index} className="text-black my-2 ml-5">
                {skill}
              </li>
              {index < list.length - 1 &&
                <>
                  <hr />
                </>
              }
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