
import fs from 'fs';
import path from 'path';

// This function will be responsible for fetching and returning the video ID
const fetchAyah = (req, res) => {
  // Assuming that ayah_db.json is in the same directory as this script
  const filePath = path.join(__dirname, 'ayah_db.json');

  // Read the content of ayah_db.json file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      // Handle the error (e.g., file not found)
      console.error('Error reading ayah_db.json:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    try {
      // Parse the JSON data
      const ayahDb = JSON.parse(data);

      // Send the JSON data as the response
      res.json(ayahDb);
    } catch (parseError) {
      // Handle JSON parsing error
      console.error('Error parsing ayah_db.json:', parseError);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
};

export default fetchAyah;
