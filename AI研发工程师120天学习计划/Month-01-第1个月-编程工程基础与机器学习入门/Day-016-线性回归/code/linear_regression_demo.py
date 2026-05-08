import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression


X = np.array([[50], [60], [70], [80], [90], [100]])
y = np.array([150, 180, 210, 240, 270, 300])
model = LinearRegression()
model.fit(X,y)

predictions = model.predict(X)

print("coef =", model.coef_)
print("intercept =", model.intercept_)
print("predictions =", predictions)

plt.scatter(X, y, color="blue", label="real data")
plt.plot(X, predictions, color="red", label="prediction line")
plt.xlabel("Area")
plt.ylabel("Price")
plt.title("Linear Regression Demo")
plt.legend()
plt.show()