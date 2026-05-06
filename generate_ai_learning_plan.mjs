import fs from "node:fs";
import path from "node:path";

const root = path.resolve("AI研发工程师120天学习计划");

const months = [
  {
    title: "第1个月-编程工程基础与机器学习入门",
    goal: "补齐 AI 研发的工程底座，能用 Python 完成数据处理、机器学习建模和基础实验记录。",
    weeks: [
      ["Python 进阶", "NumPy/Pandas", "可视化", "Git/Linux"],
      ["算法与数据结构", "复杂度", "LeetCode 高频题", "代码规范"],
      ["机器学习基础", "回归/分类/聚类", "模型评估", "特征工程"],
      ["完成第一个 ML 项目", "实验记录", "复盘与简历素材"],
    ],
  },
  {
    title: "第2个月-深度学习与PyTorch",
    goal: "掌握神经网络、PyTorch 训练流程、CNN/RNN/Attention，并能独立完成 CV/NLP 小项目。",
    weeks: [
      ["PyTorch 基础", "训练循环", "Dataset/DataLoader", "GPU 使用"],
      ["神经网络核心", "优化器", "正则化", "调参"],
      ["CNN/CV", "目标检测入门", "图像分类项目", "模型评估"],
      ["NLP 与 Attention", "Transformer 前置知识", "文本分类项目"],
    ],
  },
  {
    title: "第3个月-大模型核心技术",
    goal: "理解 Transformer、主流 LLM 架构、微调、RAG、Agent，并能做出可演示的大模型应用。",
    weeks: [
      ["Transformer", "BERT/GPT", "Tokenizer", "位置编码"],
      ["开源 LLM", "Qwen/DeepSeek/LLaMA", "LoRA/QLoRA", "SFT"],
      ["RAG", "向量数据库", "重排", "知识库问答"],
      ["Agent", "工具调用", "ReAct", "评测体系"],
    ],
  },
  {
    title: "第4个月-工程化、项目作品集与求职准备",
    goal: "完成 2-3 个可展示项目，补齐部署、评测、简历和面试能力，面向杭州/上海 AI 研发岗位投递。",
    weeks: [
      ["模型部署", "FastAPI", "Docker", "vLLM/llama.cpp"],
      ["多模态/业务项目", "CV 或 VLM", "数据管线", "业务指标"],
      ["作品集打磨", "README", "实验报告", "性能优化"],
      ["简历面试", "八股/项目讲解", "模拟面试", "投递清单"],
    ],
  },
];

