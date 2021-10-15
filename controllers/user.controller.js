exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  exports.userBoard = (req, res) => {
    res.status(200).render("content",{message:"User Content."});
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).render("content",{message:"Admin Content."});
  };
  
  exports.moderatorBoard = (req, res) => {
    res.status(200).render("content",{message:"Moderator Content."});
  };