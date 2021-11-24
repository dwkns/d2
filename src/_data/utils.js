module.exports = {
  currentYear: new Date().getFullYear(),
  version: Math.random().toString(36).substr(2, 8),
  devMode: process.env.NODE_ENV !== 'production',
};
