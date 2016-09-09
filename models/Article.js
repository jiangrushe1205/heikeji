var mongodb = require("./mongodb");
var Schema  = mongodb.mongoose.Schema;

var ArticleSchema  = new ArticleSchma({
    title : String,
    author : String,
    articleTag : String,
    listImage: String,
    content:String,
    createTime :{type:Date,default:Date.now()}
});


var mongodArticle = mongodb.mongoose.model("Article",ArticleSchema);

var ArticleDao = function(){

    Article.articleAdd = function (){

    }
}