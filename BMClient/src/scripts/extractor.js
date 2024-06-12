import papa from 'papaparse';
import * as XLSX from 'xlsx';

export const parseDataFile = async (file) => {
    return await new Promise((resolve, reject) => {
        try {
            const type = file.name.split('.').pop();

            if (type === 'csv') {
                papa.parse(file, {
                    complete: (data_1) => {
                        resolve(data_1);
                    },
                    header: true,
                });
            } else {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const data = new Uint8Array(e.target.result);
                    const workbook = XLSX.read(data, { type: 'array' });
                    const firstSheetName = workbook.SheetNames[0];
                    const worksheet = workbook.Sheets[firstSheetName];
                    const json = XLSX.utils.sheet_to_json(worksheet);
                    resolve(json);
                };
                reader.readAsArrayBuffer(file);
            }
        } catch (err) {
            reject(err);
        }
    });
}