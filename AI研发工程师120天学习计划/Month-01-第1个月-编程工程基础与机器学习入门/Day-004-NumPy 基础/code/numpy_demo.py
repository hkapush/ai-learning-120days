import numpy as np

a = np.array([1,2,3])
b = np.array([4,5,6])

print("a =", a)
print("b =", b)
print("a + b =", a + b)
print("a * b =", a * b)
print("mean of a =", a.mean())
print("sum of b =", b.sum())



matrix = np.array([
    [1, 2, 3],
    [4, 5, 6]
])

print("matrix =")
print(matrix)
print("shape =", matrix.shape)
print("first row =", matrix[0])
print("first row second col =", matrix[0][1])
print("first row second col =", matrix[0, 1])


print(matrix + 10)