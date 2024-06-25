import React from 'react';
import { ListItem } from './components/ListItem/'
import './App.css';

export interface Courses {
  name : string,
  description: string,
  instructor: string,
  id: number
}

const courses: Courses[] = [
  {
    id: 1,
    name: 'React JS',
    description: 'Corse of React wih TypeScript',
    instructor: 'Luciel Santos'
  },
  {
    id: 2,
    name: 'JS e CSS Pro',
    description: 'Corse of JS wih CSS Pro',
    instructor: 'Wagner Sabino'
  },
  {
    id: 3,
    name: 'Node JS',
    description: 'Corse of Node to backend',
    instructor: 'Cicero'
  }
] 

function App() {
  return (
    <div className='main'>
      <h1>Tabela de cursos</h1>

      <table>
        <tr>
          <th>Course</th>
          <th>Description</th>
          <th>Instructor</th>
        </tr>
          {
            courses.map((course) => (
              <ListItem course={course} key={course.id} />
            ))
          }
      </table>
    </div>
  );
}

export default App;
