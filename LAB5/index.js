const express = require("express");
const app = express();
const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");
const fs = require("fs").promises;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function getDBConnection() {
  const db = await sqlite.open({
    filename: "product.db",
    driver: sqlite3.Database,
  });

  return db;
}

app.get("/", async function (req, res) {
  let db = await getDBConnection();
  let items = await db.all(`SELECT * FROM product`);
  await db.close();

  let item = ``;

  for (const Item of items) {
    const imgURL = (image = `/${Item["product_image"]}`);

    item += `
        <div class="Item">
            <a href="/product/${Item["product_id"]}">Click to see more</a>
            <img src=${imgURL} alt=${Item["product_title"]} />
        </div>`;
  }

  let output = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home</title>
        <link rel="stylesheet" type="text/css" href="main.css" />
      </head>
      <body>
        <header><h1>Welcome to My Pet Shop</h1></header>
        <nav>
            <a href="/">메인 페이지</a>
            <a href="/login">로그인</a>
            <a href="/signup">회원가입</a>
        </nav>
        <div class="Main">
            <section class="Items">
              <form id="form" action="/search" method="GET">
                <div class="SearchBoard">
                    <input
                    name="keyword"
                    id="keyword"
                    type="text"
                    placeholder="검색"
                    class="searchInput"
                    onchange="setText(value)"
                    />
                    <select name="category">
                        <option value="all">All</option>
                        <option value="clothes">Clothes</option>
                        <option value="food">Food</option>
                        <option value="house">House</option>
                        <option value="Accessory">Accessory</option>
                    </select>
                    <input
                    id="search"
                    type="submit"
                    value="검색하기"
                    class="searchButton"
                    />
                </div>
              </form>  
              <div id="ItemList" class="item">
                ${item}
              </div>
            </section>
            <footer class="foot">
                <b>공지사항</b>
                <b>전화번호: 010-1111-2222</b>
            </footer>
        </div>
      </body>
    </html>`;
  res.send(output);
});

app.get("/search", async function (req, res) {
  let db = await getDBConnection();
  let items;
  if (req.query.category == "all") {
    items = await db.all(
      `SELECT * FROM product Where product_title Like '%${req.query.keyword}%'`
    );
  } else {
    items = await db.all(
      `SELECT * FROM product Where product_title Like '%${req.query.keyword}%' And product_category Like '${req.query.category}'`
    );
  }
  await db.close();

  let item = ``;

  for (const Item of items) {
    const imgURL = (image = `/${Item["product_image"]}`);

    item += `
        <div class="Item">
            <a href="/product/${Item["product_id"]}">Click to see more</a>
            <img src=${imgURL} alt=${Item["product_title"]} />
        </div>`;
  }

  let output = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home</title>
        <link rel="stylesheet" type="text/css" href="main.css" />
      </head>
      <body>
        <header><h1>Welcome to My Pet Shop</h1></header>
        <nav>
            <a href="/">메인 페이지</a>
            <a href="/login">로그인</a>
            <a href="/signup">회원가입</a>
        </nav>
        <div class="Main">
            <section class="Items">
              <form id="form" action="/search" method="GET">
                <div class="SearchBoard">
                    <input
                    name="keyword"
                    id="keyword"
                    type="text"
                    placeholder="검색"
                    class="searchInput"
                    onchange="setText(value)"
                    />
                    <select name="category">
                        <option value="all">All</option>
                        <option value="clothes">Clothes</option>
                        <option value="food">Food</option>
                        <option value="house">House</option>
                        <option value="Accessory">Accessory</option>
                    </select>
                    <input
                    id="search"
                    type="submit"
                    value="검색하기"
                    class="searchButton"
                    />
                </div>
              </form>  
              <div id="ItemList" class="item">
                ${item}
              </div>
            </section>
            <footer class="foot">
                <b>공지사항</b>
                <b>전화번호: 010-1111-2222</b>
            </footer>
        </div>
      </body>
    </html>`;
  res.send(output);
});

app.get("/product/:product_id", async function (req, res) {
  let db = await getDBConnection();
  let item = await db.get(
    `SELECT * FROM product WHERE product_id = ${req.params.product_id}`
  );
  await db.close();

  const imgURL = (image = `/${item["product_image"]}`);

  let commentFile = await fs.readFile("comment.json", "utf8");
  let commentData = JSON.parse(commentFile);
  let comment_content = commentData[req.params.product_id];

  let Comment = ``;

  for (const comment of comment_content) {
    Comment += `<div class="feedback">
                <p>${comment}</p>
               </div>`;
  }

  let detail = `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Detail</title>
                <link rel="stylesheet" type="text/css" href="/main.css" />
            </head>
            <body>
                <header><h1>Welcome to My Pet Shop</h1></header>
                <nav>
                    <a href="/">메인 페이지</a>
                    <a href="/login">로그인</a>
                    <a href="/signup">회원가입</a>
                </nav>
                <div class="imageAnddetail">
                    <img src=${imgURL} alt=${item["product_title"]} id="imgdetail" width=380 height=380/>
                    <div class="itemdetail">
                        <p>product_id: ${item["product_id"]}</p>
                        <p>product_image: ${item["product_image"]}</p>
                        <p>product_title: ${item["product_title"]}</p>
                        <p>product_price: ${item["product_price"]}</p>
                        <p>product_category: ${item["product_category"]}</p>
                    </div>
                </div>
                <div class="itemDetail">
                    <form action="/product/${item["product_id"]}/addcomment" method="POST" id="reviewForm">
                        <p>Submit your review</p>
                        <input type="text" name="comment" placeholder="review" />
                        <button type="submit" id="reviewBt">Submit</button>
                    </form>
                    <div class="Fb">
                        <h3>Feedback</h3>
                        ${Comment}
                    </div>
                </div>
            </body>
        </html>
    `;

  res.send(detail);
});

