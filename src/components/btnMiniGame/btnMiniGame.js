import "./style.css"
import {optionBtn} from "../../helpers/miniGameBtns"
import { useState } from 'react';


const MinigameButton = () => {
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const handleButtonClick = () => {
      setIsButtonClicked(true);
    };

return (
    <div>
      {!isButtonClicked && (
        <a href="#!" className="btn" onClick={handleButtonClick}>
          Начать Тестирование
        </a>
      )}
      {isButtonClicked && (
        <div>
          {optionBtn.map((option, index) => (
            <button key={index} className="btn">
              {option.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MinigameButton;