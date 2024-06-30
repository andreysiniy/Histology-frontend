import "./style.css"
import { useState, useRef } from 'react';
import { ClassifySnapshot }from "../../helpers/imageClassify"




const UploadButton = () => {

const Classify = async () => {
  try {
    const data = ClassifySnapshot();
  } catch (error) {
    console.error(error);
  }
}
return (
    <div>
      <input type="file" id="fileInput" ></input>
      <a href="#!" className="btn" onClick={Classify()}>
        Загрузить изображения
      </a>
    </div>
  );
};

export default UploadButton;