function sizeMyIframe() {
  document.getElementById('ndIframe').style.height = window.innerHeight - 350 + 'px';
}

window.addEventListener('resize', sizeMyIframe);
