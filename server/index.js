import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';
import { fileURLToPath } from 'url';
import path from 'path';
import { dirname } from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', (req, res) => {    
  res.send('Hello from DALL-E!');
});

app.listen(8080, () => {
  console.log('Server is running on port http://localhost:8080');
});

app.post('/api/v1/dalle', async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await openai.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });
    const image = response.data.data[0].b64_json;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.log(error);
    res.status(500).send(error?.response.data.error.message);
  }
});

app.use('/assets', express.static(path.join(__dirname, 'public/assets')));
app.use('/public/assets', express.static(path.join(__dirname, 'public/assets')));
app.use('/public/assets/threejs', express.static(path.join(__dirname, 'public/assets/threejs')));
app.use('/public/assets/threejs/models', express.static(path.join(__dirname, 'public/assets/threejs/models')));
app.use('/public/assets/threejs/models/gltf', express.static(path.join(__dirname, 'public/assets/threejs/models/gltf')));
app.use('/public/assets/threejs/models/gltf/scene.gltf', express.static(path.join(__dirname, 'public/assets/threejs/models/gltf/scene.gltf')));
app.use('/public/assets/threejs/models/gltf/scene.bin', express.static(path.join(__dirname, 'public/assets/threejs/models/gltf/scene.bin')));
app.use('/public/assets/threejs/models/gltf/scene0.bin', express.static(path.join(__dirname, 'public/assets/threejs/models/gltf/scene0.bin')));
app.use('/public/assets/threejs/models/gltf/scene1.bin', express.static(path.join(__dirname, 'public/assets/threejs/models/gltf/scene1.bin')));
app.use('/public/assets/threejs/models/gltf/scene2.bin', express.static(path.join(__dirname, 'public/assets/threejs/models/gltf/scene2.bin')));
app.use('/public/assets/threejs/models/gltf/scene3.bin', express.static(path.join(__dirname, 'public/assets/threejs/models/gltf/scene3.bin')));
app.use('/public/assets/threejs/models/gltf/scene4.bin', express.static(path.join(__dirname, 'public/assets/threejs/models/gltf/scene4.bin')));
app.use('/public/assets/threejs/models/gltf/scene5.bin', express.static(path.join(__dirname, 'public/assets/threejs/models/gltf/scene5.bin')));



app.use('/public/assets/threejs/models/gltf/scene6.bin', express.static(path.join(__dirname, 'public/assets/threejs/models/gltf/scene6.bin')));

