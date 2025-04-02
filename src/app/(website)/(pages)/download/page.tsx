"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Download() {
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLatestRelease() {
      try {
        const response = await fetch(
          "https://api.github.com/repos/PTDTW/aLivePaper/releases/latest"
        );
        const data = await response.json();
        const releaseName = data.tag_name; // 取得 Release 版本名稱
        const fileUrl = `https://github.com/PTDTW/aLivePaper/releases/latest/download/aLivePaper-${releaseName}.zip`;

        setDownloadUrl(fileUrl);
        setTimeout(() => {
          window.location.href = fileUrl; // 5 秒後自動下載
        }, 5000);
      } catch (error) {
        console.error("獲取最新 Release 失敗:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchLatestRelease();
  }, []);

  return (
    <div className="mt-[100px]">
      <div className="flex flex-col items-center gap-y-10 text-center px-4">
        <div className="font-semibold text-3xl bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          感謝您下載 aLivePaper，讓我們開始使用動態桌布吧！
        </div>

        <div className="max-w-xl">
          {loading ? (
            <div className="text-gray-600/60">正在獲取最新版本，請稍候...</div>
          ) : downloadUrl ? (
            <div className="text-gray-600/60">
              您的 <strong>aLivePaper</strong> 即將下載完成，將在{" "}
              <strong>十秒內</strong> 自動下載。
              若無下載，請嘗試重新載入網頁或手動下載
              <br />
              <Link
                href={downloadUrl}
                target="_blank"
                className="text-blue-500 font-medium hover:underline"
              >
                立即下載最新版
              </Link>
            </div>
          ) : (
            <div className="text-red-500">無法獲取最新版本，請稍後再試。</div>
          )}
        </div>
      </div>
    </div>
  );
}
