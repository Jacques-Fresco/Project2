import { useEffect, useState } from 'react';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
    // const [forecasts, setForecasts] = useState();

    useEffect(() => {
    }, []);

    return (
        //<Router>
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                {/* Шапка меню */}
                <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                  <button>Главная страница</button>
                  <button>Корпусная мебель</button>
                  <button>Мягкая мебель</button>
                  <button>Портфолио</button>
                  <button>Дизайнерам</button>
                  <button>Контакты</button>
                  <button>О нас</button>
                  <button>Оплата</button>
                </div>

                {/* Блок b* */}
                <div style={{ display: 'flex', flexDirection: 'column', height: '500px', margin: '25px 0 30px'}}>
                  {/* Блок bb1* */}
                  <div style={{ display: 'flex', flexDirection: 'row', height: '80%', paddingBottom: '10px'}}>
                    {/* Блок bbb1* */}
                    <div style={{ display: 'flex', flexDirection: 'column', width: '30%', padding: '0 10px 0 0' }}>
                      {/* Блок bbbb1* */}
                      <div style={{ height: '70%', marginBottom: '10px', backgroundColor: 'lightgrey', borderRadius: '10px'}}></div>
                      {/* Блок bbbb2* */}
                      <div style={{ height: '30%', marginTop: '10px', backgroundColor: 'lightgrey', borderRadius: '10px'}}></div>
                    </div>
                    {/* Блок bbb2* */}
                    <div style={{ width: '70%', marginLeft: '10px', backgroundColor: 'lightgrey', color: '#000', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <h2>МЕБЕЛЬ ПОД ЗАКАЗ</h2>
                    </div>
                  </div>
                  {/* Блок bb2* */}
                  <div style={{ height: '20%', marginTop: '10px', backgroundColor: 'lightgrey', color: '#000', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <h2>ПРЕИМУЩЕСТВА</h2>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', height: '400px', margin: '30px 0 30px', backgroundColor: 'lightgrey', color: '#000', borderRadius: '10px', alignItems: 'center', justifyContent: 'center'}}>
                  <h2>ПОПУЛЯРНЫЕ МОДЕЛИ КУХОНЬ</h2>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', height: '400px', margin: '30px 0 30px', backgroundColor: 'lightgrey', color: '#000', borderRadius: '10px', alignItems: 'center', justifyContent: 'center'}}>
                  <h2>ПОПУЛЯРНЫЕ МОДЕЛИ ШКАФОВ</h2>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', height: '400px', margin: '30px 0 30px', backgroundColor: 'lightgrey', color: '#000', borderRadius: '10px', alignItems: 'center', justifyContent: 'center'}}>
                  <h2>МЯГКВАЯ МЕБЕЛЬ</h2>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', height: '400px', margin: '30px 0 30px', backgroundColor: 'lightgrey', color: '#000', borderRadius: '10px', alignItems: 'center', justifyContent: 'center'}}>
                  <h2>ПОРТФОЛИО</h2>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', height: '400px', margin: '30px 0 30px', backgroundColor: 'lightgrey', color: '#000', borderRadius: '10px', alignItems: 'center', justifyContent: 'center'}}>
                    <h2 style={{ width: '450px'}}>РАЗРАБАТЫВАЕМ ДИЗАЙН ПРОЕКТ ИЛИ РАССЧИТЫВАЕМ ЦЕНУ ДЛЯ ГОТОВОГО</h2>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', height: '200px' }}>
                      <div style={{ marginRight: '8px', width: '33%', backgroundColor: 'lightgrey', borderRadius: '10px'}}></div>
                      <div style={{ display: 'flex', margin: '0 8px', width: '33%', color: '#000', backgroundColor: 'lightgrey', borderRadius: '10px', alignItems: 'center', justifyContent: 'center'}}>
                        <h2>АКЦИИ</h2>
                      </div>
                      <div style={{ marginLeft: '8px', width: '33%', backgroundColor: 'lightgrey', borderRadius: '10px'}}></div>

                </div>

                <div style={{ display: 'flex', flexDirection: 'column', height: '400px', margin: '30px 0 30px', backgroundColor: 'lightgrey', color: '#000', borderRadius: '10px', alignItems: 'center', justifyContent: 'center'}}>
                    <h2 style={{ width: '450px'}}>ПОЧЕМУ ВЫБИРАЮТ НАС</h2>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', height: '400px', margin: '30px 0 30px', backgroundColor: 'lightgrey', color: '#000', borderRadius: '10px', alignItems: 'center', justifyContent: 'center'}}>
                    <h2 style={{ width: '450px'}}>ОТКРЫТАЯ ФОРМА ЗАЯВКИ</h2>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', height: '400px', margin: '30px 0 30px', backgroundColor: 'lightgrey', color: '#000', borderRadius: '10px', alignItems: 'center', justifyContent: 'center'}}>
                    <h2 style={{ width: '450px'}}>ПОДВАЛ</h2>
                </div>
            </div>
        //</Router>
    );
}

export default App;