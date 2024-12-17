import hex2RGB from "../script/hex2RGB";

export default function Mixer({result}){
    const arr = hex2RGB(result);
    // console.log(arr);
    let text = "RGB: " + arr[0] + " " + arr[1] + " " + arr[2];

    const handleCopy1 = () =>{
        navigator.clipboard.writeText(result)
        .then(() => {
            alert(`Copied ${result} to Clipboard!`);
        })
        .catch((error) => {
            alert("Failed to Copy");
        });
    }
    const handleCopy2 = () =>{
        let copy = "rgb(" + arr[0] + " " + arr[1] + " " + arr[2] + ")";
        navigator.clipboard.writeText(copy)
        .then(() => {
            alert(`Copied ${copy} to Clipboard!`);
        })
        .catch((error) => {
            alert("Failed to Copy");
        });
    }

    return (
        <div id="mixer" className="bg-bd max-w-3xl w-full h-72 rounded-lg justify-center flex flex-col">
            <b onClick={handleCopy1} className="text-3xl hover:cursor-pointer hover:font-medium mx-auto">{result}</b>
            <b onClick={handleCopy2} className="hover:cursor-pointer hover:font-medium mx-auto">{text}</b>
        </div>
    )
}