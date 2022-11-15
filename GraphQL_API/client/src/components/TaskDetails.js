import { graphql } from 'react-apollo';
import { getTaskDetailQuery } from '../queries/queries';

function TaskDetails(props) {

  function displayTaskDetails() {
    const { task } = props.data;
    // Set display options for if task exists in db or not
    if (task) {
      console.log(task.project);
      return (
        <div>
          <h2>Title of task: { task.title }</h2>
          <p>Weight of the task: { task.weight }</p> 
          <p>Title of the project: { task.project.title }</p> 
          <p>All tasks of the project:</p>
          <ul className="other-tasks"> {
              task.project.tasks.map(item => {
                return (<li key={item.id}>{item.title}</li>)
              })
            }
            </ul>
        </div>
      )
    } else {
      return (<div>No task selected...</div>)
    }
  }

  return (
    <div id="task-details">
      {displayTaskDetails()}
    </div>
  );
}

// Bind query to component with variables
export default graphql(getTaskDetailQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.taskId
      }
    }
  }
})(TaskDetails);