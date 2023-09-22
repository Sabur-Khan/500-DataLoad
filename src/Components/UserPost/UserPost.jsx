const UserPost = ({ users }) => {
  console.log(users);
  const { name, id, postId, email, body } = users;
  return (
    <div className="">
        <div className="border-2 rounded-lg p-3 h-[280px]">
          <h1>Name: {name}</h1>
          <ul>Email: {email}</ul>
          <ul>PostId: {postId}</ul>
          <ul>ID: {id}</ul>
          <ul>Description: {body}</ul>
        </div>
      </div>
  );
};

export default UserPost;
