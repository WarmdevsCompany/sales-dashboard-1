export const getIdByName = (name, arrayOfObj) => {
    const currentObj = arrayOfObj.filter((item) => item.name === name);
    return currentObj[0]?.idobject;
};