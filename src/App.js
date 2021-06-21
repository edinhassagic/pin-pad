import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [remainingAttempts, setRemainingAttempts] = useState(3);
  const [disabled, setDisabled] = useState(false);
  let digit = 4;

  const clear = () => {
    setValue("");
    setDisabled(false);
    document.getElementById("inputpin").type = "password";
  };

  const enter = () => {
    const userGuess = parseInt(value, setValue);
    if (userGuess === 1234) {
      document.getElementById("inputpin").type = "text";
      setValue("OK");
      setDisabled(true);

      setRemainingAttempts(3);
    } else if (value.length > digit || value.length < digit) {
      alert("PIN is 4 digit number!");
      setValue("");
    } else if (userGuess !== 1234) {
      document.getElementById("inputpin").type = "text";
      setValue("ERROR");
      setDisabled(true);
      if (remainingAttempts > 1) {
        setRemainingAttempts(remainingAttempts - 1);
      } else {
        setTimeout(() => {
          document.getElementById("inputpin").disabled = true;
          setDisabled(true);
          setRemainingAttempts("0");
          document.getElementById("inputpin").type = "text";
          setValue("LOCKED");
          document.getElementById("clr").disabled = true;
        }, 100);

        setTimeout(() => {
          document.getElementById("inputpin").disabled = false;
          document.getElementById("clr").disabled = false;
          setDisabled(false);
          setRemainingAttempts("3");
          document.getElementById("clr").disabled = false;
          setValue("");
          document.getElementById("inputpin").type = "password";
        }, 30000);
      }
    }
  };
  return (
    <>
      <input
        readOnly
        className="pincode"
        type="password"
        name="pincode"
        maxLength={4}
        id="inputpin"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            enter();
          }
        }}
      />

      <div>
        <div>
          <button
            type="button"
            disabled={disabled}
            className="btn btn-secondary m-1"
            onClick={() => setValue((value) => `${value}1`)}
          >
            1
          </button>
          <button
            type="button"
            disabled={disabled}
            className="btn btn-secondary m-1"
            onClick={() => setValue((value) => `${value}2`)}
          >
            2
          </button>
          <button
            type="button"
            disabled={disabled}
            className="btn btn-secondary m-1"
            onClick={() => setValue((value) => `${value}3`)}
          >
            3
          </button>
        </div>
        <div>
          <button
            type="button"
            disabled={disabled}
            className="btn btn-secondary m-1"
            onClick={() => setValue((value) => `${value}4`)}
          >
            4
          </button>
          <button
            type="button"
            disabled={disabled}
            className="btn btn-secondary m-1"
            onClick={() => setValue((value) => `${value}5`)}
          >
            5
          </button>
          <button
            type="button"
            disabled={disabled}
            className="btn btn-secondary m-1"
            onClick={() => setValue((value) => `${value}6`)}
          >
            6
          </button>
        </div>
        <div>
          <button
            type="button"
            disabled={disabled}
            className="btn btn-secondary m-1"
            onClick={() => setValue((value) => `${value}7`)}
          >
            7
          </button>
          <button
            type="button"
            disabled={disabled}
            className="btn btn-secondary m-1"
            onClick={() => setValue((value) => `${value}8`)}
          >
            8
          </button>
          <button
            type="button"
            disabled={disabled}
            className="btn btn-secondary m-1"
            onClick={() => setValue((value) => `${value}9`)}
          >
            9
          </button>
        </div>
        <div>
          <button
            type="button"
            id="clr"
            className="btn btn-secondary m-1"
            onClick={clear}
          >
            Clear
          </button>

          <button
            type="button"
            disabled={disabled}
            className="btn btn-secondary m-1"
            onClick={() => setValue((value) => `${value}0`)}
          >
            0
          </button>
          <button
            type="button"
            disabled={disabled}
            className="btn btn-secondary m-1"
            onClick={enter}
          >
            Enter
          </button>
        </div>
      </div>
      <div style={{ color: "red" }}>
        <p>
          <small>Remaining attempts : {remainingAttempts}</small>
        </p>
      </div>
    </>
  );
}

export default App;
