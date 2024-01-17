export default function DeleteButton({ articleId }: { articleId: string }) {
  const handleDelete = async () => {
    if (!articleId) {
      // ここにエラーハンドリングのロジックを入れる
      console.error("Id is required");
      return;
    }

    const response = await fetch("/api/deleteArticle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ articleId }),
    });

    if (response.ok) {
      // 削除に成功した場合、例えばリダイレクトする
      window.location.href = "/";
    } else {
      // エラーハンドリング
      console.error("Failed to delete article");
    }
  };

  return (
    <button onClick={handleDelete}>
      <img src="/trash.svg" alt="Delete" />
    </button>
  );
}
