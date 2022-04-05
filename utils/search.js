class Search {
  constructor(model, query) {
    this.model = model;
    this.query = query;
  }
  filter() {
    const keyword = this.query.keyword
      ? { name: { $regex: this.query.keyword, $options: "i" } }
      : {};
    // this.model = this.model.find({ ...keyword });
    const queryCopy = { ...this.query };

    const removeFields = this.query.category
      ? ["keyword", "page"]
      : ["keyword", "page", "category"];

    removeFields.forEach((key) => delete queryCopy[key]);
    let queryStr = JSON.stringify(queryCopy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

    this.model = this.model.find({ ...keyword, ...JSON.parse(queryStr) });

    return this;
  }
  pagination(resultPerPage) {
    const currentPage = Number(this.query.page) || 1;
    const skip = resultPerPage * (currentPage - 1);
    this.model = this.model.limit(resultPerPage).skip(skip);
    return this;
  }
}

module.exports = Search;
