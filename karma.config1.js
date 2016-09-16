module.exports = function(config) {
  config.set({
    
    colors: true,
    autoWatch: true,
    browsers: ['Safari'],
    
    files: [
    'lib/*.js',
    'test/*.js'],
    
  });
}
