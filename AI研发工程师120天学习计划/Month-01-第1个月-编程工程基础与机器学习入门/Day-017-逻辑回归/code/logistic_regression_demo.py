
import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score,recall_score

# 学习时长
X = np.array([[1], [2], [3], [4], [5], [6]])
# 是否通过考试：0 = 没通过, 1 = 通过
y = np.array([0, 0, 0, 1, 1, 1])

model = LogisticRegression()
model.fit(X,y)
test = np.array([[3.5]])
print(model.predict(test))
print(model.predict_proba(test))
predictions = model.predict(test)

predictions = model.predict(X)
probabilities = model.predict_proba(X)

print("predictions =", predictions)
print("probabilities =")
print(probabilities)

print("accuracy =", accuracy_score(y, predictions))
print("recall =", recall_score(y, predictions))