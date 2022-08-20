import { useState } from "react"

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [reminder, setReminder] = useState(false);
  const [image, setImage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Please enter a text");
      return 
    }

    onAdd({ title, time, reminder, image });

    setTitle("")
    setTime("")
    setReminder(false)
    setImage("")
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder="Add Task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}/>
      </div>
      <div className='form-control'>
        <label>Time</label>
        <input
          type='text' 
          placeholder="Add Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}/>
      </div>
      <div className='form-control'>
        <label>Image</label>
        <input
          type='file' 
          accept="image/*"
          value={""}
          onChange={(e) => setImage(e.target.files[0])}/>
      </div>
      <div className='form-control form-control-check'>
        <label>Set reminder</label>
        <input
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.target.checked)}/>
      </div>
      <input type='submit' value='Add Task' className='btn btn-block' />
    </form>
  )
}

export default AddTask