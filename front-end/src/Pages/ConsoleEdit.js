import EditConsole from '../Components/Edit/EditConsole';

function ConsoleEdit({ notify }) {
  return (
    <div className="New Edit">
      <EditConsole notify={notify} />
    </div>
  );
}

export default ConsoleEdit;
