import "./App.css";

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="content">
          <div className="content-row">
            <div className="logo">
              <p>Weat</p>her
            </div>
          </div>
          <div className="content-row">
            <div className="input">
              <label className="label" htmlFor="city">
                Город
              </label>
              <input type="text" className="textbox" id="city" />
            </div>
            <div className="select">
              <button>Погода на chevron</button>
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
          <div className="content-row">
            <div className="row">
              <div className="info">
                <span className="text">Сейчас:</span>
                <div className="temperature">
                  <span className="value">-10</span>
                  <span className="measure">o</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="info">
                <span className="text">Солнечно</span>
                <div className="precipitation">icon</div>
              </div>
              <div className="info">
                <span className="text">Ощущается как:</span>
                <div className="temperature">
                  <span className="value">-15</span>
                  <span className="measure">o</span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="content-row">
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
                    <span className="value">-15</span>
                    <span className="measure">o</span>
                  </div>
                  <div className="precipitation">icon</div>
                </div>
              </div>
              <div className="row">
                <div className="info">
                  <span className="text">Ощущается как:</span>
                  <div className="temperature">
                    <span className="value">-15</span>
                    <span className="measure">o</span>
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
                    <span className="value">-15</span>
                    <span className="measure">o</span>
                  </div>
                  <div className="precipitation">icon</div>
                </div>
              </div>
              <div className="row">
                <div className="info">
                  <span className="text">Ощущается как:</span>
                  <div className="temperature">
                    <span className="value">-15</span>
                    <span className="measure">o</span>
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
                    <span className="value">-15</span>
                    <span className="measure">o</span>
                  </div>
                  <div className="precipitation">icon</div>
                </div>
              </div>
              <div className="row">
                <div className="info">
                  <span className="text">Ощущается как:</span>
                  <div className="temperature">
                    <span className="value">-15</span>
                    <span className="measure">o</span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
