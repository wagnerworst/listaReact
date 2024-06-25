import { Courses } from '../../App';
interface ListItemProps{
    course: Courses
}

export const ListItem = ({ course }: ListItemProps) => {
    return (
        <tr>
            <td>{course.name}</td>
            <td>{course.description}</td>
            <td>{course.instructor}</td>
        </tr>
    );
};