# 主題二

# 註冊時以 username 作為 WHERE 時的欄位，故設定 username 為 Secondary Index
![image](https://github.com/zxcvbn848/TraningPlan2021/blob/main/WK8_Practice/Ref/index_username.jpg)

# 有無使用 Index 的差別為 type (ALL -> ref) 以及 rows 的變化 (14 -> 1)
# 上方：使用 Index
# 下方：無使用 Index
![image](https://github.com/zxcvbn848/TraningPlan2021/blob/main/WK8_Practice/Ref/using_index_or_not.jpg)

# 登入時以 username, password 作為 WHERE 的欄位，故設定 username, password 為 Compound Index
![image](https://github.com/zxcvbn848/TraningPlan2021/blob/main/WK8_Practice/Ref/index_user_table.jpg)

# 有無使用 Index 的差別為 type (ALL -> ref) 以及 rows 的變化 (13 -> 1)
# 上方：使用 Index
# 下方：無使用 Index
![image](https://github.com/zxcvbn848/TraningPlan2021/blob/main/WK8_Practice/Ref/using_compound_index_or_not.jpg)
