let app = require('express')();
let bodyParser = require("body-parser");
let mysql=require('mysql')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


/**
 * 设置跨域
 */
app.all('*', function (req, res, next) {
    // res.header('Access-Control-Allow-Origin', '*');
    // res.header('Access-Control-Allow-Header', 'Content-length,Authorization,Accept,X-Requested-with');
    res.header('Access-Control-Allow-Methods', "POST,GET,PUT,DELETE");
    res.header('X-Powered-by', '3.2.1');
    //设置成JSON传输格式
    res.header("Content-Type", "application/json");
    next();
});
/**
 * 连接数据库
 */
let pool = mysql.createPool({
    url: '127.0.0.1',
    port: 3306,
    database: 'app',
    user: 'root',
    password: '123456'
});

/**
 * 获取用户信息
 */

app.get('/api/user',function(req,res){
    res.send({
        'id':23232,
        'name':'xyl',
        'followers':123,
        'following':222
    })
})


/**
 * 注册
 */
app.post('/register', function (req, res) {
    let sql = 'insert into user values(?,?)';

    let data = [req.body.name, req.body.psd];
    pool.getConnection(function(err,conn){
        conn.query(sql, data, function (err, result) {
            // if (err) throw err;
            console.log(result===undefined)
            if(result===undefined){
                res.send(JSON.stringify({status:500,msg:'注册失败'}));
            }else{
                res.send(JSON.stringify({status:200,msg:'注册成功'}))
            }
            if(err) throw err
        })
    })

});



/**
 * 登陆
 */
app.post('/login', function (req, res) {
    // let t = JSON.parse(Object.keys(req.body)[0]);
    console.log(req.body)
    let {name,psd} =req.body;
    let data = [name,psd];

    pool.getConnection(function (err,conn) {
        conn.query('select password from user where name=?', data ,function (err, result) {
            if (err) throw err;
            if (result[0] && psd === result[0].password) {
                res.send({'msg': '登陆成功', 'status': '200', 'username': name});
            } else {
                res.send({'msg': '用户名不存在或密码错误', 'status': '404'})
            }
        })
    })

})

app.listen(3000,function(){
    console.log('running on 8080')
})