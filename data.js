
var data = [];
var get_count = 0;
var post_count = 0;
var delete_count = 0;
module.exports.getData = function () {
    console.log("get data called retuning " + data);
    return data;
};

module.exports.putData = function (input) {
  console.log("input came : "+ input.product);
  data.push(input);
  console.log("data is " + data);

};

module.exports.deleteData = function () {
  data = [];
};

module.exports.increment_get = function () {
  get_count = get_count +1 ;
  return get_count;
};

module.exports.increment_post = function () {
  post_count = post_count +1;
  return post_count;
};

module.exports.increment_delete = function () {
  delete_count = delete_count +1;
  return delete_count;
};
//get function
module.exports.count_get = function () {
  return get_count;
};

module.exports.count_post = function () {
  return post_count;
};

module.exports.count_delete = function () {
  return delete_count;
};
