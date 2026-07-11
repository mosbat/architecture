document.querySelectorAll('.password-toggle').forEach((btn) => {
  btn.addEventListener('click', () => {
    const targetId = btn.dataset.target;
    const input = document.getElementById(targetId);
    const icon = btn.querySelector('i');

    if (!input) return;

    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';

    icon.classList.toggle('fa-eye');
    icon.classList.toggle('fa-eye-slash');
    btn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
  });
});