const daily = [
  // Month 1
  ["搭建学习环境", ["安装/检查 Python、conda/venv、VS Code、Git", "创建学习仓库，写下 120 天目标", "复习 Python 基础语法和函数"], "环境可运行；完成一份个人学习基线记录"],
  ["Python 数据结构", ["复习 list/dict/set/tuple", "练习推导式、排序、切片", "完成 3 道简单算法题"], "能熟练处理常见容器和遍历逻辑"],
  ["Python 工程写法", ["学习模块、包、异常处理、日志", "写一个命令行小脚本", "整理代码风格规范"], "完成一个可复用 Python 脚本"],
  ["NumPy 基础", ["学习 ndarray、索引、广播", "完成矩阵运算练习", "实现均值/方差/归一化"], "能用 NumPy 处理数值数据"],
  ["Pandas 基础", ["学习 Series/DataFrame", "练习读取 CSV、筛选、分组", "完成一个数据清洗小练习"], "能完成基础表格数据处理"],
  ["数据可视化", ["学习 Matplotlib/Seaborn", "绘制折线图、柱状图、散点图", "给图表加标题和标注"], "输出一份简单 EDA 图表"],
  ["第1周复盘", ["整理本周笔记", "修复环境问题", "补齐未完成练习"], "形成第1周复盘文档"],
  ["Git 基础", ["学习 clone/add/commit/status/log", "创建分支并合并", "写一份 Git 常用命令表"], "能独立管理学习代码"],
  ["Linux 命令", ["练习 cd/ls/cp/mv/find/grep", "学习环境变量和权限", "用命令整理文件"], "能在终端完成基本操作"],
  ["复杂度分析", ["学习时间/空间复杂度", "分析常见循环和递归", "完成 3 道数组题"], "能解释代码复杂度"],
  ["数组与字符串", ["刷 4 道数组/字符串题", "总结双指针技巧", "记录错题"], "掌握双指针与滑动窗口雏形"],
  ["哈希表", ["刷 4 道哈希题", "总结去重、计数、映射套路", "复盘 Python dict 性能"], "能用哈希表解决查询类问题"],
  ["栈与队列", ["刷 3 道栈/队列题", "学习单调栈概念", "整理模板"], "掌握基础栈队列题型"],
  ["第2周复盘", ["回看 20 道题", "重做错题", "提交代码到仓库"], "形成算法错题集 v1"],
  ["机器学习总览", ["理解训练/验证/测试集", "学习监督/无监督学习", "安装 scikit-learn"], "能说清 ML 基本流程"],
  ["线性回归", ["学习损失函数和梯度下降", "用 sklearn 训练线性回归", "画预测结果"], "完成线性回归实验"],
  ["逻辑回归", ["学习 sigmoid、交叉熵", "训练二分类模型", "计算准确率/召回率"], "完成二分类实验"],
  ["决策树与随机森林", ["学习树模型原理", "训练随机森林", "比较特征重要性"], "完成树模型对比"],
  ["XGBoost/LightGBM 入门", ["理解 boosting", "跑一个表格分类任务", "记录参数影响"], "知道工业界常用表格模型"],
  ["聚类与降维", ["学习 KMeans/PCA", "做一个聚类可视化", "理解无监督评估"], "完成聚类小实验"],
  ["第3周复盘", ["整理 ML 算法对比表", "重跑一个实验", "记录踩坑"], "形成 ML 笔记 v1"],
  ["特征工程", ["处理缺失值、类别变量、标准化", "构建训练 pipeline", "比较处理前后效果"], "掌握基础特征处理"],
  ["模型评估", ["学习 precision/recall/F1/AUC", "画混淆矩阵", "写评估函数"], "能解释分类模型表现"],
  ["交叉验证与调参", ["学习 KFold/GridSearch", "调 3 个关键参数", "记录实验表"], "完成一次规范调参"],
  ["小项目选题", ["选择一个 Kaggle/公开数据集", "定义问题和指标", "建立项目目录"], "确定第1个 ML 项目"],
  ["小项目数据处理", ["完成数据读取和清洗", "做 EDA 图表", "写数据说明"], "产出数据分析报告"],
  ["小项目建模", ["训练 baseline", "尝试 2 个模型", "记录对比结果"], "得到可解释 baseline"],
  ["小项目优化", ["调参和特征优化", "分析 badcase", "整理代码"], "模型指标有明确改进"],
  ["小项目报告", ["写 README", "补充运行方式", "总结改进空间"], "完成可展示 ML 项目"],
  ["第1个月总复盘", ["整理简历素材", "列出薄弱点", "规划第2个月重点"], "完成月度复盘和下月计划"],

  // Month 2
  ["PyTorch 张量", ["学习 tensor、dtype、device", "练习张量运算", "理解 CPU/GPU 切换"], "能熟练使用 PyTorch tensor"],
  ["自动求导", ["学习 autograd", "手写简单梯度下降", "对比 sklearn 结果"], "理解反向传播的代码入口"],
  ["Dataset/DataLoader", ["自定义 Dataset", "使用 DataLoader batch", "处理训练/验证划分"], "能构建训练数据管线"],
  ["训练循环", ["写 train/eval loop", "记录 loss", "保存模型权重"], "完成标准训练模板"],
  ["优化器与学习率", ["学习 SGD/Adam", "尝试 scheduler", "观察 loss 曲线"], "理解优化器差异"],
  ["过拟合与正则化", ["学习 dropout、weight decay", "做过拟合实验", "加入早停"], "能识别和缓解过拟合"],
  ["第5周复盘", ["整理 PyTorch 模板", "重构训练代码", "提交仓库"], "拥有可复用训练脚手架"],
  ["MLP 手写数字", ["使用 MNIST/Fashion-MNIST", "训练 MLP", "画预测样例"], "完成第一个深度学习模型"],
  ["CNN 原理", ["学习卷积、池化、感受野", "实现简单 CNN", "比较 MLP/CNN"], "理解 CNN 优势"],
  ["图像增强", ["学习 torchvision transforms", "加入随机裁剪/翻转", "比较增强效果"], "掌握基础图像增强"],
  ["迁移学习", ["使用预训练 ResNet", "冻结/微调参数", "记录效果"], "完成迁移学习实验"],
  ["目标检测入门", ["了解 YOLO/Faster R-CNN", "阅读一个检测项目 README", "跑通推理 demo"], "知道检测任务流程"],
  ["CV 项目选题", ["选择分类或检测数据集", "定义指标", "建立项目目录"], "确定 CV 项目计划"],
  ["第6周复盘", ["整理 CV 知识图", "补齐未跑通代码", "记录模型对比"], "形成 CV 笔记 v1"],
  ["CV 项目数据", ["清洗图像数据", "划分 train/val", "写数据检查脚本"], "完成数据准备"],
  ["CV 项目训练", ["训练 baseline CNN/ResNet", "记录 loss/acc", "保存最佳模型"], "得到 baseline 模型"],
  ["CV 项目优化", ["调学习率和增强策略", "分析错分样本", "输出混淆矩阵"], "完成一次模型优化"],
  ["CV 项目报告", ["写 README", "补充样例图片", "总结局限"], "完成可展示 CV 项目"],
  ["NLP 基础", ["学习分词、词向量、文本清洗", "用 sklearn 做文本分类", "记录指标"], "理解 NLP 任务流程"],
  ["RNN/LSTM 概念", ["学习序列建模", "跑一个 LSTM 文本分类", "比较传统方法"], "了解 RNN 系列"],
  ["第7周复盘", ["整理 CV 项目素材", "重做 NLP 实验", "记录问题"], "完成项目和笔记归档"],
  ["Attention 入门", ["理解 Q/K/V", "手算一个 attention 示例", "画结构图"], "能讲清 Attention"],
  ["Transformer 组件", ["学习 Multi-head Attention、FFN、LayerNorm", "阅读 PyTorch 实现", "整理公式"], "掌握 Transformer 组成"],
  ["文本分类项目数据", ["选择中文文本分类数据", "清洗并切分数据", "建立 baseline"], "准备 NLP 项目数据"],
  ["文本分类模型", ["使用预训练 BERT/轻量模型", "完成微调", "记录指标"], "完成 NLP 微调实验"],
  ["文本分类优化", ["调整 max_length/batch/lr", "分析 badcase", "补充评估"], "提升模型效果"],
  ["NLP 项目报告", ["写 README", "补充预测示例", "总结上线思路"], "完成 NLP 项目"],
  ["深度学习面试题", ["整理反向传播、优化器、过拟合问题", "口述 10 个问题", "查漏补缺"], "形成 DL 面试卡片"],
  ["第2个月项目整理", ["统一项目目录和 README", "补充运行命令", "截图/图表归档"], "作品集初版成型"],
  ["第2个月总复盘", ["总结 PyTorch 能力", "列出大模型前置薄弱点", "规划第3个月"], "完成月度复盘"],

  // Month 3
  ["Transformer 深入", ["复习 Attention", "学习 causal mask", "阅读 nanoGPT/minGPT"], "理解 GPT 训练核心"],
  ["Tokenizer", ["学习 BPE/SentencePiece", "体验 tokenizer 编解码", "分析 token 长度"], "知道文本如何进入模型"],
  ["位置编码与 RoPE", ["学习绝对/相对位置编码", "理解 RoPE", "整理图解"], "能解释位置编码作用"],
  ["LLM 架构对比", ["对比 GPT/LLaMA/Qwen/DeepSeek", "整理架构表", "看模型配置文件"], "熟悉主流 LLM 组件"],
  ["Prompt Engineering", ["学习 zero-shot/few-shot/CoT", "设计 10 个 prompt", "记录效果差异"], "掌握基础提示词实验"],
  ["本地调用开源模型", ["用 transformers 调用小模型", "完成一次文本生成", "记录显存/速度"], "跑通开源 LLM 推理"],
  ["第9周复盘", ["整理 LLM 知识图", "补齐代码注释", "复盘推理问题"], "形成 LLM 基础笔记"],
  ["LoRA 原理", ["学习参数高效微调", "理解 rank/alpha/dropout", "整理公式和代码入口"], "能解释 LoRA"],
  ["微调数据构造", ["学习 instruction 格式", "清洗 100-300 条样例", "划分训练/验证"], "准备微调数据集"],
  ["SFT 实验", ["使用 LLaMA-Factory/Transformers 跑小规模 SFT", "记录训练日志", "保存模型"], "完成一次 SFT"],
  ["微调评估", ["设计评测问题", "比较微调前后输出", "记录 badcase"], "知道如何评价微调效果"],
  ["DPO/RLHF 概念", ["学习偏好对齐", "理解 DPO 与 RLHF 区别", "整理流程图"], "掌握后训练概念"],
  ["量化与推理", ["学习 int8/int4、GPTQ/AWQ", "尝试量化模型推理", "比较速度"], "理解轻量化部署"],
  ["第10周复盘", ["整理微调项目 README", "补充实验表", "复盘数据质量"], "完成微调项目雏形"],
  ["RAG 总览", ["学习 embedding、chunk、retrieve、rerank", "设计知识库问答流程", "选技术栈"], "确定 RAG 项目方案"],
  ["文档解析", ["处理 PDF/Markdown/TXT", "实现 chunk 切分", "记录 chunk 策略"], "完成知识库数据管线"],
  ["向量检索", ["使用 FAISS 或 Milvus", "生成 embedding", "实现 top-k 检索"], "跑通基础检索"],
  ["重排与混合检索", ["学习 BM25/rerank", "对比纯向量与混合检索", "记录召回效果"], "提升检索质量"],
  ["RAG 生成链路", ["拼接上下文", "接入 LLM", "输出带引用答案"], "完成知识库问答 demo"],
  ["RAG 评测", ["设计 30 个问答样例", "评估准确率/召回率/幻觉", "记录 badcase"], "建立 RAG 评测集"],
  ["第11周复盘", ["整理 RAG 项目结构", "补充 README", "总结检索问题"], "RAG 项目可演示"],
  ["Agent 基础", ["学习 ReAct、Plan-and-Execute", "理解工具调用", "画 Agent 架构"], "掌握 Agent 基本范式"],
  ["工具调用", ["实现搜索/计算/文件读取工具", "让 LLM 调用工具完成任务", "记录失败案例"], "完成工具调用 demo"],
  ["Agent Memory", ["学习短期/长期记忆", "实现简单会话记忆", "评估上下文效果"], "理解记忆模块"],
  ["Agent 工作流", ["用 LangChain/LangGraph 或原生代码实现流程", "加入错误重试", "记录状态"], "完成多步任务 Agent"],
  ["Agent 评测", ["设计任务集", "统计成功率/步骤数/耗时", "分析失败原因"], "建立 Agent 评测方法"],
  ["大模型安全与幻觉", ["学习事实性、引用、拒答", "给 RAG/Agent 加边界", "记录风险"], "理解上线风险"],
  ["第3个月项目整合", ["整合 SFT/RAG/Agent 三个项目", "补充截图和报告", "准备演示脚本"], "大模型作品集成型"],
  ["大模型面试题", ["整理 Transformer、LoRA、RAG、Agent 高频题", "口述项目亮点", "补充短板"], "形成 LLM 面试卡片"],
  ["第3个月总复盘", ["总结大模型能力", "选择第4个月主打项目", "制定投递方向"], "完成月度复盘"],

  // Month 4
  ["FastAPI 服务", ["把一个模型封装成 API", "写请求/响应 schema", "测试接口"], "完成模型 API demo"],
  ["Docker 入门", ["编写 Dockerfile", "构建镜像", "运行服务容器"], "服务可容器化运行"],
  ["vLLM/llama.cpp", ["了解推理框架", "跑通一个本地推理服务", "记录吞吐和延迟"], "理解推理部署方案"],
  ["日志与监控", ["加入请求日志", "记录错误和耗时", "设计简单监控指标"], "服务具备基本可观测性"],
  ["CI/CD 与代码质量", ["学习 lint/test", "写基础测试", "整理依赖文件"], "项目更像真实工程"],
  ["部署项目 README", ["补充启动命令、接口文档、架构图", "整理问题清单", "录制演示思路"], "部署项目可展示"],
  ["第13周复盘", ["重跑部署流程", "修复文档缺口", "总结部署经验"], "工程化能力归档"],
  ["多模态方向选择", ["选择 CV/VLM/AIGC 方向", "明确业务场景", "设计指标"], "确定主打项目"],
  ["多模态数据处理", ["准备图文/图像数据", "做数据检查", "写样例可视化"], "完成数据管线"],
  ["VLM/图像模型推理", ["调用开源 VLM 或 CV 模型", "完成批量推理", "记录错误样例"], "跑通多模态 baseline"],
  ["多模态应用设计", ["设计用户流程", "接入 API", "输出结构化结果"], "完成业务 demo 雏形"],
  ["多模态评测", ["设计评测样例", "统计准确率或人工评分", "分析 badcase"], "建立评测闭环"],
  ["多模态优化", ["改 prompt/数据/后处理", "比较优化前后", "记录结果"], "项目效果有改进证据"],
  ["第14周复盘", ["整理多模态项目 README", "补充示例输出", "确定展示重点"], "主打项目可演示"],
  ["作品集总整理", ["统一 3 个项目格式", "补充目录导航", "检查运行命令"], "作品集结构清晰"],
  ["技术博客 1", ["写一篇 RAG 项目复盘", "包含架构、指标、badcase", "润色表达"], "产出第一篇技术文章"],
  ["技术博客 2", ["写一篇微调或 Agent 复盘", "突出工程问题", "加入图表"], "产出第二篇技术文章"],
  ["性能优化", ["测接口延迟", "优化 chunk/cache/batch", "记录性能对比"], "有性能优化案例"],
  ["简历项目描述", ["把项目改写成 STAR 表达", "量化指标", "准备 3 个追问答案"], "简历项目段落完成"],
  ["GitHub/文档美化", ["检查 README 图片和命令", "添加 license/requirements", "清理无关文件"], "作品集更专业"],
  ["第15周复盘", ["模拟讲解项目 10 分钟", "记录卡壳问题", "补充证据材料"], "项目讲解流畅"],
  ["简历初稿", ["整理教育/技能/项目/经历", "对齐杭州/上海岗位关键词", "输出一页简历"], "完成简历 v1"],
  ["岗位 JD 对照", ["找 10 个目标岗位", "提取关键词", "标注简历匹配点"], "形成投递岗位表"],
  ["AI 基础面试", ["复习 ML/DL/Transformer 高频题", "每天口述 20 题", "记录不会的问题"], "补齐理论面试"],
  ["项目模拟面试", ["围绕 3 个项目自问自答", "准备架构图讲解", "练习 trade-off"], "能讲清项目细节"],
  ["算法题冲刺", ["刷 5 道中等题", "复习双指针/哈希/栈/DP", "整理模板"], "恢复算法手感"],
  ["系统与工程面试", ["复习 Linux/Git/Docker/API/并发基础", "准备部署问题", "整理工程题"], "补齐工程问答"],
  ["投递材料终版", ["修改简历 v2", "准备自我介绍", "准备作品集链接说明"], "完成投递包"],
  ["模拟投递与复盘", ["选择 5 个岗位试投", "记录反馈", "调整简历关键词"], "开始真实投递"],
  ["120天总复盘", ["总结能力变化", "列出下阶段学习路线", "制定 30 天求职节奏"], "完成从学习到求职的转换"],
];

