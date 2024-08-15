
export default function SkillList({ list }: SkillListProps) {

  return (
    <>
      <ul className="list-disc">
        {list.map((skill, index) => {
          return (
            <li key={index} className="list-group-item">
              {skill}
            </li>
          )
        })}
      </ul>
    </>
  )
}

interface SkillListProps {
  list: string[];
}