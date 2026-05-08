import numpy as np
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier

# 学习时长、作业完成数
X = np.array([
    [1, 1],
    [2, 1],
    [3, 2],
    [4, 2],
    [5, 3],
    [6, 3]
])

# 是否通过考试
y = np.array([0, 0, 0, 1, 1, 1])

tree_model = DecisionTreeClassifier(random_state=42)
tree_model.fit(X, y)

forest_model = RandomForestClassifier(random_state=42, n_estimators=10)
forest_model.fit(X, y)

tree_pred = tree_model.predict(X)
forest_pred = forest_model.predict(X)

print("tree predictions =", tree_pred)
print("forest predictions =", forest_pred)
print("tree feature importance =", tree_model.feature_importances_)
print("forest feature importance =", forest_model.feature_importances_)