function pad(n, size = 2) {
  return String(n).padStart(size, "0");
}

function safeName(name) {
  return name.replace(/[/:]/g, "-").replace(/\s+/g, " ").trim();
}

function write(file, content) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content, "utf8");
}

fs.mkdirSync(root, { recursive: true });

function resourcePack(day, title, tasks, outcome) {
  const text = `${title} ${tasks.join(" ")}`;
  const has = (...words) => words.some((word) => text.toLowerCase().includes(word.toLowerCase()));

  if (has("复盘", "报告", "整理", "总复盘", "博客", "简历", "投递", "面试")) {
    return {
      concepts: [
        "复盘不是写流水账，而是把输入、行动、结果和下一步改进串起来。",
        "AI 研发岗位很看重可解释的项目经历：你为什么这样建模、指标如何变化、失败样例说明了什么。",
        "简历和面试材料要围绕证据组织：代码、实验表、截图、评测集、badcase、部署方式。",
      ],
      study: [
        "先回看本阶段所有 README 中的今日目标，把未完成项标记出来。",
        "把代码、笔记、图表、错误记录整理成一个可以被别人读懂的目录。",
        "用 STAR 方法写项目：场景 Situation、任务 Task、行动 Action、结果 Result。",
      ],
      practice: [
        "写一份 300-800 字复盘，必须包含：完成了什么、指标或证据、主要问题、下一步计划。",
        "挑 1 个项目，用 5 分钟口述讲解：背景、方案、技术难点、效果、可改进点。",
        "整理 5 个面试追问，并写出自己的回答。",
      ],
      resources: [
        "GitHub README Guide: https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes",
        "Google Technical Writing: https://developers.google.com/tech-writing",
      ],
    };
  }

  if (has("Python", "NumPy", "Pandas", "可视化", "Git 基础", "Linux", "复杂度", "数组", "字符串", "哈希", "栈与队列", "单调栈")) {
    return {
      concepts: [
        "工程基础的目标不是背 API，而是把问题拆成数据结构、控制流、函数边界和可复用脚本。",
        "AI 研发每天都要处理数据、实验和日志，所以 Python、命令行、Git 是生产力底座。",
        "算法题的价值在于训练抽象能力：输入是什么、状态怎么表示、边界条件在哪里、复杂度是否可接受。",
      ],
      study: [
        "阅读当天主题对应的官方文档或教程，重点看示例代码，不需要一次读完全部文档。",
        "把概念转成最小可运行代码：一个函数、一个脚本、一个 notebook 单元都可以。",
        "运行代码后故意改错 1 次，观察报错信息，练习定位问题。",
      ],
      practice: [
        "完成当天 README 中列出的练习，并把代码保存到本文件夹的 `code/` 目录。",
        "写 3 条“今天踩坑”：报错、原因、解决方式。",
        "用 5 句话解释今天主题，假设读者只会基础 Python。",
      ],
      resources: [
        "Python 官方教程: https://docs.python.org/zh-cn/3/tutorial/",
        "NumPy Learn: https://numpy.org/learn/",
        "Pandas User Guide: https://pandas.pydata.org/docs/user_guide/",
        "Matplotlib Tutorials: https://matplotlib.org/stable/tutorials/",
        "Git Book 中文版: https://git-scm.com/book/zh/v2",
      ],
    };
  }

  if (has("机器学习", "线性回归", "逻辑回归", "决策树", "随机森林", "XGBoost", "LightGBM", "聚类", "降维", "特征工程", "模型评估", "交叉验证", "调参", "ML 项目", "小项目")) {
    return {
      concepts: [
        "机器学习的核心闭环是：定义任务、准备数据、训练模型、评估指标、分析错误、迭代改进。",
        "不要只追求准确率。不同业务会关心召回率、精确率、F1、AUC、延迟、可解释性和维护成本。",
        "特征工程和数据质量通常比换模型更重要。先确认数据有没有泄漏、缺失、异常和分布偏移。",
      ],
      study: [
        "先画出今天算法的输入、输出、损失函数或划分规则。",
        "用 sklearn 跑一个最小示例，理解 fit/predict/score 的流程。",
        "记录至少 2 个参数对结果的影响，例如树深、学习率、正则化强度。",
      ],
      practice: [
        "创建一个 `experiment_log.md`，记录数据集、模型、参数、指标、结论。",
        "对同一数据训练 baseline 和改进模型，写出指标对比。",
        "找 5 个 badcase，说明模型为什么错，以及下一步怎么改。",
      ],
      resources: [
        "scikit-learn User Guide: https://scikit-learn.org/stable/user_guide.html",
        "Google Machine Learning Crash Course: https://developers.google.com/machine-learning/crash-course",
        "Kaggle Learn Machine Learning: https://www.kaggle.com/learn/intro-to-machine-learning",
        "LightGBM Documentation: https://lightgbm.readthedocs.io/",
        "XGBoost Documentation: https://xgboost.readthedocs.io/",
      ],
    };
  }

  if (!has("多模态", "VLM", "AIGC") && has("PyTorch", "自动求导", "Dataset", "DataLoader", "训练循环", "优化器", "学习率", "过拟合", "正则化", "MLP", "CNN", "图像", "迁移学习", "目标检测", "CV", "NLP", "RNN", "LSTM", "Attention", "文本分类", "Transformer 组件")) {
    return {
      concepts: [
        "深度学习研发的基本单元是：数据集、模型、损失函数、优化器、训练循环、评估循环、保存与加载。",
        "PyTorch 的关键是张量 shape 和梯度流。绝大多数 bug 都能从 shape、device、dtype、requires_grad 这几处查起。",
        "训练不是跑起来就结束，要看 loss 曲线、验证集指标、过拟合程度和错误样例。",
      ],
      study: [
        "先读懂一个最小 PyTorch 训练脚本，标注每一行属于数据、模型、损失、优化还是评估。",
        "运行实验时记录随机种子、batch size、学习率、epoch、设备和最终指标。",
        "如果使用预训练模型，写清楚冻结了哪些层、训练了哪些层、为什么这样做。",
      ],
      practice: [
        "实现或复用一个训练模板：`train.py`、`dataset.py`、`model.py`、`evaluate.py`。",
        "画出训练集和验证集曲线，解释是否过拟合。",
        "保存 5 个预测正确样例和 5 个预测错误样例。",
      ],
      resources: [
        "PyTorch Tutorials: https://pytorch.org/tutorials/",
        "PyTorch Documentation: https://pytorch.org/docs/stable/index.html",
        "TorchVision Docs: https://pytorch.org/vision/stable/index.html",
        "Hugging Face NLP Course: https://huggingface.co/learn/nlp-course/",
        "Dive into Deep Learning: https://d2l.ai/",
      ],
    };
  }

  if (has("Transformer", "Tokenizer", "RoPE", "LLM", "Prompt", "开源模型", "LoRA", "微调", "SFT", "DPO", "RLHF", "量化", "推理")) {
    return {
      concepts: [
        "大模型学习要抓住四条线：模型结构、训练数据、训练/对齐方法、推理与部署效率。",
        "Transformer 的核心是注意力机制；LLM 工程的核心是数据、上下文管理、评测和成本控制。",
        "微调不是万能药。很多业务问题优先考虑 prompt、RAG、工具调用和评测集，再决定是否训练。",
      ],
      study: [
        "画出今天主题在 LLM 全链路中的位置：预训练、后训练、应用、评测或部署。",
        "读一个开源项目的配置文件，理解模型大小、上下文长度、tokenizer、训练参数。",
        "把概念写成面试回答：是什么、为什么需要、怎么实现、有什么坑。",
      ],
      practice: [
        "完成一个最小实验：调用模型、构造 prompt、微调小数据、评估输出或比较推理速度。",
        "建立 `eval_cases.jsonl`，至少写 10 条测试用例。",
        "记录 3 个 badcase，并判断是数据问题、prompt 问题、检索问题还是模型能力问题。",
      ],
      resources: [
        "Hugging Face Transformers Docs: https://huggingface.co/docs/transformers/index",
        "Hugging Face PEFT Docs: https://huggingface.co/docs/peft/index",
        "TRL Documentation: https://huggingface.co/docs/trl/index",
        "LLaMA-Factory: https://github.com/hiyouga/LLaMA-Factory",
        "The Illustrated Transformer: https://jalammar.github.io/illustrated-transformer/",
      ],
    };
  }

  if (has("RAG", "文档解析", "向量检索", "重排", "混合检索", "知识库", "检索", "Embedding")) {
    return {
      concepts: [
        "RAG 的目标是让模型基于外部知识回答，而不是凭参数记忆硬猜。",
        "RAG 质量主要取决于文档解析、chunk 策略、embedding、召回、重排、上下文拼接和评测。",
        "判断 RAG 好坏不能只看回答顺不顺，要看引用是否命中、事实是否可追溯、检索是否稳定。",
      ],
      study: [
        "把 RAG 流程画成 6 步：load、split、embed、retrieve、rerank、generate。",
        "对比不同 chunk size 和 overlap 的检索效果。",
        "设计答案格式，要求模型必须给出引用片段或来源。",
      ],
      practice: [
        "在本文件夹建 `rag_cases.jsonl`，写至少 10 条问题、期望证据、期望答案。",
        "记录 top-k 检索结果，判断是否召回了正确片段。",
        "写一份 badcase 表：问题、检索结果、生成答案、错误原因、改进方案。",
      ],
      resources: [
        "LangChain RAG Tutorial: https://python.langchain.com/docs/tutorials/rag/",
        "LlamaIndex Documentation: https://docs.llamaindex.ai/",
        "FAISS Wiki: https://github.com/facebookresearch/faiss/wiki",
        "Milvus Docs: https://milvus.io/docs",
        "Sentence Transformers Docs: https://sbert.net/",
      ],
    };
  }

  if (has("Agent", "工具调用", "Memory", "工作流", "ReAct", "安全", "幻觉")) {
    return {
      concepts: [
        "Agent 是让模型在目标、工具、状态和反馈之间循环决策的系统，不只是一个更长的 prompt。",
        "稳定 Agent 需要控制工具权限、步骤上限、错误重试、状态记录和评测任务集。",
        "真实业务里，Agent 的成功率、耗时、成本和失败可解释性往往比炫酷能力更重要。",
      ],
      study: [
        "定义 Agent 的任务边界：它能做什么、不能做什么、失败时如何退出。",
        "列出工具 schema：工具名、输入、输出、异常、示例。",
        "观察每一步 reasoning/action/observation，找出失败发生在哪个环节。",
      ],
      practice: [
        "实现 2-3 个简单工具，例如计算器、文件检索、天气/搜索占位函数。",
        "设计 10 条 Agent 任务，统计成功率、平均步数和失败原因。",
        "写安全边界：禁止执行什么、需要用户确认什么、如何处理不确定答案。",
      ],
      resources: [
        "LangGraph Documentation: https://langchain-ai.github.io/langgraph/",
        "LangChain Tool Calling: https://python.langchain.com/docs/concepts/tool_calling/",
        "OpenAI Function Calling Guide: https://platform.openai.com/docs/guides/function-calling",
        "ReAct Paper: https://arxiv.org/abs/2210.03629",
      ],
    };
  }

  if (has("FastAPI", "Docker", "vLLM", "llama.cpp", "日志", "监控", "CI", "CD", "部署", "性能优化", "GitHub")) {
    return {
      concepts: [
        "AI 工程化的目标是把模型能力变成稳定、可调用、可观测、可迭代的服务。",
        "部署时要同时关注功能正确、延迟、吞吐、显存/内存占用、异常处理和版本管理。",
        "README、启动脚本、依赖文件和测试用例，是别人能否复现你项目的关键。",
      ],
      study: [
        "明确服务接口：输入字段、输出字段、错误码、超时策略。",
        "把启动步骤写成命令，不依赖口头解释。",
        "记录一次性能数据：单请求延迟、并发吞吐、资源占用。",
      ],
      practice: [
        "写一个 `app.py` 提供 `/health` 和 `/predict` 或 `/chat` 接口。",
        "写 `requirements.txt` 或 `pyproject.toml`，保证别人能安装依赖。",
        "补充 3 个测试请求和预期响应。",
      ],
      resources: [
        "FastAPI Docs: https://fastapi.tiangolo.com/",
        "Docker Docs: https://docs.docker.com/",
        "vLLM Docs: https://docs.vllm.ai/",
        "llama.cpp: https://github.com/ggml-org/llama.cpp",
        "GitHub Actions Docs: https://docs.github.com/en/actions",
      ],
    };
  }

  if (has("多模态", "VLM", "图像模型", "AIGC", "业务", "数据管线")) {
    return {
      concepts: [
        "多模态项目要同时处理数据格式、模型输入输出、业务语义和评测标准。",
        "VLM 能做图文理解，但落地时要特别关注图片质量、提示词、输出结构和错误样例。",
        "业务项目的好坏不只看模型强不强，还看是否解决了一个具体流程中的效率或质量问题。",
      ],
      study: [
        "定义输入模态和输出格式：图片、文本、视频、表格或结构化 JSON。",
        "准备 20-50 个代表性样例，覆盖正常、边界、模糊和失败场景。",
        "对比至少两种方案：纯 prompt、模型后处理、RAG 或规则校验。",
      ],
      practice: [
        "做一个批量推理脚本，把结果保存为 CSV/JSONL。",
        "人工评估 20 条样例，标注正确、部分正确、错误和原因。",
        "写业务指标：节省时间、准确率、召回率、人工审核通过率或错误率。",
      ],
      resources: [
        "Hugging Face Vision Models: https://huggingface.co/docs/transformers/tasks/image_classification",
        "OpenCLIP: https://github.com/mlfoundations/open_clip",
        "LLaVA: https://github.com/haotian-liu/LLaVA",
        "Diffusers Docs: https://huggingface.co/docs/diffusers/index",
      ],
    };
  }

  return {
    concepts: [
      "今天的重点是把概念、代码和产出连接起来，避免只看资料不动手。",
      "每个主题都要形成一个可复用资产：笔记、代码、实验表、项目文档或面试回答。",
      "学习顺序建议是先跑通，再理解，再优化，最后写成别人能复现的说明。",
    ],
    study: [
      "阅读当天主题相关资料，记录 5 个关键词。",
      "完成一个最小可运行实验。",
      "把实验结果写进记录区，并说明下一步改进。",
    ],
    practice: [
      "保存代码和截图。",
      "写 3 个问题和自己的答案。",
      "用 5 分钟口述今天内容。",
    ],
    resources: [
      "Hugging Face Learn: https://huggingface.co/learn",
      "Papers with Code: https://paperswithcode.com/",
      "Kaggle Learn: https://www.kaggle.com/learn",
    ],
  };
}

