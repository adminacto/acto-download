import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 5000;

// Serve static files
app.use(express.static('.'));

// Track downloads
app.get('/api/download/:platform', (req, res) => {
    const { platform } = req.params;
    
    const getFileExtension = (platform) => {
        switch (platform) {
            case 'windows': return 'exe';
            case 'android': return 'apk';
            case 'universal': return 'zip';
            default: return 'exe';
        }
    };
    
    const getFileSize = (platform) => {
        switch (platform) {
            case 'windows': return '85 MB';
            case 'android': return '45 MB';
            case 'universal': return '12 MB';
            default: return '85 MB';
        }
    };
    
    res.json({ 
        message: "Download started", 
        platform,
        filename: `actogeam-${platform}-1.0.0.${getFileExtension(platform)}`,
        size: getFileSize(platform)
    });
});

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});