async function setLanguage(lang) {
  const response = await fetch(`lang/${lang}.json`);
  const data = await response.json();

  document.getElementById('title').textContent = data.title;
  document.getElementById('description').textContent = data.description;
}

// 默认加载英文
setLanguage('en');