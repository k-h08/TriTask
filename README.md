# TriTask

## 1. 仕様 (Specification)

### 1.1 機能要件

- **タスクのカテゴリ分け**
  - **午前（AM）**: 最大3つのタスク
  - **午後（PM）**: 最大3つのタスク
  - **毎日（Daily）**: 最大3つのタスク
  - **スキマ（Gap）**: 最大3つのタスク
  - **遊び（Play）**: 最大3つのタスク
  - **その他（Other）**: 最大3つのタスク

- **タスクの追加**
  - 各カテゴリに対してタスクを追加できる。
  - 各カテゴリのタスク数は3つまで。

- **タスクの達成**
  - タスクを完了した際に赤いラインで消される（ストライクスルー表示）。

- **タスクの削除**
  - 必要に応じてタスクを削除できる。

### 1.2 非機能要件

- **ユーザーインターフェース (UI)**
  - シンプルで直感的なデザイン。
  - 各カテゴリごとにタスクを表示。

- **レスポンシブデザイン**
  - デスクトップおよびモバイルデバイスでの利用を想定。

- **パフォーマンス**
  - タスクの追加、削除、達成がスムーズに行えること。

## 2. 設計 (Design)

### 2.1 技術スタック

- **フロントエンド**: React.js + TypeScript
- **スタイリング**: CSSまたはCSSフレームワーク（例: Tailwind CSS、Styled Components）
- **状態管理**: ReactのuseStateフック（アプリが小規模のため）
- **ビルドツール**: Create React App（TypeScriptテンプレート）

### 2.2 データモデル

タスクを管理するためのデータモデルを設計し、TypeScriptのインターフェースで型安全を確保します。

```typescript
// src/types.ts
export interface Task {
  id: string;         // 一意な識別子
  title: string;      // タスクのタイトル
  category: Category; // タスクのカテゴリ
  completed: boolean; // 完了状態
}

export type Category = 'AM' | 'PM' | 'Daily' | 'Gap' | 'Play' | 'Other';
```

### 2.3 コンポーネント設計

アプリを複数の再利用可能なコンポーネントに分割します。

- **App**: アプリ全体のコンテナ。状態管理を行う。
- **CategorySection**: 各カテゴリ（AM、PM、Dailyなど）を表示し、タスクリストとタスク追加フォームを含む。
- **TaskItem**: 個々のタスクを表示し、完了ボタンや削除ボタンを含む。
- **AddTaskForm**: タスクを追加するためのフォーム。カテゴリ選択とタスクタイトルの入力フィールドを含む。

### 2.4 UIフロー

- **ホーム画面**
  - 各カテゴリごとにセクションが表示される。
  - 各セクションにはタスクリストと「タスク追加」ボタンがある。

- **タスクの追加**
  - ユーザーが「タスク追加」ボタンをクリックするとフォームが表示され、必要な情報を入力後「追加」ボタンでタスクが追加される。

- **タスクの達成**
  - タスク横のチェックボックスをクリックすると、タスクが完了状態になり、赤いラインで消される。

- **タスクの削除**
  - タスク横の削除ボタンをクリックすると、タスクがリストから削除される。
