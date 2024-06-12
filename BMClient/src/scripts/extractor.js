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










export const convertToExcel = (JSONData) => {
    return new Promise((resolve, reject) => {
        try {
            const jsonData = JSONData.accepted.map(email => ({
                email: email,
                status: 'Accepted'
            }));

            jsonData.push(
                JSONData.rejected.map(email => ({
                    email: email,
                    status: 'Rejected'
                })
                ))

            // Add summary row
            jsonData.push(
                { email: 'Total', status: JSONData.total },
                { email: 'Success', status: JSONData.success },
                { email: 'Rejected', status: JSONData.failed },
                { email: 'Percentage', status: JSONData.percentage },
                { email: 'Status', status: JSONData.status }
            );

            const workbook = XLSX.utils.book_new();

            const worksheet = XLSX.utils.json_to_sheet(jsonData);

            XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

            const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

            const data = new Blob([excelBuffer], { type: 'application/octet-stream' });

            const link = document.createElement('a');

            const url = URL.createObjectURL(data);

            link.href = url;
            link.download = `SampleData.xlsx`;

            document.body.appendChild(link);

            link.click();

            document.body.removeChild(link);

            resolve();

        } catch (error) {
            reject(error);
        }
    })
}