import pandas as pd
from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.linear_model import LogisticRegression



df = pd.DataFrame({
    "age":[25,30,None,40,35],
    "city":["A","B","A",None,"C"],
    "income":[5000,6000,5500,8000,7000],
    "label":[0,1,0,1,1]
})

X = df[["age","city","income"]]
y = df["label"]

numeric_features = ["age","income"]
categorical_features = ["city"]

numeric_transformer = Pipeline([
    ("imputer", SimpleImputer(strategy="mean")),
    ("scaler", StandardScaler())
])

categorical_transformer = Pipeline([
    ("imputer", SimpleImputer(strategy="most_frequent")),
    ("onehot", OneHotEncoder(handle_unknown="ignore"))
])

preprocessor = ColumnTransformer([
    ("num", numeric_transformer, numeric_features),
    ("cat", categorical_transformer, categorical_features)
])

model = Pipeline([
    ("preprocessor", preprocessor),
    ("classifier", LogisticRegression())
])

model.fit(X, y)


X_processed = preprocessor.fit_transform(X)

print("processed feature shape =", X_processed.shape)
print("processed features =")
print(X_processed)


feature_names = preprocessor.get_feature_names_out()
print("feature names =")
print(feature_names)

predictions = model.predict(X)

print("predictions =", predictions)
print("original data =")
print(df)