function materialsMarkdown(day, title, tasks, outcome) {
  const pack = resourcePack(day, title, tasks, outcome);
  return `# Day ${day} 学习资料：${title}

## 你今天要学会什么

${outcome}

## 核心概念

${pack.concepts.map((item) => `- ${item}`).join("\n")}

## 学习步骤

${pack.study.map((item, index) => `${index + 1}. ${item}`).join("\n")}

## 推荐资料

${pack.resources.map((item) => `- ${item}`).join("\n")}

## 今日任务拆解

${tasks.map((task, index) => `### 任务 ${index + 1}: ${task}

- 先用 10-20 分钟理解这个任务的目的。
- 写下输入、输出、关键步骤和可能的坑。
- 动手完成一个最小版本，再补充边界情况。
- 把结果、截图或命令输出记录到 \`NOTES.md\`。
`).join("\n")}

## 面试化表达

今天结束后，尝试回答这 3 个问题：

1. ${title} 解决的核心问题是什么？
2. 如果把它用在真实 AI 研发项目里，输入、输出和评价指标分别是什么？
3. 你今天的实现或练习有哪些不足，下一步会怎么优化？
`;
}

function practiceMarkdown(day, title, tasks, outcome) {
  const pack = resourcePack(day, title, tasks, outcome);
  return `# Day ${day} 练习与交付：${title}

