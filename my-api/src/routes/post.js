const express = require('express');
const router = express.Router();
const AWS = require('aws-sdk');
const Post = require('../models/post');
const upload = require('../middlewares/upload');
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_KEY,
  },
});

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Cria um novo post
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       201:
 *         description: Post criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 */
router.post('/', upload.array('images', 10), async (req, res) => {
  try {
      const { title, content, status, link } = req.body;
      const files = req.files;

      let imageUrl = [];

      for (const file of files) {
          const params = {
              Bucket: process.env.S3_BUCKET_NAME,
              Key: `${Date.now()}-${file.originalname}`,
              Body: file.buffer,
              ContentType: file.mimetype,
              ACL: 'public-read',
          };

          const command = new PutObjectCommand(params);
          await s3.send(command);

          const url = `https://${params.Bucket}.s3.${process.env.AWS_REGION}.amazonaws.com/${params.Key}`;

          imageUrl.push({
              type: file.mimetype,
              url,
          });
      }

      const newPost = new Post({
          title,
          content,
          imageUrl,
          status: status || 'draft',
          link: link || null,
          likes: 0,
      });

      await newPost.save();

      res.status(201).json(newPost);
  } catch (err) {
      res.status(500).json({ error: 'Erro ao criar o post' });
  }
});

module.exports = router;
