const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 5000;

const adminPassword = 'admin123'; // Password to access the admin upload

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Serve images statically

// Multer config (same as before)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const title = req.body.title;
    const folderName = title ? title.replace(/\s+/g, "_") : `folder_${Date.now()}`;
    const folderPath = path.join(__dirname, "uploads", folderName);

    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    req.folderPath = folderPath;
    req.folderName = folderName;

    cb(null, folderPath);
  },
  filename: (req, file, cb) => {
    const newName = `image-1${path.extname(file.originalname)}`;
    req.savedImageName = newName;
    cb(null, newName);
  },
});

const upload = multer({ storage });

// Middleware to check password in the headers (Optional)
const authenticateAdmin = (req, res, next) => {
  const password = req.headers['admin-password'];
  if (password !== adminPassword) {
    return res.status(403).json({ message: 'Forbidden' });
  }
  next();
};

// Upload route (now password-protected)
app.post("/upload", authenticateAdmin, upload.single("image"), (req, res) => {
  const { title, description } = req.body;
  const { folderName, savedImageName } = req;

  const imageUrl = `http://localhost:${PORT}/uploads/${folderName}/${savedImageName}`;

  const jsonData = {
    title,
    description,
    image: imageUrl,
    createdAt: new Date().toISOString(),
  };

  fs.writeFileSync(
    path.join(req.folderPath, "data.json"),
    JSON.stringify(jsonData, null, 2)
  );

  res.json({ success: true, message: "Uploaded successfully", data: jsonData });
});

// Get all content route
app.get("/content", (req, res) => {
  const uploadsDir = path.join(__dirname, "uploads");

  if (!fs.existsSync(uploadsDir)) {
    return res.json([]);
  }

  const folders = fs.readdirSync(uploadsDir);
  const contentList = [];

  folders.forEach(folder => {
    const dataPath = path.join(uploadsDir, folder, "data.json");
    if (fs.existsSync(dataPath)) {
      const raw = fs.readFileSync(dataPath);
      try {
        const json = JSON.parse(raw);
        contentList.push(json);
      } catch (err) {
        console.error(`Error parsing JSON for folder ${folder}:`, err.message);
      }
    }
  });

  res.json(contentList);
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
