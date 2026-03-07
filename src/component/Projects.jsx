import React from 'react'
import { useParams } from 'react-router-dom'


export default function Projects() {
  const { id: projectId } = useParams()
  console.log('Project ID:', projectId)

  let content = null

  switch (projectId) {
    case 'p1':
      content = "/projects/1_bootstrap/pngjeweller.html"
      break
      case 'p2':
        content = "/projects/1_bootstrap/omnifood.html"
        break
        case 'p3':
          content = "/projects/1_bootstrap/staticweb.html"
          break
          case 'p4':
            content = "/projects/1_bootstrap/4_task_flex_3.html"
      break
      case 'p5':
        content = "/projects/1_bootstrap/blog.html"
        break
        case 'p6':
          content = "/projects/1_bootstrap/3_web3.html"
          
          break
          case 'resume':  
          content = "/projects/resume.html"
          break
          default:
            content = <h1>No project details available</h1>
          }
          
          return <div>
            <iframe src={content} width={"100%"} height={"800px"}></iframe>
            </div>
}
