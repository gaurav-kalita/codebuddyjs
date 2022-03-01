// level {3}

async function getUsers(users) {
  const new_users = [];
  users.forEach((element, index) => {
    new_users.push({...element, id = index});
  });
}
return new_users;
