#!/usr/bin/env node

/**
 * ========================================
 * GENERATE CONFIG.JS
 * ========================================
 * Script ini akan generate public/config.js dengan environment variables
 * yang di-set di Vercel atau .env.local
 * 
 * Dijalankan otomatis saat build (npm run build)
 */

const fs = require('fs');
const path = require('path');

// Load environment variables
require('dotenv').config({ path: '.env.local' });

// Get URLs from environment variables
const businessUrl = process.env.NEXT_PUBLIC_BUSINESS_URL || 'http://localhost:3000';
const portfolioUrl = process.env.NEXT_PUBLIC_PORTFOLIO_URL || 'http://localhost:5500';

// Generate config.js content
const configContent = `// ========================================
// CONFIG.JS - Environment Configuration
// ========================================
// File ini di-generate otomatis oleh scripts/generate-config.js
// JANGAN EDIT MANUAL! Edit di .env.local atau Vercel Dashboard
// ========================================

window.ENV_CONFIG = {
  // URL untuk Business Page (React Next.js)
  BUSINESS_URL: '${businessUrl}',
  
  // URL untuk Portfolio Page (Static HTML)
  PORTFOLIO_URL: '${portfolioUrl}'
};

// Generated at: ${new Date().toISOString()}
`;

// Write to public/config.js
const configPath = path.join(__dirname, '..', 'public', 'config.js');
fs.writeFileSync(configPath, configContent, 'utf8');

console.log('✅ config.js generated successfully!');
console.log('📍 Location:', configPath);
console.log('🔗 URLs:');
console.log('   - BUSINESS_URL:', businessUrl);
console.log('   - PORTFOLIO_URL:', portfolioUrl);