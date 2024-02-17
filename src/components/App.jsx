import "./App.css";

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="content">
          <div className="inner">
            <div className="logo">
              <p>Weat</p>her
            </div>
            <div className="content-row">
              <div className="input">
                <label className="label" htmlFor="city">
                  Город
                </label>
                <input
                  type="text"
                  className="textbox"
                  id="city"
                  placeholder="Название города..."
                />
              </div>
              <div className="select">
                <button>
                  Погода на{" "}
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="512.000000pt"
                    height="512.000000pt"
                    viewBox="0 0 512.000000 512.000000"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g
                      transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                      fill="#000000"
                      stroke="none"
                    >
                      <path
                        d="M452 3814 c-84 -42 -132 -121 -132 -216 1 -75 27 -125 117 -220 44
-46 477 -506 962 -1023 486 -517 902 -957 924 -979 23 -21 65 -50 92 -65 44
-23 62 -26 145 -26 83 0 101 3 145 26 28 15 69 44 92 65 22 22 438 462 924
979 485 517 918 977 962 1023 90 95 116 145 117 220 0 96 -51 180 -134 218
l-51 24 -2056 0 -2055 0 -52 -26z"
                      />
                    </g>
                  </svg>
                </button>
                <ul className="list">
                  <li name="today">Сегодня</li>
                  <li name="yesterday">Завтра</li>
                  <li name="three-days">3 дня</li>
                </ul>
                <select>
                  <option className="option" value="today">
                    Сегодня
                  </option>
                  <option className="option" value="yesterday">
                    Завтра
                  </option>
                  <option className="option" value="three-days">
                    3 дня
                  </option>
                </select>
              </div>
            </div>
            {/* <div className="content-row dynamic">
              <div className="row">
                <div className="info">
                  <span className="text">Сейчас</span>
                  <div className="temperature">
                    <span className="value">-10</span>
                    <span className="measure measure_12">o</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="info">
                  <span className="text">Солнечно</span>
                  <div className="precipitation">
                    <img src="./sun.png" alt="sun" />
                  </div>
                </div>
                <div className="info">
                  <span className="text">Ощущается как:</span>
                  <div className="temperature">
                    <span className="value">-15</span>
                    <span className="measure measure_12">o</span>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="content-row three-days">
              <div className="onday">
                <div className="row">
                  <div className="date">
                    <span className="day">Вс</span>
                    <span className="month">18.02</span>
                  </div>
                </div>
                <div className="row">
                  <div className="weather">
                    <div className="temperature">
                      <span className="value value_16">-15</span>
                      <span className="measure measure_8">o</span>
                    </div>
                    <div className="precipitation">
                      <img src="./snow.png" alt="snow" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="info">
                    <span className="text">Ощущается как:</span>
                    <div className="temperature">
                      <span className="value value_16">-15</span>
                      <span className="measure measure_8">o</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="onday">
                <div className="row">
                  <div className="date">
                    <span className="day">Вс</span>
                    <span className="month">18.02</span>
                  </div>
                </div>
                <div className="row">
                  <div className="weather">
                    <div className="temperature">
                      <span className="value value_16">-15</span>
                      <span className="measure measure_8">o</span>
                    </div>
                    <div className="precipitation">
                      <img src="./snow.png" alt="snow" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="info">
                    <span className="text">Ощущается как:</span>
                    <div className="temperature">
                      <span className="value value_16">-15</span>
                      <span className="measure measure_8">o</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="onday">
                <div className="row">
                  <div className="date">
                    <span className="day">Вс</span>
                    <span className="month">18.02</span>
                  </div>
                </div>
                <div className="row">
                  <div className="weather">
                    <div className="temperature">
                      <span className="value value_16">-15</span>
                      <span className="measure measure_8">o</span>
                    </div>
                    <div className="precipitation">
                      <img src="./snow.png" alt="snow" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="info">
                    <span className="text">Ощущается как:</span>
                    <div className="temperature">
                      <span className="value value_16">-15</span>
                      <span className="measure measure_8">o</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
