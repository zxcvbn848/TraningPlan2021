# 計算 1 + 2 + ... + 50 的總和
sum = 0
for x in range(1, 51):
    sum += x

print(sum)

# 印出 99 乘法表
for i in range(1, 10):
    for j in range(1, 10):
        product = i * j
        print(i, " x ", j, " = ", product)