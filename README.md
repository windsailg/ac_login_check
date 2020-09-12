# 簡易登入驗證

試作簡易登入驗證功能
輸入帳號密碼並送出，可以驗證登入資訊


## 現有功能

- 需輸入已建立好的的帳號密碼
- 提供登入失敗提示
- 登入成功提示頁

## 使用工具

- mongoDB: 4.2.9
- mongoose: 5.10.2
- Node.js: 13.0.1
- Express: 4.17.1
- Express-Handlebars: 5.1.0
- nodemon: 2.0.4
- body-parser: 6.12.0


## 安裝

0.電腦需安裝mongoDB

1.開啟終端機(Terminal) cd 到存放專案本機位置並執行:

```
git clone https://github.com/windsailg/ac_login_check.git
```


2.初始化安裝套件

```
npm i   //安裝套件
```

npm run seed  //導入預設資料
```

顯示以下資訊代表資訊以寫入資料庫並與資料庫連接
mongoDB connected
done.

```
npm run dev  //啟動程式
```

顯示以下資訊代表啟動成功
Express is running on http://localhost:3000
mongoDB connected

伺服器已經成功連線並運作於 http://localhost:3000
