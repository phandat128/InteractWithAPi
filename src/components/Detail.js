import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

import Button from "./Button"
import Edit from "./Edit"

function Detail() {
    const { id } = useParams()
    const [detail, setDetail] = useState({
        // created: "16/08/2022 - 08:59:30",
        // id: 11,
        // image: "http://127.0.0.1:8001/media/todo/images/All_Instagram_Icons_Png_Transparent_Png__Transparent_Png_Image_-_PNGitem_3.png",
        // reminder: true,
        // time: "dgds",
        // title: "mnm",
        // updated: "16/08/2022 - 08:59:30",
    })

    const getDetail = async (id) => {
        try {
            const response = await axios.get(`http://127.0.0.1:8001/api/todo/${id}`)
            // console.log(response.data)
            setDetail(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getDetail(id)
    }, [])

    //delete task
    const deleteTask = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:8001/api/todo/${id}`);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div>
            <h1>Detail task {id}</h1>
            <p>Id: {detail.id}</p>
            <p>Title: {detail.title}</p>
            <p>Time: {detail.time}</p>
            <p>Updated: {detail.updated}</p>
            <p>Reminder: {detail.reminder ? "yes" : "no"}</p>
            <img src={detail.image} height='100' />
            <div onClick={() => {
                deleteTask(id)
                alert('Task deleted')
                window.location.assign('/')
            }}>
                <Button color='red' text='Delete'></Button>
            </div>
            <Link to={`/edit/${detail.id}`}>Edit <br></br></Link>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default Detail