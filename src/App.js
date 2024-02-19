import AyahList from "./components/AyahList";
import ayat from "./local_db"

function App(){

    return (
        <div>
            <AyahList data={ayat[0].ayah} urdu_translation={ayat[0].urdu_translation}/>
        </div>
    )
}

export default App;