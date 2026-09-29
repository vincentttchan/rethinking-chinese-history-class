# 再想中史課堂

人工智能時代的學習設計與歷史探究

原生 HTML、CSS、JavaScript 的 16:9 簡報。直接開啟 index.html，或使用本機預覽：

- 公開簡報：https://vincentttchan.github.io/rethinking-chinese-history-class/
- GitHub 儲存庫：https://github.com/vincentttchan/rethinking-chinese-history-class
- 開場：`http://127.0.0.1:8765/`
- 設計框架：`http://127.0.0.1:8765/?scene=8`
- 指定狀態：例如 `?scene=6&step=13`（step 從 0 起算）

## 正式順序

| Scene | 名稱 | 狀態數 |
|---|---|---:|
| 00 | ARRIVAL | 1 |
| 01 | WHAT’S LEFT? | 8 |
| 02 | TODAY | 2 |
| 03 | ONE YEAR AGO | 4 |
| 04 | OLD QUESTIONS | 6 |
| 05 | MORE AI ≠ MORE LEARNING | 4 |
| 06 | SHIFT THE CAMERA | 14 |
| 07 | THE REAL QUESTION | 3 |
| 08 | DESIGN FRAMEWORK | 6 |
| 09 | FROM FRAMEWORK TO DESIGN | 5 |
| 10 | 從知道事件 → 看見歷史變化 | 15 |
| 11 | 從知道答案 → 進入歷史處境 | 12 |
| 12 | 從閱讀史料 → 建立歷史解釋 | 12 |
| 13 | NOT EVERYTHING NEEDS TO BE COMPLEX | 9 |
| 14 | WHAT DOES AI ACTUALLY CHANGE? | 8 |
| 15 | THREE DESIGN QUESTIONS | 5 |
| 16 | FROM FIELDWORK TO FIELD INQUIRY | 10 |

共 17 幕、124 個手動狀態。Scene 16 文武廟問題是目前終點。
Scene 03 已置入使用者提供的 2025 年分享原始截圖。Scene 08 保留六步框架，EVIDENCE 步驟已移除雙欄史料佔位。

## 操作

- → / Space：下一揭示；場景末端进入下一場
- ←：上一揭示；場景起點回到上一場末端
- 右下角「選擇場景」與「選擇揭示步驟」：直接跳到指定畫面；切換場景時由第一步開始
- R：重設目前場景，可中斷動畫
- 右下角「全螢幕」按鈕或 F：進入／退出全螢幕
- Enter：在案例 Spotlight 開啟實際截圖預覽；可另按連結開啟原專案
- Esc：關閉預覽並返回原來 scene / step；Scene 06 最終焦點階段回到完整左右對照
- 點画面左側 20% 倒退，其餘位置前進
- 右下角控制列持續顯示，滑鼠停留或鍵盤聚焦時會更清晰

## Scene 09–16：學習轉變

學習問題先行，設計回應隨後，案例作為已實踐的例證。

- 09：三種學生學習轉變，逐項揭示。
- 10：晉朝地圖，從個別事件看見歷史變化；鄭和下西洋附原專案連結。
- 11：自強三十年，從答案進入處境、限制、決定與後果；新增北宋風雲及阿明的歲月筆記連結。
- 12：歷史法庭，以證據約束歷史解釋。
- 13：以練習反思複雜度，對準學習需要。
- 14：MAKE / ADAPT / FEEDBACK / ITERATE 四種作用。
- 15：三條設計問題，最後才加入較小的 AI 提問。
- 16：文物徑專題研習連接考察前、當下與之後的 AI 角色，止於文武廟問題。

預覽建議 30–60 秒。Enter 顯示實際截圖，原專案另有外部連結；Esc 返回原狀態。

## 檔案

- `cases.js`：Scene 09–16 文案、案例資料及預覽。
- `cases.css`：沿用的案例構圖與本輪局部斷行／層級調整。
- `app.js`：00–16 導航與揭示狀態。
- `scene08.js`：六步框架動畫；`styles.css`、`opening.css`、`tokens.css`：共用樣式及開場設計。
- `assets/cases/SOURCES.md`：真實專案截圖來源。

字體使用本機 DIN Condensed / Arial Narrow、Songti TC 及備援字體。

## 待補素材

Scene 12 的三份核實史料仍保留佔位。Scene 16 目前使用真實文物徑專案截圖與文字轉場。

## 驗證

`../narrative-review/`、`cases-review/`、`polish-review/`、`opening-review/` 保留作歷史版本，與目前文案及編號不同。

本機服務使用快取副本。修改後執行 `sh ../../work/preview-server/sync-preview.sh` 同步到預覽網站。新增延伸例子連結在新分頁開啟，點擊或按 Enter 不會推進簡報。
