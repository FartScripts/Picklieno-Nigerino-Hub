document.addEventListener('DOMContentLoaded', () => {
  const copyBtn = document.getElementById('copyBtn');
  const copyStatus = document.getElementById('copyStatus');
  const codeArea = document.getElementById('codeArea');

  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(codeArea.value);
      copyStatus.textContent = 'Copied!';
    } catch (err) {
      copyStatus.textContent = 'Unable to use clipboard — select and copy manually.';
      codeArea.select();
    }
    setTimeout(() => { copyStatus.textContent = ''; }, 3500);
  });
});
