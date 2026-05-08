import pandas as pd

data = {
    "name":["hka","tom","alice"],
    "score":[90,82,95],
    "city":["Hangzhou","Shanghai","Beijing"]
}

df = pd.DataFrame(data)

print(df)
print(type(df))
print(df["name"])
print(df["score"].mean())

print(df[df["score"] > 85])
print(df[["name", "score"]])

df["score_level"] = ["A", "B", "A"]
print(df)

df["score"] = df["score"] + 5
print(df)