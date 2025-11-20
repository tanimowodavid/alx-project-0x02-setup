export default function PostModal() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <form action="">
        <label htmlFor="title">title</label>
        <input type="text" name="title" id="title" />
        <label htmlFor="content">content</label>
        <input type="text" name="content" id="content" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
