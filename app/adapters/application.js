import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend(DS.BuildURLMixin, {
  namespace: 'api/blog/',

  urlForFindAll(modelName) {
    let url = [];
    let prefix = this.urlPrefix();
    let path = this.pathForType(modelName);

    url.push(prefix);
    url.push(path);

    return `${url.join('/')}.json`;
  }
});
