export const organizeCsv = (csvData, csvMap) => {
    const data = csvData.map((d) => {
        const obj = {};
        Object.keys(csvMap).forEach((key) => {
            obj[key] = d[csvMap[key]];
        })
        return obj;
    })
    return data;
}