## 必做练习

${pack.practice.map((item) => `- [ ] ${item}`).join("\n")}

## 当天交付物

- [ ] \`NOTES.md\`：完成核心笔记、实验结果、问题与解决。
- [ ] \`code/\`：保存当天代码、notebook 或脚本。
- [ ] \`outputs/\`：保存图表、截图、模型结果、评测表或命令输出。

## 验收标准

- 能不用看资料，用自己的话讲清楚：${outcome}。
- 至少有一个可检查的产出，不只是“看完了”。
- 遇到报错时，记录错误信息、原因猜测和最终解决方式。

## 加分挑战

- 把今天内容改造成一个面试回答。
- 把代码封装成函数或脚本，让明天可以复用。
- 找一个相似岗位 JD，标记今天能力对应的岗位关键词。
`;
}

function notesTemplate(day, title) {
  return `# Day ${day} 学习记录：${title}

## 今日完成

- 

## 核心笔记

- 

## 代码/实验结果

- 

## 遇到的问题

| 问题 | 原因 | 解决方式 |
| --- | --- | --- |
|  |  |  |

## 面试表达

今天这个主题可以这样讲：

> 

## 明日准备

- 
`;
}

write(path.join(root, "README.md"), `# AI研发工程师120天学习计划

适合目标：120 天内从已有编程基础，系统补齐 AI 研发工程师所需的机器学习、深度学习、大模型应用、工程化和求职作品集。

## 使用方式

1. 每天进入对应的 \`Month-xx/Day-xxx\` 文件夹。
2. 先读当天 \`README.md\`，它是入口页。
3. 阅读 \`MATERIALS.md\`，完成当天核心学习。
4. 按 \`PRACTICE.md\` 做练习和验收。
5. 在 \`NOTES.md\` 写笔记、实验结果、问题和复盘。
6. 代码放进 \`code/\`，图表、截图、模型输出和评测表放进 \`outputs/\`。
7. 每 7 天做一次周复盘，每 30 天做一次月复盘。

## 每日文件结构

- \`README.md\`：当天入口和清单。
- \`MATERIALS.md\`：本地学习资料、核心概念、学习步骤、推荐资料。
- \`PRACTICE.md\`：必做练习、交付物、验收标准和加分挑战。
- \`NOTES.md\`：你的学习记录模板。
- \`code/\`：当天代码。
- \`outputs/\`：当天结果。

## 每日建议时间

- 工作日：2-3 小时。
- 周末：4-6 小时，优先补实验和项目。
- 每天固定产出：代码提交、学习笔记、实验记录或错题复盘，至少一个。

## 四个月主线

- Month-01：编程工程基础与机器学习入门。
- Month-02：深度学习与 PyTorch。
- Month-03：大模型核心技术，包含微调、RAG、Agent。
- Month-04：工程化、项目作品集与求职准备。
`);

