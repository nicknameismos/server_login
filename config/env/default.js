'use strict';
var multer = require('multer');

module.exports = {
  app: {
    title: 'ธรรมธุรกิจ',
    description: 'โครงการยักษ์จับมือโจน ส่งถึงบ้าน แหล่งรวมสินค้า อาหาร ธรรมชาติ',
    keywords: 'ธรรมธุรกิจ, โครงการยักษ์จับมือโจน, แหล่งรวมสินค้า อาหาร ธรรมชาติ',
    googleAnalyticsTrackingID: process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'GOOGLE_ANALYTICS_TRACKING_ID'
  },
  port: process.env.PORT || process.env.MONGODB_URI || 3000,
  templateEngine: 'swig',
  // Session Cookie settings
  sessionCookie: {
    // session expiration is set by default to 24 hours
    maxAge: 3650 * 24 * (60 * 60 * 1000),
    // httpOnly flag makes sure the cookie is only accessed
    // through the HTTP protocol and not JS/browser
    httpOnly: true,
    // secure cookie should be turned to true to provide additional
    // layer of security so that the cookie is set only when working
    // in HTTPS mode.
    secure: false
  },
  // sessionSecret should be changed for security measures and concerns
  sessionSecret: process.env.SESSION_SECRET || 'MEAN',
  // sessionKey is set to the generic sessionId key used by PHP applications
  // for obsecurity reasons
  sessionKey: 'sessionId',
  sessionCollection: 'sessions',
  logo: 'modules/core/client/img/brand/logo.png',
  favicon: 'modules/core/client/img/brand/favicon.ico',
  uploads: {
    profileUpload: {
      // dest: './public/', // Profile upload to public folder   
      // dest: './modules/users/client/img/profile/uploads/', // Profile upload destination path
      storage: multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, './public/');
        },
        filename: function (req, file, cb) {
          cb(null, Date.now() + '.jpg');

        }
      }),
      limits: {
        fileSize: 1 * 1024 * 1024 // Max file size in bytes (1 MB)
      }
    },
    productUpload: {
      // dest: './public/', // Profile upload to public folder         
      // dest: './modules/products/client/img/uploads/', // Profile upload destination path
      storage: multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, './public/');
        },
        filename: function (req, file, cb) {
          cb(null, Date.now() + '.jpg');

        }
      }),
      limits: {
        fileSize: 1 * 1024 * 1024 // Max file size in bytes (1 MB)
      }

    }
  }
};