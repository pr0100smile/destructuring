export default function destructuring(obj) {
    const result = [];
    const { special } = obj;

    if (!special) {
        return result;
    }

    for (let i = 0; i < special.length; i++) {
        if (!special[i].description) {
            special[i].description = 'Описание засекречено';
        }
        result.push({
            id: special[i].id,
            name: special[i].name,
            icon: special[i].icon,
            description: special[i].description,
        });
    }

    return result;
}
