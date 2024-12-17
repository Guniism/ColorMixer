import rgb2Hex from "./rgb2Hex";
import hex2RGB from "./hex2RGB";

export default function MixerScript(map){
    let mix = [0, 0, 0]
    // console.log("------- "+ map.size);
    map.forEach(e => {
        // console.log(hex2RGB(e));
        let H2RGB = hex2RGB(e);
        mix[0] += H2RGB[0];
        mix[1] += H2RGB[1];
        mix[2] += H2RGB[2];
    });
    let s = map.size;
    mix[0] /= s;
    mix[1] /= s;
    mix[2] /= s;

    const done = rgb2Hex(mix[0], mix[1], mix[2]);

    const luminance = 0.2126 * mix[0] + 0.7152 * mix[1] + 0.0722 * mix[2];
    const mixer = document.getElementById("mixer");
    mixer.style.background = done;
    mixer.style.color = (luminance <= 128) ? "#ffffff" : "#161618";
    
    return done;
}