app.post("/product/:product_id/addcomment", async (req, res) => {
  let comments = await fs.readFile("comment.json", "utf8");
  let commentData = JSON.parse(comments);
  commentData[req.params.product_id].push(req.body.comment);
  fs.writeFile("comment.json", JSON.stringify(commentData));
  res.redirect(`/product/${req.params.product_id}`);
});

app.get("/login", function (req, res) {
  let login = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <title>Login</title>
            <link rel="stylesheet" type="text/css" href="main.css" />
        </head>
        <body>
            <h1>welcome to My shop</h1>
            <fieldset class="header">
                <legend>버튼</legend>
                <a href="/">메인페이지</a>
                <a href="/login">로그인</a>
                <a href="/signup">회원가입</a>
            </fieldset>
            <form action="#">
                <fieldset class="body_2">
                    <legend>로그인</legend>
                    <label class="loginBt" for="username">
                        <input
                            type="text"
                            id="Id"
                            name="Id"
                            placeholder="Id"
                            autofocus
                            autocomplete="on"
                            required
                        />
                    </label>
                    <label class="loginBt" for="password">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            required
                        />
                    </label>
                    <button class="loginBt" type="submit">LOGIN</button>
                    <a href="#">Forgot your password?</a>
                </fieldset>
            </form>
        </body>
    </html>`;

  res.send(login);
});

app.get("/signup", function (req, res) {
  let signup = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8" />
            <title>signup</title>
            <link rel="stylesheet" type="text/css" href="main.css" >
        </head>
        
        <body>
            <h1>welcome to My shop</h1>
            <fieldset class="header">
                <legend>버튼</legend>
                <a href="/">메인페이지</a>
                <a href="/login">로그인</a>
                <a href="/signup">회원가입</a>
            </fieldset>
            <form action="#">
                <fieldset class="body">
                    <legend>회원가입</legend>
                    <b>개인정보(필수)</b>
                    <p>
                        이름:
                    <label
                        >
                        <input
                        type="text"
                        placeholder="이름을 입력해주세요"
                        id="username"
                        name="username"
                        autofocus
                        required
                    /></label>
                    </p>
                    <p>생년월일:
                            <input type="date" id="birthday" name="birthday">
                    </p> 
                    <p>
                    성별:
                    <label><input type="radio"  name="gender" value="남자" />남자</label>
                    <label><input type="radio"  name="gender" value="여자" />여자</label>
                    </p>
                    <p>
                    전화번호:
                    <label><input type="tel" name="tel" placeholder="숫자만 입력해주세요" /></label>
                    </p>
                    <p>
                    아이디:
                    <label
                        ><input type="text" id="password" name="userid" required
                    /></label>
                    </p>
                    <p>
                    비밀번호:
                    <label
                        ><input
                        type="password"
                        id="password"
                        name="password"
                        required
                    /></label>
                    </p>
                    <p>
                    비밀번호 확인:
                    <label
                        ><input type="password"required
                    /></label>
                    </p>
                    <p>본인확인 이메일(선택):
                        <label><input type="email" name="email" autocomplete="on">
                    </p>
                    <p>본인확인 질문:
                        <label><input type="number" name="number" placeholder="1~100중 가장 좋아하는 짝수는?"
                            min="2" max="100" step="2">
                    </p>
                    <ul>
                        <li><input type="checkbox">이용약관 동의(필수)</li>
                        <li><input type="checkbox">개인정보 수집 및 이용(필수)</li>
                        <li><input type="checkbox">이벤트 등 sns 알림 수신 동의(선택)</li>
                    </ul>
                </fieldset>
                <div class="bt"> 
                    <button id="signup" type="submit">회원 가입</button>
                    <button id="cancel" type="submit">취소</button>
                </div>
            </form>
        </body>
    </html>`;
  res.send(signup);
});

app.getMaxListeners("/product/:product_id", async function (req, res) {
  let db = await getDBConnection();
  let items = await db.get(
    `SELECT * FROM product WHERE product_id = ${req.params.product_id}`
  );
  await db.close();
});

var PORT = 3000;
app.listen(PORT, function () {
  console.log("server on!!");
});
