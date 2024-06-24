const db = require('../models/db');
const ExcelJS = require('exceljs');

exports.getAdminPage = (req, res) => {
    const query = 'SELECT * FROM registrations';
    
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).send('Database error: ' + err);
        }
        res.render('admin', { title: 'Admin Page', registrations: results });
    });
};

exports.exportRegistrations = (req, res) => {
    const query = 'SELECT * FROM registrations';
    
    db.query(query, async (err, results) => {
        if (err) {
            return res.status(500).send('Database error: ' + err);
        }

        // 엑셀 워크북 생성
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Registrations');

        // 열 헤더 추가
        worksheet.columns = [
            { header: '이름', key: 'name', width: 20 },
            { header: '회사', key: 'company', width: 20 },
            { header: '부서', key: 'department', width: 20 },
            { header: '직급', key: 'position', width: 20 },
            { header: '이메일', key: 'email', width: 30 },
            { header: '전화번호', key: 'phone', width: 20 },
            { header: '참석 여부', key: 'attendance', width: 10 },
            { header: '기념품', key: 'gift', width: 20 },
            { header: '개인정보 수집 동의', key: 'agreement1', width: 15 },
            { header: '개인정보 제3자 제공 동의', key: 'agreement2', width: 15 },
            { header: '등록 일시', key: 'created_at', width: 20 },
        ];

        // 데이터 추가
        results.forEach(registration => {
            worksheet.addRow({
                ...registration,
                agreement1: registration.agreement1 ? 'Yes' : 'No',
                agreement2: registration.agreement2 ? 'Yes' : 'No',
            });
        });

        // 엑셀 파일을 버퍼로 작성
        const buffer = await workbook.xlsx.writeBuffer();

        // 엑셀 파일 응답
        res.setHeader('Content-Disposition', 'attachment; filename=registrations.xlsx');
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.send(buffer);
    });
};
