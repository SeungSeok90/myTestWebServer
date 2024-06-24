exports.getRegisterPage = (req, res) => {
    res.render('register', { title: 'Register Page' });
  };
  
  exports.postRegister = (req, res) => {
    // 사용자 등록 로직
    res.redirect('/');
  };
  