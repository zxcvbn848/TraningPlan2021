# MySQL
# WK5
# 以下使用 MySQL 8.0 Command Line Client 操作。

# 要求二
# CREATE TABLE user(id BIGINT NOT NULL AUTO_INCREMENT, name VARCHAR(255) NOT NULL, username VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, time DATETIME NOT NULL DEFAULT NOW(), PRIMARY KEY (id)) charset=utf8;

![image](https://user-images.githubusercontent.com/70138536/111930656-6371fc80-8af4-11eb-8ebf-3ff2e1cfbfd7.png)

# 要求三
# 1.使用 INSERT 指令新增一筆資料到 user 資料表中，這筆資料的 username 和 password 欄位必須是 ply。接著繼續新增至少 4 筆隨意的資料。
# INSERT INTO user (name, username, password) VALUES ('Leo', 'ply', 'ply');

![image](https://user-images.githubusercontent.com/70138536/111929799-5eac4900-8af2-11eb-93cf-7a6fd6920756.png)

# P.S.分開建立，區隔出時間順序
# INSERT INTO user (name, username, password) VALUES ('Zack', 'asd', 'asd123');
# INSERT INTO user (name, username, password) VALUES ('Andy', 'qwe', 'qwe456');
# INSERT INTO user (name, username, password) VALUES ('Gina', 'tyu', 'tyu789');
# INSERT INTO user (name, username, password) VALUES ('Kyle', 'ghj', 'ghj963');

![image](https://user-images.githubusercontent.com/70138536/111930176-3a04a100-8af3-11eb-80dd-c55384e9e3b5.png)

# 2.使用 SELECT 指令取得所有在 user 資料表中的使用者資料。
# SELECT * FROM user;

![image](https://user-images.githubusercontent.com/70138536/111930191-4688f980-8af3-11eb-88eb-a0a3d6f6e903.png)

# 3.使用 SELECT 指令取得 user 資料表中總共有幾筆資料。
# SELECT COUNT(*) FROM user;

![image](https://user-images.githubusercontent.com/70138536/111930217-586a9c80-8af3-11eb-9206-8f117d377877.png)

# 4.使用 SELECT 指令取得所有在 user 資料表中的使用者資料，並按照 time 欄位，由近到遠排序。
# SELECT * FROM user ORDER BY time DESC;

![image](https://user-images.githubusercontent.com/70138536/111930240-65878b80-8af3-11eb-9b8e-b5e380294c69.png)

# 5.使用 SELECT 指令取得 user 資料表中第 2 ~ 4 共三筆資料，並按照 time 欄位，由近到遠排序。
# SELECT * FROM user ORDER BY time DESC LIMIT 1,3;

![image](https://user-images.githubusercontent.com/70138536/111992359-466b1700-8b50-11eb-975c-e72f8312eede.png)

# 6.使用 SELECT 指令取得欄位 username 是 ply 的使用者資料。
# SELECT * FROM user WHERE username = 'ply';

![image](https://user-images.githubusercontent.com/70138536/111930325-9b2c7480-8af3-11eb-9674-d66d38a4ea60.png)

# 7.使用 SELECT 指令取得欄位 username 是 ply、且欄位 password 也是 ply 的資料。
# SELECT * FROM user WHERE username = 'ply' AND password = 'ply';

![image](https://user-images.githubusercontent.com/70138536/111930366-b5665280-8af3-11eb-97d2-35d462059c1d.png)

# 8.使用 UPDATE 指令更新欄位 username 是 ply 的使用者資料，將資料中的 name 欄位改成【丁滿】。
# UPDATE user SET name = '丁滿' WHERE username = 'ply';

![image](https://user-images.githubusercontent.com/70138536/111930404-cfa03080-8af3-11eb-8539-95d5f2278a11.png)

# 9.使用 DELETE 指令刪除所有在 user 資料表中的資料。
# DELETE FROM user;

![image](https://user-images.githubusercontent.com/70138536/111928755-7d5d1080-8aef-11eb-87ee-6739aa11fd18.png)

# 要求四
# Create Table
# CREATE TABLE message(id BIGINT NOT NULL AUTO_INCREMENT, user_id BIGINT NOT NULL, content VARCHAR(255) NOT NULL, time DATETIME NOT NULL DEFAULT NOW(), PRIMARY KEY (id), FOREIGN KEY (user_id) REFERENCES user(id)) charset=utf8;

![image](https://user-images.githubusercontent.com/70138536/111936417-94582e80-8b00-11eb-88c5-e9cdf3156231.png)

# INSERT INTO message (user_id, content) VALUES (1, '你好，丁滿');
# INSERT INTO message (user_id, content) VALUES (2, 'Hello, Zack');
# INSERT INTO message (user_id, content) VALUES (3, 'Hello, Andy');
# INSERT INTO message (user_id, content) VALUES (4, 'Hello, Gina');
# INSERT INTO message (user_id, content) VALUES (5, 'Hello, Kyle');

# 1.使用 SELECT 搭配 JOIN 的語法，取得所有留言，資料中須包含留言會員的姓名。
# SELECT m.id, m.user_id, u.name, m.content, m.time FROM message m JOIN user u ON m.user_id = u.id;

![image](https://user-images.githubusercontent.com/70138536/111937468-c4a0cc80-8b02-11eb-93ec-67eed0f4515d.png)

# 2.使用 SELECT 搭配 JOIN 的語法，取得 user 資料表中欄位 username 是 ply 的所有留言，資料中須包含留言會員的姓名。
# SELECT m.id, m.user_id, u.name, m.content, m.time FROM message m JOIN user u ON m.user_id = u.id WHERE u.username = 'ply';

![image](https://user-images.githubusercontent.com/70138536/111937544-ebf79980-8b02-11eb-8b95-cd72dae2cdd1.png)
