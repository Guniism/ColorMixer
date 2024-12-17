function Color({id, del, changeColor, map}){
    function hexChangeHandler(e){
        changeColor(id, e.target.value);
    }
    // function isValidHexColor(hex){
    //     if (hex.charAt(0) !== '#'){
    //         return false;
    //     }
    //     const color = hex.slice(1);
    //     if (color.length !== 3 && color.length !== 6){
    //         return false;
    //     }
    //     const validHexChars = '0123456789abcdefABCDEF';
    //     for (let i = 0; i < color.length; i++){
    //         if (!validHexChars.includes(color.charAt(i))){
    //         return false;
    //         }
    //     }
    //     return true;
    // }
    // function hexTypeHandler(e){
    //     if(isValidHexColor(e.target.value)){
    //         hexChangeHandler(e);
    //     }
    // }
    return (
        <div className="row-span-10 border rounded-lg relative border-bd">
            <button onClick={() => {del(id)}} className="flex top-2 right-2 absolute">
                <span className="material-symbols-rounded text-bd bg-wht rounded-full hover:bg-whte">close</span>
            </button>
            <div className="w-full h-2/3">
                <input type="color" value={map.get(id)} onInput={hexChangeHandler} className=" hover:cursor-pointer w-full h-full rounded-tl-gun rounded-tr-gun rounded-b-none" />
            </div>
            
            <div className="bg-wht w-full h-1/3 text-bas font-medium rounded-bl-gun rounded-br-gun">
                <p className="font-medium">{map.get(id).toUpperCase()}</p>
            </div>
        </div>
    )
}

function AddBtn({updataData}){
    return (
        <div className="row-span-10 border-2 border-dashed rounded-lg content-center border-gray">
            <button className="w-full h-full" onClick={updataData}>
                <span className="material-symbols-rounded text-gray">add</span>
            </button>
        </div>
    )
}

export default function Add({onUpdateData, dataMap, onDeleteData, onChangeColor}){
    return (
        <div className="max-w-3xl w-full grid grid-cols-2 md:grid-cols-3 gap-5">
        {[...dataMap.entries()].map(([key, value]) => (
        //   <li key={key}>
        //     Key: {key}, Value: {value}
        //   </li>
            <Color key={key} id={key} del={onDeleteData} changeColor={onChangeColor} map={dataMap} />
        ))}

        <AddBtn updataData={onUpdateData}/>
        </div>
    )
}