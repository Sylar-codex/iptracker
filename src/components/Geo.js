import React, { useState, useEffect, useRef } from 'react';
import Axios from 'axios';
import arrowButton from '../images/icon-arrow.svg';
import MyMap from './MyMap.js'


function Geo() {
    const inputRef = useRef()

    const [longitude, setLongitude] = useState('');
    const [latitude, setLatitude] = useState('');
    const [ipaddress, setIpaddress] = useState('');
    const [city, setCity] = useState('');
    const [region, setRegion] = useState('');
    const [isp, setIsp] = useState('');
    const [timeZone, setTimeZone] = useState('');
    const [postalCode, setPostalCode] = useState('');


    useEffect(() => {
        Axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_O3Llb6X4BLb5Y0JIhIGHhBkTjhW1s&ipAddress=`).then((response) => {
            console.log(response.data);
            setIpaddress(response.data.ip);
            setCity(response.data.location.city);
            setRegion(response.data.location.region);
            setIsp(response.data.isp);
            setTimeZone(response.data.location.timezone);
            setLongitude(response.data.location.lng);
            setLatitude(response.data.location.lat);
            setPostalCode(response.data.location.postalCode);
        })

    }, [])

    const getData = () => {
        const inputValue = inputRef.current.value

        Axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_O3Llb6X4BLb5Y0JIhIGHhBkTjhW1s&ipAddress=${inputValue}&domain=${inputValue}`).then((response) => {
            console.log(response.data)
            setIpaddress(response.data.ip);
            setCity(response.data.location.city);
            setRegion(response.data.location.region);
            setIsp(response.data.isp);
            setTimeZone(response.data.location.timezone);
            setLongitude(response.data.location.lng);
            setLatitude(response.data.location.lat);
            setPostalCode(response.data.location.postalCode);
        })

    }

    const handleSubmit = (e) => {
        getData()
        e.preventDefault()
    }

    return (
        <div style={{ position: 'relative', overflowX: 'hidden' }}>
            <div className='geo'>
                <div><h1>Ip address tracker</h1></div>
                <div className='form-input'>
                    <form onSubmit={handleSubmit}>
                        <input type='text' name='' placeholder='search for any IP address or domain name' ref={inputRef} />
                        <button type='submit'><img src={arrowButton} alt='arrow' /></button>
                    </form>
                </div>
                <div className='info-data'>
                    <div className='ip'>
                        <p>ip address</p>
                        {ipaddress}
                    </div>
                    <div className='loc'>
                        <p>location</p>
                        {city},
                        <span className='region'>{region}</span><br />
                        <span className='p-code'>{postalCode}</span>
                    </div>
                    <div className='time'>
                        <p>timezone</p>
                        UTC{timeZone}
                    </div>
                    <div className='isp'>
                        <p>isp</p>
                        {isp}
                    </div>
                </div>

            </div>
            <MyMap
                longitude={longitude}
                latitude={latitude}
            />
        </div>
    )
}

export default Geo;