for (let monthIndex = 0; monthIndex < months.length; monthIndex++) {
  const monthNumber = monthIndex + 1;
  const month = months[monthIndex];
  const monthDir = path.join(root, safeName(`Month-${pad(monthNumber)}-${month.title}`));
  const start = monthIndex * 30;

  write(path.join(monthDir, "README.md"), `# ${month.title}

## 月度目标

${month.goal}

## 周主题

${month.weeks.map((items, i) => `- 第 ${i + 1} 周：${items.join(" / ")}`).join("\n")}

## 月末检查

- 是否完成 30 天文件夹中的每日产出。
- 是否至少完成 1 个可展示项目或阶段性作品。
- 是否写出月度复盘，明确下个月补强点。
`);

  for (let dayInMonth = 1; dayInMonth <= 30; dayInMonth++) {
    const globalDay = start + dayInMonth;
    const [title, tasks, outcome] = daily[globalDay - 1];
    const dayDir = path.join(monthDir, safeName(`Day-${pad(globalDay, 3)}-${title}`));
    const isWeeklyReview = globalDay % 7 === 0;
    const isMonthlyReview = globalDay % 30 === 0;

    write(path.join(dayDir, "README.md"), `# Day ${globalDay}: ${title}

## 今日目标

${outcome}

## 今日文件

- [学习资料](./MATERIALS.md)：今天要学的核心概念、学习步骤和推荐资料。
- [练习与交付](./PRACTICE.md)：必做练习、验收标准和加分挑战。
- [学习记录](./NOTES.md)：你当天写笔记、实验结果和复盘的地方。
- [code](./code/)：保存当天代码、脚本或 notebook。
- [outputs](./outputs/)：保存图表、截图、模型输出和评测结果。

## 学习清单

${tasks.map((task) => `- [ ] ${task}`).join("\n")}

## 建议产出

- [ ] 今日笔记：记录核心概念、代码片段、问题和解决过程。
- [ ] 今日代码：至少提交一个可运行脚本、Notebook 或项目改动。
- [ ] 今日复盘：用 3-5 句话写清楚学会了什么、哪里卡住、明天怎么处理。
${isWeeklyReview ? "\n- [ ] 周复盘：整理本周完成度、错题/bug、下周重点。" : ""}
${isMonthlyReview ? "\n- [ ] 月复盘：整理本月项目、简历素材、能力短板和下月计划。" : ""}

## 记录区

### 核心笔记


### 实验/练习结果


### 问题与解决


### 明日准备

`);
    write(path.join(dayDir, "MATERIALS.md"), materialsMarkdown(globalDay, title, tasks, outcome));
    write(path.join(dayDir, "PRACTICE.md"), practiceMarkdown(globalDay, title, tasks, outcome));
    write(path.join(dayDir, "NOTES.md"), notesTemplate(globalDay, title));
    fs.mkdirSync(path.join(dayDir, "code"), { recursive: true });
    fs.mkdirSync(path.join(dayDir, "outputs"), { recursive: true });
  }
}

console.log(`Created ${root}`);
