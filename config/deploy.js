/* jshint node: true */

module.exports = function(deployTarget) {
  return {
    'gcloud': {
      bucket: 'this-dot-assets',
      key: 'fastboot-release.json'
    },
    'gcloud-storage': {
        bucket: 'this-dot-assets'
    }
  };
};
