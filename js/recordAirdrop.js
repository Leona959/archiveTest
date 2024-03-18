const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'public_player',
    password: 'VERY_very_SECRET_secret_KeY',
    database: 'RecordAddress'
});

connection.connect((error) => {
    if (error) {
        return;
    }
    console.log('Connected to the database');
});

function recordAirdrop() {
    const publicKey = localStorage.getItem('phantomWallet');

    if (publicKey) {
        const query = `INSERT INTO your_table (publicKey) VALUES ('${publicKey}')`;

        connection.query(query, (error, results) => {
            if (error) {
                console.error('Error recording public key:', error);
            } else {
                console.log('Public key recorded successfully');
            }
        });
    } else {
        console.log('Wallet not connected');
    }
}
