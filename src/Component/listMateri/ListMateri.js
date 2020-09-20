import React, { useState } from "react";
import "./index.scss";

import { Link } from "react-router-dom";

export default function ListMateri(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [idList, setIdList] = useState(0);

  const handleShowList = (id) => {
    if (idList === id) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(true);
    }
    setIdList(id);
  };

  const showSubBab = (idSub) => {
    if (idList === idSub && isOpen) {
      // setIsOpen(!isOpen);
      return " isOpenClass";
    }
  };
  return (
    <div className="list-materi">
      <div className="list-kelas">
        {props.data.map((item, i) => {
          return (
            <div className="btn-list-materi" key={`materi-${i}`}>
              <Link
                className="btn btn-materi-kelas"
                onClick={() => handleShowList(item.id)}
              >
                {item.name}
              </Link>
              <ul className={`list-materi-kelas ${showSubBab(item.id)}`}>
                {item.sub.map((itemSub, iSub) => {
                  return (
                    <li
                      className="list-materi-kelas-item"
                      key={`sub-kelas${iSub}`}
                    >
                      <Link>{itemSub.nameSub}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
