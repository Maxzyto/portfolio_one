import SectionHeading from '@/components/Helper/SectionHeading'
import { skillsData } from '@/Data/date'
import React from 'react'
import SkillCard from './SkillCard'

const Skills = () => {
  return (
    <div className='pt-16 pb-6 bg-[#0f0715] '>
      <SectionHeading>My Skills</SectionHeading>
      <div className='mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center '>
        {skillsData.map((skill) => {
          return <div key={skill.id}>
            <SkillCard skill={skill} />
          </div>
        })}
      </div>
    </div>
  )
}

export default Skills