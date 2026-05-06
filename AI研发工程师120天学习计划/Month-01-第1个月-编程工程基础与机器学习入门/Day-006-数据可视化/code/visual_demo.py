
import matplotlib.pyplot as plt

# names = ["hka","tom","alice"]
# scores = [90,82,95]

# plt.bar(names,scores)
# plt.title("Students Scores")
# plt.xlabel("Name")
# plt.ylabel("Score")
# plt.show()


# days = [1, 2, 3, 4, 5]
# loss = [0.9, 0.7, 0.55, 0.4, 0.3]

# plt.figure()
# plt.plot(days, loss, marker="o")
# plt.title("Training Loss")
# plt.xlabel("Day")
# plt.ylabel("Loss")
# plt.show()

# hours = [1, 2, 3, 4, 5]
# scores = [60, 70, 75, 88, 95]

# plt.figure()
# plt.scatter(hours, scores)
# plt.title("Study Hours vs Score")
# plt.xlabel("Study Hours")
# plt.ylabel("Score")
# plt.show()


hours = [1, 2, 3, 4, 5]
scores = [60, 70, 75, 88, 95]

plt.figure(figsize=(6, 4))
plt.scatter(hours, scores, color="blue")
plt.title("Study Hours vs Score")
plt.xlabel("Study Hours")
plt.ylabel("Score")

for x, y in zip(hours, scores):
    plt.text(x, y, f"({x}, {y})")

plt.savefig("../outputs/study_hours_vs_score.png")
plt.show()