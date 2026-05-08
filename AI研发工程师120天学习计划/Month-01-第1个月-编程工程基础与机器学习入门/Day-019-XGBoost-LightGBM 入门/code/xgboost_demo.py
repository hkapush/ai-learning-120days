import numpy as np
from xgboost import XGBClassifier
from sklearn.metrics import accuracy_score

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

model = XGBClassifier(
    n_estimators=50,
    max_depth=3,
    learning_rate=0.3,
    min_child_weight=0,
    eval_metric="logloss",
    random_state=42
)


model.fit(X, y)

predictions = model.predict(X)
print("predictions =", predictions)
print("accuracy =", accuracy_score(y, predictions))
print("feature importance =", model.feature_importances_)
