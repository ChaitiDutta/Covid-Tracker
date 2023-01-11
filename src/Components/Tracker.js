import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Pagination from './Pagination'
import { AiOutlineStar} from 'react-icons/ai';
import {CiCircleRemove } from 'react-icons/ci';
import Info from './Info';
// import CartList from './CartList';
// import Info from './Info'
function Tracker() {

    const [city, setCity] = useState([])
    const [error, setError] = useState('')
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(true)
    const [currentPage, setcurrentPage] = useState(1)
    const [cityPerPage] = useState(10)
    // const [isOpen, setIsOpen] = useState(false)
    const [cart, setCart] = useState([])

    let today = new Date();
    let date = (today.getDay() + 8) + "/" + (today.getMonth() + 1) + "/" + (today.getFullYear())

    useEffect(() => {
        axios.get('https://data.covid19india.org/data.json')
            .then(Res => {
                // console.log(Res.data.statewise)
                setCity(Res.data.statewise)
                setError('')
                setLoading(false)
            })
            .catch(Error => {
                setCity([])
                setError('Something Went Wrong!')
                setLoading(false)
            })

    }, [])

    const indexOfTheLastCity = currentPage * cityPerPage
    const indexOfTheFirstCity = indexOfTheLastCity - cityPerPage
    const currentPageCities = city.slice(indexOfTheFirstCity, indexOfTheLastCity)

    const paginate = (pageNo) => setcurrentPage(pageNo)


    const changeHandler = (e) => {
        setSearch(e.target.value)
    }
    const clickHandler = () => {
        setSearch('')
    }

    // const ClickHandler =()=>{
    //     SetCountry(country)
    // }
    const searchCity = city.filter((info) =>
        info.state.toLowerCase().includes(search.toLowerCase())
    )

    const addToFav =(info)=>{
                setCart([...cart, info])
                console.log('Item Added')
            }

    const removeFromFav =(el)=>{
        let cartListCopy = [...cart]
        cartListCopy = cartListCopy.filter((cartCity)=> cartCity.id!==el.id);
        setCart(cartListCopy)
    }

    const cartListedCity = cart.map((el)=>{
        return (
            <div key={el.id}>
                {el.state}
                {el.active}
                {el.recovered}
                <CiCircleRemove onClick ={()=>removeFromFav(el)}/>
            </div>
        )
    })




    return (
        <div className='app-container'>
            {cartListedCity}
            {/* <header >
                <p >C</p> 
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG1XcPaj91iLWlemXFeVZpM-P2XFPOiAmphYTd0HLnkgRt7S9-IlAK9MfxiCoYHeBUBtc&usqp=CAU' alt='covid' />
                   <p className='vid'>VID-19 TRACKER</p> 
            </header> */}
            <div className='search_bar'>
                <div className='total'>

                    <div className='box confirmed'>
                        <p className='name'>Confirmed</p>
                        <img src='https://phil.cdc.gov//PHIL_Images/23312/23312_lores.jpg' alt='' />
                        <p className='no con'>32249900</p>
                    </div>
                    <div className='box active'>
                        <p className='name'>Active</p>
                        <img src='https://www.freeiconspng.com/thumbs/blue-flames-png/blue-flames-png-clipart-10.png' alt='' />
                        <p className='no ac' color="red">363849</p>
                    </div>
                    <div className='box recovered'>
                        <p className='name'>Recovered</p>
                        <img src='https://www.heart.org/-/media/Images/Health-Topics/Heart-Failure/3_Hypertension_Red.png?h=75&w=75&hash=136CB50B837E7481ABA63C470D5B435C' alt='' />
                        <p className='no rec'>31441260</p>
                    </div>
                    <div className='box'>
                        <p className='name'>Death</p>
                        <img src='https://thumbs.dreamstime.com/b/skull-cross-bones-hand-drawn-symbol-pirates-poison-death-hell-anger-vector-illustration-isolated-skull-cross-230409593.jpg' alt='' />
                        <p className='no det'>432112</p>
                    </div>
                </div>

                <p>Search your state or city </p>
                <input
                    type='text'
                    //   value={districts}
                    placeholder='search...'
                    onChange={changeHandler}
                />
                <p>As of {date}</p>

                {/* <button onClick={clickHandler}> Clear</button> */}


            </div>

            <div className='table-container'>
                <table>
                    <thead>
                        <tr>
                            {/* <th>#</th> */}
                            <th>state</th>
                            <th>State_Code</th>
                            <th>Active</th>
                            <th>Recovered</th>
                            <th>Confirmed</th>
                            <th>Deaths</th>
                        </tr>
                    </thead>
                    <tbody>

                        {search ? searchCity.map((info, index) => {
                            return (
                                <tr key={index}>
                                    {/* <td>{index}</td> */}
                                    {/* <div><AiOutlineStar /></div> */}
                                    <td className='state'>
                                        <div><AiOutlineStar
                                            className='fav-icon'
                                            onClick={() => addToFav(info)}
                                        /></div>
                                        {info.state}</td>
                                    <td>{info.statecode}</td>
                                    <td>{info.active}</td>
                                    <td className='reco'>{info.recovered}</td>
                                    <td>{info.confirmed}</td>
                                    <td className='death'>{info.deaths}</td>

                                </tr>
                            )
                        }
                        ) : currentPageCities.map((info, index) => {
                            return (
                                <tr key={index}>
                                    {/* <td>{index}</td> */}
                                    {/* <div><AiOutlineStar /></div> */}
                                    <td className='state'>
                                        <div><AiOutlineStar
                                            className='fav-icon'
                                            onClick={() => addToFav(info)}
                                        /></div>
                                        {info.state}</td>
                                    <td>{info.statecode}</td>
                                    <td>{info.active}</td>
                                    <td className='reco'>{info.recovered}</td>
                                    <td>{info.confirmed}</td>
                                    <td className='death'>{info.deaths}</td>

                                </tr>
                            )
                        }
                        )
                        }
                    </tbody>
                </table>
            </div>
            
            <div>

                <Pagination
                    cityPerPage={cityPerPage}
                    totalCity={city.length}
                    paginate={paginate}
                    // PageHandler={PageHandler}
                    />
                {/* {cartListedCity} */}
                {/* <Info cartListedCity={cartListedCity}/> */}

            </div>
                    {/* <Info cartListedCity={cartListedCity}/> */}


        </div>
    )
}

export default Tracker
