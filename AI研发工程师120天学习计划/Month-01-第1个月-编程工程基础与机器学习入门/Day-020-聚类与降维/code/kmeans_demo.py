import numpy as np
from sklearn.cluster import KMeans

X = np.array([
    [1, 2],
    [1, 3],
    [2, 2],
    [8, 8],
    [8, 9],
    [9, 8]
])

model = KMeans(n_clusters=2, random_state=42, n_init=10)
model.fit(X)

print("labels =", model.labels_)
print("centers =")
print(model.cluster_centers_)