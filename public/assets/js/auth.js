const signupForm = $('#signup-form');
const logoutBtn = $('#logout-btn');
const handleSignup = async (e) => {
  e.preventDefault();
  const name = $('#name').val();
  const email = $('#email').val();
  const password = $('#password').val();

  const payload = JSON.stringify({
    email,
    password,
    name,
  });
  const response = await fetch('/api/users/signup', {
    method: 'POST',
    body: payload,
  });

  if (response.ok) {
    window.location.replace('/profile');
  } else {
    alert('Failed to sign up');
  }
};

const handleLogin = async (e) => {
  e.preventDefault();
  const email = $('#email').val();
  const password = $('#password').val();

  const payload = JSON.stringify({
    email,
    password,
  });
  const response = await fetch('/api/users/login', {
    method: 'POST',
    body: payload,
  });

  if (response.ok) {
    window.location.replace('/profile');
  } else {
    alert('Failed to login');
  }
};

const handleLogout = async () => {
  //user is logged out
  const response = await fetch('/api/users/logout', {
    method: 'POST',
  });

  if (response.ok) {
    window.location.replace('/login');
  } else {
    alert('Failed to logout');
  }
};
signupForm.on('submit', handleLogin);
logoutBtn.on('click', handleLogout);
