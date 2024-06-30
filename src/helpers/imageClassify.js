import axios from "axios";
import { GetAPI  } from "./misc";


export async function ClassifySnapshot() {
    const fileInput = document.querySelector('#fileInput');
    const file = fileInput.files[0];
    const {data} = axios.post(`${GetAPI()}classify`, {
        image: file,
        mode: 'no-cors'
    }, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    })
    .then(function (data) {
        console.log(data);
    })

    return data;
}