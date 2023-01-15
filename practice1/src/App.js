import {useState} from 'react';
import Overview from './Overview';
function App() {
  const [taskArr, setTaskArr] = useState(['test1', 'test2']);
  const [currTask, setCurrTask] = useState('');
  return (
    <div>
      <input id='task' value={currTask} onChange={event => setCurrTask(event.target.value)}/>
      <button type="button" onClick={() => {
        setTaskArr((taskArr) => [...taskArr, currTask]);
        setCurrTask('');
        }
      }>Submit</button>
      <Overview tasks={taskArr} />
    </div>
  );
}

export default App;
