export default function rgb2Hex(r, g, b){
    // console.log(Math.round(r)+" "+Math.round(g)+" "+Math.round(b));
    const dec2Hex = (dec) => {
        const hex = "0123456789ABCDEF"
        if(dec >= 16){
            return (hex[Math.floor(dec/16)]+""+hex[Math.floor(dec%16)]);
        }
        else if(dec >= 0 && dec < 16){
            return (0+""+hex[Math.floor(dec)]);
        }
        else if(dec >= 10 && dec < 16){
            return (hex[Math.floor(dec)]);
        }
        else return "00";
    }
    
    let hexR = dec2Hex(r);
    let hexG = dec2Hex(g);
    let hexB = dec2Hex(b);
    // console.log("#" + hexR + hexG + hexB);
    const ret = "#" + hexR + hexG + hexB;
    
    return ret;
}

