const signupForm = $('#signup-form');

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
signupForm.on('submit', handleSignup);

//TODO: timestamp part 2 20:32, finish the payload for handlesignup.
