const { getPayloadWithValidFieldsOnly } = require('../../helpers');
const { User } = require('../../models');

const signup = async (req, res) => {
  try {
    //  get the payload
    const payload = getPayloadWithValidFieldsOnly(
      ['name', 'email', 'password'],
      req.body
    );
    //verify payload

    if (Object.keys(payload).length !== 3) {
      //else return status 400
      console.log(`[ERROR]: Failed to sign up | Invalid fields`);
      return res.status(400).json({ error: 'failed to signup' });
    }
    // if ok create user
    const user = await User.create(payload);
    req.session.save(() => {
      // add loggedIn to session
      // /add user info to session
      req.session.loggedIn = true;
      req.session.user = {
        name: user.get('name'),
        id: user.get('id'),
        email: user.get('email'),
      };
      return res.status(200).json({ message: 'Successfully created user' });
    });
  } catch (err) {
    //catch error and return status 500}
    console.log(`[ERROR]: Failed to sign up | ${err.message}`);
    return res.status(400).json({ error: 'failed to signup' });
  }
};
const login = async (req, res) => {
  try {
    //  get the payload
    const payload = getPayloadWithValidFieldsOnly(
      ['email', 'password'],
      req.body
    );
    //verify payload

    if (Object.keys(payload).length !== 2) {
      //else return status 400
      console.log(`[ERROR]: Failed to sign up | Invalid fields`);
      return res.status(400).json({ error: 'failed to login' });
    }
    // if ok get user by email
    const user = await User.findOne({
      where: {
        email: payload.email,
      },
    });
    // check user exists
    if (!user) {
      console.log(`[ERROR]: Failed to login | User not found`);
      return res.status(401).json({ error: 'failed to login' });
    }

    // check if passwords match
    const isValidPassword = user.checkPassword(payload.password);

    if (!isValidPassword) {
      console.log(`[ERROR]: Failed to login | Invalid Password`);
      return res.status(401).json({ error: 'Failed to login' });
    }
    req.session.save(() => {
      // add loggedIn to session
      // /add user info to session object
      req.session.loggedIn = true;
      req.session.user = {
        name: user.get('name'),
        id: user.get('id'),
        email: user.get('email'),
      };
      return res.status(200).json({ message: 'Successfully created user' });
    });
  } catch (err) {
    //catch error and return status 500}
    console.log(`[ERROR]: Failed to login | ${err.message}`);
    return res.status(500).json({ error: 'Failed to login' });
  }
};
const logout = (req, res) => {
  res.send('logout');
};

module.exports = {
  signup,
  login,
  logout,
};
