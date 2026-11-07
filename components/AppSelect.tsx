"use client";

type AppId = "manga-web" | "lifequest" | "japanese-lab" | "batch-job-management";

const apps: { id: AppId; name: string; url: string }[] = [
  { id: "manga-web", name: "Manga Web", url: process.env.NEXT_PUBLIC_MANGA_WEB_URL || "/" },
  { id: "lifequest", name: "LifeQuest", url: process.env.NEXT_PUBLIC_LIFEQUEST_URL || "/" },
  { id: "japanese-lab", name: "Japanese Lab", url: process.env.NEXT_PUBLIC_JAPANESE_LAB_URL || "/" },
  { id: "batch-job-management", name: "Batch Jobs", url: process.env.NEXT_PUBLIC_BATCH_JOB_MANAGEMENT_URL || "/" },
];

export default function AppSelect({ current }: { current: AppId }) {
  return (
    <label className="workspace-app-select">
      <span>Ứng dụng</span>
      <select
        aria-label="Chuyển ứng dụng"
        value={current}
        onChange={(event) => {
          window.location.assign(
            apps.find((app) => app.id === event.target.value)?.url ?? "/"
          );
        }}
      >
        {apps.map((app) => (
          <option key={app.id} value={app.id}>
            {app.name}
          </option>
        ))}
      </select>
    </label>
  );
}
