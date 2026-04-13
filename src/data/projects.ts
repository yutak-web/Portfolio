import { achievementsFeProjects } from "./achievementsFe";
import { achievementsMlProjects } from "./achievementsMl";
import { personalProductProjects } from "./productsPersonal";
import groupworkAnalysisImage from "../assets/analysis_result_filterd.png";
import type { Project } from "./types";

const researchProjects: Project[] = [
  {
    slug: "research-groupwork-collaboration-patterns",
    title: "グループワークにおける役割分析のための協同パターン抽出",
    category: "研究活動",
    year: "2026",
    summary:
      "グループワークの映像記録から、参加者ごとの役割構造を教師なし学習で抽出",
    impact:
      "マシュマロチャレンジのデータから「提案・説明・主導」「傾聴・同調」「作業・没頭」という解釈可能な3つの協同パターンを抽出し、時系列での役割変化を可視化。",
    role: "研究設計、インタラクション単語設計、LDAによる協同パターン抽出、安定解選択、可視化ツール開発、論文執筆",
    imageLabel: "Groupwork",
    imageSrc: groupworkAnalysisImage,
    imageAlt: "協同パターン分析支援ツールの画面",
    stack: [
      "Python",
      "LDA",
      "Topic Modeling",
      "Jensen-Shannon Divergence",
      "Data Visualization",
    ],
    points: [
      "各シーンにおける対象参加者個人の振る舞いをBoIWとして定義し、全参加者・全シーンをコーパス化",
      "1次・2次インタラクション単語を用いて、物理動作と他者との関わりを分析単位として表現",
      "100回のLDA試行とJensen-Shannon距離に基づくk近傍密集度により、再現性の高い代表解を選択",
      "協同パターン空間プロット、参加者別の平均分布、時系列推移を組み合わせた分析支援ツールを開発",
    ],
    sections: [
      {
        title: "背景",
        body: "グループワークの振り返りは、参加者の記憶やファシリテーターの限定的な観察に依存しやすく、プロセス全体を客観的・定量的に把握することが難しい。本研究では、ビデオ記録の客観性を保ちつつ、誰がどのような役割を担っていたかを短時間で俯瞰できる分析を目指した。",
      },
      {
        title: "手法",
        body: "各シーンにおける対象参加者個人の振る舞いをBag-of-Interaction-Wordsとして定義し、LDAを適用して潜在的な協同パターンを抽出した。さらに、LDAの初期値依存性に対処するため、複数試行の解同士の距離をJensen-Shannon Divergenceで測り、k近傍密集度が最も高い解を代表解として選択した。",
      },
      {
        title: "結果",
        body: "4名1組で行うマシュマロチャレンジのデータに適用した結果、「提案・主導」「傾聴・同調」「作業・没頭」という解釈可能な3つの協同パターンを抽出できた。可視化により、参加者ごとの役割分担や、作業者から傾聴者へ移るような時系列的な役割変化も捉えられた。",
      },
      {
        title: "課題",
        body: "本手法は物理的な動作や視線に基づく形式的な役割抽出には有効であったが、対話内容の肯定・否定や議論の質的な深さまでは扱えていない。将来的には、実時間フィードバックや対話内容を含む分析への拡張が考えられる。",
      },
    ],
  },
];

export const projects: Project[] = [
  ...achievementsMlProjects,
  ...achievementsFeProjects,
  ...personalProductProjects,
  ...researchProjects,
];

export const featuredProjectSlugs = [
  "financial-data-challenge-2024",
  "mogufinder-jphacks-2025",
  "research-groupwork-collaboration-patterns",
];

export const featuredProjects = featuredProjectSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is Project => Boolean(project));
