import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios";


function Edit() {
    const { id } = useParams()

    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");
    const [reminder, setReminder] = useState();
    const [image, setImage] = useState("");


    const getDetail = async (id) => {
        try {
            const response = await axios.get(`http://127.0.0.1:8001/api/todo/${id}`)
            // console.log(response.data)
            // setDetail(response.data)
            setTitle(response.data.title)
            setTime(response.data.time)
            setReminder(response.data.reminder)
            setImage(response.data.image)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getDetail(id)
    }, [])

    const onSave = async (task) => {
        let formData = new FormData();
    
        formData.append("title", task.title);
        formData.append("time", task.time);
        formData.append("reminder", task.reminder);
        if (task.image) {
          formData.append("image", task.image);
        }
    
        try {
          await axios.post("http://127.0.0.1:8001/api/todo/", formData);
        } catch (error) {
          alert(error)
        }
      };

    async function onSubmit(e) {
        e.preventDefault()
        await onSave({title,time,reminder,image})
        window.location.assign('/')
    }


    return (
        <div>
            <h1>Edit task {id}</h1>
            <form className='add-form' onSubmit={onSubmit}>
                <div className='form-control'>
                    <label>Title</label>
                    <input
                        type='text'
                        placeholder="Add title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className='form-control'>
                    <label>Time</label>
                    <input
                        type='text'
                        placeholder="Add Time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)} />
                </div>
                <div className='form-control'>
                    <label>Image</label>
                    <input
                        type='file'
                        accept="image/*"
                        value={""}
                        onChange={(e) => setImage(e.target.files[0])} />
                </div>
                <div className='form-control form-control-check'>
                    <label>Reminder</label>
                    <input
                        type='checkbox'
                        checked={reminder}
                        value={reminder}
                        onChange={(e) => setReminder(e.target.checked)} />
                </div>
                <input type='submit' value='Save' className='btn btn-block'/>
            </form>
            <Link to = {`/detail/${id}`}>Back</Link>
        </div>
    )
}

export default Edit