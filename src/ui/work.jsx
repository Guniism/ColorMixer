import { useState, useEffect } from 'react'
import Mixer from './mixer';
import RatioBar from './ratio-bar'
import Add from './add'
import MixerScript from '../script/script';
import rgb2Hex from '../script/rgb2Hex';

export default function Work(){
    const [num, setNum] = useState(2);
    const [map, setMap] = useState(new Map());
    const [result, setResult] = useState("");

    useEffect(() => {
        let x = new Array(3);
        let y = new Array(3);
        for(let i = 0; i < 3; i++){
            x[i] = Math.floor(Math.random() * 255);
            y[i] = Math.floor(Math.random() * 255);
        }
    
        let tmpMap = new Map([
            [0, rgb2Hex(x[0], x[1], x[2])],
            [1, rgb2Hex(y[0], y[1], y[2])]
        ]);
        setMap(tmpMap);
        setResult(MixerScript(tmpMap));

    }, []);

    function updataData(){
        const newMap = new Map(map);
        newMap.set(num, "#000000");
        setMap(newMap);
        setNum(num+1);
        // console.log(newMap);
        setResult(MixerScript(newMap));
    }
    function deleteData(index){
        const newMap = new Map(map);
        newMap.delete(index);
        setMap(newMap);
        // console.log(index);
        // console.log(newMap);
        setResult(MixerScript(newMap));
    }
    function changeColor(index, hex){
        const newMap = new Map(map);
        newMap.set(index, hex);
        setMap(newMap);
        // console.log(newMap);
        setResult(MixerScript(newMap));
    }
    
    return (
        <div id="content" className='flex flex-col items-center space-y-6'>
            <h1 className='font-normal text-4xl md:text-5xl text-wht m-4'>
                Color Mixer<a className='text-lg'> (RGB)</a>
            </h1>
            <Mixer result={result} />
            {/* <RatioBar /> */}
            <Add onUpdateData={updataData} onDeleteData={deleteData} onChangeColor={changeColor} dataMap={map}/>
        </div>
    )
}
