import Author from "ember-writer/models/author";
import attr from "ember-data/attr";

export default Author.extend({
  twitter: attr("string"),
  github: attr("string"),
  image: attr("string"),
  frameworks: attr("string"),
  featured: attr()
});
