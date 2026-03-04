import React from 'react'
import { useParams } from 'react-router-dom'


export default function Projects() {
  const { id: projectId } = useParams()
  console.log('Project ID:', projectId)

  let content = null

  switch (projectId) {
    case 'p1':
      content = <iframe src="/projects/1_bootstrap/pngjeweller.html" width={"100%"} height={"800px"}></iframe>
      break
    case 'p2':
      content = <iframe src="/projects/1_bootstrap/omnifood.html" width={"100%"} height={"800px"}></iframe>
      break
    case 'p3':
      content = <iframe src="/projects/1_bootstrap/staticweb.html" width={"100%"} height={"800px"}></iframe>
      break
    case 'p4':
      content = <iframe src="/projects/1_bootstrap/4_task_flex_3.html" width={"100%"} height={"800px"}></iframe>
      break
    case 'p5':
      content = <iframe src="/projects/1_bootstrap/blog.html" width={"100%"} height={"800px"}></iframe>
      break
    case 'p6':
      content = <iframe src="/projects/1_bootstrap/3_web3.html" width={"100%"} height={"800px"}></iframe>
      break
    default:
      content = <h1>No project details available</h1>
  }

  return <div>{content}</div>
}
