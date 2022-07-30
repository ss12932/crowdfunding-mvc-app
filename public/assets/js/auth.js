const signupForm = $('#signup-form');

const handleSignup = (e) => {
  e.preventDefault();
  const fullName = $('#fullName').val();
  const email = $('#email').val();
  const password = $('#password').val();

  const payload = JSON.stringify({
    email,
    password,
    fullName,
  });
  console.log(payload);
};
signupForm.on('submit', handleSignup);

//TODO: timestamp part 2 20:32, finish the payload for handlesignup.
