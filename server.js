const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Mengarah ke folder public tempat index.html berada
app.use(express.static(path.join(__dirname, 'public')));

// Semua urusan data langsung di-handle secara real-time oleh Firebase di frontend,
// jadi di backend kita cuma perlu mastiin servernya nyala buat nampilin halaman.

app.listen(PORT, () => {
    console.log(`\n========================================`);
    console.log(`🌐 VOIDSCRIPT ENGINE READY!!`);
    console.log(`🚀 Server jalan di: http://localhost:${PORT}`);
    console.log(`========================================\n`);
});
