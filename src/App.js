import AyahList from "./components/AyahList";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAyah } from "./store";

function App(){

    const dispatch = useDispatch();
    const { isLoading, data, error } = useSelector((state) => {
        return state.ayahs;
    });

    useEffect(() => {
        dispatch(fetchAyah());
    }, [dispatch]);

    return (
        <div>
            <AyahList data={data}/>
        </div>
    )
}

export default App;