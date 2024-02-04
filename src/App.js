import { useState } from "react";
import AyahList from "./components/AyahList";
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchAyah } from "./store";
import ayat from "./local_db"

function App(){

    // console.log(ayat[0].ayah);
    // const dispatch = useDispatch();
    // const { isLoading, data, error } = useSelector((state) => {
    //     return state.ayahs;
    // });

    // useEffect(() => {
    //     dispatch(fetchAyah());
    // }, [dispatch]);

    return (
        <div>
            <AyahList data={ayat[0].ayah}/>
        </div>
    )
}

export default App;