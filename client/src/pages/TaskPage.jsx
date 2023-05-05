import {TasksList} from '../components/TaskList'
import {useEffect} from 'react'
export function TaskPage() {
    useEffect(() => {
        console.log('pagina cargada');
    }, []);
    
    return <TasksList/> 
}