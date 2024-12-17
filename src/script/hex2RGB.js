const hex2RGB = (hex) => {
    const r = parseInt(hex.substring(1,3), 16);
    const g = parseInt(hex.substring(3,5), 16);
    const b = parseInt(hex.substring(5,7), 16);
    return [r, g, b];
}

export default hex2RGB;