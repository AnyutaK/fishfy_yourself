function ProgressBar({ current, total }) {
  const progress = (current / total) * 100;

  return (
    <div>
      <p className="progress">
        Question {current} / {total}
      </p>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${progress}%`
          }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;