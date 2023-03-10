import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MainContainer from "../components/MainContainer";

const Users = ({ users }) => {
  //   const [users, setUsers] = useState([
  //     { id: 1, name: "Amanda" },
  //     { id: 2, name: "Frank" },
  //   ]);

  //   useEffect(async () => {
  //     const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  //     const data = response.json();
  //     setUsers(data);
  //     console.log(users);
  //   });

  const router = useRouter();

  return (
    <MainContainer keywords={"users next js"}>
      <button type="button" onClick={() => router.back()}>
        Click here to go back
      </button>
      <div>Users:</div>
      <ul>
        {users &&
          users.map((user) => (
            <li key={user.id}>
              <Link href={`/users/${user.id}`} legacyBehavior>
                {user.name}
              </Link>
            </li>
          ))}
      </ul>
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps(context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await response.json();

  return {
    props: { users }, // will be passed to the page component as props
  };
}
