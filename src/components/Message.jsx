import { useState } from "react";

function Message() {
  const [message, setMessage] = useState([
    {
      id: 1,
      text: "Привет! Как поживаешь?",
      author: "Curtis",
      side: "right",
    },
    {
      id: 2,
      text: "Привет, все отлично. Изучаю React.",
      author: "Sheldon",
      side: "left",
    },
    {
      id: 3,
      text: "А я только недавно начал изучать фронтенд.",
      author: "Curtis",
      side: "right",
    },
    {
      id: 4,
      text: "Понял тебя. Ну тогда запишись в экспо!",
      author: "Sheldon",
      side: "left",
    },
    {
      id: 5,
      text: "Хорошо тогда, давай. Так и сделаю",
      author: "Curtis",
      side: "right",
    },
  ]);

  const handleSwitchSide = (id) => {
    setMessage((prevMessage) => {
      return prevMessage.map((msg) => {
        if (msg.id === id) {
          return {
            ...msg,
            side: msg.side === "left" ? "right" : "left",
          };
        } else {
          return msg;
        }
      });
    });
  };

  return (
    <div>
      {message.map((item) => {
        return (
          <div
            key={item.id}
            className={`row ${
              item.side === "right" ? "justify-content-end" : ""
            }`}
          >
            <div className="col-5 text-white ">
              <div
                className={`inbox p-2 rounded-3 m-2 ${
                  item.side === "right" ? "bg-success" : "bg-primary"
                }`}
              >
                <div>{item.text}</div>
                <div>{item.author}</div>
                <button
                  className="btn btn-danger"
                  onClick={() => handleSwitchSide(item.id)}
                >
                  Switch
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Message;
