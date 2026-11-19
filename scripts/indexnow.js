#!/usr/bin/env node
/**
 * IndexNow Submission Script
 * Submits URLs to IndexNow (Bing, Yandex, Seznam) for instant indexing
 * 
 * Usage: node scripts/indexnow.js
 * 
 * Requires: INDEXNOW_KEY environment variable (generate at https://www.bing.com/webmasters/indexnow)
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Configuration
const INDEXNOW_KEY = process.env.INDEXNOW_KEY;
const HOST = 'keithkoki.com';
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

// All public URLs to submit
const urls = [
  `https://${HOST}/`,
  `https://${HOST}/advisory`,
  `https://${HOST}/contact`,
  `https://${HOST}/product-management`,
  `https://${HOST}/engineering`,
  `https://${HOST}/ai-governance`,
  `https://${HOST}/works`,
  `https://${HOST}/pillars`,
  `https://${HOST}/speaking`,
  `https://${HOST}/blogs`,
  `https://${HOST}/faq`,
  `https://${HOST}/privacy`,
  `https://${HOST}/terms`,
];

async function submitToIndexNow(urlsToSubmit) {
  if (!INDEXNOW_KEY) {
    console.error('❌ INDEXNOW_KEY environment variable not set');
    console.log('   Generate a key at: https://www.bing.com/webmasters/indexnow');
    console.log('   Then run: INDEXNOW_KEY=your-key node scripts/indexnow.js');
    process.exit(1);
  }

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urlsToSubmit,
  };

  const endpoints = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow',
    'https://yandex.com/indexnow',
    'https://search.seznam.cz/indexnow',
  ];

  console.log(`📤 Submitting ${urlsToSubmit.length} URLs to IndexNow...`);
  console.log(`   Host: ${HOST}`);
  console.log(`   Key: ${INDEXNOW_KEY.substring(0, 8)}...`);

  for (const endpoint of endpoints) {
    try {
      const response = await postJson(endpoint, payload);
      if (response.statusCode === 200) {
        console.log(`✅ ${endpoint}: Success`);
      } else {
        console.log(`⚠️  ${endpoint}: ${response.statusCode} - ${response.body}`);
      }
    } catch (error) {
      console.log(`❌ ${endpoint}: ${error.message}`);
    }
  }
}

function postJson(url, data) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const postData = JSON.stringify(data);

    const options = {
      hostname: urlObj.hostname,
      path: urlObj.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(postData),
      },
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => resolve({ statusCode: res.statusCode, body }));
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

// Also generate the key file for verification
function generateKeyFile() {
  if (!INDEXNOW_KEY) return;
  
  const publicDir = path.join(__dirname, '../public');
  const keyFile = path.join(publicDir, `${INDEXNOW_KEY}.txt`);
  
  fs.writeFileSync(keyFile, INDEXNOW_KEY);
  console.log(`🔑 Key file written to: ${keyFile}`);
}

// Main
generateKeyFile();
submitToIndexNow(urls).catch(console.error);