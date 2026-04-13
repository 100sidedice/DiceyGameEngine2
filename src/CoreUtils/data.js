/**
 * Grabs a value from a dictionary, given a path like "a.b.c". If the value is not found, returns defaultValue.
 *  - Example: grabData("a.b.c", {a:{b:{c:5}}}, 0) returns 5
 * 
 * To set the value at a path, use setData("a.b.c", object, value).
 * @param {*} path 
 * @param {*} object 
 * @param {*} defaultValue 
 * @returns The data. I think you knew that, didn't you.
 */
export function grabData(path, object, defaultValue = undefined){
    const keys = path.split('.');
    let result = object;
    for(const key of keys){
        result = result[key];
    }
    return result !== undefined ? result : defaultValue;
}

/**
 * Sets a value in a dictionary, given a path like "a.b.c".
 *  - Example: setData("a.b.c", {}, 5) results in {a:{b:{c:5}}}
 * 
 * To simply grab a value at a path, use grabData("a.b.c", object, defaultValue).
 * @param {*} path 
 * @param {*} object 
 * @param {*} value 
 * @param {boolean} overwrite Choose whether to overwrite existing values. If false, will only set the value if the path is currently undefined.
 * @returns The object that was modified.
 */
export function setData(path, object, value, overwrite = true){
    const keys = path.split('.');
    let result = object;
    for(let i=0; i<keys.length-1; i++){
        result = result[keys[i]];
    }
    if(overwrite || result[keys[keys.length-1]] === undefined){
        result[keys[keys.length-1]] = value;
    }
    return result;
}