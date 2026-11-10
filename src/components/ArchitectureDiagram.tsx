'use client';

import type { DiagramKind } from '@/data/portfolio';
import styles from './ArchitectureDiagram.module.css';

interface ArchitectureDiagramProps {
  kind: DiagramKind;
  selectedNodeKey?: string | null;
  onSelectNode?: (nodeKey: string | null) => void;
}

export default function ArchitectureDiagram({
  kind,
  selectedNodeKey = null,
  onSelectNode,
}: ArchitectureDiagramProps) {
  const interactive = Boolean(onSelectNode);

  const toggleNode = (key: string) => {
    if (!onSelectNode) return;
    onSelectNode(selectedNodeKey === key ? null : key);
  };

  const getGroupProps = (key: string) => {
    const isSelected = selectedNodeKey === key;
    const isDimmed = selectedNodeKey !== null && !isSelected;
    return {
      onClick: interactive ? () => toggleNode(key) : undefined,
      className: `${interactive ? styles.clickableNode : ''} ${isDimmed ? styles.dimmedNode : ''}`,
    };
  };

  const getRectStyle = (key: string, isResponsibility: boolean) => {
    const isSelected = selectedNodeKey === key;
    return {
      fill: isSelected ? '#D2E4EE' : isResponsibility ? '#E8F0F4' : '#F6F4EF',
      stroke: isSelected ? '#171716' : isResponsibility ? '#1B4965' : '#A6A298',
      strokeWidth: isSelected ? 1.8 : isResponsibility ? 1.2 : 1,
    };
  };

  return (
    <figure className={styles.frame}>
      <div className={styles.canvas}>
        {kind === 'loc' && (
          <svg
            viewBox="0 0 420 272"
            className={styles.svg}
            role="img"
            aria-label="LOudyCushion システム構成図"
          >
            <defs>
              <marker id="arrow-loc" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 7 4 L 0 7 z" fill="#595751" />
              </marker>
            </defs>

            <g {...getGroupProps('cushion')}>
              <rect x="16" y="14" width="184" height="52" {...getRectStyle('cushion', false)} />
              <text x="26" y="34" className={styles.nodeTitle}>センサー搭載クッション</text>
              <text x="26" y="53" className={styles.nodeSub}>着座・姿勢検知 / 振動・膨張</text>
            </g>

            <g {...getGroupProps('mobile')}>
              <rect x="220" y="14" width="184" height="52" {...getRectStyle('mobile', false)} />
              <text x="230" y="34" className={styles.nodeTitle}>スマホアプリ</text>
              <text x="230" y="53" className={styles.nodeSub}>通知設定・統計・スコア確認</text>
            </g>

            <line x1="108" y1="66" x2="108" y2="100" stroke="#595751" strokeWidth="1" markerEnd="url(#arrow-loc)" />
            <text x="116" y="87" className={styles.edgeLabel}>着座データ送信</text>

            <line x1="312" y1="69" x2="312" y2="100" stroke="#595751" strokeWidth="1" markerStart="url(#arrow-loc)" markerEnd="url(#arrow-loc)" />
            <text x="304" y="87" textAnchor="end" className={styles.edgeLabel}>スケジュール・統計</text>

            <g {...getGroupProps('api')}>
              <rect x="16" y="103" width="388" height="60" {...getRectStyle('api', true)} />
              <text x="28" y="124" className={styles.nodeTitleAccent}>バックエンドAPI（Node.js / Docker）</text>
              <text x="392" y="124" textAnchor="end" className={styles.badgeText}>担当</text>
              <text x="28" y="146" className={styles.nodeBody}>データ受け取り・スコア集計・通知設定のAPI</text>
            </g>

            <line x1="210" y1="166" x2="210" y2="193" stroke="#595751" strokeWidth="1" markerStart="url(#arrow-loc)" markerEnd="url(#arrow-loc)" />
            <text x="218" y="184" className={styles.edgeLabel}>保存・集計</text>

            <g {...getGroupProps('db')}>
              <rect x="16" y="196" width="388" height="58" {...getRectStyle('db', true)} />
              <text x="28" y="217" className={styles.nodeTitleAccent}>データベース（MySQL）</text>
              <text x="392" y="217" textAnchor="end" className={styles.badgeText}>担当</text>
              <text x="28" y="239" className={styles.nodeBody}>着座ログ・統計・通知スケジュールのテーブル設計</text>
            </g>
          </svg>
        )}

        {kind === 'diagnostic' && (
          <svg
            viewBox="0 0 420 272"
            className={styles.svg}
            role="img"
            aria-label="PCトラブル診断ツール 構成図"
          >
            <defs>
              <marker id="arrow-diag" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 7 4 L 0 7 z" fill="#595751" />
              </marker>
            </defs>

            <g {...getGroupProps('browser')}>
              <rect x="16" y="14" width="388" height="52" {...getRectStyle('browser', true)} />
              <text x="28" y="34" className={styles.nodeTitleAccent}>質問画面（HTML / CSS / JavaScript）</text>
              <text x="28" y="53" className={styles.nodeBody}>症状についての質問に Yes / No で回答</text>
            </g>

            <line x1="210" y1="66" x2="210" y2="97" stroke="#595751" strokeWidth="1" markerEnd="url(#arrow-diag)" />
            <text x="218" y="85" className={styles.edgeLabel}>回答に合わせて次の質問へ</text>

            <g {...getGroupProps('tree')}>
              <rect x="16" y="100" width="388" height="62" {...getRectStyle('tree', true)} />
              <text x="28" y="121" className={styles.nodeTitleAccent}>分岐（最大7段階）</text>
              <text x="28" y="145" className={styles.nodeBody}>Yes/Noの回答で原因の範囲を絞り込み</text>
            </g>

            <line x1="136" y1="162" x2="136" y2="193" stroke="#595751" strokeWidth="1" markerEnd="url(#arrow-diag)" />
            <text x="144" y="182" className={styles.edgeLabel}>Yes の場合</text>

            <line x1="284" y1="162" x2="284" y2="193" stroke="#595751" strokeWidth="1" markerEnd="url(#arrow-diag)" />
            <text x="276" y="182" textAnchor="end" className={styles.edgeLabel}>No の場合</text>

            <g {...getGroupProps('result')}>
              <rect x="16" y="196" width="388" height="58" {...getRectStyle('result', true)} />
              <text x="28" y="217" className={styles.nodeTitleAccent}>診断ページ群（全体で約600ファイル）</text>
              <text x="28" y="239" className={styles.nodeBody}>分岐ごとのページと、考えられる原因の表示</text>
            </g>
          </svg>
        )}

        {kind === 'fileshare' && (
          <svg
            viewBox="0 0 420 272"
            className={styles.svg}
            role="img"
            aria-label="ファイル共有システム 構成図"
          >
            <defs>
              <marker id="arrow-fs" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 7 4 L 0 7 z" fill="#595751" />
              </marker>
            </defs>

            <g {...getGroupProps('flutter')}>
              <rect x="16" y="14" width="388" height="52" {...getRectStyle('flutter', true)} />
              <text x="28" y="34" className={styles.nodeTitleAccent}>モバイルアプリ（Flutter / Dart）</text>
              <text x="28" y="53" className={styles.nodeBody}>ページ送り付きファイル一覧・アップロード・共有</text>
            </g>

            <line x1="210" y1="69" x2="210" y2="99" stroke="#595751" strokeWidth="1" markerStart="url(#arrow-fs)" markerEnd="url(#arrow-fs)" />
            <text x="218" y="88" className={styles.edgeLabel}>REST API（APIキー認証）</text>

            <g {...getGroupProps('laravel')}>
              <rect x="16" y="102" width="388" height="62" {...getRectStyle('laravel', true)} />
              <text x="28" y="123" className={styles.nodeTitleAccent}>バックエンドAPI（Laravel / PHP）</text>
              <text x="392" y="123" textAnchor="end" className={styles.badgeText}>v1から作り直し</text>
              <text x="28" y="146" className={styles.nodeBody}>APIキー確認・ページネーション・保存先の切り替え</text>
            </g>

            <line x1="108" y1="164" x2="108" y2="195" stroke="#595751" strokeWidth="1" markerEnd="url(#arrow-fs)" />
            <text x="116" y="184" className={styles.edgeLabel}>ローカル保存</text>

            <line x1="312" y1="164" x2="312" y2="195" stroke="#595751" strokeWidth="1" markerEnd="url(#arrow-fs)" />
            <text x="304" y="184" textAnchor="end" className={styles.edgeLabel}>ネットワーク経由</text>

            <g {...getGroupProps('storage')}>
              <rect x="16" y="198" width="184" height="56" {...getRectStyle('storage', true)} />
              <text x="26" y="219" className={styles.nodeTitleAccent}>ローカルストレージ</text>
              <text x="26" y="239" className={styles.nodeSub}>サーバー内の保存領域</text>

              <rect x="220" y="198" width="184" height="56" {...getRectStyle('storage', true)} />
              <text x="230" y="219" className={styles.nodeTitleAccent}>NAS ストレージ</text>
              <text x="230" y="239" className={styles.nodeSub}>ネットワーク上の共有領域</text>
            </g>
          </svg>
        )}

        {kind === 'sparelink' && (
          <svg
            viewBox="0 0 420 272"
            className={styles.svg}
            role="img"
            aria-label="SpareLink システム構成図"
          >
            <defs>
              <marker id="arrow-sl" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 7 4 L 0 7 z" fill="#595751" />
              </marker>
            </defs>

            <g {...getGroupProps('api')}>
              <rect x="16" y="14" width="388" height="52" {...getRectStyle('api', true)} />
              <text x="28" y="34" className={styles.nodeTitleAccent}>外部ソフト ＆ Webダッシュボード（React 19）</text>
              <text x="28" y="53" className={styles.nodeBody}>ws://127.0.0.1:3001 からクラスタ全体の余剰ptを取得・タスク配分</text>
            </g>

            <line x1="210" y1="69" x2="210" y2="95" stroke="#595751" strokeWidth="1" markerStart="url(#arrow-sl)" markerEnd="url(#arrow-sl)" />
            <text x="218" y="86" className={styles.edgeLabel}>WebSocket API（JSON）</text>

            <g {...getGroupProps('mesh')}>
              <rect x="16" y="98" width="388" height="52" {...getRectStyle('mesh', true)} />
              <text x="28" y="118" className={styles.nodeTitleAccent}>P2Pメッシュ通信層（Tailscale / WireGuard / LAN）</text>
              <text x="28" y="137" className={styles.nodeBody}>ポート開放不要の相互接続・自動検出・余剰資源スナップショット自律同期</text>
            </g>

            <line x1="108" y1="152" x2="108" y2="178" stroke="#595751" strokeWidth="1" markerStart="url(#arrow-sl)" markerEnd="url(#arrow-sl)" />
            <line x1="312" y1="152" x2="312" y2="178" stroke="#595751" strokeWidth="1" markerStart="url(#arrow-sl)" markerEnd="url(#arrow-sl)" />

            <g {...getGroupProps('agent')}>
              <rect x="16" y="180" width="184" height="74" {...getRectStyle('agent', true)} />
              <text x="26" y="200" className={styles.nodeTitleAccent}>自PCエージェント（Rust）</text>
              <text x="26" y="218" className={styles.nodeSub}>Windows Native API低負荷監視</text>
              <text x="26" y="236" className={styles.nodeSub}>0.08秒ベンチ＆安全マージン計算</text>

              <rect x="220" y="180" width="184" height="74" {...getRectStyle('agent', true)} />
              <text x="230" y="200" className={styles.nodeTitleAccent}>サブPCエージェント（Rust）</text>
              <text x="230" y="218" className={styles.nodeSub}>単独exe・ゼロ依存で動作</text>
              <text x="230" y="236" className={styles.nodeSub}>実効余剰スコア（pt）を評価</text>
            </g>
          </svg>
        )}
      </div>

      <figcaption className={styles.captionFooter}>
        <span className={styles.legendLeft}>
          <span className={styles.legendSwatch} aria-hidden="true" />
          <span>色付き枠：自分が担当・実装した範囲</span>
        </span>
        {interactive && selectedNodeKey && (
          <button
            type="button"
            onClick={() => onSelectNode && onSelectNode(null)}
            className={styles.resetBtn}
          >
            選択を戻す
          </button>
        )}
      </figcaption>
    </figure>
  );
}
