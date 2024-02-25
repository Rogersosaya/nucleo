import React from 'react'

interface Props {
    params: { name: string };
  }
function ProjectPage({params}: Props) {
  return (
    <div>
      { params.name }
    </div>
  )
}

export default ProjectPage
